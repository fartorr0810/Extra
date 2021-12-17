import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersModule } from './servers/servers.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ServersModule,
    UsersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
