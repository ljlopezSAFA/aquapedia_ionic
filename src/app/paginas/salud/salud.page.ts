import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonChip, IonIcon, IonLabel, IonButton,
         IonAccordionGroup, IonAccordion, IonItem, IonBadge, IonProgressBar } from '@ionic/angular';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonChip, IonIcon, IonLabel, IonButton,
            IonAccordionGroup, IonAccordion, IonItem, IonBadge, IonProgressBar],
})
export class SaludPage {
  sintomas = [
    { nombre: 'Puntos blancos', marcado: false },
    { nombre: 'Se rasca contra las piedras', marcado: false },
    { nombre: 'Aletas rotas', marcado: false },
    { nombre: 'Respira rápido', marcado: false },
    { nombre: 'Nada de forma rara', marcado: false },
    { nombre: 'Vientre hinchado', marcado: false },
    { nombre: 'Apatía', marcado: false },
    { nombre: 'Manchas en la piel', marcado: false },
  ];

  // Resultados de maqueta: en la entrega 2 vendrán de POST /api/v1/diagnosticos
  resultados = [
    { enfermedad: 'Punto blanco (ictio)', probabilidad: 88, nivel: 'Probable',
      tratamiento: 'Subir poco a poco la temperatura y usar un tratamiento específico.', cobre: true },
    { enfermedad: 'Velvet', probabilidad: 45, nivel: 'Posible',
      tratamiento: 'Oscurecer el acuario y tratar con un antiparasitario.', cobre: true },
    { enfermedad: 'Estrés por calidad del agua', probabilidad: 30, nivel: 'Poco probable',
      tratamiento: 'Medir amoníaco y nitritos y hacer un cambio de agua.', cobre: false },
  ];

  verResultados = false;

  get numMarcados() {
    return this.sintomas.filter(s => s.marcado).length;
  }

  alternar(sintoma: { nombre: string; marcado: boolean }) {
    sintoma.marcado = !sintoma.marcado;
    this.verResultados = false;
  }

  colorDe(probabilidad: number) {
    return probabilidad > 70 ? 'danger' : probabilidad > 40 ? 'warning' : 'medium';
  }
}
