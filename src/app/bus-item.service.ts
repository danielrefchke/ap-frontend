import { Injectable } from '@angular/core';
import { Elemento } from './elemento';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BusItemService {
  elemento: Elemento;
  formulario: FormGroup;

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
    if(this.elemento){
      //console.log(e.titulo);
      
      this.formulario.controls["nombre"].setValue(e.nombre);
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

  get Formulario():FormGroup{
    return this.formulario;
  }
}
