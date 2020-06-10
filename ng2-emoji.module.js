import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2EmojiPipe } from './ng2-emoji.pipe';
import { Ng2EmojiService } from './ng2-emoji.service';
import * as i0 from "@angular/core";
export * from './ng2-emoji.pipe';
export * from './ng2-emoji.service';
export class Ng2EmojiModule {
    static forRoot() {
        return {
            ngModule: Ng2EmojiModule,
            providers: [Ng2EmojiService]
        };
    }
}
Ng2EmojiModule.ɵmod = i0.ɵɵdefineNgModule({ type: Ng2EmojiModule });
Ng2EmojiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function Ng2EmojiModule_Factory(t) { return new (t || Ng2EmojiModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Ng2EmojiModule, { declarations: [Ng2EmojiPipe], imports: [CommonModule], exports: [Ng2EmojiPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2EmojiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    Ng2EmojiPipe
                ],
                exports: [
                    Ng2EmojiPipe
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWVtb2ppLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZzItZW1vamkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV0RCxjQUFjLGtCQUFrQixDQUFDO0FBQ2pDLGNBQWMscUJBQXFCLENBQUM7QUFhcEMsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOztrREFOVSxjQUFjOzJHQUFkLGNBQWMsa0JBVmhCO1lBQ1AsWUFBWTtTQUNiO3dGQVFVLGNBQWMsbUJBTnZCLFlBQVksYUFIWixZQUFZLGFBTVosWUFBWTtrREFHSCxjQUFjO2NBWDFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZzJFbW9qaVBpcGUgfSBmcm9tICcuL25nMi1lbW9qaS5waXBlJztcbmltcG9ydCB7IE5nMkVtb2ppU2VydmljZSB9IGZyb20gJy4vbmcyLWVtb2ppLnNlcnZpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL25nMi1lbW9qaS5waXBlJztcbmV4cG9ydCAqIGZyb20gJy4vbmcyLWVtb2ppLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nMkVtb2ppUGlwZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmcyRW1vamlQaXBlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRW1vamlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nMkVtb2ppTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZzJFbW9qaU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW05nMkVtb2ppU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXX0=