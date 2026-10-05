import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.page.html',
  styleUrls: ['./especies.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EspeciesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
