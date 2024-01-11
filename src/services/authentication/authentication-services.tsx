import {AuthenticationInterfaces} from "../../model/authentication/authentication-interfaces";
import AXIOS from "../common/axios";

export const AuthenticationServices = (auth: AuthenticationInterfaces) => {
    let config = {};
    return AXIOS.post('/v1/authentication/login',auth, config);
};
