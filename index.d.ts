declare module "ng2-emoji.service" {
    export class Ng2EmojiService {
        static emojis: Array<string>;
        static emojisRegex: RegExp;
        constructor();
    }
}
declare module "ng2-emoji.pipe" {
    import { PipeTransform } from '@angular/core';
    import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
    export class Ng2EmojiPipe implements PipeTransform {
        private _sanitizer;
        constructor(_sanitizer: DomSanitizer);
        transform(value: string, args: any[]): SafeHtml;
    }
}
declare module "ng2-emoji.module" {
    import { ModuleWithProviders } from '@angular/core';
    export * from "ng2-emoji.pipe";
    export * from "ng2-emoji.service";
    export class Ng2EmojiModule {
        static forRoot(): ModuleWithProviders<Ng2EmojiModule>;
    }
}
