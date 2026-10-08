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
      { path: 'especies',
        loadComponent: () => import('./paginas/especies/especies.page').then(m => m.EspeciesPage) },
      { path: 'especies/:id',
        loadComponent: () => import('./paginas/especie-detalle/especie-detalle.page').then(m => m.EspecieDetallePage) },
      { path: 'acuarios',
        loadComponent: () => import('./paginas/acuarios/acuarios.page').then(m => m.AcuariosPage) },
      { path: 'acuarios/nuevo',
        loadComponent: () => import('./paginas/acuario-nuevo/acuario-nuevo.page').then(m => m.AcuarioNuevoPage) },
      { path: 'acuarios/:id',
        loadComponent: () => import('./paginas/acuario-detalle/acuario-detalle.page').then(m => m.AcuarioDetallePage) },
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
