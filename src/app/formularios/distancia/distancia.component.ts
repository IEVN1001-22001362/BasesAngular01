import { Component } from '@angular/core';
import { DistanciaOperaciones } from './operaciones';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  //valores para la distancia 
  x1: string='';
  y1: string='';
  x2:string='';
  y2:string='';

  //variables para los resultados
  distanciaTot: number=0;

   operaciones = new DistanciaOperaciones();
  //mandar los valores al otro ts
      calculo() {
    const resultado = this.operaciones.calcular(this.x1, this.y1, this.x2, this.y2);
      
         // Asignacion de resultados
    this.distanciaTot = resultado.distanciaTot;
    }
}
