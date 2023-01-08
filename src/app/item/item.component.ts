import { Component,Input, OnInit } from '@angular/core';
import { Autenticated } from '../autenticated';
import { AuthService } from '../auth.service';
import { BusItemService } from '../bus-item.service';
import { Elemento } from '../elemento';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent extends Autenticated  {
  @Input() elementos: any[];

  constructor(auth: AuthService,private bus:BusItemService) {
    super(auth);
  }

  public editThis(e: Elemento) {
    this.bus.editThis(e);
  }
}
