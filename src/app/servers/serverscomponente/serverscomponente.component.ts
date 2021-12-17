import { Component, OnInit } from '@angular/core';
import { Servidor } from '../interfaces/servidor.interface';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-serverscomponente',
  templateUrl: './serverscomponente.component.html',
  styleUrls: []
})
export class ServerscomponenteComponent implements OnInit {
  servers:Servidor[]=[]
  constructor(private servicioserver:ServerService) {
    let servidores=this.obtenerServidores();
    this.servers=servidores;
  }
  ngOnInit(): void {
  }
  obtenerServidores():Servidor[]{
    return this.servicioserver.listaDeServidores;
  }
}
