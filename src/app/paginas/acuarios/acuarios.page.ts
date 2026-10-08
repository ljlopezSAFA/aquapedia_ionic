import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonFab,
         IonFabButton } from '@ionic/angular';
import { ACUARIOS } from '../../datos/acuarios';
import { TarjetaAcuarioComponent } from '../../componentes/tarjeta-acuario/tarjeta-acuario.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-acuarios',
  templateUrl: './acuarios.page.html',
  styleUrls: ['./acuarios.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonFab,
            IonFabButton, TarjetaAcuarioComponent, EstadoVacioComponent],
})
export class AcuariosPage {
  acuarios = ACUARIOS;          // prueba con [] para ver el estado vacío

  get totalHabitantes() {
    return this.acuarios.reduce((total, a) => total + a.habitantes.length, 0);
  }
}
