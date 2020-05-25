import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChatComponent = class ChatComponent {
    constructor(chat) {
        this.chat = chat;
        this.myMessageString = ':smile:';
    }
    ngOnInit() {
        this.messages = this.chat.getMessages();
    }
    sendMessage(f) {
        const value = f.value;
        console.log(value.message);
        this.messages.push(value.message);
        f.reset();
    }
};
ChatComponent = __decorate([
    Component({
        selector: 'app-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css']
    })
], ChatComponent);
export { ChatComponent };
