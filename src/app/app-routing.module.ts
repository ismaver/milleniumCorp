import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './millenium/connection/inicio/inicio.component';
import { EmpresaComponent } from './millenium/connection/empresa/empresa.component';
import { PlanesComponent } from './millenium/connection/planes/planes.component';
import { CarrucelComponent } from './millenium/connection/carrucel/carrucel.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'carrucel', component: CarrucelComponent},
  {path: 'empresa', component:EmpresaComponent},
  {path: 'planes', component: PlanesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
