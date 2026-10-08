import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBadge,
         IonSearchbar, IonChip } from '@ionic/angular';
import { ESPECIES } from '../../datos/especies';
import { Especie } from '../../modelos/especie';
import { TarjetaEspecieComponent } from '../../componentes/tarjeta-especie/tarjeta-especie.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.page.html',
  styleUrls: ['./especies.page.scss'],
  imports: [FormsModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,
            IonIcon, IonBadge, IonSearchbar, IonChip, TarjetaEspecieComponent, EstadoVacioComponent],
})
export class EspeciesPage {
  especies = ESPECIES;
  busqueda = '';
  filtro = 'TODAS';

  filtros = [
    { valor: 'TODAS', texto: 'Todas' },
    { valor: 'PEZ', texto: 'Peces' },
    { valor: 'PLANTA', texto: 'Plantas' },
    { valor: 'INVERTEBRADO', texto: 'Invertebrados' },
  ];

  // Especie destacada: solo se muestra si no se está buscando ni filtrando
  get destacada(): Especie {
    return this.especies[0];
  }

  get hayFiltros(): boolean {
    return this.busqueda !== '' || this.filtro !== 'TODAS';
  }

  get especiesVisibles(): Especie[] {
    const texto = this.busqueda.toLowerCase();
    return this.especies.filter(e =>
      (this.filtro === 'TODAS' || e.tipo === this.filtro) &&
      (e.nombreComun.toLowerCase().includes(texto) || e.nombreCientifico.toLowerCase().includes(texto))
    );
  }

  limpiar() {
    this.busqueda = '';
    this.filtro = 'TODAS';
  }
}
