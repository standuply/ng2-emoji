import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Ng2EmojiService } from 'ng2-emoji';
let HomeComponent = class HomeComponent {
    constructor() {
        this.myMessageString = '';
        this.emojis = Ng2EmojiService.emojis;
    }
    ngOnInit() {
        this.myMessageString = 'Hello, how are you? :smile: It was fun at the bowling game the other day :joy:';
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
