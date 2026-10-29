import { Component, input, model } from '@angular/core';
import { IonChip, IonIcon, IonLabel } from '@ionic/angular';
import {Opcion} from "../../modelos/opcion";

/**
 * Grupo de chips que se marcan y desmarcan. Sirve para cualquier filtro.
 *
 * Uso:  <app-selector-chips [opciones]="OP_DIFICULTAD" [(seleccion)]="filtros.dificultad" />
 *
 * model() es como input(), pero el componente también puede cambiar el valor y el padre
 * se entera. Por eso se escribe con corchetes y paréntesis: [(seleccion)].
 */
@Component({
  selector: 'app-selector-chips',
  templateUrl: './selector-chips.component.html',
  styleUrls: ['./selector-chips.component.scss'],
  imports: [IonChip, IonIcon, IonLabel],
  host: { '[class.desplazable]': 'desplazable()' },
})
export class SelectorChipsComponent {
  opciones = input.required<Opcion[]>();
  seleccion = model<string[]>([]);
  multiple = input(true);          // false: solo se puede marcar una
  desplazable = input(false);      // true: una sola fila con scroll horizontal

  marcado(valor: string): boolean {
    return this.seleccion().includes(valor);
  }

  alternar(valor: string) {
    const actual = this.seleccion();
    if (!this.multiple()) {
      this.seleccion.set(actual.includes(valor) ? [] : [valor]);
    } else if (actual.includes(valor)) {
      this.seleccion.set(actual.filter(v => v !== valor));
    } else {
      this.seleccion.set([...actual, valor]);
    }
  }
}
