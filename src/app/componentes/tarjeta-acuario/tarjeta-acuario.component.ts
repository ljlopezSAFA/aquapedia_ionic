import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonIcon } from '@ionic/angular';
import {Acuario} from "../../modelos/acuario";


@Component({
  selector: 'app-tarjeta-acuario',
  templateUrl: './tarjeta-acuario.component.html',
  styleUrls: ['./tarjeta-acuario.component.scss'],
  imports: [IonCard, IonIcon, RouterLink],
})
export class TarjetaAcuarioComponent {
  acuario = input.required<Acuario>();
  sinFoto = false;
}
