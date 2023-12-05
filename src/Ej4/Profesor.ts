import { Persona } from "./Persona";

export class Profesor extends Persona {
  private materia: string = "";

  constructor(nombre: string, edad: number, sexo: string, materia: string) {
    super(nombre, edad, sexo);
    this.materia = materia;
  }

  getMateria(): string {
    return this.materia;
  }

  setMateria(materia: string): void {
    this.materia = materia;
  }

  asistencia(): boolean {
    // Simulación de asistencia para profesor
    const random: number = Math.floor(Math.random() * 5) + 1;
    return random !== 1;
  }
}
