import { Component } from '@angular/core';
import { ResistenciaOperaciones } from './operaciones';

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  // Valores que utilizo de las bandas
  banda1: number = 0;
  banda2: number = 0;
  banda3: number = 1; // multiplicador
  tolerancia: number = 5;

  // variables para los resultados
  color1: string = '';
  color2: string = '';
  color3: string = '';
  colorTol: string = '';
  valor: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;


  operaciones = new ResistenciaOperaciones();
  
//mandar los valores al otro ts
      calculo() {
    const resultado = this.operaciones.calcular(this.banda1, this.banda2, this.banda3, this.tolerancia);

    // Asignacion de resultados
    this.valor = resultado.valor;
    this.valorMax = resultado.valorMax;
    this.valorMin = resultado.valorMin;
    this.color1 = resultado.color1;
    this.color2 = resultado.color2;
    this.color3 = resultado.color3;
    this.colorTol = resultado.colorTol;
  }
}
