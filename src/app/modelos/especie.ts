export interface Rango {
  min: number;
  max: number;
}

export interface Especie {
  id: number;
  nombreComun: string;
  nombreCientifico: string;
  familia: string;
  tipo: 'PEZ' | 'PLANTA' | 'INVERTEBRADO';
  agua: 'DULCE' | 'SALOBRE' | 'MARINA';
  dificultad: 'FACIL' | 'MEDIA' | 'DIFICIL';
  temperatura: Rango;
  ph: Rango;
  gh: Rango;
  tamanoCm?: number;          // las plantas no tienen
  cardumen?: boolean;
  foto: string;
  descripcion: string;
  favorita: boolean;
}
