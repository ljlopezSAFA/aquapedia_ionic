import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonBadge,
         IonNote } from '@ionic/angular';
import { ChipDificultadComponent } from '../chip-dificultad/chip-dificultad.component';
import {Especie} from "../../modelos/especie";


@Component({
  selector: 'app-tarjeta-especie',
  templateUrl: './tarjeta-especie.component.html',
  styleUrls: ['./tarjeta-especie.component.scss'],
  imports: [RouterLink, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon,
            IonBadge, IonNote, ChipDificultadComponent],
})
export class TarjetaEspecieComponent {
  especie = input.required<Especie>();
  detalle = input('');      // opcional: una línea extra (ej. "5 cm · 60 L · Pacífico")
  sinFoto = false;          // si la foto no existe, mostramos un icono en su lugar

  get iconoTipo(): string {
    const tipo = this.especie().tipo;
    return tipo === 'PLANTA' ? 'leaf-outline' : tipo === 'INVERTEBRADO' ? 'bug-outline' : 'fish-outline';
  }
}
