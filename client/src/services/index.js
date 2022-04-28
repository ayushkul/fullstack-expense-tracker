import {httpService} from "../managers/httpService";
import {httpConstants} from "../constants";



//User Services

const userLogin = (requestData) => {
    return httpService(httpConstants.METHOD_TYPE.POST, "", requestData, httpConstants.API_HOST_URL + httpConstants.API_END_POINT.LOGIN)
}
const updateUser = (requestData) => {
    return httpService(httpConstants.METHOD_TYPE.PUT, "", requestData, httpConstants.API_HOST_URL + httpConstants.API_END_POINT.UPDATE_USER)
}

//Category Services

const addCategory = (requestData) => {
    return httpService(httpConstants.METHOD_TYPE.POST, "", requestData, httpConstants.API_HOST_URL + httpConstants.API_END_POINT.ADD_CATEGORY)
}
const updateCategory = (requestData) => {
    return httpService(httpConstants.METHOD_TYPE.PUT, "", requestData, httpConstants.API_HOST_URL + httpConstants.API_END_POINT.ADD_CATEGORY)
}
const getCategoryList = (userId) => {
    return httpService(httpConstants.METHOD_TYPE.GET, "", null, httpConstants.API_HOST_URL + httpConstants.API_END_POINT.CATEGORY_LIST+`?userId=${userId}`)
}

//Transaction Services

const addTransaction = (requestData) => {
    return httpService(httpConstants.METHOD_TYPE.POST, "", requestData, httpConstants.API_HOST_URL + httpConstants.API_END_POINT.ADD_TRANSACTION)
}
const getTransactionList = (userId) => {
    return httpService(httpConstants.METHOD_TYPE.GET, "", null, httpConstants.API_HOST_URL + httpConstants.API_END_POINT.TRANSACTION_LIST+`?userId=${userId}`)
}

const services = {
    userLogin,
    updateUser,
    addCategory,
    updateCategory,
    getCategoryList,
    addTransaction,
    getTransactionList,
};
export default services;
