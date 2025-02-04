import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: '',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'contact',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'beers',
        renderMode: RenderMode.Server,
    },
    {
        path: 'beers/:id',
        renderMode: RenderMode.Server,
    },
    {
        path: '**',
        renderMode: RenderMode.Server,
    },
];
