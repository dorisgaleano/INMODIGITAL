import { Component, OnInit } from '@angular/core';
import { InmuebleServiceService } from '../servicios/inmueble-service.service';

interface inmueblesI {

  descripcion:String;
  tipo: String;
  direccion: String;

}

@Component({
  selector: 'app-producto-servicio',
  templateUrl: './producto-servicio.component.html',
  styleUrls: ['./producto-servicio.component.css']
})
export class ProductoServicioComponent implements OnInit {

  constructor(private inmuebleServicio:InmuebleServiceService) { }

  inmuebles:any;

  ngOnInit(): void {
    this.inmuebleServicio.getInmuebles().subscribe(data=>{
      console.log(data)
      this.inmuebles = data
    })
  }

}
