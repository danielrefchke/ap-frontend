import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-item-tipo-editor',
  templateUrl: './item-tipo-editor.component.html',
  styleUrls: ['./item-tipo-editor.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ItemTipoEditorComponent),
      multi: true,
    },
  ],
})
export class ItemTipoEditorComponent implements ControlValueAccessor, OnInit {
  tipo: string;
  @Input() formGroup?: FormGroup;
  @ViewChild('itemeditortab', { static: false }) staticTabs;
  activeTab = '';

  public onChange: any = (_: any) => {};
  public onTouch: any = () => {};

  constructor() {
    this.tipo = '';
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  cambiarTipo(t: string) {
    this.tipo = t;
    this.onTouch();
    this.onChange(t);
  }

  incializar() {
    console.log('inicializa');
  }

  writeValue(obj: any): void {
    this.tipo = obj;
    this.onChange(obj);
    this.activeTab = obj;
    //this.activeId = obj;
    /*let pos = 0;
    switch (obj) {
      case 'element-img':
        this.activeTab = 1;
        break;

      case 'element-grap':
        this.activeTab = 2;
        break;

      case 'element-languaje':
        this.activeTab = 3;
        break;

      default:
        break;
    }
    */
  }

  isActive(t:string):boolean{
    return this.activeTab == t;
  }

  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }
}
