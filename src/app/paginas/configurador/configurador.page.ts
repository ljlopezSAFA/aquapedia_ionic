import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonContent, IonCard,
         IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRange, IonNote, IonChip, IonSegment,
         IonSegmentButton, IonLabel, IonItem, IonToggle, IonProgressBar, IonText, IonBadge, IonIcon, IonGrid,
         IonRow, IonCol, IonList, IonListHeader, IonItemSliding, IonItemOptions, IonItemOption, IonModal,
         IonSearchbar, SegmentCustomEvent } from '@ionic/angular';
import { ESPECIES } from '../../datos/especies';
import { buscarCompatibilidad } from '../../datos/compatibilidades';
import { OP_AGUA } from '../../datos/etiquetas';
import { Especie, Rango, TipoAgua } from '../../modelos/especie';
import { MiniaturaComponent } from '../../componentes/miniatura/miniatura.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

/** Una especie de la propuesta con su cantidad. */
interface Linea {
  especie: Especie;
  cantidad: number;
}

/** Un problema detectado en la propuesta. */
interface Aviso {
  gravedad: 'ERROR' | 'AVISO';
  texto: string;
}

/**
 * Configurador de acuarios (maqueta).
 * En la entrega 2 estos cálculos los hará el servidor (POST /api/v1/configurador/evaluacion)
 * y aquí solo pintaremos la respuesta.
 */
@Component({
  selector: 'app-configurador',
  templateUrl: './configurador.page.html',
  styleUrls: ['./configurador.page.scss'],
  imports: [FormsModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton,
            IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRange, IonNote,
            IonChip, IonSegment, IonSegmentButton, IonLabel, IonItem, IonToggle, IonProgressBar, IonText, IonBadge,
            IonIcon, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonItemSliding, IonItemOptions,
            IonItemOption, IonModal, IonSearchbar, MiniaturaComponent, EstadoVacioComponent],
})
export class ConfiguradorPage {
  /** Regla clásica: 1 cm de pez adulto por cada litro de agua. */
  readonly CM_POR_LITRO = 1;
  readonly OP_AGUA = OP_AGUA;
  readonly presets = [20, 60, 120, 200, 300];

  // ── Estado ───────────────────────────────────────────────
  litros = 60;
  agua: TipoAgua = 'DULCE';
  conCo2 = false;
  lineas: Linea[] = [];
  selectorAbierto = false;
  busqueda = '';

  // ── Acciones ─────────────────────────────────────────────
  cambiarAgua(evento: SegmentCustomEvent) {
    this.agua = evento.detail.value as TipoAgua;
    // Un pez marino no puede ir en agua dulce: quitamos lo que no encaje
    this.lineas = this.lineas.filter(l => l.especie.agua === this.agua);
  }

  anadir(especie: Especie) {
    const cantidad = especie.tipo === 'PLANTA' ? 1 : (especie.grupoMinimo ?? 1);
    this.lineas.push({ especie, cantidad });
    this.selectorAbierto = false;
    this.busqueda = '';
  }

  sumar(linea: Linea) {
    linea.cantidad = Math.min(500, linea.cantidad + 1);
  }

  restar(linea: Linea) {
    linea.cantidad = Math.max(1, linea.cantidad - 1);
  }

  quitar(linea: Linea) {
    this.lineas = this.lineas.filter(l => l !== linea);
  }

  vaciar() {
    this.lineas = [];
  }

  // ── Carga (regla de 1 cm por litro) ──────────────────────
  get cmOcupados(): number {
    const total = this.lineas
      .filter(l => l.especie.tipo !== 'PLANTA')          // las plantas no cuentan
      .reduce((suma, l) => suma + (l.especie.tamanoCm ?? 0) * l.cantidad, 0);
    return Math.round(total * 10) / 10;
  }

  get cmMaximos(): number {
    return this.litros * this.CM_POR_LITRO;
  }

  get porcentaje(): number {
    return Math.round(this.cmOcupados / this.cmMaximos * 100);
  }

  get progreso(): number {                              // ion-progress-bar va de 0 a 1
    return Math.min(this.porcentaje / 100, 1);
  }

  get colorCarga(): string {
    return this.porcentaje > 100 ? 'danger' : this.porcentaje > 80 ? 'warning' : 'success';
  }

  // ── Rango común de parámetros ────────────────────────────
  get rangoTemperatura(): Rango | null {
    return this.rangoComun(e => e.temperatura);
  }

  get rangoPh(): Rango | null {
    return this.rangoComun(e => e.ph);
  }

  /** El mayor de los mínimos y el menor de los máximos. Si min > max, no hay solución. */
  private rangoComun(campo: (e: Especie) => Rango): Rango | null {
    if (this.lineas.length === 0) {
      return null;
    }
    return {
      min: Math.max(...this.lineas.map(l => campo(l.especie).min)),
      max: Math.min(...this.lineas.map(l => campo(l.especie).max)),
    };
  }

  // ── Revisión: avisos y errores ───────────────────────────
  get avisos(): Aviso[] {
    const avisos: Aviso[] = [];

    if (this.porcentaje > 100) {
      avisos.push({ gravedad: 'ERROR', texto: `Demasiados peces: ${this.cmOcupados} cm para ${this.litros} L.` });
    } else if (this.porcentaje > 80) {
      avisos.push({ gravedad: 'AVISO', texto: 'Carga alta: necesitarás más filtración y cambios de agua frecuentes.' });
    }

    const t = this.rangoTemperatura;
    if (t && t.min > t.max) {
      avisos.push({ gravedad: 'ERROR', texto: 'No hay ninguna temperatura en la que puedan vivir todas.' });
    }
    const ph = this.rangoPh;
    if (ph && ph.min > ph.max) {
      avisos.push({ gravedad: 'ERROR', texto: 'No hay ningún pH en el que puedan vivir todas.' });
    }

    for (const l of this.lineas) {
      const e = l.especie;
      if (e.volumenMinimoL && e.volumenMinimoL > this.litros) {
        avisos.push({ gravedad: 'ERROR', texto: `${e.nombreComun} necesita al menos ${e.volumenMinimoL} L.` });
      }
      if (e.cardumen && e.grupoMinimo && l.cantidad < e.grupoMinimo) {
        avisos.push({ gravedad: 'AVISO', texto: `${e.nombreComun} vive en grupo: pon al menos ${e.grupoMinimo}.` });
      }
      if (e.comportamiento === 'TERRITORIAL' && l.cantidad > 1) {
        avisos.push({ gravedad: 'AVISO', texto: `${e.nombreComun} es territorial: varios ejemplares pueden pelear.` });
      }
      if (e.necesitaCo2 && !this.conCo2) {
        avisos.push({ gravedad: 'AVISO', texto: `${e.nombreComun} necesita CO₂ para crecer bien.` });
      }
    }

    // Parejas: cada especie con las que vienen detrás
    for (let i = 0; i < this.lineas.length; i++) {
      for (let j = i + 1; j < this.lineas.length; j++) {
        const a = this.lineas[i].especie;
        const b = this.lineas[j].especie;
        const c = buscarCompatibilidad(a.id, b.id);
        if (c && c.estado !== 'IDEAL') {
          avisos.push({
            gravedad: c.estado === 'INCOMPATIBLE' ? 'ERROR' : 'AVISO',
            texto: `${a.nombreComun} y ${b.nombreComun}: ${c.motivo}`,
          });
        }
      }
    }

    return avisos;
  }

  get veredicto(): { texto: string; color: string; icono: string } {
    if (this.lineas.length === 0) {
      return { texto: 'Sin especies', color: 'medium', icono: 'information-circle-outline' };
    }
    if (this.avisos.some(a => a.gravedad === 'ERROR')) {
      return { texto: 'No viable', color: 'danger', icono: 'close-circle' };
    }
    if (this.avisos.length > 0) {
      return { texto: 'Viable con avisos', color: 'warning', icono: 'warning' };
    }
    return { texto: 'Viable', color: 'success', icono: 'checkmark-circle' };
  }

  get noViable(): boolean {
    return this.veredicto.color === 'danger';
  }

  // ── Selector y sugerencias ───────────────────────────────
  /** Especies del mismo tipo de agua que aún no están en la propuesta. */
  private get candidatas(): Especie[] {
    return ESPECIES.filter(e => e.agua === this.agua && !this.lineas.some(l => l.especie.id === e.id));
  }

  get disponibles(): Especie[] {
    const texto = this.busqueda.trim().toLowerCase();
    return this.candidatas.filter(e =>
      e.nombreComun.toLowerCase().includes(texto) || e.nombreCientifico.toLowerCase().includes(texto));
  }

  /** Especies que todavía encajan: rango compatible, caben y no chocan con ninguna. */
  get sugerencias(): Especie[] {
    const t = this.rangoTemperatura;
    if (!t || t.min > t.max) {
      return [];
    }
    const cmLibres = this.cmMaximos - this.cmOcupados;
    return this.candidatas.filter(e =>
      (e.volumenMinimoL ?? 0) <= this.litros &&
      e.temperatura.min <= t.max && e.temperatura.max >= t.min &&
      this.estadoCon(e) !== 'INCOMPATIBLE' &&
      (e.tipo === 'PLANTA' || (e.tamanoCm ?? 0) * (e.grupoMinimo ?? 1) <= cmLibres)
    ).slice(0, 8);
  }

  /** El peor estado de compatibilidad de una especie con las que ya hay. */
  estadoCon(especie: Especie): 'INCOMPATIBLE' | 'PRECAUCION' | null {
    const estados = this.lineas.map(l => buscarCompatibilidad(l.especie.id, especie.id)?.estado);
    if (estados.includes('INCOMPATIBLE')) return 'INCOMPATIBLE';
    if (estados.includes('PRECAUCION')) return 'PRECAUCION';
    return null;
  }

  // ── Equipo recomendado ───────────────────────────────────
  get caudalFiltro(): number {
    return this.litros * 4;                      // renovar el agua unas 4 veces por hora
  }

  get necesitaLuzAlta(): boolean {
    return this.lineas.some(l => l.especie.luz === 'ALTA' || l.especie.necesitaCo2);
  }

  // ── Textos para el HTML ──────────────────────────────────
  icono(e: Especie): string {
    return e.tipo === 'PLANTA' ? 'leaf-outline' : e.tipo === 'INVERTEBRADO' ? 'bug-outline' : 'fish-outline';
  }

  resumenLinea(l: Linea): string {
    if (l.especie.tipo === 'PLANTA') {
      return 'Planta · no cuenta en la carga';
    }
    const cm = l.especie.tamanoCm ?? 0;
    return `${cm} cm × ${l.cantidad} = ${Math.round(cm * l.cantidad * 10) / 10} cm`;
  }

  resumenEspecie(e: Especie): string {
    const tamano = e.tamanoCm ? `${e.tamanoCm} cm · ` : '';
    return `${tamano}${e.temperatura.min}–${e.temperatura.max} °C · desde ${e.volumenMinimoL ?? 0} L`;
  }
}
