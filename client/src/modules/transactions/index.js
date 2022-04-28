import TableComponent from "../../common/components/TableComponent";
import {SearchBox, SearchIcon, SearchInput} from "../categories";
import {useContext, useEffect, useState} from "react";
import AddTransaction from "./addTransaction";
import {history} from "../../managers/history"
import Utils from "../../utility";
import services from "../../services";
import {AppContext} from "../../routes";

const Transactions = () => {
    const [txnList, setTxnList] = useState([])
    const user = useContext(AppContext);

    useEffect(async () => {
        const [error, response] = await Utils.parseResponse(services.getTransactionList(user._id))
        if (error) {
            Utils.consoleLogger("AddTransaction", error)
            return Utils.apiFailureToast("Unable to get Category List")
        }
        setTxnList(response)
    }, [])
    return (
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
                    {txnList.map((txn) => <TableComponent.BodyRow>
                        <TableComponent.BodyColumn>
                            {txn.description}
                        </TableComponent.BodyColumn>
                        <TableComponent.BodyColumn>
                            {txn.description}
                        </TableComponent.BodyColumn>
                        <TableComponent.BodyColumn>
                            {txn.amount}
                        </TableComponent.BodyColumn>
                        <TableComponent.BodyColumn>
                            {new Date(txn.addedOn).toDateString()}
                        </TableComponent.BodyColumn>
                    </TableComponent.BodyRow>)}
                </TableComponent.TableBody>
            </TableComponent.Table>
        </div>
    )
}
export default Transactions;
