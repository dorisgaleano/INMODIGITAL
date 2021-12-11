import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleServiceService } from '../servicios/inmueble-service.service';
import { ServicioGlobalService } from '../servicios/servicio-global.service';
import { UbicacionServiceService } from '../servicios/ubicacion-service.service';

@Component({
  selector: 'app-registro-inmuebles',
  templateUrl: './registro-inmuebles.component.html',
  styleUrls: ['./registro-inmuebles.component.css']
})
export class RegistroInmueblesComponent implements OnInit {

  constructor(private router: Router, private servicioUbicacion: UbicacionServiceService,
    private inmuebleService: InmuebleServiceService,
    private globalService: ServicioGlobalService) { }


  message: string = "";
  option: any;
  ubicaciones: any;
  archivos: any;

  inmueble: FormGroup;

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

  registrar() {

    const formData = new FormData()
    formData.append('files', this.archivos[0]);
    formData.append('descripcion', this.inmueble.value.descripcion)
    this.inmueble.value.imagen = this.archivos[0];


    this.globalService.guardarImagen(formData).subscribe(dataImagen => {
      console.log(dataImagen);
      this.inmueble.value.imagen = dataImagen.rutaImagen;
      this.inmuebleService.registrarInmueble(this.inmueble.value).subscribe(data => {
        if (data.estado == "creado") {
          this.message = "Inmueble creado exitosamente"
        }
      })
    });

  }

  cargarImagen(event: any) {
    this.inmueble.value.imagen = "sss";
    this.archivos = event.srcElement.files
  }

  salir(){
    this.router.navigate(['/productos-servicios']);
  }
}
