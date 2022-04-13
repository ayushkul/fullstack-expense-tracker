import Utils from '../../utils'
import {apiSuccessMessage, httpConstants} from '../../common/constants'
import BLManager from './manger'

export default class Index {
    async addCategory(request, response) {
        logger.info('addCategory', 'Inside addCategory', request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().addCategory(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async updateCategory(request, response) {
        logger.info('updateCategory', 'Inside updateCategory', request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().updateCategory(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async getCategoryList(request, response) {
        logger.info('getCategoryList', 'Inside getCategoryList', request.query)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().getCategoryList(request.query))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
}
