import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component'),
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component'),
    },
    {
        path: 'escape',
        loadComponent: () => import('./pages/escape/escape.component'),
    },
    {
        path: 'beers',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/beer-list/beer-list.component'),
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/beer-detail/beer-detail.component'),
            },
        ],
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    },
];
