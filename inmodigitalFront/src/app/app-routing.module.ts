import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaInmuebleComponent } from './consulta-inmueble/consulta-inmueble.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistroInmueblesComponent } from './registro-inmuebles/registro-inmuebles.component';
import { RegistroUbicacionComponent } from './registro-ubicacion/registro-ubicacion.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registrar-inmueble', component: RegistroInmueblesComponent },
      { path: 'registrar-ubicacion', component: RegistroUbicacionComponent },
      { path: 'consultar-inmueble', component: ConsultaInmuebleComponent },
      { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
      { path: 'home', component: HomeComponent },
      { path: 'productos-servicios', component: ProductoServicioComponent },
      { path: 'contacto', component: ContactoComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
