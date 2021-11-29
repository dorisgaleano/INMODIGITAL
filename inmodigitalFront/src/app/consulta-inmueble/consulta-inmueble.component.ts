import { Component, OnInit } from '@angular/core';
import { ServicioGlobalService } from '../servicios/servicio-global.service';

@Component({
  selector: 'app-consulta-inmueble',
  templateUrl: './consulta-inmueble.component.html',
  styleUrls: ['./consulta-inmueble.component.css']
})
export class ConsultaInmuebleComponent implements OnInit {

  constructor(private consultaInmuebleService: ServicioGlobalService) { }
  json:any;

  ngOnInit(): void {


    this.json = this.consultaInmuebleService.getInmuebles()
  }

}
