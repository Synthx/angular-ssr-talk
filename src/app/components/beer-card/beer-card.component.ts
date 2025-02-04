import { PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Beer } from '../../../model/beer';
import { LocaleCurrencyPipe } from '../../pipes/locale-currency.pipe';

@Component({
    selector: 'app-beer-card',
    templateUrl: './beer-card.component.html',
    styleUrl: './beer-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, LocaleCurrencyPipe, PercentPipe],
})
export class BeerCardComponent {
    readonly beer = input.required<Beer>();
}
