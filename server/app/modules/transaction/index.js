import Utils from '../../utils'
import {apiSuccessMessage, httpConstants} from '../../common/constants'
import BLManager from './manger'

export default class Index {
    async loginUser(request, response) {
        logger.info('Inside loginUser', request.body, request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().loginUser(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async updateUser(request, response) {
        logger.info('Inside updateUser', request.body, request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().updateUser(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async logoutUser(request, response) {
        logger.info('Inside logoutUser', request.body, request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().logoutUser(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
}
