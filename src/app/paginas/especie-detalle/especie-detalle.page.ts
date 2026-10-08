import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent,
         IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonNote } from '@ionic/angular';
import { ESPECIES } from '../../datos/especies';
import { ChipDificultadComponent } from '../../componentes/chip-dificultad/chip-dificultad.component';
import { BarraRangoComponent } from '../../componentes/barra-rango/barra-rango.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-especie-detalle',
  templateUrl: './especie-detalle.page.html',
  styleUrls: ['./especie-detalle.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent,
            IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonNote,
            ChipDificultadComponent, BarraRangoComponent, EstadoVacioComponent],
})
export class EspecieDetallePage {
  id = input<string>();                 // llega de la ruta 'especies/:id'
  seccion = 'agua';
  sinFoto = false;

  textosAgua = { DULCE: 'Agua dulce', SALOBRE: 'Agua salobre', MARINA: 'Agua marina' };
  textosTipo = { PEZ: 'Pez', PLANTA: 'Planta', INVERTEBRADO: 'Invertebrado' };

  get especie() {
    return ESPECIES.find(e => e.id === Number(this.id()));
  }
}
