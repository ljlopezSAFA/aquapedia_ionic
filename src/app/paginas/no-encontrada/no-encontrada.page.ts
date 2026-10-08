import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonRouterLink } from '@ionic/angular';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { MarcaComponent } from '../../componentes/marca/marca.component';

@Component({
  selector: 'app-no-encontrada',
  templateUrl: './no-encontrada.page.html',
  styleUrls: ['./no-encontrada.page.scss'],
  imports: [RouterLink, IonRouterLink, IonContent, IonButton, EstadoVacioComponent, MarcaComponent],
})
export class NoEncontradaPage {}
