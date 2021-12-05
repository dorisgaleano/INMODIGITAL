import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UbicacionServiceService } from '../servicios/ubicacion-service.service';

@Component({
  selector: 'app-registro-ubicacion',
  templateUrl: './registro-ubicacion.component.html',
  styleUrls: ['./registro-ubicacion.component.css']
})
export class RegistroUbicacionComponent implements OnInit {

  constructor(private ubicacionService:UbicacionServiceService) { }

  message:string="";

  public autenticado: boolean = false;
  ubicacion:FormGroup;

  ngOnInit(): void {
    this.autenticado = !!sessionStorage.getItem('usuario');

    this.ubicacion = new FormGroup({
      barrio: new FormControl(''),
      zona: new FormControl(''),
    });
  }
  
  
  registrar(){

    this.ubicacionService.registrarUbicacion(this.ubicacion.value).subscribe(data =>{  
      console.log(data)
      if(data.estado=="creado"){
        this.message = "Ubicación creada exitosamente"
      }
    })
  }

}
