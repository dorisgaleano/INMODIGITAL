import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleServiceService } from '../servicios/inmueble-service.service';
import { UbicacionServiceService } from '../servicios/ubicacion-service.service';

@Component({
  selector: 'app-registro-inmuebles',
  templateUrl: './registro-inmuebles.component.html',
  styleUrls: ['./registro-inmuebles.component.css']
})
export class RegistroInmueblesComponent implements OnInit {

  constructor(private router: Router, private servicioUbicacion: UbicacionServiceService, private inmuebleService: InmuebleServiceService) { }


  message: string = "";
  option: any;
  ubicaciones: any;

  inmueble:FormGroup;

  ngOnInit(): void {

    this.inmueble = new FormGroup({
      descripcion: new FormControl(''),
      tipo: new FormControl(''),
      ubicacion: new FormControl(''),
      direccion: new FormControl(''),
      nroHabitaciones: new FormControl(''),
      precio: new FormControl(''),
      imagen: new FormControl(''),
    });

    this.servicioUbicacion.getUbicaciones().subscribe(data => {
      this.ubicaciones = data
    })

  }

  crearUbicacion() {
    this.router.navigate(['/registrar-ubicacion']);
  }

  registrar(){

    this.inmuebleService.registrarInmueble(this.inmueble.value).subscribe(data =>{  
      if(data.estado=="creado"){
        this.message = "Inmueble creado exitosamente"
      }
    })

  }
}
