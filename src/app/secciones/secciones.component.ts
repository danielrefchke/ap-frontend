import { Component } from '@angular/core';
//import { Seccion } from '../seccion';
import { SECCIONES } from '../mock-secciones';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.sass'],
})
export class SeccionesComponent extends Autenticated {
  secciones = SECCIONES;
  constructor(auth: AuthService) {
    super(auth);
  }
}
