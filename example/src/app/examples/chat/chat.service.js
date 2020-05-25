import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ChatService = class ChatService {
    constructor() {
        this.listOfMessages = [
            'Hello :smile:',
            'How r u? :bowtie:'
        ];
    }
    addMessage(message) {
        this.listOfMessages.push(message);
    }
    getMessages() {
        return this.listOfMessages;
    }
};
ChatService = __decorate([
    Injectable()
], ChatService);
export { ChatService };
