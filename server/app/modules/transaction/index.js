import Utils from '../../utils'
import {apiSuccessMessage, httpConstants} from '../../common/constants'
import BLManager from './manger'

export default class Index {
    async addTransaction(request, response) {
        logger.info('Inside addTransaction', request.body, request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().addTransaction(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async updateTransaction(request, response) {
        logger.info('Inside updateTransaction', request.body, request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().updateTransaction(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
    async getTxnList(request, response) {
        logger.info('getTxnList', 'Inside getTxnList', request.query)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().getTxnList(request.query))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

}
