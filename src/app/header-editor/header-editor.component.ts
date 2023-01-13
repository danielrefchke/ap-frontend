import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BusHeaderService } from '../bus-header.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Header } from '../header';
import { Socialmedia } from '../socialmedia';
import { SincroService } from '../sincro.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-header-editor',
  templateUrl: './header-editor.component.html',
  styleUrls: ['./header-editor.component.sass'],
})
export class HeaderEditorComponent {
  formulario: FormGroup;
  elemento: Header;

  socialMedia: Socialmedia[];

  esocial: Socialmedia;

  seccion: Seccion;

  constructor(private bus: BusHeaderService, private sincro: SincroService) {
    this.formulario = this.bus.Formulario;
    this.socialMedia = this.bus.social;
  }

  get header(): Header {
    return this.bus.header;
  }

  public saveData() {
    this.header.nombre = this.formulario.get('nombre').value;
    this.header.titulo = this.formulario.get('titulo').value;
    this.header.descripcion = this.formulario.get('descripcion').value;
    this.header.imgback = this.formulario.get('imgback').value;
    this.header.imgcred = this.formulario.get('imgcred').value;
    this.header.imgpersona = this.formulario.get('imgpersona').value;
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

  get imgcred() {
    return this.formulario.get('imgcred');
  }
  get imgback() {
    return this.formulario.get('imgback');
  }

  get imgpersona() {
    return this.formulario.get('imgpersona');
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
