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

  public editSocial(s: Socialmedia) {
    this.esocial = s;

    this.formulario.get('socialicon').setValue(s.icon);
    this.formulario.get('socialurl').setValue(s.url);
  }

  public guardarSocial() {
    if (
      this.formulario.get('socialicon').value == '' ||
      this.formulario.get('socialurl').value == ''
    ) {
      return;
    }

    if (!this.esocial) {
      this.esocial = new Socialmedia(0, '', '');
      this.sincro.SocialMedia.push(this.esocial);
    }
    this.esocial.icon = this.formulario.get('socialicon').value;
    this.esocial.url = this.formulario.get('socialurl').value;
    this.esocial = null;
    this.formulario.get('socialicon').setValue('');
    this.formulario.get('socialurl').setValue('');
  }

  public eliminarSocial(s: Socialmedia) {
    if (confirm('Eliminar?')) {
      let i = this.sincro.SocialMedia.indexOf(s);
      this.sincro.SocialMedia.splice(i, 1);
    }
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

  get social(): Socialmedia[] {
    return this.sincro.SocialMedia;
  }

  get socialIcon() {
    return this.formulario.get('socialicon');
  }

  get socialUrl() {
    return this.formulario.get('socialurl');
  }

  get SocialList(): any[] {
    return this.sincro.SocialMedialist;
  }

  get secciones() {
    return this.sincro.Secciones;
  }

  public drop(event: CdkDragDrop<Socialmedia[]>) {
    //console.log(event);

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  public dropSeccion(event: CdkDragDrop<Seccion[]>) {
    //console.log(event);

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
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
