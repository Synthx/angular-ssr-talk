import { inject, Injectable, signal } from '@angular/core';
import { Beer } from '../../../model/beer';
import { BeerService } from '../../services/beer.service';

@Injectable()
export class BeerListStore {
    readonly #beerService = inject(BeerService);

    readonly #loading = signal(false);
    readonly #beers = signal<Beer[]>([]);

    loading = this.#loading.asReadonly();
    beers = this.#beers.asReadonly();

    async init() {
        this.#loading.set(true);

        try {
            const beers = await this.#beerService.findAll();
            this.#beers.set(beers);
        } finally {
            this.#loading.set(false);
        }
    }
}
