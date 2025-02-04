import { inject, Injectable, signal } from '@angular/core';
import { Beer } from '../../../model/beer';
import { BeerService } from '../../services/beer.service';

@Injectable()
export class BeerDetailStore {
    readonly #beerService = inject(BeerService);
    readonly #beer = signal<Beer | undefined>(undefined);
    readonly #loading = signal<boolean>(false);

    beer = this.#beer.asReadonly();
    loading = this.#loading.asReadonly();

    async init(id: string): Promise<void> {
        this.#loading.set(true);

        try {
            const beer = await this.#beerService.findOne(id);

            this.#beer.set(beer);
        } finally {
            this.#loading.set(false);
        }
    }
}
