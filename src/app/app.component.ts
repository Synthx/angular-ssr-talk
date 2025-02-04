import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../environment/environment';
import { SeoService } from './services/seo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, RouterLink],
})
export class AppComponent implements OnInit {
    readonly #seoService = inject(SeoService);

    ngOnInit(): void {
        this.#seoService.updateMetaTags([
            {
                name: 'author',
                content: 'Remi Taniel',
            },
            {
                name: 'keywords',
                content: $localize`Bières, Alcool, Cool, Pinpin, Jetdev, Fuck-Lens`,
            },
            {
                property: 'og:site_name',
                content: environment.name,
            },
            {
                property: 'og:url',
                content: environment.url,
            },
            {
                property: 'og:type',
                content: 'website',
            },
        ]);
    }
}
