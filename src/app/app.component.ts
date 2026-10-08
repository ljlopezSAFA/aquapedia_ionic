import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  // Menú inferior
  book, bookOutline, water, waterOutline, pulse, pulseOutline, person, personOutline,
  // Generales
  add, checkmark, notificationsOutline, searchOutline, heart, heartOutline,
  // Login
  mailOutline, lockClosedOutline,
  // Especies y acuarios
  fishOutline, leafOutline, thermometerOutline, flaskOutline, resizeOutline,
  warningOutline, checkmarkCircleOutline, alertCircleOutline, calendarOutline,
  // Perfil
  moonOutline, informationCircleOutline, imagesOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // Todos los iconos que usa la app, registrados una sola vez
    addIcons({
      book, bookOutline, water, waterOutline, pulse, pulseOutline, person, personOutline,
      add, checkmark, notificationsOutline, searchOutline, heart, heartOutline,
      mailOutline, lockClosedOutline,
      fishOutline, leafOutline, thermometerOutline, flaskOutline, resizeOutline,
      warningOutline, checkmarkCircleOutline, alertCircleOutline, calendarOutline,
      moonOutline, informationCircleOutline, imagesOutline,
    });
  }
}
