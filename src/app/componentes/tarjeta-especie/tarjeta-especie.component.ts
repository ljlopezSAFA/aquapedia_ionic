import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonIcon } from '@ionic/angular';
import { ChipDificultadComponent } from '../chip-dificultad/chip-dificultad.component';
import {Especie} from "../../modelos/especie";

@Component({
  selector: 'app-tarjeta-especie',
  templateUrl: './tarjeta-especie.component.html',
  styleUrls: ['./tarjeta-especie.component.scss'],
  imports: [IonCard, IonIcon, RouterLink, ChipDificultadComponent],
})
export class TarjetaEspecieComponent {
  especie = input.required<Especie>();
  sinFoto = false;       // si la foto no existe, mostramos un icono en su lugar
}
