import { Component, OnInit,ViewChild,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {


  public autenticado:boolean = false;

  @ViewChild('loginC', {static: false}) child :LoginComponent;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
      this.autenticado =!!sessionStorage.getItem('usuario');
  }

  ngAfterViewInit(){
    
    this.cd.detectChanges();
  }

  mostrar(){
    const menu_items = document.querySelector('.menu-items')
    menu_items?.classList.toggle('show')
    
  }

  salir(){
    this.autenticado = false;
    sessionStorage.removeItem("usuario")
  }
}
