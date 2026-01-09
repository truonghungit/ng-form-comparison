import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login/reactive',
    loadComponent: () => import('./login/reactive/login').then((m) => m.LoginReactiveForm),
  },
  {
    path: 'login/signal',
    loadComponent: () => import('./login/signal/login').then((m) => m.LoginSignalForm),
  },

  {
    path: 'register/reactive',
    loadComponent: () => import('./register/reactive/register').then((m) => m.RegisterReactiveForm),
  },
  {
    path: 'register/signal',
    loadComponent: () => import('./register/signal/register').then((m) => m.RegisterSignalForm),
  },
];
