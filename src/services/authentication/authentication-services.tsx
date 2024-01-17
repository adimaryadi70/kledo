import {AuthenticationInterfaces} from "../../model/authentication/authentication-interfaces";
import AXIOS from "../common/axios";
import {authHeader} from "../common/header";

export const AuthenticationServices = (auth: AuthenticationInterfaces) => {
    let config = {};
    return AXIOS.post('/v1/authentication/login',auth, config);
};

export const LogoutServices = (data: any) => {
    let config = {};
    config = authHeader();
    return AXIOS.post('/v1/authentication/logout',data,config);
};
