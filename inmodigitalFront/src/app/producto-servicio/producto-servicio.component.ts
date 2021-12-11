import { Component, OnInit } from '@angular/core';
import { InmuebleServiceService } from '../servicios/inmueble-service.service';
import { UbicacionServiceService } from '../servicios/ubicacion-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private inmuebleServicio:InmuebleServiceService, private ubicacionServicio:UbicacionServiceService,
    private router: Router) { }

  inmuebles:any;
  inmueblesRespaldo:any = [];
  inmueble:any = [];
  ubicaciones:any = [];
  ubicacionFiltro :any;
  tipos:any = ['Casa','Apartamento']
  habitaciones:any = ['1','2','3','4','5']

  public autenticado: boolean = false;

  ngOnInit(): void {
    this.autenticado = !!sessionStorage.getItem('usuario');

    this.inmuebleServicio.getInmuebles().subscribe(data=>{
      this.inmuebles = data
      this.inmueblesRespaldo = data;
    })


    this.ubicacionServicio.getUbicaciones().subscribe(data=>{
      this.ubicaciones = data
    })
  }

  displayStyle = "none";

  openPopup(inmueble:any) {
    this.inmueble = inmueble;
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  cambiarUbicacion(ubicacion:any){
    this.ubicacionFiltro = ubicacion;
    this.filtrar()
  }

  filtrar(){
    this.inmuebles = [];
    for(let i = 0; i<= this.inmueblesRespaldo.length;i++){
      if(this.inmueblesRespaldo[i].ubicacion._id == this.ubicacionFiltro._id){
        this.inmuebles.push(this.inmueblesRespaldo[i])
      }
    }
  }

  cambiarTipo(tipoLlega:any){
    this.inmuebles = [];
    for(let i = 0; i<= this.inmueblesRespaldo.length;i++){
      if(this.inmueblesRespaldo[i].tipo == tipoLlega){
        this.inmuebles.push(this.inmueblesRespaldo[i])
      }
    }
  }

  cambiarHabitaciones(numero:any){
    this.inmuebles = [];
    for(let i = 0; i<= this.inmueblesRespaldo.length;i++){
      if(this.inmueblesRespaldo[i].nroHabitaciones == numero){
        this.inmuebles.push(this.inmueblesRespaldo[i])
      }
    }
  }

  limpiarFiltro(){
    this.inmuebles = [];
    this.inmuebles = this.inmueblesRespaldo;
  }

  irRegistrarInmueble(){
    this.router.navigateByUrl('/registrar-inmueble');
  }

}
