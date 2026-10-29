
// Tabla de compatibilidades del equipo editorial (maqueta).
// Las parejas que no aparecen se consideran "sin datos".
import {Compatibilidad} from "../modelos/especie";

export const COMPATIBILIDADES: Compatibilidad[] = [
  { idA: 1, idB: 2, estado: 'PRECAUCION', motivo: 'El betta puede acosar a los neones.' },
  { idA: 1, idB: 3, estado: 'IDEAL', motivo: 'Ocupan zonas distintas y comparten parámetros.' },
  { idA: 1, idB: 4, estado: 'INCOMPATIBLE', motivo: 'El pez ángel adulto se come a los neones.' },
  { idA: 1, idB: 9, estado: 'IDEAL', motivo: 'Ambos prefieren aguas blandas y no compiten por espacio.' },
  { idA: 1, idB: 11, estado: 'IDEAL', motivo: 'Dos cardúmenes pacíficos que se complementan.' },
  { idA: 1, idB: 13, estado: 'PRECAUCION', motivo: 'El barbo tigre es muy activo y estresa a los neones.' },
  { idA: 2, idB: 5, estado: 'INCOMPATIBLE', motivo: 'El betta ataca a los peces de aletas largas como el guppy.' },
  { idA: 2, idB: 7, estado: 'INCOMPATIBLE', motivo: 'El betta caza las gambas pequeñas.' },
  { idA: 2, idB: 13, estado: 'INCOMPATIBLE', motivo: 'El barbo tigre muerde las aletas del betta.' },
  { idA: 2, idB: 22, estado: 'PRECAUCION', motivo: 'Las amano son grandes, pero el betta puede acosarlas.' },
  { idA: 3, idB: 7, estado: 'IDEAL', motivo: 'Convivencia pacífica en el fondo.' },
  { idA: 3, idB: 25, estado: 'PRECAUCION', motivo: 'El cangrejo puede pellizcar a las corydoras.' },
  { idA: 4, idB: 5, estado: 'PRECAUCION', motivo: 'El pez ángel puede comerse guppys pequeños y crías.' },
  { idA: 4, idB: 7, estado: 'INCOMPATIBLE', motivo: 'El pez ángel se come las gambas pequeñas.' },
  { idA: 4, idB: 13, estado: 'INCOMPATIBLE', motivo: 'El barbo tigre muerde las aletas largas del pez ángel.' },
  { idA: 5, idB: 13, estado: 'INCOMPATIBLE', motivo: 'El barbo tigre muerde la cola del guppy.' },
  { idA: 7, idB: 9, estado: 'PRECAUCION', motivo: 'El ramirezi puede comerse las crías de gamba.' },
  { idA: 7, idB: 10, estado: 'IDEAL', motivo: 'Comparten la limpieza de algas sin molestarse.' },
  { idA: 7, idB: 15, estado: 'PRECAUCION', motivo: 'La botia puede comerse las gambas pequeñas.' },
  { idA: 7, idB: 25, estado: 'PRECAUCION', motivo: 'El cangrejo puede cazar gambas recién mudadas.' },
  { idA: 8, idB: 26, estado: 'IDEAL', motivo: 'Pareja clásica de los acuarios de arrecife.' },
  { idA: 13, idB: 14, estado: 'INCOMPATIBLE', motivo: 'El barbo tigre estresa y muerde al pez disco.' },
  { idA: 15, idB: 23, estado: 'INCOMPATIBLE', motivo: 'La botia caza caracoles.' },
  { idA: 15, idB: 24, estado: 'INCOMPATIBLE', motivo: 'La botia caza caracoles.' },
];

/** Devuelve la compatibilidad entre dos especies (en cualquier orden) o undefined si no hay datos. */
export function buscarCompatibilidad(idA: number, idB: number): Compatibilidad | undefined {
  return COMPATIBILIDADES.find(c =>
    (c.idA === idA && c.idB === idB) || (c.idA === idB && c.idB === idA));
}
