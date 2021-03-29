import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QrComponent } from './components/qr/qr.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { PropietariosComponent } from './components/propietarios/propietarios.component';
import { ActivosComponent } from './components/activos/activos.component';


const app_routes : Routes =[
    { path:'inicio',component: HomeComponent },
    { path:'qr',component: QrComponent },
    { path:'usuarios',component: UsuariosComponent},
    { path:'login',component: LoginComponent},
    { path:'propietarios',component: PropietariosComponent},
    { path:'activos',component: ActivosComponent},
    { path:'**', pathMatch: 'full', redirectTo:'inicio'}
]

export const App_routing = RouterModule.forRoot(app_routes);