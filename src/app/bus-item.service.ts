import { EventEmitter, Injectable, Output } from '@angular/core';
import { Elemento } from './elemento';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seccion } from './seccion';

@Injectable({
  providedIn: 'root',
})
export class BusItemService {
  elemento: Elemento;
  seccion: Seccion;
  formulario: FormGroup;
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      classType: ['', [Validators.required]],
      contDinamico: ['', [Validators.required]],
    });
  }

  public editThis(e: Elemento) {
    this.elemento = e;
    if (this.elemento) {
      //console.log(e.titulo);

      this.formulario.controls['nombre'].setValue(e.nombre);
      this.formulario.controls['titulo'].setValue(e.titulo);
      this.formulario.controls['descripcion'].setValue(e.descripcion);
      this.formulario.controls['classType'].setValue(e.classType);
      this.formulario.controls['contDinamico'].setValue(e.contDinamico);
      
    }
    //console.log("edita el objeto "+e);
  }

  public getElemento(): Elemento {
    return this.elemento;
  }

  get Formulario(): FormGroup {
    return this.formulario;
  }
}
