

// Datos de maqueta: tipos de equipo con información orientativa (no son productos concretos).
import {Equipo} from "../modelos/equipo";

export const EQUIPOS: Equipo[] = [
  // ═════════════════════════════ FILTROS ═══════════════════════════
  {
    id: 1, nombre: 'Filtro de mochila', categoria: 'FILTRO', nivel: 'BASICO', imprescindible: true,
    litrosMin: 20, litrosMax: 200, precio: '20–60 €',
    resumen: 'Se cuelga del borde trasero. Fácil de instalar y de limpiar.',
    descripcion: 'Aspira el agua con un tubo, la pasa por las esponjas y la devuelve en cascada. Es el filtro más habitual en acuarios pequeños y medianos.',
    caracteristicas: [
      { etiqueta: 'Caudal recomendado', valor: '4–5 veces el volumen por hora' },
      { etiqueta: 'Ubicación', valor: 'Exterior, colgado del cristal' },
      { etiqueta: 'Material filtrante', valor: 'Esponja, cerámica o cartucho' },
    ],
    ventajas: ['Muy fácil de mantener', 'No ocupa espacio dentro del acuario', 'Oxigena al caer el agua'],
    inconvenientes: ['Poco volumen de material filtrante', 'Suena si baja el nivel del agua', 'Necesita hueco en la tapa'],
    consejo: 'Cambia los cartuchos de carbón por más esponja o cerámica: ahí viven las bacterias que limpian el agua.',
  },
  {
    id: 2, nombre: 'Filtro externo (canister)', categoria: 'FILTRO', nivel: 'INTERMEDIO', imprescindible: false,
    litrosMin: 60, litrosMax: 600, precio: '70–250 €',
    resumen: 'Bote bajo el mueble con mucha capacidad de filtración. Silencioso.',
    descripcion: 'Un recipiente cerrado bajo el acuario con varias cestas de material filtrante. El agua llega y vuelve por mangueras.',
    caracteristicas: [
      { etiqueta: 'Caudal recomendado', valor: '3–5 veces el volumen por hora' },
      { etiqueta: 'Ubicación', valor: 'Mueble inferior, con mangueras' },
      { etiqueta: 'Material filtrante', valor: 'Varias cestas: mecánico, biológico y químico' },
    ],
    ventajas: ['Gran capacidad biológica', 'Muy silencioso', 'No se ve dentro del acuario'],
    inconvenientes: ['Más caro', 'Mantenimiento más laborioso', 'Riesgo de fugas si las conexiones se montan mal'],
    consejo: 'Limpia las esponjas con agua del propio acuario, nunca con agua del grifo: el cloro mata las bacterias.',
  },
  {
    id: 3, nombre: 'Filtro de esponja', categoria: 'FILTRO', nivel: 'BASICO', imprescindible: false,
    litrosMin: 10, litrosMax: 100, precio: '5–15 €',
    resumen: 'Una esponja movida por una bomba de aire. Ideal para gambas y alevines.',
    descripcion: 'Las burbujas suben por un tubo y arrastran el agua a través de la esponja, donde crecen las bacterias.',
    caracteristicas: [
      { etiqueta: 'Funciona con', valor: 'Bomba de aire' },
      { etiqueta: 'Ubicación', valor: 'Dentro del acuario' },
      { etiqueta: 'Corriente', valor: 'Muy suave' },
    ],
    ventajas: ['Muy barato', 'No aspira gambas ni crías', 'Mucha superficie para las bacterias'],
    inconvenientes: ['Poco estético', 'Ocupa espacio dentro', 'Necesita una bomba de aire'],
    consejo: 'En acuarios de gambas es la opción más segura.',
  },
  {
    id: 4, nombre: 'Filtro interno', categoria: 'FILTRO', nivel: 'BASICO', imprescindible: false,
    litrosMin: 20, litrosMax: 150, precio: '15–40 €',
    resumen: 'Bomba con esponja sumergida que se pega al cristal con ventosas.',
    descripcion: 'Todo el filtro va dentro del agua. Suele incluir una salida orientable para mover el agua.',
    caracteristicas: [
      { etiqueta: 'Caudal recomendado', valor: '4–5 veces el volumen por hora' },
      { etiqueta: 'Ubicación', valor: 'Dentro, con ventosas' },
    ],
    ventajas: ['Fácil de instalar', 'Silencioso', 'Económico'],
    inconvenientes: ['Ocupa espacio y se ve', 'Poca capacidad de material filtrante'],
  },

  // ═════════════════════════════ CALEFACCIÓN ═══════════════════════
  {
    id: 5, nombre: 'Calentador sumergible', categoria: 'CALENTADOR', nivel: 'BASICO', imprescindible: true,
    litrosMin: 20, litrosMax: 300, precio: '15–40 €',
    resumen: 'Resistencia con termostato que mantiene la temperatura.',
    descripcion: 'Un tubo con una resistencia y un termostato que se enciende y se apaga solo para mantener la temperatura elegida.',
    caracteristicas: [
      { etiqueta: 'Potencia orientativa', valor: '≈ 1 W por litro' },
      { etiqueta: 'Rango habitual', valor: '18–34 °C' },
      { etiqueta: 'Termostato', valor: 'Integrado, con rueda' },
    ],
    ventajas: ['Barato', 'Fácil de instalar'],
    inconvenientes: ['Los termostatos baratos son poco precisos', 'Puede romperse si se saca del agua encendido'],
    consejo: 'Desenchúfalo 15 minutos antes de sacarlo del agua y comprueba la temperatura con un termómetro aparte.',
  },
  {
    id: 6, nombre: 'Calentador en línea', categoria: 'CALENTADOR', nivel: 'AVANZADO', imprescindible: false,
    litrosMin: 100, litrosMax: 600, precio: '40–90 €',
    resumen: 'Se conecta a la manguera del filtro externo y no se ve dentro.',
    descripcion: 'El agua pasa por él al volver del filtro externo. El calor se reparte muy bien por todo el acuario.',
    caracteristicas: [
      { etiqueta: 'Requiere', valor: 'Filtro externo' },
      { etiqueta: 'Potencia orientativa', valor: '≈ 1 W por litro' },
    ],
    ventajas: ['Invisible', 'Reparte el calor de forma uniforme', 'Los peces no pueden quemarse con él'],
    inconvenientes: ['Más caro', 'Solo sirve con filtro externo'],
  },

  // ═════════════════════════════ ILUMINACIÓN ═══════════════════════
  {
    id: 7, nombre: 'Pantalla LED básica', categoria: 'ILUMINACION', nivel: 'BASICO', imprescindible: true,
    litrosMin: 20, litrosMax: 200, precio: '20–60 €',
    resumen: 'Suficiente para peces y plantas de luz baja.',
    descripcion: 'Una barra LED de luz blanca que ilumina el acuario. Basta para anubias, helechos, musgos y criptocorynes.',
    caracteristicas: [
      { etiqueta: 'Fotoperiodo', valor: '6–8 horas al día' },
      { etiqueta: 'Adecuada para', valor: 'Plantas de luz baja' },
    ],
    ventajas: ['Bajo consumo', 'Se calienta poco', 'Precio ajustado'],
    inconvenientes: ['Insuficiente para plantas tapizantes o de luz alta'],
    consejo: 'Usa un enchufe programable: un horario fijo de luz es la mejor defensa contra las algas.',
  },
  {
    id: 8, nombre: 'LED regulable para plantado', categoria: 'ILUMINACION', nivel: 'AVANZADO', imprescindible: false,
    litrosMin: 30, litrosMax: 300, precio: '80–300 €',
    resumen: 'Espectro completo y programable, con amanecer y atardecer.',
    descripcion: 'Pantalla de alta potencia con canales de color regulables, pensada para acuarios plantados exigentes.',
    caracteristicas: [
      { etiqueta: 'Espectro', valor: 'Completo (RGB + blanco)' },
      { etiqueta: 'Control', valor: 'Aplicación o controlador' },
      { etiqueta: 'Adecuada para', valor: 'Tapizantes y plantas de luz alta' },
    ],
    ventajas: ['Hace crecer cualquier planta', 'Colores muy naturales', 'Simula amanecer y atardecer'],
    inconvenientes: ['Cara', 'Con demasiada luz y sin CO₂ aparecen algas'],
    consejo: 'Si subes la luz, sube también el CO₂ y el abono: la planta necesita las tres cosas a la vez.',
  },

  // ═════════════════════════════ ACONDICIONADORES ══════════════════
  {
    id: 9, nombre: 'Acondicionador anticloro', categoria: 'ACONDICIONADOR', nivel: 'BASICO', imprescindible: true,
    precio: '5–15 €',
    resumen: 'Elimina el cloro y las cloraminas del agua del grifo.',
    descripcion: 'El agua del grifo lleva cloro para ser potable, pero es tóxico para peces y bacterias. Este líquido lo neutraliza al instante.',
    caracteristicas: [
      { etiqueta: 'Cuándo', valor: 'En cada cambio de agua' },
      { etiqueta: 'Dosis', valor: 'Según el fabricante, por litro de agua nueva' },
    ],
    ventajas: ['Efecto inmediato', 'Muy barato', 'Suele neutralizar también metales pesados'],
    inconvenientes: ['Hay que acordarse cada vez'],
    consejo: 'Añádelo al agua nueva antes de echarla al acuario.',
  },
  {
    id: 10, nombre: 'Bacterias nitrificantes', categoria: 'ACONDICIONADOR', nivel: 'BASICO', imprescindible: false,
    precio: '8–20 €',
    resumen: 'Ayudan a arrancar el ciclo del nitrógeno en un acuario nuevo.',
    descripcion: 'Bacterias vivas que colonizan el filtro y transforman el amoníaco y los nitritos en nitratos, mucho menos tóxicos.',
    caracteristicas: [
      { etiqueta: 'Cuándo', valor: 'Al montar el acuario y tras limpiar el filtro' },
    ],
    ventajas: ['Acortan el ciclado', 'Reducen picos de amoníaco y nitritos'],
    inconvenientes: ['No sustituyen al ciclado completo'],
    consejo: 'Aunque las uses, mide amoníaco y nitritos antes de meter peces.',
  },

  // ═════════════════════════════ CO₂ ═══════════════════════════════
  {
    id: 11, nombre: 'Kit de CO₂ con botella', categoria: 'CO2', nivel: 'AVANZADO', imprescindible: false,
    litrosMin: 40, litrosMax: 600, precio: '100–250 €',
    resumen: 'Botella presurizada con regulador y difusor. Para plantados exigentes.',
    descripcion: 'Inyecta CO₂ en el agua para que las plantas hagan la fotosíntesis a pleno rendimiento.',
    caracteristicas: [
      { etiqueta: 'Componentes', valor: 'Botella, regulador, electroválvula, contador de burbujas y difusor' },
      { etiqueta: 'Control', valor: 'Test permanente de CO₂ (drop checker)' },
    ],
    ventajas: ['Crecimiento espectacular de las plantas', 'Reduce las algas en un plantado equilibrado'],
    inconvenientes: ['Caro', 'Una sobredosis baja el pH y puede asfixiar a los peces'],
    consejo: 'Conecta la electroválvula a un programador para apagar el CO₂ por la noche.',
  },
  {
    id: 12, nombre: 'CO₂ líquido', categoria: 'CO2', nivel: 'INTERMEDIO', imprescindible: false,
    precio: '8–20 €',
    resumen: 'Fuente de carbono que se dosifica como un abono.',
    descripcion: 'Un líquido que aporta carbono a las plantas sin botellas ni difusores. Menos eficaz que el CO₂ en gas.',
    caracteristicas: [
      { etiqueta: 'Dosis', valor: 'Diaria, según el fabricante' },
    ],
    ventajas: ['Barato y sencillo', 'Ayuda contra algunas algas'],
    inconvenientes: ['Menos eficaz que el CO₂ en gas', 'Vallisneria y algunos musgos lo toleran mal', 'En exceso afecta a las gambas'],
  },

  // ═════════════════════════════ ABONOS ════════════════════════════
  {
    id: 13, nombre: 'Abono líquido completo', categoria: 'ABONO', nivel: 'BASICO', imprescindible: false,
    precio: '8–20 €',
    resumen: 'Macro y micronutrientes para plantas que se alimentan por las hojas.',
    descripcion: 'Aporta nitrógeno, fósforo, potasio, hierro y oligoelementos que el agua del acuario no suele tener.',
    caracteristicas: [
      { etiqueta: 'Dosis', valor: 'Semanal o diaria, según el fabricante' },
      { etiqueta: 'Ideal para', valor: 'Plantas epífitas, de tallo y flotantes' },
    ],
    ventajas: ['Plantas más verdes y sanas', 'Fácil de dosificar'],
    inconvenientes: ['En exceso favorece las algas'],
    consejo: 'Si tienes gambas, elige un abono sin cobre.',
  },

  // ═════════════════════════════ SUSTRATOS ═════════════════════════
  {
    id: 14, nombre: 'Sustrato nutritivo (aquasoil)', categoria: 'SUSTRATO', nivel: 'INTERMEDIO', imprescindible: false,
    precio: '25–60 €',
    resumen: 'Bolitas de tierra cocida que nutren las raíces y ablandan el agua.',
    descripcion: 'Sustrato pensado para acuarios plantados. Baja el pH y la dureza, ideal para plantas exigentes y peces de aguas blandas.',
    caracteristicas: [
      { etiqueta: 'Efecto en el agua', valor: 'Baja pH y dureza (KH)' },
      { etiqueta: 'Duración', valor: '1–2 años' },
    ],
    ventajas: ['Las plantas enraízan muy bien', 'Perfecto para gambas y peces de aguas blandas'],
    inconvenientes: ['Libera amoníaco las primeras semanas', 'Se deshace con el tiempo', 'No apto para aguas duras (mollys, cíclidos africanos)'],
  },
  {
    id: 15, nombre: 'Grava o arena inerte', categoria: 'SUSTRATO', nivel: 'BASICO', imprescindible: false,
    precio: '5–20 €',
    resumen: 'No altera los parámetros del agua. Duradera y fácil de limpiar.',
    descripcion: 'Sustrato decorativo que no aporta nutrientes. Se puede combinar con pastillas de abono para raíces.',
    caracteristicas: [
      { etiqueta: 'Efecto en el agua', valor: 'Ninguno' },
      { etiqueta: 'Duración', valor: 'Indefinida' },
    ],
    ventajas: ['Barata', 'Dura para siempre', 'La arena fina es ideal para corydoras'],
    inconvenientes: ['No nutre a las plantas de raíz'],
    consejo: 'Lávala bien antes de usarla para que el agua no se enturbie.',
  },

  // ═════════════════════════════ TESTS ═════════════════════════════
  {
    id: 16, nombre: 'Test de gotas (kit completo)', categoria: 'TEST', nivel: 'BASICO', imprescindible: true,
    precio: '30–60 €',
    resumen: 'Mide pH, KH, GH, amoníaco, nitritos y nitratos con precisión.',
    descripcion: 'Reactivos líquidos que cambian de color. Se compara el tubo con una tabla para saber el valor.',
    caracteristicas: [
      { etiqueta: 'Parámetros', valor: 'pH, KH, GH, NH₃/NH₄, NO₂, NO₃' },
      { etiqueta: 'Mediciones por kit', valor: 'Varias decenas' },
    ],
    ventajas: ['Más precisos que las tiras', 'Miden amoníaco'],
    inconvenientes: ['Más lentos de usar', 'Caducan'],
    consejo: 'Mide cada semana a la misma hora y apunta los resultados en la app.',
  },
  {
    id: 17, nombre: 'Tiras reactivas', categoria: 'TEST', nivel: 'BASICO', imprescindible: false,
    precio: '10–20 €',
    resumen: 'Una tira que se moja en el agua y cambia de color en segundos.',
    descripcion: 'Útiles para una comprobación rápida. Para decisiones importantes, mejor un test de gotas.',
    caracteristicas: [
      { etiqueta: 'Parámetros', valor: 'Varios a la vez (según marca)' },
    ],
    ventajas: ['Muy rápidas', 'Fáciles de usar'],
    inconvenientes: ['Menos precisas', 'Muchas no miden amoníaco', 'Se estropean con la humedad'],
  },

  // ═════════════════════════════ AIREACIÓN ═════════════════════════
  {
    id: 18, nombre: 'Bomba de aire con difusor', categoria: 'AIREACION', nivel: 'BASICO', imprescindible: false,
    precio: '10–25 €',
    resumen: 'Añade oxígeno y mueve la superficie del agua.',
    descripcion: 'Una pequeña bomba que envía aire por un tubo hasta una piedra difusora. También mueve los filtros de esponja.',
    caracteristicas: [
      { etiqueta: 'Accesorios', valor: 'Tubo, piedra difusora y válvula antirretorno' },
    ],
    ventajas: ['Más oxígeno en verano', 'Barata', 'Útil en tratamientos con medicamentos'],
    inconvenientes: ['Algo de ruido', 'Expulsa el CO₂ en acuarios plantados'],
    consejo: 'Pon siempre una válvula antirretorno: evita que el agua baje por el tubo si se va la luz.',
  },

  // ═════════════════════════════ MANTENIMIENTO ═════════════════════
  {
    id: 19, nombre: 'Sifón limpiafondos', categoria: 'MANTENIMIENTO', nivel: 'BASICO', imprescindible: true,
    precio: '8–20 €',
    resumen: 'Para hacer cambios de agua y limpiar el sustrato a la vez.',
    descripcion: 'Un tubo ancho con manguera que aspira la suciedad del fondo mientras vacías el agua para el cambio semanal.',
    caracteristicas: [
      { etiqueta: 'Frecuencia', valor: 'En cada cambio de agua' },
    ],
    ventajas: ['Imprescindible para el mantenimiento', 'Barato'],
    inconvenientes: ['En acuarios de gambas puede aspirar alguna'],
    consejo: 'Coloca una media en la boca del tubo si tienes gambas pequeñas.',
  },
  {
    id: 20, nombre: 'Termómetro digital', categoria: 'MANTENIMIENTO', nivel: 'BASICO', imprescindible: false,
    precio: '5–15 €',
    resumen: 'Comprueba que el calentador hace bien su trabajo.',
    descripcion: 'Una sonda dentro del agua y una pantalla fuera. Mucho más fiable que los termómetros adhesivos.',
    caracteristicas: [
      { etiqueta: 'Precisión', valor: '± 0,5 °C aprox.' },
    ],
    ventajas: ['Lectura rápida', 'Detecta a tiempo un calentador averiado'],
    inconvenientes: ['Necesita pila'],
  },
];
