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

  private evt:CdkDragDrop<Elemento[]>;
  
  constructor(
    auth: AuthService,
    private sincro: SincroService,
  ) {
    super(auth);
    sincro.loaded.subscribe((data) => {
      this.secciones = this.sincro.Secciones;
    });

    
    this.sincro.error.subscribe((data)=>{
      if (this.evt) {
        moveItemInArray(
          this.evt.container.data,
          this.evt.currentIndex,
          this.evt.previousIndex
        );
      }
      this.evt = null;
    });
    

    this.secciones = this.sincro.Secciones;
  }

  drop(event: CdkDragDrop<Elemento[]>) {
    //console.log(event);
    this.evt = event;
    this.sincro.sincr(event.container.data[event.currentIndex], 'spinnerDrop');
    moveItemInArray(
      this.evt.container.data,
      this.evt.previousIndex,
      this.evt.currentIndex
    );
  }
}
