import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  errorMessage:string = "";

  ngOnInit(): void {
  }

  enviar(){
    this.errorMessage = "Mensaje enviado exitosamente"
  }

}
