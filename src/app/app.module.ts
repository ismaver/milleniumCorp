import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './millenium/connection/inicio/inicio.component';
import { CarrucelComponent } from './millenium/connection/carrucel/carrucel.component';
import { EmpresaComponent } from './millenium/connection/empresa/empresa.component';
import { PlanesComponent } from './millenium/connection/planes/planes.component';
import { FooterComponent } from './millenium/connection/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarrucelComponent,
    EmpresaComponent,
    PlanesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
