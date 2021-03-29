import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { App_routing } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { QrComponent } from './components/qr/qr.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { PropietariosComponent } from './components/propietarios/propietarios.component';
import { ActivosComponent } from './components/activos/activos.component';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QrComponent,
    UsuariosComponent,
    LoginComponent,
    PropietariosComponent,
    ActivosComponent
  ],
  imports: [
    BrowserModule,
    App_routing,
    QRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
