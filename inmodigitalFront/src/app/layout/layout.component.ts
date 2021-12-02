import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {


  public autenticado: boolean = false;

  @ViewChild('loginC', { static: false }) child: LoginComponent;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.autenticado = !!sessionStorage.getItem('usuario');
    var estado = document.getElementById("iniciarSesion");
    var salir = document.getElementById("salir");
    if (estado && salir) {
      if (this.autenticado) {
        estado.style.display = "none";
        salir.style.display = "block";
      }else{
        estado.style.display = "block";
        salir.style.display = "none";
      }
    }
  }

  ngAfterViewInit() {

    this.cd.detectChanges();
  }

  mostrar() {
    const menu_items = document.querySelector('.menu-items')
    menu_items?.classList.toggle('show')

  }

  salir() {
    this.autenticado = false;
    var estado = document.getElementById("iniciarSesion");
    var salir = document.getElementById("salir");
    if (estado) {
      estado.style.display = "block";
    }
    if (salir) {
      salir.style.display = "none";
    }
    sessionStorage.removeItem("usuario")
  }
}
