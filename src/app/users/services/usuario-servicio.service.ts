import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CrearUsuario, Usuario } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  url:string ='http://localhost:3000/users';
  listausuarios: Usuario[]=[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {}
  obtenerListaUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }
  addUser(user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,user,this.httpOptions);
  }
}
