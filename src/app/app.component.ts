import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MilleniumCorp';
  paginas =[
    {enlace: 'Inicio', path:'paginas/inicio'},
    {enlace: 'Empresa', path:'paginas/empresa'},
    {enlace: 'Planes', path: 'paginas/planes'}
  ];


}
