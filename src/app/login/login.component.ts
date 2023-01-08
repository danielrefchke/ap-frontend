import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})

export class LoginComponent implements OnInit {
  loguinform: FormGroup;
  logged: boolean;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    ///Creamos el grupo de controles para el formulario de login
    this.loguinform = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      user: ['', [Validators.required]],
    });

    this.logged = false;
  }

  ngOnInit() {}

  get Password() {
    return this.loguinform.get('password');
  }

  get User() {
    return this.loguinform.get('user');
  }

  get IsLoged():boolean {
    return this.auth.isLogged();
  }

  get errorLog():boolean{
    return !this.auth.processStatus;
  }

  onEnviar(evt: Event) {
    //evt.preventDefault;
    if (this.loguinform.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      let u:string,p:string;
      p = this.loguinform.get('password').value;
      u = this.loguinform.get('user').value;
      this.auth.login(u,p) 
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.loguinform.markAllAsTouched();
    }
  }
}
