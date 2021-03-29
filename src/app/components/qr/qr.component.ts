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
  

  constructor() { 
 
  }

  ngOnInit(): void {
  }

}
