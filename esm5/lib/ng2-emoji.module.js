import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2EmojiPipe } from './ng2-emoji.pipe';
import { Ng2EmojiService } from './ng2-emoji.service';
import * as i0 from "@angular/core";
export * from './ng2-emoji.pipe';
export * from './ng2-emoji.service';
var Ng2EmojiModule = /** @class */ (function () {
    function Ng2EmojiModule() {
    }
    Ng2EmojiModule.forRoot = function () {
        return {
            ngModule: Ng2EmojiModule,
            providers: [Ng2EmojiService]
        };
    };
    Ng2EmojiModule.ɵmod = i0.ɵɵdefineNgModule({ type: Ng2EmojiModule });
    Ng2EmojiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function Ng2EmojiModule_Factory(t) { return new (t || Ng2EmojiModule)(); }, imports: [[
                CommonModule
            ]] });
    return Ng2EmojiModule;
}());
export { Ng2EmojiModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWVtb2ppLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZzItZW1vamkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV0RCxjQUFjLGtCQUFrQixDQUFDO0FBQ2pDLGNBQWMscUJBQXFCLENBQUM7QUFFcEM7SUFBQTtLQWtCQztJQU5RLHNCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO3NEQU5VLGNBQWM7K0dBQWQsY0FBYyxrQkFWaEI7Z0JBQ1AsWUFBWTthQUNiO3lCQVhIO0NBMEJDLEFBbEJELElBa0JDO1NBUFksY0FBYzt3RkFBZCxjQUFjLG1CQU52QixZQUFZLGFBSFosWUFBWSxhQU1aLFlBQVk7a0RBR0gsY0FBYztjQVgxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmcyRW1vamlQaXBlIH0gZnJvbSAnLi9uZzItZW1vamkucGlwZSc7XG5pbXBvcnQgeyBOZzJFbW9qaVNlcnZpY2UgfSBmcm9tICcuL25nMi1lbW9qaS5zZXJ2aWNlJztcblxuZXhwb3J0ICogZnJvbSAnLi9uZzItZW1vamkucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL25nMi1lbW9qaS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZzJFbW9qaVBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nMkVtb2ppUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkVtb2ppTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZzJFbW9qaU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmcyRW1vamlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtOZzJFbW9qaVNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl19