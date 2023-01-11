import { Injectable } from '@angular/core';
import { Header } from './header';
import { HEADERDATA } from './mock-header';
import { socialmedia } from './mock-socialmedia';
import { SECCIONES } from './mock-secciones';
import { Seccion } from './seccion';
import { Socialmedia } from './socialmedia';

@Injectable({
  providedIn: 'root',
})
export class SincroService {
  constructor() {}

  load() {}

  sincr() {}

  get Header(): Header {
    return HEADERDATA;
  }

  get SocialMedia():Socialmedia[] {
    return socialmedia;
  }

  get SocialMedialist():any[]{
    let arr=[];
    arr.push({
      nombre: 'Twitter',
      cssclas: 'fa-twitter-square',
      unicode: '&#xf099;',
    });
    arr.push({
      nombre: 'GitHub',
      cssclas: 'fa-github-square',
      unicode: '&#xf09b;',
    });
    arr.push({
      nombre: 'Linkedin',
      cssclas: 'fa-linkedin-square',
      unicode: '&#xf0e1;',
    });
    return arr;
  }

  get Secciones(): Seccion[] {
    return SECCIONES;
  }
}
