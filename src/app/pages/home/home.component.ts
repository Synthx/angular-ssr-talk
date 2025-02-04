import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
})
export default class HomeComponent implements OnInit {
    readonly #seoService = inject(SeoService);
    readonly #platformId = inject(PLATFORM_ID);

    ngOnInit(): void {
        if (isPlatformServer(this.#platformId)) {
            console.log('log into console and not browser');
        }

        if (isPlatformBrowser(this.#platformId)) {
            console.log('log into browser and not console');
        }

        this.#seoService.setTitle($localize`Des bières et des bières`);
        this.#seoService.setDescription(
            $localize`Découvrez des bières aux arômes incroyables qui vont vous rappeler votre enfance tah l'époque`,
        );
    }
}
