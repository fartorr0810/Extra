import { Injectable } from '@angular/core';
import { Servidor } from '../interfaces/servidor.interface';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  servidores:Servidor []=[
    {id: 1,
    name: 'Productionserver',
    status: 'online'},
    {id: 2,
    name: 'Testserver',
    status: 'offline'
    },
    {id: 3,
    name: 'Devserver',
    status: 'offline'
    }];

  get listaDeServidores():Servidor[]{
    return [...this.servidores];
  }

}
