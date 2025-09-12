import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mariana Jatziri';
  duplicarNumero(valor:number): number{
    return valor*2;
  }
  pelicula={
    titulo:"Yo antes de ti",
    anio:2014,
    genero:"Romance"
  }
}
