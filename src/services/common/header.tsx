import { ReadStorage } from "@/utility/tools";

export const authHeader = () => {
    let token = ReadStorage('token');
    let config = {
        "headers": {
            "AUTHORIZATION": "Bearer "+ token,
            "Content-type": "application/json",
        }
    }
    return config;
};