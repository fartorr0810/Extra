import { Component, Input, OnInit } from '@angular/core';
import { CrearUsuario, Usuario } from '../interfaces/usuario.interface';
import { UsuarioServicioService } from '../services/usuario-servicio.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: []
})
export class CreateUserComponent implements OnInit {
  name:string='';
  email:string='';

  constructor(private servicioUsuario:UsuarioServicioService) { }

  ngOnInit(): void {
  }
  crearUsuario(){
    let nuevoUsuario:Usuario={
      id:0,
      name: this.name,
      email:this.email
    };
    console.log(nuevoUsuario);
    this.servicioUsuario.addUser(nuevoUsuario).subscribe(resp=> console.log(resp));
  }
}
