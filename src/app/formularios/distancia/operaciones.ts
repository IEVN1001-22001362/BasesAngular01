export class DistanciaOperaciones
{

  calcular(nx1: string, ny1: string, nx2: string, ny2: string){
    const x1 = parseInt(nx1);
    const y1 = parseInt(ny1);
    const x2 = parseInt(nx2);
    const y2 = parseInt(ny2);

    const distancia =(((x2-x1)**2)+((y2-y1)**2));
    const distanciaTot= Math.sqrt(distancia);

      return {distanciaTot};

  }
}