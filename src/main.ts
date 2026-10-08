import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules,
         withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Estilo iOS en todos los dispositivos y botón atrás en español
    provideIonicAngular({ mode: 'ios', backButtonText: 'Atrás' }),
    // withComponentInputBinding: los parámetros de la ruta (:id) llegan como input()
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
  ],
});
