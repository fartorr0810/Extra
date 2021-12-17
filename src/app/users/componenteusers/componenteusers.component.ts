import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioServicioService } from '../services/usuario-servicio.service';

@Component({
  selector: 'app-componenteusers',
  templateUrl: './componenteusers.component.html',
  styleUrls: []
})
export class ComponenteusersComponent implements OnInit {

  listausuarios: Usuario[]=[];
  constructor(private serviciousuario:UsuarioServicioService) {
    this.listausuarios=this.buscar();
  }

  ngOnInit(): void {
  }
  buscar():Usuario[]{
    this.serviciousuario.obtenerListaUsuarios()
    .subscribe(resp=>
      {
        this.listausuarios = resp;
      }
      )
    return this.listausuarios;
  }
}
