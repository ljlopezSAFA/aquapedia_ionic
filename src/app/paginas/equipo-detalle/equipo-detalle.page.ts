import { Component, input } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonIcon, IonText, IonChip,
         IonLabel, IonList, IonListHeader, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
         IonNote } from '@ionic/angular';
import { EQUIPOS } from '../../datos/equipos';
import { OP_CATEGORIA_EQUIPO, OP_NIVEL_EQUIPO, opcionDe } from '../../datos/etiquetas';
import { Equipo } from '../../modelos/equipo';
import { Opcion } from '../../modelos/opcion';
import { TarjetaEquipoComponent } from '../../componentes/tarjeta-equipo/tarjeta-equipo.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.page.html',
  styleUrls: ['./equipo-detalle.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonIcon, IonText, IonChip,
            IonLabel, IonList, IonListHeader, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
            IonNote, TarjetaEquipoComponent, EstadoVacioComponent],
})
export class EquipoDetallePage {
  id = input<string>();                 // de la ruta 'equipo/:id'

  get equipo(): Equipo | undefined {
    return EQUIPOS.find(e => e.id === Number(this.id()));
  }

  get categoria(): Opcion {
    return opcionDe(OP_CATEGORIA_EQUIPO, this.equipo?.categoria);
  }

  get nivel(): Opcion {
    return opcionDe(OP_NIVEL_EQUIPO, this.equipo?.nivel);
  }

  get relacionados(): Equipo[] {
    const actual = this.equipo;
    return actual ? EQUIPOS.filter(e => e.categoria === actual.categoria && e.id !== actual.id) : [];
  }
}
