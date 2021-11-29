import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-inmuebles',
  templateUrl: './registro-inmuebles.component.html',
  styleUrls: ['./registro-inmuebles.component.css']
})
export class RegistroInmueblesComponent implements OnInit {

  constructor(private router: Router) { }


  message:string = "";
  option:any;
  

  ngOnInit(): void {
  }

  crearUbicacion(){
    this.router.navigate(['/registrar-ubicacion']);
  }
}
