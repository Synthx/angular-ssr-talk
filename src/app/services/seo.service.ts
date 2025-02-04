import { inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { environment } from '../../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class SeoService {
    readonly #meta = inject(Meta);
    readonly #title = inject(Title);

    setDescription(description: string): void {
        this.updateMetaTags([
            { name: 'description', content: description },
            { property: 'og:description', content: description },
        ]);
    }

    setTitle(pageTitle?: string): void {
        let title = `${environment.name}`;
        if (pageTitle) {
            title = `${pageTitle} | ${title}`;
        }

        this.#title.setTitle(title);
        this.#meta.updateTag({ property: 'og:title', content: title });
    }

    updateMetaTags(tags: MetaDefinition[]): void {
        for (const tag of tags) {
            this.#meta.updateTag(tag);
        }
    }
}
