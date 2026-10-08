import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonList, IonItem, IonIcon, IonLabel, IonToggle, IonRouterLink,
         ToggleCustomEvent } from '@ionic/angular';
import { MarcaComponent } from '../../componentes/marca/marca.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [RouterLink, IonRouterLink, IonContent, IonList, IonItem, IonIcon, IonLabel, IonToggle, MarcaComponent],
})
export class PerfilPage {
  // Para que el interruptor refleje el estado real al entrar
  oscuro = document.documentElement.classList.contains('ion-palette-dark');

  cambiarTema(evento: ToggleCustomEvent) {
    this.oscuro = evento.detail.checked;
    document.documentElement.classList.toggle('ion-palette-dark', this.oscuro);
  }
}
