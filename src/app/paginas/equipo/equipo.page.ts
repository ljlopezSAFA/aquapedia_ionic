import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonNote, IonItem, IonLabel, IonRange,
         IonButton, IonList, IonListHeader, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
         IonText } from '@ionic/angular';
import { EQUIPOS } from '../../datos/equipos';
import { OP_CATEGORIA_EQUIPO } from '../../datos/etiquetas';
import { Equipo } from '../../modelos/equipo';
import { Opcion } from '../../modelos/opcion';
import { SelectorChipsComponent } from '../../componentes/selector-chips/selector-chips.component';
import { TarjetaEquipoComponent } from '../../componentes/tarjeta-equipo/tarjeta-equipo.component';
import { MiniaturaComponent } from '../../componentes/miniatura/miniatura.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

/** Un bloque de la lista: una categoría con sus equipos. */
interface GrupoEquipo {
  categoria: Opcion;
  equipos: Equipo[];
}

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
  imports: [FormsModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonNote, IonItem,
            IonLabel, IonRange, IonButton, IonList, IonListHeader, IonIcon, IonCard, IonCardHeader, IonCardTitle,
            IonCardSubtitle, IonText, SelectorChipsComponent, TarjetaEquipoComponent, MiniaturaComponent,
            EstadoVacioComponent],
})
export class EquipoPage {
  categoria = input<string>();          // /app/equipo?categoria=FILTRO (desde el configurador)

  readonly OP_CATEGORIA_EQUIPO = OP_CATEGORIA_EQUIPO;
  categorias: string[] = [];            // selección única: [] = todas
  busqueda = '';
  litros: number | null = null;         // "para mi acuario de X L"

  /**
   * Evento de Ionic: se ejecuta CADA VEZ que la pestaña se muestra (ngOnInit solo la primera).
   * Así, si llegamos desde el configurador con ?categoria=FILTRO, se aplica aunque
   * la pestaña Equipo ya estuviera abierta.
   */
  ionViewWillEnter() {
    const c = this.categoria();
    if (c) {
      this.categorias = [c];
    }
  }

  get filtrando(): boolean {
    return this.busqueda !== '' || this.categorias.length > 0 || this.litros !== null;
  }

  get imprescindibles(): Equipo[] {
    return EQUIPOS.filter(e => e.imprescindible);
  }

  get resultados(): Equipo[] {
    const texto = this.busqueda.trim().toLowerCase();
    return EQUIPOS.filter(e =>
      (this.categorias.length === 0 || this.categorias.includes(e.categoria)) &&
      (texto === '' || e.nombre.toLowerCase().includes(texto) || e.resumen.toLowerCase().includes(texto)) &&
      this.sirveParaLitros(e)
    );
  }

  /** Los equipos sin rango de litros (abonos, tests…) sirven para cualquier acuario. */
  private sirveParaLitros(e: Equipo): boolean {
    if (this.litros === null || e.litrosMin === undefined || e.litrosMax === undefined) {
      return true;
    }
    return e.litrosMin <= this.litros && this.litros <= e.litrosMax;
  }

  /** Resultados agrupados por categoría, en el orden de OP_CATEGORIA_EQUIPO. */
  get grupos(): GrupoEquipo[] {
    return OP_CATEGORIA_EQUIPO
      .map(categoria => ({ categoria, equipos: this.resultados.filter(e => e.categoria === categoria.valor) }))
      .filter(g => g.equipos.length > 0);
  }

  iconoDe(e: Equipo): string {
    return OP_CATEGORIA_EQUIPO.find(c => c.valor === e.categoria)?.icono ?? 'cube-outline';
  }

  limpiar() {
    this.categorias = [];
    this.busqueda = '';
    this.litros = null;
  }
}
