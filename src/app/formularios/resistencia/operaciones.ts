export class ResistenciaOperaciones
{
  colores = ["Negro","Cafe","Rojo","Naranja","Amarillo","Verde","Azul","Morado","Gris","Blanco"];

  multiplicadores = [
    { valor: 1, color: "Negro" },
    { valor: 10, color: "Cafe" },
    { valor: 100, color: "Rojo" },
    { valor: 1000, color: "Naranja" },
    { valor: 10000, color: "Amarillo" },
    { valor: 100000, color: "Verde" },
    { valor: 1000000, color: "Azul" },
    { valor: 10000000, color: "Morado" },
    { valor: 100000000, color: "Gris" },
    { valor: 1000000000, color: "Blanco" }
  ];

  calcular(b1: number, b2: number, b3: number, tol: number) {
    const base = Number(`${b1}${b2}`);
    const valor = base * b3;
    const valorMax = valor + (valor * tol / 100);
    const valorMin = valor - (valor * tol / 100);

    const color1 = this.colores[b1];
    const color2 = this.colores[b2];
    const mult = this.multiplicadores.find(m => m.valor === b3);
    const color3 = mult ? mult.color : '';

    const colorTol = tol == 5 ? "Dorado 5%" : "Plata 10%";

    return { valor, valorMax, valorMin, color1, color2, color3, colorTol };
  }
}