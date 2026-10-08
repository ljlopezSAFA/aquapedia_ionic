import { Especie } from './especie';

export interface Habitante {
  especie: Especie;
  cantidad: string;            // "×10", "3 plantas"… (texto libre en la maqueta)
}

export interface Medicion {
  fecha: string;
  temperatura: number;
  ph: number;
  nitritos: number;
}

export interface Tarea {
  titulo: string;
  cuando: string;
  estado: 'HOY' | 'ATRASADA' | 'PENDIENTE';
}

export interface Acuario {
  id: number;
  nombre: string;
  litros: number;
  medidas: string;
  agua: 'DULCE' | 'SALOBRE' | 'MARINA';
  desde: string;
  foto: string;
  avisos: string[];
  habitantes: Habitante[];
  mediciones: Medicion[];      // la más reciente, la primera
  tareas: Tarea[];
}
