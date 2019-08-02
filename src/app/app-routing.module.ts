import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormPonenteComponent } from './components/form-ponente/form-ponente.component';
import { PonenciasComponent } from './components/ponencias/ponencias.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormAsistenteComponent } from './components/form-asistente/form-asistente.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'form-ponente', component:FormPonenteComponent},
  {path: 'ponencias', component:PonenciasComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'form-asistente', component:FormAsistenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
