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
  public Apellido: string = null;

  getNombre(nombre){
      this.Nombre = nombre;
      this.qrCodeVal = "Nombre: " + this.Nombre + " " + "Apellido: "+  this.Apellido;
  }

  getApellido(apellido){
    this.Apellido = apellido;
    this.qrCodeVal = "Nombre: " + this.Nombre + " " + "Apellido: "+  this.Apellido;
  }
  

  constructor() { 
 
  }

  ngOnInit(): void {
  }

}
