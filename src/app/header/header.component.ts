import { Component } from '@angular/core';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';
import { HEADERDATA } from '../mock-header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})

export class HeaderComponent extends Autenticated {
  header = HEADERDATA;

  constructor(auth: AuthService) {
    super(auth);
  }
}
