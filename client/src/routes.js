import React, {createContext, useEffect, useState} from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import {connect} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {
    LandingPageComponent,
    Dashboard,
} from "./modules";
import {history} from "./managers/history";
import LoaderComponent from "./common/components/loader";
import {dispatchAction} from "./utility";
import {ToastContainer} from "react-toastify";
import sessionManager from "./managers/sessionManager";

export const AppContext = createContext();

const Routes = (props) => {
    const [userInfo, setUserInfo] = useState()

    useEffect(async () => {
        const data = await sessionManager.getDataFromLocalStorage("userInfo")
        console.log('Class: , Function:  === ', window.location);
        if (data)
            setUserInfo(data)
    }, [])

    //Common component to render the Toast-
    const toast = () => {
        return (
            <ToastContainer position="top-center" autoClose={2500} hideProgressBar newestOnTop={true}
                            closeOnClick={true} rtl={false} pauseOnVisibilityChange={false} draggable={false}
                            pauseOnHover={false} closeButton={null}/>
        );
    };

    const getPublicRoutes = () => {
        return (
            <Switch>
                <Route exact path={'/'} render={(props) => <LandingPageComponent setUserInfo={setUserInfo}/>}/>
                <Redirect exact from='*' to="/"/>
            </Switch>
        )
    };
    const getPrivateRoutes = () => {
        let dashboardComponent = Dashboard
        return (
            <Switch>
                <Route exact path={'/dashboard'} component={dashboardComponent}/>
                <Route exact path={'/transactions'} component={dashboardComponent}/>
                <Route exact path={'/add-transaction'} component={dashboardComponent}/>
                <Route exact path={'/categories'} component={dashboardComponent}/>
                <Route exact path={'/analytics'} component={dashboardComponent}/>
                <Route exact path={'/settings'} component={dashboardComponent}/>
                <Redirect exact from='*' to="/dashboard"/>
            </Switch>
        )
    };
    let loader = props && props.user && props.user.loading ? <LoaderComponent/> : null;

    return (
        <AppContext.Provider value={userInfo}>
            <Router history={history}>
                {loader}
                {toast()}
                {userInfo ? getPrivateRoutes() : getPublicRoutes()}
            </Router>
        </AppContext.Provider>
    );
}

const mapStateToProps = (state) => {
    return {user: state.user}
};
export default connect(mapStateToProps, {dispatchAction})(Routes);
