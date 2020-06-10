import { Pipe } from '@angular/core';
import { Ng2EmojiService } from './ng2-emoji.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var Ng2EmojiPipe = /** @class */ (function () {
    function Ng2EmojiPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    Ng2EmojiPipe.prototype.transform = function (value, args) {
        value = value + ''; // make sure it's a string
        return this._sanitizer.bypassSecurityTrustHtml(value.replace(Ng2EmojiService.emojisRegex, function (match, text) {
            return "<i class=\"emoji icon-ng2_em_" + text + "\" title=\":" + text + ":\" style=\"display:inline-block;\"></i>";
        }));
    };
    Ng2EmojiPipe.ɵfac = function Ng2EmojiPipe_Factory(t) { return new (t || Ng2EmojiPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    Ng2EmojiPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "emojis", type: Ng2EmojiPipe, pure: true });
    return Ng2EmojiPipe;
}());
export { Ng2EmojiPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2EmojiPipe, [{
        type: Pipe,
        args: [{
                name: 'emojis'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWVtb2ppLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZW1vamkvIiwic291cmNlcyI6WyJsaWIvbmcyLWVtb2ppLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFHdEQ7SUFLRSxzQkFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUFFLENBQUM7SUFFL0MsZ0NBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFXO1FBQ2xDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsMEJBQTBCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxLQUFLLEVBQUUsSUFBSTtZQUM3RyxPQUFPLGtDQUErQixJQUFJLG9CQUFhLElBQUksNkNBQXVDLENBQUM7UUFDckcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7NEVBVFUsWUFBWTtpRUFBWixZQUFZO3VCQVB6QjtDQWlCQyxBQWJELElBYUM7U0FWWSxZQUFZO2tEQUFaLFlBQVk7Y0FIeEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJFbW9qaVNlcnZpY2UgfSBmcm9tICcuL25nMi1lbW9qaS5zZXJ2aWNlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZW1vamlzJ1xufSlcbmV4cG9ydCBjbGFzcyBOZzJFbW9qaVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKXt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogU2FmZUh0bWwge1xuICAgIHZhbHVlID0gdmFsdWUgKyAnJzsgLy8gbWFrZSBzdXJlIGl0J3MgYSBzdHJpbmdcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlLnJlcGxhY2UoTmcyRW1vamlTZXJ2aWNlLmVtb2ppc1JlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHRleHQpIHtcbiAgICAgIHJldHVybiBgPGkgY2xhc3M9XCJlbW9qaSBpY29uLW5nMl9lbV8ke3RleHR9XCIgdGl0bGU9XCI6JHt0ZXh0fTpcIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvaT5gO1xuICAgIH0pKTtcbiAgfVxufVxuIl19