import {memo} from "react";
function Solution({plaintext, inputKey}){

    // Hàm chuyển đổi chuỗi thành mảng các mã ASCII
    function stringToAsciiArray(str) {
        let asciiArray = [];
        for (let i = 0; i < str.length; i++) {
            asciiArray.push(str.charCodeAt(i));
        }
        return asciiArray;
    }

    // Hàm chuyển đổi mảng các mã ASCII thành chuỗi
    function asciiArrayToString(asciiArray) {
        let str = '';
        for (const element of asciiArray) {
            str += String.fromCharCode(element);
        }
        return str;
    }

    // Hàm tính XOR giữa hai mảng
    function xorArrays(arr1, arr2) {
        let result = [];
        for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
            result.push(arr1[i] ^ arr2[i]);
        }
        return result;
    }

    // Hàm tạo key ngẫu nhiên có độ dài bằng với chiều dài của chuỗi cần mã hóa
    function generateKey(length) {
        let key = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Các ký tự có thể có trong key
        const charactersLength = characters.length;
        for (const element of length) {
            key += characters.charAt(Math.floor(Math.random() * charactersLength)); // Chọn ngẫu nhiên một ký tự từ danh sách characters
        }
        return key;
    }

    // Hàm mã hóa văn bản rõ
    function encrypt(plaintext, key) {
        let plaintextAscii = stringToAsciiArray(plaintext);
        let keyAscii = stringToAsciiArray(key);
        let ciphertext = xorArrays(plaintextAscii, keyAscii);
        return ciphertext;
    }

    // Hàm giải mã văn bản mã
    function decrypt(ciphertext, key) {
        let keyAscii = stringToAsciiArray(key);
        let plaintextAscii = xorArrays(ciphertext, keyAscii);
        
        let plaintext = asciiArrayToString(plaintextAscii);
        return plaintext;
    }
    let key = inputKey;
    while (key.length < plaintext.length) {
       
        key += key;
    }
    let asciiCiphertext = encrypt(plaintext, key);
    let decryptedPlaintext = decrypt(asciiCiphertext, key);
    return (
        <div className ="card col-4 px-0">
            <div className="card-header"></div>
            <div className="card-body bg-light">
                <h5>encryption information</h5>
                <p className="card-text">{`Key: ${key}`}</p>
                <p className="card-text">{`ciphertext: ${asciiArrayToString(asciiCiphertext)}`}</p>
                <p className="card-text">{`Plaintext: ${decryptedPlaintext}`}</p>

            </div>
        </div>
    )
        
    

}

export default memo(Solution);