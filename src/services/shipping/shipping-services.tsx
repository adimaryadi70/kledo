import AXIOS from "../common/axios";
import { authHeader } from "../common/header";

export const GetShippingServices = () => {
    let config = {};
    config = authHeader();
    return AXIOS.get('/v1/finance/shippingComps',config);
};
