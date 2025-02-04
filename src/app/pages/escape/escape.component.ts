import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-escape',
    templateUrl: './escape.component.html',
    styleUrl: './escape.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule],
})
export default class EscapeComponent {
    readonly #formBuilder = inject(FormBuilder);

    readonly codeControl = this.#formBuilder.control('');

    readonly escapedCode = signal<string | undefined>(undefined);

    constructor() {
        this.codeControl.valueChanges.pipe(takeUntilDestroyed()).subscribe((code) => {
            const escapedCode = code
                ?.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/@/g, '&commat;')
                .replace(/#/g, '&num;')
                .replace(/!/g, '&excl;')
                .replace(/\|/g, '&verbar;')
                .replace(/\//g, '&sol;')
                .replace(/\{/g, '&lcub;')
                .replace(/}/g, '&rcub;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
            this.escapedCode.set(escapedCode);
        });
    }
}
