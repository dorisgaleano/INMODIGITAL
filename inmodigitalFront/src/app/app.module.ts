import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegistroInmueblesComponent } from './registro-inmuebles/registro-inmuebles.component';
import { RegistroUbicacionComponent } from './registro-ubicacion/registro-ubicacion.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './layout/layout.component';
import { ConsultaInmuebleComponent } from './consulta-inmueble/consulta-inmueble.component';
import { ServicioGlobalService } from './servicios/servicio-global.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    RegistrarUsuarioComponent,
    HomeComponent,
    RegistroInmueblesComponent,
    RegistroUbicacionComponent,
    LoginComponent,
    LayoutComponent,
    ConsultaInmuebleComponent,
    ProductoServicioComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicioGlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
