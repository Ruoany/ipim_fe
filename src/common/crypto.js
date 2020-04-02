import CryptoJS from "crypto-js";

export default {
    //加密
    encryption(word) {
        const keyStr = "0284ERL435220533"; //16位的密钥，自己定义，和下面的密钥要相同
        let key = CryptoJS.enc.Utf8.parse(keyStr);
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.toString();
    },
    //解密
    decryption(word) {
        const keyStr = "0284ERL435220533";
        let key = CryptoJS.enc.Utf8.parse(keyStr);
        let decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
};
