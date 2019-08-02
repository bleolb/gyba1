import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormPonenteComponent } from './components/form-ponente/form-ponente.component';
import { PonenciasComponent } from './components/ponencias/ponencias.component';
import { FormAsistenteComponent } from './components/form-asistente/form-asistente.component';
import { InformacionComponent } from './components/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FormPonenteComponent,
    PonenciasComponent,
    FormAsistenteComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
