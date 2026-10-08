import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonContent, IonInput,
         IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonDatetimeButton, IonDatetime, IonModal,
         IonSelect, IonSelectOption, IonToggle, IonTextarea, IonRouterLink } from '@ionic/angular';

@Component({
  selector: 'app-acuario-nuevo',
  templateUrl: './acuario-nuevo.page.html',
  styleUrls: ['./acuario-nuevo.page.scss'],
  imports: [RouterLink, IonRouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton,
            IonContent, IonInput, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonDatetimeButton,
            IonDatetime, IonModal, IonSelect, IonSelectOption, IonToggle, IonTextarea],
})
export class AcuarioNuevoPage {}
