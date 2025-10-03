import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResistenciaComponent } from './formularios/resistencia/resistencia.component';
import { DistanciaComponent } from './formularios/distancia/distancia.component'; 

//es un decorador que permite hacer las declaraciones de los modulos que usaremos
@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFilterPipe,
    OperasBasComponent,
    CinepolisComponent,
    ResistenciaComponent,
    DistanciaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
    //para trabajar con formularios de template
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
