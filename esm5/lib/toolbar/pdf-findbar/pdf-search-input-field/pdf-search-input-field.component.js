/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PdfFindbarService } from './../pdf-findbar-service';
import { Component } from '@angular/core';
var PdfSearchInputFieldComponent = /** @class */ (function () {
    function PdfSearchInputFieldComponent(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
    PdfSearchInputFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-search-input-field',
                    template: "<input [class.hidden]=\"!pdfFindbarService.individualWordsMode\"\n  autocomplete=\"search-input-field\"\n  id=\"findInput\"\n  class=\"toolbarField\"\n  title=\"Find\"\n  [placeholder]=\"'Find in document\u2026'\"\n  data-l10n-id=\"find_input\"\n  name=\"search-input-field\"\n/>\n<textarea\n  [class.hidden]=\"pdfFindbarService.individualWordsMode\"\n  id=\"findInputMultiline\"\n  type=\"checkbox\"\n  class=\"toolbarField\"\n  placeholder=\"Multiple search terms. Each line is a search term.\"\n  data-l10n-id=\"find_input_line_by_line\"\n  lines=\"3\"\n></textarea>\n",
                    styles: ["textarea{width:200px;height:3.5em}textarea::-webkit-input-placeholder{color:#bfbfbf}textarea::-moz-placeholder{font-style:italic}textarea:-ms-input-placeholder{font-style:italic}textarea::-ms-input-placeholder{font-style:italic}textarea::placeholder{font-style:italic}"]
                }] }
    ];
    /** @nocollapse */
    PdfSearchInputFieldComponent.ctorParameters = function () { return [
        { type: PdfFindbarService }
    ]; };
    return PdfSearchInputFieldComponent;
}());
export { PdfSearchInputFieldComponent };
if (false) {
    /** @type {?} */
    PdfSearchInputFieldComponent.prototype.pdfFindbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWlsamFubjk5NS9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBTUUsc0NBQW1CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQzs7Z0JBTjVELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx1a0JBQXNEOztpQkFFdkQ7Ozs7Z0JBUFEsaUJBQWlCOztJQVUxQixtQ0FBQztDQUFBLEFBUEQsSUFPQztTQUZZLDRCQUE0Qjs7O0lBQzNCLHlEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBkZkZpbmRiYXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9wZGYtZmluZGJhci1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1zZWFyY2gtaW5wdXQtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHBkZkZpbmRiYXJTZXJ2aWNlOiBQZGZGaW5kYmFyU2VydmljZSkge31cbn1cbiJdfQ==