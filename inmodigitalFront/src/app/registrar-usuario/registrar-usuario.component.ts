import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioServiceService } from '../servicios/usuario-service.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  msg:string = "";
  todos:string = "";


  usuario: FormGroup;
   

  constructor(private usuarioServicio: UsuarioServiceService) { }

  ngOnInit(): void {

    this.usuario = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      cedula: new FormControl(''),
      nombre_usuario: new FormControl(''),
      correo: new FormControl(''),
      clave: new FormControl(''),
      rol: new FormControl('')
    });
  }

  registrar(){
    this.usuarioServicio.registrarUsuario(this.usuario.value).subscribe(data =>{  
      if(data.estado=="creado"){
        this.todos = "Usuario creado exitosamente"
      }
    })
  }

}
