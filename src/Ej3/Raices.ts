export class Raices {
  private a: number = 0;
  private b: number = 0;
  private c: number = 0;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getDiscriminante(): number {
    return Math.pow(this.b, 2) - 4 * this.a * this.c;
  }

  tieneRaices(): boolean {
    return this.getDiscriminante() >= 0;
  }

  tieneRaiz(): boolean {
    return this.getDiscriminante() === 0;
  }

  calcular(): void {
    if (this.tieneRaices()) {
      this.obtenerRaices();
    } else if (this.tieneRaiz()) {
      this.obtenerRaiz();
    } else {
      console.log("No tiene solución");
    }
  }

  private obtenerRaices(): void {
    const raiz1 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
    const raiz2 = (-this.b - Math.sqrt(this.getDiscriminante())) / (2 * this.a);
    console.log(`Raíz 1: ${raiz1}, Raíz 2: ${raiz2}`);
  }

  private obtenerRaiz(): void {
    const raiz = -this.b / (2 * this.a);
    console.log(`Raíz única: ${raiz}`);
  }
}
