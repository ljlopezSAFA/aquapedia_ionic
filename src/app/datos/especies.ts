

// Datos de maqueta: en la entrega 2 vendrán de GET /api/v1/especies
import {Especie} from "../modelos/especie";

export const ESPECIES: Especie[] = [
  {
    id: 1, nombreComun: 'Tetra neón', nombreCientifico: 'Paracheirodon innesi', familia: 'Characidae',
    tipo: 'PEZ', agua: 'DULCE', dificultad: 'FACIL',
    temperatura: { min: 20, max: 26 }, ph: { min: 5, max: 7 }, gh: { min: 1, max: 10 },
    tamanoCm: 3.5, cardumen: true, favorita: true, foto: 'assets/fotos/neon.jpg',
    descripcion: 'Pequeño y pacífico, con una franja azul brillante. Vive en grupos de al menos seis.',
  },
  {
    id: 2, nombreComun: 'Luchador de Siam', nombreCientifico: 'Betta splendens', familia: 'Osphronemidae',
    tipo: 'PEZ', agua: 'DULCE', dificultad: 'MEDIA',
    temperatura: { min: 24, max: 28 }, ph: { min: 6, max: 7.5 }, gh: { min: 5, max: 19 },
    tamanoCm: 6.5, cardumen: false, favorita: false, foto: 'assets/fotos/betta.jpg',
    descripcion: 'Aletas espectaculares. Los machos no pueden convivir entre sí.',
  },
  {
    id: 3, nombreComun: 'Corydora panda', nombreCientifico: 'Corydoras panda', familia: 'Callichthyidae',
    tipo: 'PEZ', agua: 'DULCE', dificultad: 'MEDIA',
    temperatura: { min: 20, max: 25 }, ph: { min: 6, max: 7.5 }, gh: { min: 2, max: 12 },
    tamanoCm: 5, cardumen: true, favorita: false, foto: 'assets/fotos/corydora.jpg',
    descripcion: 'Limpiador de fondo muy sociable. Necesita arena fina para no dañarse los bigotes.',
  },
  {
    id: 4, nombreComun: 'Pez ángel', nombreCientifico: 'Pterophyllum scalare', familia: 'Cichlidae',
    tipo: 'PEZ', agua: 'DULCE', dificultad: 'MEDIA',
    temperatura: { min: 24, max: 30 }, ph: { min: 6, max: 7.5 }, gh: { min: 3, max: 15 },
    tamanoCm: 15, cardumen: false, favorita: false, foto: 'assets/fotos/escalar.jpg',
    descripcion: 'Elegante y tranquilo. Necesita un acuario alto por la forma de sus aletas.',
  },
  {
    id: 5, nombreComun: 'Guppy', nombreCientifico: 'Poecilia reticulata', familia: 'Poeciliidae',
    tipo: 'PEZ', agua: 'DULCE', dificultad: 'FACIL',
    temperatura: { min: 22, max: 28 }, ph: { min: 7, max: 8 }, gh: { min: 8, max: 20 },
    tamanoCm: 4, cardumen: false, favorita: true, foto: 'assets/fotos/guppy.jpg',
    descripcion: 'Muy colorido y fácil de mantener. Ideal para empezar.',
  },
  {
    id: 6, nombreComun: 'Anubias', nombreCientifico: 'Anubias barteri', familia: 'Araceae',
    tipo: 'PLANTA', agua: 'DULCE', dificultad: 'FACIL',
    temperatura: { min: 22, max: 28 }, ph: { min: 6, max: 7.5 }, gh: { min: 3, max: 15 },
    favorita: false, foto: 'assets/fotos/anubias.jpg',
    descripcion: 'Planta muy resistente que crece atada a rocas o troncos. Necesita poca luz.',
  },
  {
    id: 7, nombreComun: 'Gamba cherry', nombreCientifico: 'Neocaridina davidi', familia: 'Atyidae',
    tipo: 'INVERTEBRADO', agua: 'DULCE', dificultad: 'FACIL',
    temperatura: { min: 18, max: 28 }, ph: { min: 6.5, max: 8 }, gh: { min: 6, max: 15 },
    tamanoCm: 3, favorita: false, foto: 'assets/fotos/cherry.jpg',
    descripcion: 'Gamba roja muy activa. Es muy sensible al cobre de algunos medicamentos.',
  },
  {
    id: 8, nombreComun: 'Pez payaso', nombreCientifico: 'Amphiprion ocellaris', familia: 'Pomacentridae',
    tipo: 'PEZ', agua: 'MARINA', dificultad: 'MEDIA',
    temperatura: { min: 24, max: 27 }, ph: { min: 8, max: 8.4 }, gh: { min: 8, max: 12 },
    tamanoCm: 8, cardumen: false, favorita: false, foto: 'assets/fotos/payaso.jpg',
    descripcion: 'El pez de arrecife más conocido. Necesita un acuario marino.',
  },
];
