import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FootbarComponent,
    SeccionesComponent,
    LoginComponent,
    ItemComponent,
    ItemEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundColor: '#e2cfb8',
      backgroundStrokeWidth: 0,
      backgroundPadding: 8,
      radius: 70,
      space: -1,
      maxPercent: 100,
      units: '',
      unitsColor: '#483500',
      outerStrokeWidth: 25,
      outerStrokeColor: '#312b1f',
      innerStrokeColor: '#312b1f',
      innerStrokeWidth: 13,
      titleColor: '#483500',
      titleFontSize: '45',
      subtitleColor: '#483500',
      animation: false,
      animateTitle: false,
      showTitle:false,
      showSubtitle: false,
      showUnits:false,
      showInnerStroke: false,
      title: '',
      subtitle: '',
      responsive:true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
