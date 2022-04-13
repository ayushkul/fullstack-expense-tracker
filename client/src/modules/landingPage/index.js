import {GoogleLogin} from 'react-google-login';
import {useState} from "react";
import {genericConstants} from "../../constants";
import sessionManager from "../../managers/sessionManager";
import services from "../../services";
import utility from "../../utility";
import Utils from "../../utility";

const LandingPageComponent = (props) => {
    const responseGoogle = async (response) => {
        if (!response.profileObj) {
            return Utils.apiFailureToast("Login Failed")
        }
        const [error, responseData] = await utility.parseResponse(services.userLogin({
            name: response.profileObj.name,
            email: response.profileObj.email,
            googleId: response.profileObj.googleId,
            profileUrl: response.profileObj.imageUrl,
        }))
        if (error) {
            Utils.consoleLogger("userLogin", error)
            return Utils.apiFailureToast("Unable to Login")
        }
        Utils.apiSuccessToast("Logged in successfully")
        props.setUserInfo(responseData)
        Utils.consoleLogger("userLogin", responseData)
        sessionManager.setDataInLocalStorage(responseData, "userInfo")
    }

    return (
        <div className="display-flex w-100 flex-column">
            <div className="w-100 p-4 fs-24 fc-azure fw-700 bg-white card-shadow mb-3">
                {genericConstants.APP_NAME}
            </div>
            <div className="display-flex flex-row flex-wrap">
                <div className="p-3 mx-3 w-40-per display-flex flex-column">
                    <span className="fs-32 fw-700 word-wrap">Expense Software for tracking your personal expense</span>
                    <span className="fs-24 my-3 fc-brownish-grey word-wrap">Easy Accounting | Billing | Splitting</span>
                    <GoogleLogin
                        className="w-50 m-3 p-2 br-4"
                        clientId="412954107899-68euuaorrd8rvs138sa74g0fhudesc2f.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        cookiePolicy={'single_host_origin'}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </div>
                <div className="display-flex">
                    <img className="w-450 position-absolute right-0 my-5" src="/images/hero-img.webp"/>
                </div>
            </div>
            <div className="w-100 p-2 px-4 fs-20 mt-5 fc-white fw-500 bg-azure card-shadow mb-3">
                Made with ❤️ in India
            </div>
            <div className="px-3 mx-3 w-100 display-flex flex-column">
                <span className="fs-32 fw-700 word-wrap">Benefits of using <span
                    className="fc-azure">{genericConstants.APP_NAME}</span> accounting software</span>
            </div>

        </div>
    )
}
export default LandingPageComponent
