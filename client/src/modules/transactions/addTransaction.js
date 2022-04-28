import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../routes";
import Utils from "../../utility";
import services from "../../services";
import CustomButton from "../../common/components/CustomButton";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const AddTransaction = (props) => {
    const {selectedTransaction} = props
    const [description, setDescription] = useState(selectedTransaction?.description);
    const [category, setCategory] = useState(selectedTransaction?.category);
    const [categoryList, setCategoryList] = useState([]);
    const [amount, setAmount] = useState(selectedTransaction?.amount);
    const [date, setDate] = useState(selectedTransaction?.date);
    const user = useContext(AppContext);

    useEffect(async () => {
        const [error, response] = await Utils.parseResponse(services.getCategoryList(user._id))
        if (error) {
            Utils.consoleLogger("AddTransaction", error)
            return Utils.apiFailureToast("Unable to get Category List")
        }
        setCategoryList(response)
    }, [])
    const addTxn = async () => {
        let error, response
        console.log('Class: , Function: addTxn === ',selectedTransaction,  new Date(date).getTime());
        if (selectedTransaction) {
            [error, response] = await Utils.parseResponse(services.addTransaction({
                transactionId: selectedTransaction?._id,
                amount, addedOn: new Date(date).getTime(), description, category: category._id, user: user._id
            }))
        } else {
            [error, response] = await Utils.parseResponse(services.addTransaction({
                amount, addedOn: new Date(date).getTime(), description, category: category._id, user: user._id
            }))
        }
        if (error) {
            Utils.consoleLogger("AddCategoryForm", error)
            return Utils.apiFailureToast(selectedTransaction ? "Unable to update Category" : "Unable to add Category")
        }
        props.toggleDialog(false)
        return Utils.apiSuccessToast(selectedTransaction ? "Transaction updated successfully" : "Category added successfully")
    }

    return (
        <div className="display-flex-column p-3 w-50 px-5">
            <span className="fw-700 fs-24 my-4">{selectedTransaction ? "Update " : "Add "} Transaction</span>
            <div className="px-5 py-3 border ">
                <div className="mt-3 display-flex-row jc-space-between align-items-center">
                    <span className="fs-18">Amount</span>
                    <input placeholder="Enter Amount" className="p-1 outline-none fs-18"
                           value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className="mt-3 display-flex-row jc-space-between align-items-center">
                    <span className="fs-18">Description</span>
                    <input placeholder="Enter Description" className="p-1 outline-none fs-18"
                           value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="mt-3 display-flex-row jc-space-between align-items-center">
                    <span className="fs-18 w-100">Category</span>
                    <select className="w-100 p-1 outline-none" onChange={(e) => {
                        setCategory(JSON.parse(e.target.value))
                    }}>
                        {categoryList.map((category) => <option
                            value={JSON.stringify(category)}>{category.name}</option>)}
                    </select>
                </div>

                <div className="mt-3 display-flex-row jc-space-between align-items-center">
                    <span className="fs-18 w-100">Date</span>
                    <DatePicker style={{display: 'flex', flexDirection: 'rowReverse', width: '100%'}} selected={date}
                                onChange={(date) => setDate(date)}/>
                </div>
                <div className="mt-4 display-flex-row justify-content-end" style={{gap: "20px"}}>
                    <CustomButton text={selectedTransaction ? "Update" : "Save"} onClick={addTxn}/>
                    <CustomButton text="Cancel" onClick={() => props.toggleDialog(false)}/>
                </div>
            </div>
        </div>
    )
}
export default AddTransaction
