import { PacienteService } from './modules/components/paciente/service/paciente.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';
import { CabecarioComponent } from './modules/components/cabecario/cabecario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdicionarComponent } from './modules/components/paciente/components/adicionar/adicionar.component';
import { EditarComponent } from './modules/components/paciente/components/editar/editar.component';
import { ViasualizarComponent } from './modules/components/paciente/components/viasualizar/viasualizar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CabecarioComponent,
    AdicionarComponent,
    EditarComponent,
    ViasualizarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
