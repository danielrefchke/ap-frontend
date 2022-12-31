import { Component } from '@angular/core';
//import { Seccion } from '../seccion';
import { SECCIONES } from '../mock-secciones';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.sass']
})
export class SeccionesComponent {
 
  secciones = SECCIONES
}
