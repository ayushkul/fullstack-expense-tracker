import sessionManager from '../managers/sessionManager'
import {cookiesConstants, eventConstants, pathConstants} from '../constants'

const userData = sessionManager.getDataFromCookies(cookiesConstants.USER);
const userPermission = sessionManager.getDataFromCookies(cookiesConstants.USER_PERMISSION);
const deviceID = sessionManager.getDataFromCookies(cookiesConstants.DEVICE_ID);
const sessionToken = sessionManager.getDataFromCookies(cookiesConstants.SESSION_TOKEN);

let initialState = {
    userPermission: userPermission,
    userDetails: userData,
    isLoggedIn: false,
    deviceID: deviceID,
    sessionToken: sessionToken,
    isLoading: false,
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case eventConstants.SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        case eventConstants.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case eventConstants.SIGN_UP_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data.userDetails : state.userDetails, cookiesConstants.USER);
            sessionManager.setDataInCookies(action.data ? action.data.sessionToken : state.sessionToken, cookiesConstants.SESSION_TOKEN);
            return {
                ...state,
                userDetails: action.data ? action.data.userDetails : state.userDetails,
                sessionToken: action.data ? action.data.sessionToken : state.sessionToken,
                loading: false
            };
        case eventConstants.GET_USER_DETAILS_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data : null, cookiesConstants.USER);
            return {
                ...state,
                userDetails: action.data ? action.data : null,
                loading: false
            };
        case eventConstants.LOGOUT_SUCCESS:
            sessionManager.setDataInCookies(null, cookiesConstants.USER);
            sessionManager.setDataInCookies(null, cookiesConstants.SESSION_TOKEN);
            sessionManager.setDataInCookies(null, cookiesConstants.USER_PERMISSION);
            return {
                ...state,
                userPermission: false,
                userDetails: false,
                sessionToken: false,
                loading: false
            };
        default:
            return state;
    }
}
