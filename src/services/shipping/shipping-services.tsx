import { ShippingModel } from "@/model/shipping/shipping-model";
import AXIOS from "../common/axios";
import { authHeader } from "../common/header";

export const GetShippingServices = (params: ShippingModel) => {
    let config: any = {};
    config = authHeader();
    config.params = params;
    return AXIOS.get('/v1/finance/shippingComps',config);
};

export const PostShippingServices = (data: ShippingModel) => {
    let config: any = {};
    config = authHeader();
    return AXIOS.post('/v1/finance/shippingComps',data, config);
}

export const PutShippingServices = (data: ShippingModel) => {
    let config: any = {};
    config = authHeader();
    return AXIOS.put(`/v1/finance/shippingComps/${data.id}`,data, config);
}

export const DeleteShippingServices = (data: ShippingModel) => {
    let config: any = {};
    config = authHeader();
    return AXIOS.delete(`/v1/finance/shippingComps/${data.id}`, config);
}