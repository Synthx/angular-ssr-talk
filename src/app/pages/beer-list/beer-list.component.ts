import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { SeoService } from '../../services/seo.service';
import { BeerListStore } from './beer-list.store';

@Component({
    selector: 'app-beer-list',
    templateUrl: './beer-list.component.html',
    styleUrl: './beer-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [BeerCardComponent],
    providers: [BeerListStore],
})
export default class BeerListComponent implements OnInit {
    readonly #store = inject(BeerListStore);
    readonly #seoService = inject(SeoService);

    beers = this.#store.beers;
    loading = this.#store.loading;

    async ngOnInit() {
        await this.#store.init();

        this.#seoService.setTitle('Trouves des bières près de chez toi');
        this.#seoService.setDescription(
            '1 bière, 2 bières, 3 bières, 4 bières, 5 bières, 6 bières, 7 bières, 8 bières, 9 bières, 10 bières, on peut quand même boire 10 bières ?',
        );
    }
}
