import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { Ng2EmojiService } from './ng2-emoji.service';
import { DomSanitizer } from '@angular/platform-browser';
let Ng2EmojiPipe = class Ng2EmojiPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, args) {
        value = value + ''; // make sure it's a string
        return this._sanitizer.bypassSecurityTrustHtml(value.replace(Ng2EmojiService.emojisRegex, function (match, text) {
            return `<i class="emoji icon-ng2_em_${text}" title=":${text}:" style="display:inline-block;"></i>`;
        }));
    }
};
Ng2EmojiPipe = __decorate([
    Pipe({
        name: 'emojis'
    }),
    __metadata("design:paramtypes", [DomSanitizer])
], Ng2EmojiPipe);
export { Ng2EmojiPipe };
