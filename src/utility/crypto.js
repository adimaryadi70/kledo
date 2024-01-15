import CryptoJS from 'crypto-js';
export const decryptionAES = (key_access,data) => {
    let result;
    try {
        result = CryptoJS.AES.decrypt(data,key_access).toString(CryptoJS.enc.Utf8);
    } catch (error) {
        return error;
    }
    return result;
} 