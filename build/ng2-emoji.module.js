var Ng2EmojiModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2EmojiPipe } from './ng2-emoji.pipe';
import { Ng2EmojiService } from './ng2-emoji.service';
export * from './ng2-emoji.pipe';
export * from './ng2-emoji.service';
let Ng2EmojiModule = Ng2EmojiModule_1 = class Ng2EmojiModule {
    static forRoot() {
        return {
            ngModule: Ng2EmojiModule_1,
            providers: [Ng2EmojiService]
        };
    }
};
Ng2EmojiModule = Ng2EmojiModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            Ng2EmojiPipe
        ],
        exports: [
            Ng2EmojiPipe
        ]
    })
], Ng2EmojiModule);
export { Ng2EmojiModule };
