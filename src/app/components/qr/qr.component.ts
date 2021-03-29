import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  public qrCodeVal: string = null;
  public Nombre: string = null;
  public Ubicacion: string = null;
  public Cantidad: string = null;
  public Propietario: string = null;
  public img: CanvasImageData ;

  getNombre(nombre){
      this.Nombre = nombre;
      this.qrCodeVal = "Activo: " + this.Nombre + " " + "Apellido: "+  this.Ubicacion;
  }

  getUbicacion(ubicacion){
    this.Ubicacion = ubicacion;
    this.qrCodeVal = "Nombre: " + this.Nombre + " " + "Ubicacion: "+  this.Ubicacion;
  }
  
  getCantidad(cantidad){
    this.Cantidad = cantidad;
    this.qrCodeVal = "Nombre: " + this.Nombre + " " + "Ubicacion: "+  this.Ubicacion + " " + "Cantidad: " + this.Cantidad;
  }

  getPropietario(propietario){
    this.Propietario = propietario;
    this.qrCodeVal = "Nombre: " + this.Nombre + " " + "Ubicacion: "+  this.Ubicacion + " " + "Cantidad: " + this.Cantidad + " " + "Propietario: " + this.Propietario;
  }
  
  clickRestablecer(){
    this.qrCodeVal = null;
    this.Nombre = null;
    this.Ubicacion = null;
    this.Cantidad = null;
    this.Propietario = null;
  }
/*
  saveAsImage(parent) {
    // fetches base 64 date from image
    const parentElement = parent.nativeElement.querySelector("par").src;
  //  const parentElement = parent.el.nativeElement.querySelector("img").src;

    // converts base 64 encoded image to blobData
    let blobData = this.convertBase64ToBlob(parentElement);

    // saves as image
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
      window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
    } else { // chrome
      const blob = new Blob([blobData], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Qrcode';
      link.click();
    }
  }

  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }
  */

  saveAsImage() {
    const fileNameToDownload = 'image_qrcode';
    const base64Img = document.getElementById('QR')['src'];
    fetch(base64Img)
       .then(res => res.blob())
       .then((blob) => {
          // IE
          if (window.navigator && window.navigator.msSaveOrOpenBlob){
             window.navigator.msSaveOrOpenBlob(blob,fileNameToDownload);
          } else { // Chrome
             const url = window.URL.createObjectURL(blob);
             const link = document.createElement('a');
             link.href = url;
             link.download = fileNameToDownload;
             link.click();
          }
       })
 }
  constructor() { 
 
  }

  ngOnInit(): void {
  }

}
