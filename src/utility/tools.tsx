import useLocalStorage from "use-local-storage";
import {NotificationManager} from 'react-notifications';
export const NotificationError = (error) => {
    if (error.response !== undefined) {
        return NotificationManager.error(error.response.data.message, '', 5000);
    }
};

export const ResponseServices: (data) => (boolean) = (data) => {
    if (data.data.success) {
        return true;
    }
    return false;
};

export const SaveLocalStorage = (key: string, data: any) => {

};

export const ReadLocalStorage = (key: string) => {
};
