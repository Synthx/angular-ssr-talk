import { inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'localeCurrency',
})
export class LocaleCurrencyPipe implements PipeTransform {
    readonly #locale = inject(LOCALE_ID);

    transform(value: number): string {
        return Intl.NumberFormat(this.#locale, {
            style: 'currency',
            currency: 'EUR',
        }).format(value);
    }
}
