//IMPORTACIÓN DE LIBRERIA PARA ENCRIPTAR DATOS.
import CryptoJS from "crypto-js";

export class CryptoLibrary {
  private secretKey;

  constructor() {
    this.secretKey = "j2XYrvB4kG6YH5eBcnBllvqwlQTmGoNY";
  }

  //Encripta datos
  encrypt(text: string) {
    return CryptoJS.AES.encrypt(text, this.secretKey).toString();
  }

  //Desencripta datos
  decrypt(text: string) {
    return CryptoJS.AES.decrypt(text, this.secretKey).toString(
      CryptoJS.enc.Utf8
    );
  }
}
