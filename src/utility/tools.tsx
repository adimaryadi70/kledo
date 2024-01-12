import NextCrypto from 'next-crypto';
const crypto = new NextCrypto('Mahmud');

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

export const SaveStorage = async () => {
    const encrypted = await crypto.encrypt('hello!');
    const decrypted = await crypto.decrypt(encrypted);
    console.log(encrypted);
    console.log(decrypted);
};

export const ReadLocalStorage = (key: string) => {
};
