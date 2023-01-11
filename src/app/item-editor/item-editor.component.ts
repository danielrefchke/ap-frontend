import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BusItemService } from '../bus-item.service';
import { Elemento } from '../elemento';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.sass'],
})
export class ItemEditorComponent {
  
  
  
  formulario: FormGroup;

  constructor(private bus: BusItemService) {
    this.formulario = this.bus.Formulario;
  }

  get Nombre() {
    return this.formulario.get('nombre');
  }

  get Titulo() {
    return this.formulario.get('titulo');
  }

  get Descripcion() {
    return this.formulario.get('descripcion');
  }

  get ClassType() {
    return this.formulario.get('classType');
  }

  get ContenidoDinamico() {
    return this.formulario.get('contDinamico');
  }

  get elemento(): Elemento {
    return this.bus.getElemento();
  }

  get TypeElement() {
    return [
      { key: 'element-img', value: 'Imagen' },
      { key: 'element-grap', value: 'Grafico' },
      { key: 'element-languaje', value: 'Texto' },
    ];
  }

  public saveData() {
    this.elemento.nombre = this.formulario.get('nombre').value;
    this.elemento.titulo = this.formulario.get('titulo').value;
    this.elemento.descripcion = this.formulario.get('descripcion').value;
    this.elemento.classType = this.formulario.get('classType').value;
    this.elemento.contDinamico = this.formulario.get('contDinamico').value;

    this.bus.change.emit(this.elemento);
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '15rem',
    maxHeight: '15rem',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'fontSize',
        'customClasses',
        'insertImage',
        'insertVideo',
        'toggleEditorMode',
        'heading',
        'fontName',
        'backgroundColor',
        'indent',
        'outdent',
      ],
    ],
  };
}
