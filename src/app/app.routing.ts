import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ComponenteusersComponent } from './users/componenteusers/componenteusers.component';
import { ServerscomponenteComponent } from './servers/serverscomponente/serverscomponente.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
  },
  {
      path: 'users',
      component: ComponenteusersComponent
  },
  {
      path: 'servers',
      component: ServerscomponenteComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path:'Error404',
    component: NotfoundComponent
  },
  {
    path:'createuser',
    component: CreateUserComponent
  },
  {
      path: '**',
      redirectTo: 'Error404'
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot( routes )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {

}

