import { Component } from '@angular/core';
//import { Seccion } from '../seccion';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';
import { BusSectionService } from '../bus-section.service';
import { Elemento } from '../elemento';
import { Seccion } from '../seccion';
import { SincroService } from '../sincro.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.sass'],
})
export class SeccionesComponent extends Autenticated {
  secciones;
  constructor(
    auth: AuthService,
    private sincro: SincroService,
    private editsec: BusSectionService
  ) {
    super(auth);
    this.secciones = this.sincro.Secciones;
  }

  public agregarItem(s: Seccion) {
    this.editsec.additem(s);
  }

  drop(event: CdkDragDrop<Elemento[]>) {
    console.log(event);

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
