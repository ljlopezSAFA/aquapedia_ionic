import { Component, input } from '@angular/core';

/**
 * Logotipo de AquaPedia: icono + nombre (+ lema opcional).
 * El nombre está escrito con texto, no con imagen, para que se vea nítido
 * a cualquier tamaño y cambie de color solo en modo oscuro.
 *
 * Uso:  <app-marca />   <app-marca tamano="l" [lema]="true" variante="blanco" />
 */
@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss'],
})
export class MarcaComponent {
  tamano = input<'s' | 'm' | 'l'>('m');
  variante = input<'color' | 'blanco'>('color');   // 'blanco' para usar sobre fotos o fondos oscuros
  lema = input(false);
}
