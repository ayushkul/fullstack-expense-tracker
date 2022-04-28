import TableComponent from "../../common/components/TableComponent";
import {SearchBox, SearchIcon, SearchInput} from "../categories";
import {useState} from "react";
import AddTransaction from "./addTransaction";
import {Dialog} from "@material-ui/core";
import {history} from "../../managers/history"

const Transactions = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Dialog
                fullWidth={true}
                open={isOpen}
                onClose={() => setOpen(false)}>
                <AddTransaction toggleDialog={setOpen} selectedTransaction={null}/>
            </Dialog>
            <div className="display-flex-column p-3 w-100">
                <div className="display-flex-row justify-content-sm-between mt-3 ">
                    <SearchBox>
                        <SearchInput placeholder="Search"/>
                        <SearchIcon src="/images/search-icon.svg"/>
                    </SearchBox>
                    <span onClick={() => history.push("add-transaction")}
                          className="bg-azure fc-white br-12 px-3 py-1 text-align-center cursor-pointer card-shadow">
                        + Add Transaction
                    </span>
                </div>
                <TableComponent.Table cellpadding="0" cellspacing="0">
                    <TableComponent.TableHead>
                        <TableComponent.HeadColumn>Title</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Category</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Amount</TableComponent.HeadColumn>
                        <TableComponent.HeadColumn>Date</TableComponent.HeadColumn>
                    </TableComponent.TableHead>
                    <TableComponent.TableBody>
                        <TableComponent.BodyRow>
                            <TableComponent.BodyColumn>
                                Anaar Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                50
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                {new Date().toDateString()}
                            </TableComponent.BodyColumn>
                        </TableComponent.BodyRow>
                        <TableComponent.BodyRow>
                            <TableComponent.BodyColumn>
                                Anaar Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                50
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                {new Date().toDateString()}
                            </TableComponent.BodyColumn>
                        </TableComponent.BodyRow>
                        <TableComponent.BodyRow>
                            <TableComponent.BodyColumn>
                                Mosambi Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                50
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                {new Date().toDateString()}
                            </TableComponent.BodyColumn>
                        </TableComponent.BodyRow>
                        <TableComponent.BodyRow>
                            <TableComponent.BodyColumn>
                                Anaar Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                50
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                {new Date().toDateString()}
                            </TableComponent.BodyColumn>
                        </TableComponent.BodyRow>
                        <TableComponent.BodyRow>
                            <TableComponent.BodyColumn>
                                Apple Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                Juice
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                50
                            </TableComponent.BodyColumn>
                            <TableComponent.BodyColumn>
                                {new Date().toDateString()}
                            </TableComponent.BodyColumn>
                        </TableComponent.BodyRow>
                    </TableComponent.TableBody>
                </TableComponent.Table>
            </div>
        </>
    )
}
export default Transactions;
