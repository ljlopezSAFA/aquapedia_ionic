import { Component, input } from '@angular/core';
import { IonThumbnail, IonIcon } from '@ionic/angular';

/**
 * Imagen pequeña para listas. Si no hay foto (o no carga), muestra un icono
 * sobre el degradado de la marca.
 *
 * Uso:  <app-miniatura slot="start" [foto]="e.foto" icono="fish-outline" />
 */
@Component({
  selector: 'app-miniatura',
  templateUrl: './miniatura.component.html',
  styleUrls: ['./miniatura.component.scss'],
  imports: [IonThumbnail, IonIcon],
})
export class MiniaturaComponent {
  foto = input<string>();
  icono = input('fish-outline');
  tamano = input(48);              // en píxeles
  redonda = input(false);
  sinFoto = false;
}
