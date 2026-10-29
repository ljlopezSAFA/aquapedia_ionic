export type CategoriaEquipo =
  'FILTRO' | 'CALENTADOR' | 'ILUMINACION' | 'ACONDICIONADOR' | 'CO2' |
  'ABONO' | 'SUSTRATO' | 'TEST' | 'AIREACION' | 'MANTENIMIENTO';

export type NivelEquipo = 'BASICO' | 'INTERMEDIO' | 'AVANZADO';

export interface Caracteristica {
  etiqueta: string;
  valor: string;
}

export interface Equipo {
  id: number;
  nombre: string;
  categoria: CategoriaEquipo;
  nivel: NivelEquipo;
  imprescindible: boolean;      // para montar un primer acuario
  litrosMin?: number;           // para qué acuarios sirve (si aplica)
  litrosMax?: number;
  precio: string;               // orientativo
  resumen: string;              // una línea
  descripcion: string;
  caracteristicas: Caracteristica[];
  ventajas: string[];
  inconvenientes: string[];
  consejo?: string;
}
