import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { BusHeaderService } from '../bus-header.service';
import { Seccion } from '../seccion';
import { SincroService } from '../sincro.service';


@Component({
  selector: 'app-seccion-editor',
  templateUrl: './seccion-editor.component.html',
  styleUrls: ['./seccion-editor.component.sass'],
})
export class SeccionEditorComponent {
  formulario: FormGroup;

  seccion: Seccion;

  constructor(private formBuilder: FormBuilder, private sincro: SincroService) {
    this.formulario = this.formBuilder.group({
      seccion: ['', []],
    });
  }

  public editarSeccion(s: Seccion) {
    this.seccion = s;
    this.formulario.get('seccion').setValue(s.nombre);
  }

  public eliminarSeccion(s: Seccion) {
    if (confirm('Eliminar?')) {
      if (s.elementos.length > 0) {
        alert('No se puede elimiar la seccion');
      } else {
        let i = this.secciones.indexOf(s);
        this.secciones.splice(i, 1);
      }
    }
  }

  public guardarSeccion() {
    if (!this.seccion || this.formulario.get('seccion').value == '') return;

    this.seccion.nombre = this.formulario.get('seccion').value;
    this.formulario.get('seccion').setValue('');
    this.seccion = null;
  }

  get secciones() {
    return this.sincro.Secciones;
  }

  public dropSeccion(event: CdkDragDrop<Seccion[]>) {
    //console.log(event);

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
