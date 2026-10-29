import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonNote, IonBadge } from '@ionic/angular';
import { MiniaturaComponent } from '../miniatura/miniatura.component';
import {Equipo} from "../../modelos/equipo";
import {OP_CATEGORIA_EQUIPO, opcionDe} from "../../datos/etiquetas";

/** Fila de lista con un equipo. Se usa dentro de un <ion-list>. */
@Component({
  selector: 'app-tarjeta-equipo',
  templateUrl: './tarjeta-equipo.component.html',
  styleUrls: ['./tarjeta-equipo.component.scss'],
  imports: [RouterLink, IonItem, IonLabel, IonNote, IonBadge, MiniaturaComponent],
})
export class TarjetaEquipoComponent {
  equipo = input.required<Equipo>();

  get icono(): string {
    return opcionDe(OP_CATEGORIA_EQUIPO, this.equipo().categoria).icono ?? 'cube-outline';
  }

  get rangoLitros(): string {
    const e = this.equipo();
    return e.litrosMin && e.litrosMax ? `${e.litrosMin}–${e.litrosMax} L` : 'Cualquier acuario';
  }
}
