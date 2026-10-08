import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonSegment,
         IonSegmentButton, IonLabel, IonList, IonItem, IonIcon } from '@ionic/angular';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonSegment,
            IonSegmentButton, IonLabel, IonList, IonItem, IonIcon, EstadoVacioComponent],
})
export class NotificacionesPage {
  filtro = 'todas';

  notificaciones = [
    { icono: 'flask-outline', tipo: 'peligro', titulo: 'Nitritos por encima de 0',
      detalle: 'Comunitario del salón · 19:30', grupo: 'Hoy', leida: false },
    { icono: 'calendar-outline', tipo: 'aviso', titulo: 'Toca limpiar el filtro',
      detalle: 'Comunitario del salón · 08:00', grupo: 'Hoy', leida: false },
    { icono: 'alert-circle-outline', tipo: 'peligro', titulo: 'Cambio de agua atrasado',
      detalle: 'Nano de gambas · ayer', grupo: 'Esta semana', leida: false },
    { icono: 'thermometer-outline', tipo: 'info', titulo: 'Llevas 14 días sin medir',
      detalle: 'Nano de gambas · lunes', grupo: 'Esta semana', leida: true },
    { icono: 'book-outline', tipo: 'neutra', titulo: 'Se ha actualizado una ficha',
      detalle: 'Tetra neón · domingo', grupo: 'Esta semana', leida: true },
  ];

  grupos = ['Hoy', 'Esta semana'];

  get visibles() {
    return this.filtro === 'todas' ? this.notificaciones : this.notificaciones.filter(n => !n.leida);
  }

  delGrupo(grupo: string) {
    return this.visibles.filter(n => n.grupo === grupo);
  }

  get noLeidas() {
    return this.notificaciones.filter(n => !n.leida).length;
  }
}
