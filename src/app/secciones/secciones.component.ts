import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';
import { Elemento } from '../elemento';
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
  ) {
    super(auth);
    this.secciones = this.sincro.Secciones;
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
