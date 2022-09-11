import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropositoComponent } from './proposito/proposito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';
import { GeriavidaComponent } from './geriavida/geriavida.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ProtocolosComponent } from './protocolos/protocolos.component';
import { VisitasComponent } from './visitas/visitas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'proposito', component:PropositoComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'geriavida', component:GeriavidaComponent},
  {path: 'seguridad', component:SeguridadComponent},
  {path: 'protocolos', component:ProtocolosComponent},
  {path: 'visitas', component:VisitasComponent},
  {path: 'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
