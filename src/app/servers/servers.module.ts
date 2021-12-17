import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerscomponenteComponent } from './serverscomponente/serverscomponente.component';
import { ServerService } from './services/server.service';



@NgModule({
  declarations: [
    ServerscomponenteComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    ServerscomponenteComponent
  ],providers:[
  ServerService
  ]
})
export class ServersModule { }
