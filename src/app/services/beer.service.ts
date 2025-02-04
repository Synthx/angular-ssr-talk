import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Beer } from '../../model/beer';

@Injectable({
    providedIn: 'root',
})
export class BeerService {
    readonly #httpClient = inject(HttpClient);

    async findAll(): Promise<Beer[]> {
        return lastValueFrom(this.#httpClient.get<Beer[]>('/api/beers'));
    }

    async findOne(id: string): Promise<Beer> {
        return lastValueFrom(this.#httpClient.get<Beer>(`/api/beers/${id}`));
    }
}
