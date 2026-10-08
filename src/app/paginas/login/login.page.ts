import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonInput, IonInputPasswordToggle, IonButton, IonIcon, IonRouterLink } from '@ionic/angular';
import { MarcaComponent } from '../../componentes/marca/marca.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonInputPasswordToggle, IonButton, IonIcon, RouterLink, IonRouterLink,
            MarcaComponent],
})
export class LoginPage {
  sinFoto = false;
}
