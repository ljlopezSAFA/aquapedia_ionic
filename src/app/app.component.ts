import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {addIcons} from "ionicons";
import {water} from "ionicons/icons";
import {TabsPage} from "./paginas/tabs/tabs.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, TabsPage],
})
export class AppComponent {
  constructor() {
    addIcons({ water });
  }
}
