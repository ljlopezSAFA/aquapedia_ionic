import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-barra-rango',
  templateUrl: './barra-rango.component.html',
  styleUrls: ['./barra-rango.component.scss'],
  imports: [IonIcon],
})
export class BarraRangoComponent {
  etiqueta = input.required<string>();
  icono = input('flask-outline');
  unidad = input('');
  min = input.required<number>();       // rango de la especie
  max = input.required<number>();
  escalaMin = input(0);                 // dónde empieza y acaba la barra gris
  escalaMax = input(100);

  get izquierda() {
    return (this.min() - this.escalaMin()) / (this.escalaMax() - this.escalaMin()) * 100;
  }

  get ancho() {
    return (this.max() - this.min()) / (this.escalaMax() - this.escalaMin()) * 100;
  }
}
