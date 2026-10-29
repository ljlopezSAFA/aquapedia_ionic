

// Textos, iconos y colores de cada valor técnico. Se usan en filtros, chips y fichas.

import {Opcion} from "../modelos/opcion";

export const OP_TIPO: Opcion[] = [
  { valor: 'PEZ', texto: 'Peces', icono: 'fish-outline' },
  { valor: 'PLANTA', texto: 'Plantas', icono: 'leaf-outline' },
  { valor: 'INVERTEBRADO', texto: 'Invertebrados', icono: 'bug-outline' },
];

export const OP_AGUA: Opcion[] = [
  { valor: 'DULCE', texto: 'Dulce' },
  { valor: 'SALOBRE', texto: 'Salobre' },
  { valor: 'MARINA', texto: 'Marina' },
];

export const OP_DIFICULTAD: Opcion[] = [
  { valor: 'FACIL', texto: 'Fácil', color: 'success' },
  { valor: 'MEDIA', texto: 'Media', color: 'warning' },
  { valor: 'DIFICIL', texto: 'Difícil', color: 'danger' },
];

export const OP_COMPORTAMIENTO: Opcion[] = [
  { valor: 'PACIFICO', texto: 'Pacífico', icono: 'happy-outline' },
  { valor: 'SEMIAGRESIVO', texto: 'Semiagresivo', icono: 'alert-circle-outline' },
  { valor: 'TERRITORIAL', texto: 'Territorial', icono: 'shield-outline' },
  { valor: 'AGRESIVO', texto: 'Agresivo', icono: 'flash-outline' },
];

export const OP_ZONA_NADO: Opcion[] = [
  { valor: 'SUPERFICIE', texto: 'Superficie', icono: 'arrow-up-outline' },
  { valor: 'MEDIA', texto: 'Zona media', icono: 'remove-outline' },
  { valor: 'FONDO', texto: 'Fondo', icono: 'arrow-down-outline' },
];

export const OP_DIETA: Opcion[] = [
  { valor: 'OMNIVORO', texto: 'Omnívoro' },
  { valor: 'CARNIVORO', texto: 'Carnívoro' },
  { valor: 'HERBIVORO', texto: 'Herbívoro' },
];

export const OP_TIPO_PLANTA: Opcion[] = [
  { valor: 'TALLO', texto: 'De tallo' },
  { valor: 'ROSETA', texto: 'Roseta' },
  { valor: 'RIZOMA', texto: 'Rizoma' },
  { valor: 'MUSGO', texto: 'Musgo' },
  { valor: 'TAPIZANTE', texto: 'Tapizante' },
  { valor: 'FLOTANTE', texto: 'Flotante' },
];

export const OP_ZONA_PLANTADO: Opcion[] = [
  { valor: 'PRIMER_PLANO', texto: 'Primer plano' },
  { valor: 'MEDIO', texto: 'Plano medio' },
  { valor: 'FONDO', texto: 'Fondo' },
  { valor: 'EPIFITA', texto: 'Epífita (sobre roca o tronco)' },
  { valor: 'SUPERFICIE', texto: 'Superficie' },
];

export const OP_LUZ: Opcion[] = [
  { valor: 'BAJA', texto: 'Luz baja', icono: 'sunny-outline' },
  { valor: 'MEDIA', texto: 'Luz media', icono: 'sunny-outline' },
  { valor: 'ALTA', texto: 'Luz alta', icono: 'sunny' },
];

export const OP_CRECIMIENTO: Opcion[] = [
  { valor: 'LENTO', texto: 'Lento' },
  { valor: 'MEDIO', texto: 'Medio' },
  { valor: 'RAPIDO', texto: 'Rápido' },
];

export const OP_GRUPO_INVERTEBRADO: Opcion[] = [
  { valor: 'GAMBA', texto: 'Gambas' },
  { valor: 'CARACOL', texto: 'Caracoles' },
  { valor: 'CANGREJO', texto: 'Cangrejos' },
];

export const OP_CATEGORIA_EQUIPO: Opcion[] = [
  { valor: 'FILTRO', texto: 'Filtros', icono: 'filter-outline' },
  { valor: 'CALENTADOR', texto: 'Calefacción', icono: 'flame-outline' },
  { valor: 'ILUMINACION', texto: 'Iluminación', icono: 'bulb-outline' },
  { valor: 'ACONDICIONADOR', texto: 'Acondicionadores', icono: 'flask-outline' },
  { valor: 'CO2', texto: 'CO₂', icono: 'cloud-outline' },
  { valor: 'ABONO', texto: 'Abonos', icono: 'leaf-outline' },
  { valor: 'SUSTRATO', texto: 'Sustratos', icono: 'layers-outline' },
  { valor: 'TEST', texto: 'Tests de agua', icono: 'beaker-outline' },
  { valor: 'AIREACION', texto: 'Aireación', icono: 'ellipse-outline' },
  { valor: 'MANTENIMIENTO', texto: 'Mantenimiento', icono: 'brush-outline' },
];

export const OP_NIVEL_EQUIPO: Opcion[] = [
  { valor: 'BASICO', texto: 'Básico', color: 'success' },
  { valor: 'INTERMEDIO', texto: 'Intermedio', color: 'warning' },
  { valor: 'AVANZADO', texto: 'Avanzado', color: 'danger' },
];

/** Busca la opción de un valor. Si no existe, devuelve una opción con el propio valor como texto. */
export function opcionDe(opciones: Opcion[], valor: string | undefined): Opcion {
  return opciones.find(o => o.valor === valor) ?? { valor: valor ?? '', texto: valor ?? '—' };
}

/** Atajo: solo el texto. */
export function textoDe(opciones: Opcion[], valor: string | undefined): string {
  return valor === undefined ? '—' : opcionDe(opciones, valor).texto;
}
