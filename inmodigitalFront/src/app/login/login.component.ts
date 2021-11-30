import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioGlobalService } from '../servicios/servicio-global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private globalService: ServicioGlobalService, private router: Router) { }

  todos: string = "informacion desde child";
  errorMessage: string = "";
  usuario: string = "";
  contrasena: string = "";
  autenticado: boolean = false;

  ngOnInit(): void {
    this.autenticado = false;
  }

  login() {
    const user = { usuario: this.usuario, contrasena: this.contrasena }
    this.globalService.login(user).subscribe(data => {
      if (data.logueado == "no logueado") {
        this.errorMessage = "Credenciales invalidas."
      } else {
        var estado = document.getElementById("iniciarSesion");
        var salir = document.getElementById("salir");
        if (estado) {
          estado.style.display = "none";
        }
        if (salir) {
          salir.style.display = "block";
        }
        sessionStorage.setItem('usuario', data.usuario)
        this.autenticado = true
      }
    })
  }

}
