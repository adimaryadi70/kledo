import AXIOS from "../common/axios";

export const GetShippingServices = () => {
    let config = {};
    return AXIOS.get('/v1/finance/shippingComps',config);
};
