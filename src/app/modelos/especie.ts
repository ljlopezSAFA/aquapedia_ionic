export type TipoEspecie = 'PEZ' | 'PLANTA' | 'INVERTEBRADO';
export type TipoAgua = 'DULCE' | 'SALOBRE' | 'MARINA';
export type Dificultad = 'FACIL' | 'MEDIA' | 'DIFICIL';

// Solo peces (y algún invertebrado)
export type Comportamiento = 'PACIFICO' | 'SEMIAGRESIVO' | 'TERRITORIAL' | 'AGRESIVO';
export type ZonaNado = 'SUPERFICIE' | 'MEDIA' | 'FONDO';
export type Dieta = 'OMNIVORO' | 'CARNIVORO' | 'HERBIVORO';

// Solo plantas
export type TipoPlanta = 'TALLO' | 'ROSETA' | 'RIZOMA' | 'MUSGO' | 'TAPIZANTE' | 'FLOTANTE';
export type ZonaPlantado = 'PRIMER_PLANO' | 'MEDIO' | 'FONDO' | 'EPIFITA' | 'SUPERFICIE';
export type Luz = 'BAJA' | 'MEDIA' | 'ALTA';
export type Crecimiento = 'LENTO' | 'MEDIO' | 'RAPIDO';

// Solo invertebrados
export type GrupoInvertebrado = 'GAMBA' | 'CARACOL' | 'CANGREJO';

export interface Rango {
  min: number;
  max: number;
}

export interface Especie {
  // ── Comunes a todas ────────────────────────────────
  id: number;
  nombreComun: string;
  nombreCientifico: string;
  familia: string;
  tipo: TipoEspecie;
  agua: TipoAgua;
  dificultad: Dificultad;
  temperatura: Rango;
  ph: Rango;
  gh: Rango;
  origen?: string;
  foto: string;
  descripcion: string;
  favorita: boolean;

  // ── Peces e invertebrados ──────────────────────────
  tamanoCm?: number;            // tamaño adulto (para la regla de 1 cm por litro)
  volumenMinimoL?: number;      // litros mínimos del acuario
  cardumen?: boolean;           // ¿vive en grupo?
  grupoMinimo?: number;         // cuántos como mínimo
  comportamiento?: Comportamiento;
  zonaNado?: ZonaNado;
  dieta?: Dieta;

  // ── Plantas ─────────────────────────────────────────
  tipoPlanta?: TipoPlanta;
  zonaPlantado?: ZonaPlantado;
  luz?: Luz;
  necesitaCo2?: boolean;
  crecimiento?: Crecimiento;

  // ── Invertebrados ──────────────────────────────────
  grupoInvertebrado?: GrupoInvertebrado;
  sensibleCobre?: boolean;      // los medicamentos con cobre los matan
  comeAlgas?: boolean;
}

// Compatibilidad entre dos especies. Es simétrica: (A, B) es lo mismo que (B, A) y se guarda una vez.
export interface Compatibilidad {
  idA: number;
  idB: number;
  estado: 'IDEAL' | 'PRECAUCION' | 'INCOMPATIBLE';
  motivo: string;
}
