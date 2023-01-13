import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BusHeaderService } from '../bus-header.service';
import { SincroService } from '../sincro.service';
import { Socialmedia } from '../socialmedia';

@Component({
  selector: 'app-social-editor',
  templateUrl: './social-editor.component.html',
  styleUrls: ['./social-editor.component.sass'],
})
export class SocialEditorComponent {
  formulario: FormGroup;

  socialMedia: Socialmedia[];

  esocial: Socialmedia;

  constructor(private bus: BusHeaderService, private sincro: SincroService) {
    this.formulario = this.bus.Formulario;
    this.socialMedia = this.bus.social;
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

  public drop(event: CdkDragDrop<Socialmedia[]>) {
    //console.log(event);

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
