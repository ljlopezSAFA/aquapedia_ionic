import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBadge, IonSearchbar,
         IonNote, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonText,
         IonThumbnail } from '@ionic/angular';
import { ESPECIES } from '../../datos/especies';
import { OP_TIPO } from '../../datos/etiquetas';
import { Especie } from '../../modelos/especie';
import { TarjetaEspecieComponent } from '../../componentes/tarjeta-especie/tarjeta-especie.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.page.html',
  styleUrls: ['./especies.page.scss'],
  imports: [FormsModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon,
            IonBadge, IonSearchbar, IonNote, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle,
            IonText, IonThumbnail, TarjetaEspecieComponent, EstadoVacioComponent],
})
export class EspeciesPage {
  readonly grupos = OP_TIPO;          // Peces · Plantas · Invertebrados
  busqueda = '';

  get destacada(): Especie {
    return ESPECIES[0];
  }

  contar(tipo: string): number {
    return ESPECIES.filter(e => e.tipo === tipo).length;
  }

  /** Sin búsqueda: las favoritas. Con búsqueda: todas las que coincidan. */
  get especiesVisibles(): Especie[] {
    const texto = this.busqueda.trim().toLowerCase();
    if (texto === '') {
      return ESPECIES.filter(e => e.favorita);
    }
    return ESPECIES.filter(e =>
      e.nombreComun.toLowerCase().includes(texto) || e.nombreCientifico.toLowerCase().includes(texto));
  }
}
