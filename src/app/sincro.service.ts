import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Header } from './header';
import { HEADERDATA } from './mock-header';
import { SOCIALDATA } from './mock-socialmedia';
import { SECCIONES } from './mock-secciones';
import { Seccion } from './seccion';
import { Socialmedia } from './socialmedia';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SincroService {
  header?: Header;
  social?: Socialmedia[];
  secciones?: Seccion[];

  @Output() loaded: EventEmitter<any> = new EventEmitter();
  private loadSubject = new Subject<any>();

  @Output() saved: EventEmitter<any> = new EventEmitter();
  private saveSubject = new Subject<any>();

  @Output() error: EventEmitter<any> = new EventEmitter();
  private errorSubject = new Subject<any>();

  mensajeLoad = this.loadSubject.asObservable();
  mensajeSave = this.saveSubject.asObservable();
  mensajeError = this.errorSubject.asObservable();

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    //this.loadSubject.next(true);
    this.load();
  }

  load() {
    let self = this;
    this.spinner.show('spinnerPrincipal');
    setTimeout(() => {
      self.header = HEADERDATA;
      self.secciones = SECCIONES;
      self.social = SOCIALDATA;
      self.loaded.emit(true);
      this.spinner.hide('spinnerPrincipal');
    }, 3000);
  }

  loadImageList(){
    return [
      'zachary-pearson-NrecNaxqvDs-unsplash.jpg',
      'erica-magugliani-olSh3t6DGSk-unsplash.jpg',
      '20180612_005858.jpg',
      'espejo.jpg',
    ];
  }

  sincr(obj, spnr = 'spinnerEdit') {
    let self = this;
    this.spinner.show(spnr);
    setTimeout(() => {
      this.spinner.hide(spnr);
      if (this.randomBoolean()) {
        this.toastr.success('Guardado!!');
        this.saved.next(true);
      } else {
        this.error.next(true);
        this.toastr.error(
          'Vuelva a intentar en unos segundos',
          'No se pudo guardar!!'
        );
      }
    }, 3000);
  }

  randomBoolean(): boolean {
    const randomNumber = Math.random();
    if (randomNumber > 0.2) {
      return true;
    } else {
      return false;
    }
  }

  get Header(): Header {
    return this.header;
  }

  get SocialMedia(): Socialmedia[] {
    return this.social;
  }

  get SocialMedialist(): any[] {
    let arr = [];
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
    arr.push({
      nombre: 'Bitbucket',
      cssclas: 'fa-bitbucket-square',
      unicode: '&#xf0e1;',
    });
    arr.push({
      nombre: 'Gitlab',
      cssclas: 'fa-gitlab',
      unicode: '&#xf0e1;',
    });
    return arr;
  }

  get Secciones(): Seccion[] {
    return this.secciones;
  }
}
