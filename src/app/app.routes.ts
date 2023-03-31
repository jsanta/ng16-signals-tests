import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'default',
    loadChildren: () => import('./pages/default/default.module').then(m => m.DefaultModule)
  },
  {
    path: 'on-push',
    loadChildren: () => import('./pages/on-push/on-push.module').then(m => m.OnPushModule)
  },
  {
    path: 'no-signals',
    loadChildren: () => import('./pages/no-signals/no-signals.module').then(m => m.NoSignalsModule)
  },
  {
    path: 'with-signals',
    loadChildren: () => import('./pages/with-signals/with-signals.module').then(m => m.WithSignalsModule)
  }
];
