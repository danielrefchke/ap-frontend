import { Component } from '@angular/core';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';
import { SincroService } from '../sincro.service';

@Component({
  selector: 'nav',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent extends Autenticated {
  socialmedia ;

  constructor(auth: AuthService, private sincro: SincroService) {
    super(auth);
    this.socialmedia = this.sincro.SocialMedia;
  }
}
