import Utils from '../../utils'
import {apiSuccessMessage, httpConstants} from '../../common/constants'
import BLManager from './manger'

export default class Index {
    async loginUser(request, response) {
        logger.info('loginUser', 'Inside loginUser', request.body)
        const [error, userLoginRes] = await Utils.parseResponse(new BLManager().loginUser(request.body))
        if (!userLoginRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, userLoginRes, apiSuccessMessage.LOGIN, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

    async updateUser(request, response) {
        logger.info('updateUser', 'Inside updateUser', request.body)
        const [error, updateUserRes] = await Utils.parseResponse(new BLManager().updateUser(request.body))
        if (!updateUserRes)
            return Utils.handleError(error, request, response)
        return Utils.response(response, updateUserRes, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
}
