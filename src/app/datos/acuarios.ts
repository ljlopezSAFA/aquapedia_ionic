import { ESPECIES } from './especies';
import {Acuario} from "../modelos/acuario";

// Datos de maqueta: en la entrega 2 vendrán de GET /api/v1/acuarios
export const ACUARIOS: Acuario[] = [
  {
    id: 1, nombre: 'Comunitario del salón', litros: 120, medidas: '80×35×45 cm', agua: 'DULCE',
    desde: 'marzo de 2024', foto: 'assets/fotos/acuario-1.jpg',
    avisos: ['La corydora panda necesita grupos de al menos 6.', 'Los nitritos están por encima de 0.'],
    habitantes: [
      { especie: ESPECIES[0], cantidad: '×10' },
      { especie: ESPECIES[1], cantidad: '×1' },
      { especie: ESPECIES[2], cantidad: '×4' },
      { especie: ESPECIES[5], cantidad: '3 plantas' },
    ],
    mediciones: [
      { fecha: '28 sep, 19:30', temperatura: 25.5, ph: 6.8, nitritos: 0.25 },
      { fecha: '21 sep, 19:10', temperatura: 25.0, ph: 6.9, nitritos: 0 },
      { fecha: '14 sep, 18:45', temperatura: 24.8, ph: 7.0, nitritos: 0 },
    ],
    tareas: [
      { titulo: 'Limpiar el filtro', cuando: 'Hace 3 días', estado: 'ATRASADA' },
      { titulo: 'Cambio de agua del 25 %', cuando: 'Hoy', estado: 'HOY' },
      { titulo: 'Abonar las plantas', cuando: 'En 5 días', estado: 'PENDIENTE' },
    ],
  },
  {
    id: 2, nombre: 'Nano de gambas', litros: 30, medidas: '35×30×30 cm', agua: 'DULCE',
    desde: 'junio de 2025', foto: 'assets/fotos/acuario-2.jpg',
    avisos: [],
    habitantes: [
      { especie: ESPECIES[6], cantidad: '×20' },
      { especie: ESPECIES[5], cantidad: 'Un tapizado' },
    ],
    mediciones: [{ fecha: '26 sep, 20:00', temperatura: 23, ph: 7.2, nitritos: 0 }],
    tareas: [{ titulo: 'Cambio de agua del 10 %', cuando: 'En 2 días', estado: 'PENDIENTE' }],
  },
];
