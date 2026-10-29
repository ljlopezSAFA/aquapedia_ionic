import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ── Fuera del menú ─────────────────────────────────────────────
  { path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then(m => m.LoginPage) },

  // ── Dentro del menú inferior ───────────────────────────────────
  { path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      // Pestaña Especies (¡rutas fijas antes que :id!)
      { path: 'especies',
        loadComponent: () => import('./paginas/especies/especies.page').then(m => m.EspeciesPage) },
      { path: 'especies/buscar',
        loadComponent: () => import('./paginas/buscador/buscador.page').then(m => m.BuscadorPage) },
      { path: 'especies/:id',
        loadComponent: () => import('./paginas/especie-detalle/especie-detalle.page').then(m => m.EspecieDetallePage) },

      // Pestaña Acuarios
      { path: 'acuarios',
        loadComponent: () => import('./paginas/acuarios/acuarios.page').then(m => m.AcuariosPage) },
      { path: 'acuarios/configurador',
        loadComponent: () => import('./paginas/configurador/configurador.page').then(m => m.ConfiguradorPage) },
      { path: 'acuarios/nuevo',
        loadComponent: () => import('./paginas/acuario-nuevo/acuario-nuevo.page').then(m => m.AcuarioNuevoPage) },
      { path: 'acuarios/:id',
        loadComponent: () => import('./paginas/acuario-detalle/acuario-detalle.page').then(m => m.AcuarioDetallePage) },

      // Pestaña Equipo
      { path: 'equipo',
        loadComponent: () => import('./paginas/equipo/equipo.page').then(m => m.EquipoPage) },
      { path: 'equipo/:id',
        loadComponent: () => import('./paginas/equipo-detalle/equipo-detalle.page').then(m => m.EquipoDetallePage) },

      // Pestañas Salud y Perfil
      { path: 'salud',
        loadComponent: () => import('./paginas/salud/salud.page').then(m => m.SaludPage) },
      { path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then(m => m.PerfilPage) },

      { path: '', redirectTo: 'especies', pathMatch: 'full' },
    ],
  },

  // ── Pantalla completa, sin menú ────────────────────────────────
  { path: 'notificaciones',
    loadComponent: () => import('./paginas/notificaciones/notificaciones.page').then(m => m.NotificacionesPage) },

  // ── Cualquier otra dirección: SIEMPRE LA ÚLTIMA ────────────────
  { path: '**',
    loadComponent: () => import('./paginas/no-encontrada/no-encontrada.page').then(m => m.NoEncontradaPage) },
];
