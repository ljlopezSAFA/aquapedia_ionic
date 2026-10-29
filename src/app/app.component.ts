import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  // Menú inferior
  book, bookOutline, water, waterOutline, construct, constructOutline, pulse, pulseOutline, person, personOutline,
  // Generales
  add, checkmark, notificationsOutline, searchOutline, heart, heartOutline, optionsOutline, refreshOutline,
  closeCircle, checkmarkCircle, checkmarkCircleOutline, warning, warningOutline, alertCircleOutline,
  informationCircleOutline, addCircleOutline, removeCircleOutline, cubeOutline, sparkles,
  // Login
  mailOutline, lockClosedOutline,
  // Especies
  fishOutline, leafOutline, bugOutline, thermometerOutline, flaskOutline, resizeOutline,
  happyOutline, shieldOutline, flashOutline, arrowUpOutline, arrowDownOutline, removeOutline, sunny, sunnyOutline,
  // Acuarios y equipo
  calendarOutline, filterOutline, flameOutline, bulbOutline, cloudOutline, layersOutline, beakerOutline,
  ellipseOutline, brushOutline, thumbsUpOutline, thumbsDownOutline,
  // Perfil
  moonOutline, imagesOutline,
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
      book, bookOutline, water, waterOutline, construct, constructOutline, pulse, pulseOutline, person, personOutline,
      add, checkmark, notificationsOutline, searchOutline, heart, heartOutline, optionsOutline, refreshOutline,
      closeCircle, checkmarkCircle, checkmarkCircleOutline, warning, warningOutline, alertCircleOutline,
      informationCircleOutline, addCircleOutline, removeCircleOutline, cubeOutline, sparkles,
      mailOutline, lockClosedOutline,
      fishOutline, leafOutline, bugOutline, thermometerOutline, flaskOutline, resizeOutline,
      happyOutline, shieldOutline, flashOutline, arrowUpOutline, arrowDownOutline, removeOutline, sunny, sunnyOutline,
      calendarOutline, filterOutline, flameOutline, bulbOutline, cloudOutline, layersOutline, beakerOutline,
      ellipseOutline, brushOutline, thumbsUpOutline, thumbsDownOutline,
      moonOutline, imagesOutline,
    });
  }
}
