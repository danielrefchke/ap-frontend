import { Component } from '@angular/core';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';
import { socialmedia } from '../mock-socialmedia';

@Component({
  selector: 'nav',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent extends Autenticated{
    socialmedia = socialmedia;

    constructor(auth: AuthService){
      super(auth);
    }

}
