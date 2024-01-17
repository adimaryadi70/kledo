import {ReadStorage} from "../utility/tools";

const isAuthenticated = () => {
    let token = ReadStorage('token');
    if (!token) {
        return false;
    }
    return true;
};

export { isAuthenticated };
