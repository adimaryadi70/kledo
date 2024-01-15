import * as cryptoTs from 'crypto';
import CryptoJS from 'crypto-js';
const key_crypto = 'XSZDWIIDKAJSDJJASDASDJIJWDIAJIDJIWDNN@@@_((@*!)!(#_@)_';
import * as ls from "local-storage";
import { decryptionAES } from './crypto';

export const NotificationError = (error: any) => {
    if (error.response !== undefined) {
        console.log(error);
    }
};

export const ResponseServices: (data: any) => (boolean) = (data) => {
    if (data.data.success) {
        return true;
    }
    return false;
};

export const SaveStorage = (key: string, data: any) => {
    let toJSON = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(toJSON, key_crypto).toString();
    const hash = cryptoTs.createHash('sha256');
    const hashKey = hash.update(key).digest('hex');
    return ls.set<any>(hashKey, encrypted);
};

export const ReadStorage: any = (key: string) => {
    const hash = cryptoTs.createHash('sha256');
    const hashKey = hash.update(key).digest('hex');
    let getStorage = ls.get<any>(hashKey);
    if (getStorage === null) {
        return false;
    }
    let decrypt: any = decryptionAES(key_crypto, getStorage);
    return JSON.parse(decrypt);
    // return JSON.parse(decryption);
};
