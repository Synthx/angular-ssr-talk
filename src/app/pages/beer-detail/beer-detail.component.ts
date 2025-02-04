import { PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, input, OnInit } from '@angular/core';
import { LocaleCurrencyPipe } from '../../pipes/locale-currency.pipe';
import { SeoService } from '../../services/seo.service';
import { BeerDetailStore } from './beer-detail.store';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrl: './beer-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PercentPipe, LocaleCurrencyPipe],
    providers: [BeerDetailStore],
})
export default class BeerDetailComponent implements OnInit {
    readonly id = input.required<string>();

    readonly #store = inject(BeerDetailStore);
    readonly #seoService = inject(SeoService);

    beer = this.#store.beer;

    constructor() {
        effect(() => {
            const beer = this.beer();
            if (beer) {
                this.#seoService.setTitle(beer.name);
                this.#seoService.setDescription(beer.description);
            }
        });
    }

    async ngOnInit() {
        await this.#store.init(this.id());
    }
}
