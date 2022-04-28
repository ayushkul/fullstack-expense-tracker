import TransactionModel from "../../models/transaction";
import Utils from "../../utils";

export default class Manger {
    addTransaction = async (requestData) => {
        return await new TransactionModel(requestData).save()
    }

    updateTransaction = async (requestData) => {
        let findQuery = {_id: requestData.transactionId};
        delete requestData.userId;
        if (requestData._id) delete requestData._id;
        requestData["modifiedOn"] = Date.now();
        let txnInfo = await TransactionModel.findOneAndUpdateData(findQuery, requestData);
        if (!txnInfo)
            return Utils.returnRejection('Unable to update')
        return txnInfo;
    }

    getTxnList = async (requestData) => {
        return TransactionModel.findData({user: requestData.userId})
    }
}
