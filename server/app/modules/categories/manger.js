import CategoryModel from "../../models/category"
import Utils from "../../utils";

export default class Manger {
    addCategory = async (requestData) => {
        let categoryData = await CategoryModel.findOneData(
            {user: requestData.user, name: {$regex: new RegExp(requestData.name, "i")}});

        if (!categoryData)
            categoryData = await new CategoryModel(requestData).save()
        return categoryData;
    }
    updateCategory = async (requestData) => {
        let findQuery = {_id: requestData.categoryId};
        delete requestData.userId;
        if (requestData._id) delete requestData._id;
        requestData["modifiedOn"] = Date.now();
        let categoryInfo = await CategoryModel.findOneAndUpdateData(findQuery, requestData);
        if (!categoryInfo)
            return Utils.returnRejection('Unable to update')
        return categoryInfo;
    }
    getCategoryList = async (requestData) => {
        return CategoryModel.findData({user: requestData.userId})
    }
}

function

parseGetUsersRequest(requestObj) {
    let skip = 0;
    if (requestObj.skip || requestObj.skip === 0) {
        skip = requestObj.skip;
        delete requestObj.skip
    }

    let limit = 0;
    if (requestObj.limit) {
        limit = requestObj.limit;
        delete requestObj.limit
    }

    let sortingKey = '';
    if (requestObj.sortingKey) {
        sortingKey = requestObj.sortingKey;
        delete requestObj.sortingKey;
    }

    let selectionKeys = '';
    if (requestObj.selectionKeys) {
        selectionKeys = requestObj.selectionKeys;
        delete requestObj.selectionKeys
    }

    let searchQuery = [];
    if (requestObj.searchKeys && requestObj.searchValue && Array.isArray(requestObj.searchKeys) && requestObj.searchKeys.length) {
        requestObj.searchKeys.map((searchKey) => {
            let searchRegex = {"$regex": requestObj.searchValue, "$options": "-i"};
            searchQuery.push({[searchKey]: searchRegex});
        });
        requestObj["$or"] = searchQuery;
    }

    if (requestObj.searchKeys)
        delete requestObj.searchKeys;

    if (requestObj.searchValue)
        delete requestObj.searchValue;

    return {
        userRequestObj: requestObj,
        skip: skip,
        limit: limit,
        sortingKey: sortingKey,
        selectionKeys: selectionKeys
    };
}
