import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IconPickerComponent } from '../icon-picker/icon-picker.component';

@Component({
  selector: 'app-graph-item-editor',
  templateUrl: './graph-item-editor.component.html',
  styleUrls: ['./graph-item-editor.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GraphItemEditorComponent),
      multi: true,
    },
  ],
})
export class GraphItemEditorComponent implements ControlValueAccessor {
  
  public onChange: any = (_: any) => {};
  public onTouch: any = () => {};

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
