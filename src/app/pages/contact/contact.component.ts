import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowLeftIconComponent } from '../../components/icon/arrow-left-icon/arrow-left-icon.component';
import { SeoService } from '../../services/seo.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ArrowLeftIconComponent, RouterLink],
})
export default class ContactComponent implements OnInit {
    readonly #seoService = inject(SeoService);

    ngOnInit(): void {
        this.#seoService.setTitle($localize`Prendre contact`);
        this.#seoService.setDescription('');
    }
}
