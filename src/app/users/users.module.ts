import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteusersComponent } from './componenteusers/componenteusers.component';
import { UsuarioServicioService } from './services/usuario-servicio.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponenteusersComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ComponenteusersComponent,
    CreateUserComponent
  ],
  providers:[
    UsuarioServicioService
  ]
})
export class UsersModule { }
