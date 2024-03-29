/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PdfFindbarService } from './../pdf-findbar-service';
import { Component } from '@angular/core';
export class PdfSearchInputFieldComponent {
    /**
     * @param {?} pdfFindbarService
     */
    constructor(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
}
PdfSearchInputFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-search-input-field',
                template: "<input [class.hidden]=\"!pdfFindbarService.individualWordsMode\"\n  autocomplete=\"search-input-field\"\n  id=\"findInput\"\n  class=\"toolbarField\"\n  title=\"Find\"\n  [placeholder]=\"'Find in document\u2026'\"\n  data-l10n-id=\"find_input\"\n  name=\"search-input-field\"\n/>\n<textarea\n  [class.hidden]=\"pdfFindbarService.individualWordsMode\"\n  id=\"findInputMultiline\"\n  type=\"checkbox\"\n  class=\"toolbarField\"\n  placeholder=\"Multiple search terms. Each line is a search term.\"\n  data-l10n-id=\"find_input_line_by_line\"\n  lines=\"3\"\n></textarea>\n",
                styles: ["textarea{width:200px;height:3.5em}textarea::-webkit-input-placeholder{color:#bfbfbf}textarea::-moz-placeholder{font-style:italic}textarea:-ms-input-placeholder{font-style:italic}textarea::-ms-input-placeholder{font-style:italic}textarea::placeholder{font-style:italic}"]
            }] }
];
/** @nocollapse */
PdfSearchInputFieldComponent.ctorParameters = () => [
    { type: PdfFindbarService }
];
if (false) {
    /** @type {?} */
    PdfSearchInputFieldComponent.prototype.pdfFindbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWlsamFubjk5NS9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT2xELE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFDdkMsWUFBbUIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDOzs7WUFONUQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHVrQkFBc0Q7O2FBRXZEOzs7O1lBUFEsaUJBQWlCOzs7O0lBU1oseURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGRmRmluZGJhclNlcnZpY2UgfSBmcm9tICcuLy4uL3BkZi1maW5kYmFyLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXNlYXJjaC1pbnB1dC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtc2VhcmNoLWlucHV0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGRmRmluZGJhclNlcnZpY2U6IFBkZkZpbmRiYXJTZXJ2aWNlKSB7fVxufVxuIl19