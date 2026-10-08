import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonSegment, IonSegmentButton,
         IonLabel, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonNote, IonBadge,
         IonIcon, IonCheckbox, IonFab, IonFabButton, IonModal, IonInput, IonButton } from '@ionic/angular';
import { ACUARIOS } from '../../datos/acuarios';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-acuario-detalle',
  templateUrl: './acuario-detalle.page.html',
  styleUrls: ['./acuario-detalle.page.scss'],
  imports: [FormsModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent,
            IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonItemSliding, IonItemOptions,
            IonItemOption, IonAvatar, IonNote, IonBadge, IonIcon, IonCheckbox, IonFab, IonFabButton, IonModal,
            IonInput, IonButton, EstadoVacioComponent],
})
export class AcuarioDetallePage {
  id = input<string>();
  vista = 'habitantes';
  modalAbierto = false;

  get acuario() {
    return ACUARIOS.find(a => a.id === Number(this.id()));
  }
}
