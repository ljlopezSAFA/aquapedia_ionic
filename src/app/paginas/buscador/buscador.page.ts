import { Component, OnInit, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonContent, IonFooter,
         IonSegment, IonSegmentButton, IonLabel, IonSearchbar, IonIcon, IonSelect, IonSelectOption, IonChip,
         IonNote, IonModal, IonAccordionGroup, IonAccordion, IonItem, IonRange, IonToggle } from '@ionic/angular';
import { ESPECIES } from '../../datos/especies';
import { Especie, TipoEspecie } from '../../modelos/especie';
import { Opcion } from '../../modelos/opcion';
import { OP_TIPO, OP_AGUA, OP_DIFICULTAD, OP_COMPORTAMIENTO, OP_ZONA_NADO, OP_DIETA, OP_TIPO_PLANTA,
         OP_ZONA_PLANTADO, OP_LUZ, OP_CRECIMIENTO, OP_GRUPO_INVERTEBRADO, textoDe } from '../../datos/etiquetas';
import { TarjetaEspecieComponent } from '../../componentes/tarjeta-especie/tarjeta-especie.component';
import { SelectorChipsComponent } from '../../componentes/selector-chips/selector-chips.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

// Todos los filtros de selección múltiple, en un solo objeto
interface Filtros {
  dificultad: string[];
  agua: string[];
  comportamiento: string[];
  zonaNado: string[];
  dieta: string[];
  familia: string[];
  origen: string[];
  tipoPlanta: string[];
  zonaPlantado: string[];
  luz: string[];
  crecimiento: string[];
  grupoInvertebrado: string[];
}

// Un filtro aplicado, para mostrarlo como chip que se puede quitar
interface FiltroActivo {
  texto: string;
  quitar: () => void;
}

const TAMANO_MAX = 30;

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonContent,
            IonFooter, IonSegment, IonSegmentButton, IonLabel, IonSearchbar, IonIcon, IonSelect, IonSelectOption,
            IonChip, IonNote, IonModal, IonAccordionGroup, IonAccordion, IonItem, IonRange, IonToggle,
            TarjetaEspecieComponent, SelectorChipsComponent, EstadoVacioComponent],
})
export class BuscadorPage implements OnInit {
  tipo = input<string>();              // llega de la dirección: /app/especies/buscar?tipo=PLANTA

  // ── Estado de la pantalla ────────────────────────────────
  grupo: TipoEspecie = 'PEZ';
  busqueda = '';
  orden = 'NOMBRE';
  filtrosAbiertos = false;

  filtros: Filtros = this.filtrosVacios();
  temperatura: number | null = null;   // "que viva a X °C"
  ph: number | null = null;            // "mi pH es X"
  tamano = { lower: 0, upper: TAMANO_MAX };
  volumen: number | null = null;       // "que quepa en mi acuario de X L"
  soloCardumen = false;
  soloSinCo2 = false;
  soloComeAlgas = false;

  // ── Opciones para el HTML ────────────────────────────────
  readonly TAMANO_MAX = TAMANO_MAX;
  readonly OP_TIPO = OP_TIPO;
  readonly OP_AGUA = OP_AGUA;
  readonly OP_DIFICULTAD = OP_DIFICULTAD;
  readonly OP_COMPORTAMIENTO = OP_COMPORTAMIENTO;
  readonly OP_ZONA_NADO = OP_ZONA_NADO;
  readonly OP_DIETA = OP_DIETA;
  readonly OP_TIPO_PLANTA = OP_TIPO_PLANTA;
  readonly OP_ZONA_PLANTADO = OP_ZONA_PLANTADO;
  readonly OP_LUZ = OP_LUZ;
  readonly OP_CRECIMIENTO = OP_CRECIMIENTO;
  readonly OP_GRUPO_INVERTEBRADO = OP_GRUPO_INVERTEBRADO;

  ngOnInit() {
    // Si venimos de "Peces", "Plantas" o "Invertebrados", abrimos esa pestaña
    const t = this.tipo();
    if (t === 'PEZ' || t === 'PLANTA' || t === 'INVERTEBRADO') {
      this.grupo = t;
    }
  }

  // ── Opciones que salen de los propios datos ──────────────
  get opcionesFamilia(): Opcion[] {
    return this.valoresUnicos(e => e.familia);
  }

  get opcionesOrigen(): Opcion[] {
    return this.valoresUnicos(e => e.origen);
  }

  get opcionesOrden(): Opcion[] {
    const opciones = [
      { valor: 'NOMBRE', texto: 'Nombre' },
      { valor: 'DIFICULTAD', texto: 'Dificultad' },
      { valor: 'TEMPERATURA', texto: 'Temperatura' },
    ];
    return this.grupo === 'PLANTA' ? opciones : [...opciones, { valor: 'TAMANO', texto: 'Tamaño' }];
  }

  get nombreGrupo(): string {
    return textoDe(OP_TIPO, this.grupo).toLowerCase();
  }

  get tamanoFiltrado(): boolean {
    return this.tamano.lower > 0 || this.tamano.upper < TAMANO_MAX;
  }

  // ── Resultados ───────────────────────────────────────────
  get resultados(): Especie[] {
    const texto = this.busqueda.trim().toLowerCase();
    const lista = ESPECIES.filter(e =>
      e.tipo === this.grupo &&
      (texto === '' || [e.nombreComun, e.nombreCientifico, e.familia].some(x => x.toLowerCase().includes(texto))) &&
      this.cumpleGenerales(e) &&
      this.cumpleDelGrupo(e)
    );
    return this.ordenar(lista);
  }

  private cumpleGenerales(e: Especie): boolean {
    return this.incluye(this.filtros.dificultad, e.dificultad)
      && this.incluye(this.filtros.agua, e.agua)
      && (this.temperatura === null || (e.temperatura.min <= this.temperatura && this.temperatura <= e.temperatura.max))
      && (this.ph === null || (e.ph.min <= this.ph && this.ph <= e.ph.max));
  }

  private cumpleDelGrupo(e: Especie): boolean {
    const tamano = e.tamanoCm ?? 0;
    const cabe = this.volumen === null || (e.volumenMinimoL ?? 0) <= this.volumen;

    switch (this.grupo) {
      case 'PEZ':
        return this.incluye(this.filtros.comportamiento, e.comportamiento)
          && this.incluye(this.filtros.zonaNado, e.zonaNado)
          && this.incluye(this.filtros.dieta, e.dieta)
          && this.incluye(this.filtros.familia, e.familia)
          && this.incluye(this.filtros.origen, e.origen)
          && (!this.tamanoFiltrado || (tamano >= this.tamano.lower && tamano <= this.tamano.upper))
          && cabe
          && (!this.soloCardumen || e.cardumen === true);
      case 'PLANTA':
        return this.incluye(this.filtros.tipoPlanta, e.tipoPlanta)
          && this.incluye(this.filtros.zonaPlantado, e.zonaPlantado)
          && this.incluye(this.filtros.luz, e.luz)
          && this.incluye(this.filtros.crecimiento, e.crecimiento)
          && this.incluye(this.filtros.origen, e.origen)
          && (!this.soloSinCo2 || !e.necesitaCo2);
      case 'INVERTEBRADO':
        return this.incluye(this.filtros.grupoInvertebrado, e.grupoInvertebrado)
          && this.incluye(this.filtros.origen, e.origen)
          && cabe
          && (!this.soloComeAlgas || e.comeAlgas === true);
    }
  }

  /** Una lista vacía significa "sin filtro": vale cualquier valor. */
  private incluye(lista: string[], valor: string | undefined): boolean {
    return lista.length === 0 || (valor !== undefined && lista.includes(valor));
  }

  private ordenar(lista: Especie[]): Especie[] {
    const dificultades = ['FACIL', 'MEDIA', 'DIFICIL'];
    return [...lista].sort((a, b) => {
      switch (this.orden) {
        case 'TAMANO': return (a.tamanoCm ?? 0) - (b.tamanoCm ?? 0);
        case 'DIFICULTAD': return dificultades.indexOf(a.dificultad) - dificultades.indexOf(b.dificultad);
        case 'TEMPERATURA': return a.temperatura.min - b.temperatura.min;
        default: return a.nombreComun.localeCompare(b.nombreComun);
      }
    });
  }

  /** Línea extra de cada tarjeta, distinta según el grupo. */
  detalle(e: Especie): string {
    switch (e.tipo) {
      case 'PEZ':
        return `${e.tamanoCm} cm · ${e.volumenMinimoL} L · ${textoDe(OP_COMPORTAMIENTO, e.comportamiento)}`;
      case 'PLANTA':
        return `${textoDe(OP_TIPO_PLANTA, e.tipoPlanta)} · ${textoDe(OP_ZONA_PLANTADO, e.zonaPlantado)}`
          + (e.necesitaCo2 ? ' · CO₂' : '');
      case 'INVERTEBRADO':
        return `${e.tamanoCm} cm · ${textoDe(OP_GRUPO_INVERTEBRADO, e.grupoInvertebrado)}`
          + (e.comeAlgas ? ' · come algas' : '');
    }
  }

  // ── Filtros aplicados (chips que se pueden quitar) ───────
  get filtrosActivos(): FiltroActivo[] {
    const activos: FiltroActivo[] = [];

    const anadir = (clave: keyof Filtros, opciones: Opcion[]) => {
      for (const valor of this.filtros[clave]) {
        activos.push({
          texto: textoDe(opciones, valor),
          quitar: () => this.filtros[clave] = this.filtros[clave].filter(v => v !== valor),
        });
      }
    };

    anadir('dificultad', OP_DIFICULTAD);
    anadir('agua', OP_AGUA);
    anadir('origen', this.opcionesOrigen);
    if (this.temperatura !== null) {
      activos.push({ texto: `Vive a ${this.temperatura} °C`, quitar: () => this.temperatura = null });
    }
    if (this.ph !== null) {
      activos.push({ texto: `pH ${this.ph.toFixed(1)}`, quitar: () => this.ph = null });
    }

    if (this.grupo === 'PEZ') {
      anadir('comportamiento', OP_COMPORTAMIENTO);
      anadir('zonaNado', OP_ZONA_NADO);
      anadir('dieta', OP_DIETA);
      anadir('familia', this.opcionesFamilia);
      if (this.tamanoFiltrado) {
        activos.push({
          texto: `${this.tamano.lower}–${this.tamano.upper} cm`,
          quitar: () => this.tamano = { lower: 0, upper: TAMANO_MAX },
        });
      }
      if (this.soloCardumen) {
        activos.push({ texto: 'Vive en grupo', quitar: () => this.soloCardumen = false });
      }
    }

    if (this.grupo === 'PLANTA') {
      anadir('tipoPlanta', OP_TIPO_PLANTA);
      anadir('zonaPlantado', OP_ZONA_PLANTADO);
      anadir('luz', OP_LUZ);
      anadir('crecimiento', OP_CRECIMIENTO);
      if (this.soloSinCo2) {
        activos.push({ texto: 'Sin CO₂', quitar: () => this.soloSinCo2 = false });
      }
    }

    if (this.grupo === 'INVERTEBRADO') {
      anadir('grupoInvertebrado', OP_GRUPO_INVERTEBRADO);
      if (this.soloComeAlgas) {
        activos.push({ texto: 'Come algas', quitar: () => this.soloComeAlgas = false });
      }
    }

    if (this.grupo !== 'PLANTA' && this.volumen !== null) {
      activos.push({ texto: `Cabe en ${this.volumen} L`, quitar: () => this.volumen = null });
    }

    return activos;
  }

  limpiar() {
    this.filtros = this.filtrosVacios();
    this.temperatura = null;
    this.ph = null;
    this.tamano = { lower: 0, upper: TAMANO_MAX };
    this.volumen = null;
    this.soloCardumen = false;
    this.soloSinCo2 = false;
    this.soloComeAlgas = false;
    this.busqueda = '';
  }

  private filtrosVacios(): Filtros {
    return {
      dificultad: [], agua: [], comportamiento: [], zonaNado: [], dieta: [], familia: [], origen: [],
      tipoPlanta: [], zonaPlantado: [], luz: [], crecimiento: [], grupoInvertebrado: [],
    };
  }

  /** Valores distintos de un campo (familias, orígenes…) entre las especies del grupo. */
  private valoresUnicos(campo: (e: Especie) => string | undefined): Opcion[] {
    const valores: string[] = [];
    for (const e of ESPECIES) {
      const v = campo(e);
      if (e.tipo === this.grupo && v && !valores.includes(v)) {
        valores.push(v);
      }
    }
    return valores.sort().map(v => ({ valor: v, texto: v }));
  }
}
