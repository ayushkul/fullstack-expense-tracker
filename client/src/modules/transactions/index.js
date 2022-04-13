import TableComponent from "../../common/components/TableComponent";
import {DeleteIcon, SearchBox, SearchIcon, SearchInput} from "../categories";
import {useState} from "react";

const Transactions = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className="display-flex-column p-3 w-100">
                <div className="display-flex-row justify-content-sm-between mt-3 ">
                    <SearchBox>
                        <SearchInput placeholder="Search"/>
                        <SearchIcon src="/images/search-icon.svg"/>
                    </SearchBox>
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
