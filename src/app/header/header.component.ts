import { Component } from '@angular/core';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';
import { BusHeaderService } from '../bus-header.service';
import { Header } from '../header';
import { HEADERDATA } from '../mock-header';
import { SincroService } from '../sincro.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent extends Autenticated {
  header:Header;

  constructor(
    auth: AuthService,
    private bus: BusHeaderService,
    private sincro: SincroService
  ) {
    super(auth);
    this.header = sincro.Header;
  }

  public editThis() {
    this.bus.editHeader(this.header);
    this.bus.editSocial(this.sincro.SocialMedia);
    console.log(this.sincro.SocialMedia);
    
  }
}
