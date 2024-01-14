import NextCrypto from 'next-crypto';
import * as cryptoTs from 'crypto';
const crypto = new NextCrypto('XSZDWIIDKAJSDJJASDASDJIJWDIAJIDJIWDNN@@@_((@*!)!(#_@)_');
import * as ls from "local-storage";

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

export const SaveStorage = async (key: string, data: any) => {
    let toJSON = JSON.stringify(data);
    const encrypted = await crypto.encrypt(toJSON);
    const hash = cryptoTs.createHash('sha256');
    const hashKey = hash.update(key).digest('hex');
    return ls.set<any>(hashKey, encrypted);
};

export let ReadStorage = async (key: string) => {
    const hash = cryptoTs.createHash('sha256');
    const hashKey = hash.update(key).digest('hex');
    let getStorage = ls.get<any>(hashKey);
    let decryption = await crypto.decrypt(getStorage);
    if (decryption !== null) {
        let toParse = JSON.parse(decryption);
        return toParse;
    }
    return null;
};
