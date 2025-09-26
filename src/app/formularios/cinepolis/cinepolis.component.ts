import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
    nombre: string = '';
    cantidadCompradores: string ='';
    cantidadBoletos: string = '';
    Tarjeta: string = 'no'; // valores: 'si' o 'no'
    valorPagar: number = 0;
    mensaje: string = '';
    maximoBoletos:number=0;

  calculo(): void {
    const precioBoleto = 12.00;
    let totalBoletos = parseInt(this.cantidadBoletos);
     this.maximoBoletos =parseInt(this.cantidadCompradores)* 7;

    // Validar cantidad
    if (totalBoletos > this.maximoBoletos) {
      this.mensaje = `No puedes comprar más de ${this.maximoBoletos} boletos en total por persona.`;
      this.valorPagar = 0;
      return;
    }

    let total=precioBoleto*totalBoletos

    if (totalBoletos > 5) {
      total *= 0.85; // 15% descuento
    } else if (totalBoletos >= 3 && totalBoletos <= 5) {
      total *= 0.90; // 10% descuento
    }
      if (this.Tarjeta === 'si') {
      total *= 0.90; // 10% adicional
      this.mensaje = `El cliente ${this.nombre} esta pagando con tarjeta CINECO Y debe pagar:`;
    }else{
      this.mensaje = `El cliente ${this.nombre} debe pagar:`;
    }


    this.valorPagar = total;
    
  }
  
   limpiar(): void {
    this.nombre = '';
    this.cantidadCompradores ='';
    this.cantidadBoletos= '';
    this.Tarjeta = 'no';
    this.valorPagar = 0;
    this.mensaje = '';
  }
 
}

