/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, ElementRef } from '@angular/core';
/**
 * @record
 */
function ZoomLevel() { }
if (false) {
    /** @type {?} */
    ZoomLevel.prototype.id;
    /** @type {?} */
    ZoomLevel.prototype.dataL10nId;
    /** @type {?} */
    ZoomLevel.prototype.dataL10nArgs;
    /** @type {?} */
    ZoomLevel.prototype.value;
    /** @type {?} */
    ZoomLevel.prototype.displayValue;
}
var PdfZoomDropdownComponent = /** @class */ (function () {
    function PdfZoomDropdownComponent(element) {
        this.element = element;
        this._zoomLevels = [];
    }
    Object.defineProperty(PdfZoomDropdownComponent.prototype, "zoomLevels", {
        // ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
        set: 
        // ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
        /**
         * @param {?} levels
         * @return {?}
         */
        function (levels) {
            var _this = this;
            this._zoomLevels = levels.map((/**
             * @param {?} l
             * @return {?}
             */
            function (l) { return _this.valueToZoomLevel(l); }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PdfZoomDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var callback = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            document.removeEventListener('localized', callback);
        });
        document.addEventListener('localized', callback);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    PdfZoomDropdownComponent.prototype.valueToZoomLevel = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.toString().endsWith('%')) {
            value = value.toString().replace('%', '');
            value = Number(value) / 100;
        }
        /** @type {?} */
        var numericalValue = Number(value);
        if (!numericalValue) {
            /** @type {?} */
            var v = String(value);
            return {
                id: this.snakeToCamel(value + 'Option'),
                value: v,
                dataL10nId: 'page_scale_' + v.replace('page-', ''),
                dataL10nArgs: undefined,
                displayValue: v,
            };
        }
        /** @type {?} */
        var percentage = Math.round(numericalValue * 100);
        return {
            id: "scale_" + percentage,
            value: String(numericalValue),
            dataL10nId: 'page_scale_percent',
            dataL10nArgs: "{ \"scale\": " + percentage + " }",
            displayValue: String(percentage) + '%',
        };
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    PdfZoomDropdownComponent.prototype.snakeToCamel = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        // idea found here: https://hisk.io/javascript-snake-to-camel/
        return str.replace(/([-_][a-z])/g, (/**
         * @param {?} group
         * @return {?}
         */
        function (group) { return group.toUpperCase().replace('-', '').replace('_', ''); }));
    };
    PdfZoomDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-zoom-dropdown',
                    template: "<span id=\"scaleSelectContainer\">\n  <select\n    id=\"scaleSelect\"\n    title=\"Zoom\"\n    data-l10n-id=\"zoom\"\n    #sizeSelector\n  >\n    <option *ngFor=\"let level of _zoomLevels\"\n      [id]=\"level.id\"\n      [attr.value]=\"level.value\"\n      [attr.data-l10n-id]=\"level.dataL10nId\"\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\n      {{level.displayValue}}\n    </option>\n    <option\n    id=\"customScaleOption\"\n    title=\"\"\n    value=\"custom\"\n    disabled=\"disabled\"\n    hidden=\"true\"\n  ></option>\n\n  </select>\n</span>\n",
                    styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid}#customScaleOption{display:none}"]
                }] }
    ];
    /** @nocollapse */
    PdfZoomDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PdfZoomDropdownComponent.propDecorators = {
        zoomLevels: [{ type: Input }],
        sizeSelector: [{ type: ViewChild, args: ['sizeSelector',] }]
    };
    return PdfZoomDropdownComponent;
}());
export { PdfZoomDropdownComponent };
if (false) {
    /** @type {?} */
    PdfZoomDropdownComponent.prototype._zoomLevels;
    /** @type {?} */
    PdfZoomDropdownComponent.prototype.sizeSelector;
    /**
     * @type {?}
     * @private
     */
    PdfZoomDropdownComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1pbGphbm45OTUvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWRyb3Bkb3duL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUF3QixLQUFLLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVySCx3QkFNQzs7O0lBTEMsdUJBQVc7O0lBQ1gsK0JBQW1COztJQUNuQixpQ0FBaUM7O0lBQ2pDLDBCQUFjOztJQUNkLGlDQUFxQjs7QUFFdkI7SUFrQkUsa0NBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFYaEMsZ0JBQVcsR0FBcUIsRUFBRSxDQUFDO0lBV0EsQ0FBQztJQVIzQyxzQkFDVyxnREFBVTtRQUhyQix1RkFBdUY7Ozs7Ozs7UUFFdkYsVUFDc0IsTUFBOEI7WUFEcEQsaUJBR0M7WUFEQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTs7OztJQU9ELDJDQUFROzs7SUFBUjs7WUFDUSxRQUFROzs7O1FBQUcsVUFBQyxDQUFDO1lBQ2pCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFBO1FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFTyxtREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLEtBQXNCO1FBQzdDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDN0I7O1lBQ0ssY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsRUFBRTs7Z0JBQ2IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkIsT0FBTztnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN2QyxLQUFLLEVBQUUsQ0FBQztnQkFDUixVQUFVLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDO2FBQ2hCLENBQUM7U0FDSDs7WUFDSyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ25ELE9BQU87WUFDTCxFQUFFLEVBQUUsV0FBUyxVQUFZO1lBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzdCLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsWUFBWSxFQUFFLGtCQUFjLFVBQVUsT0FBSTtZQUMxQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUc7U0FDdkMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLCtDQUFZOzs7OztJQUFwQixVQUFxQixHQUFXO1FBQzlCLDhEQUE4RDtRQUM5RCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYzs7OztRQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBckQsQ0FBcUQsRUFBQyxDQUFDO0lBQ3ZHLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsaWtCQUFpRDs7aUJBRWxEOzs7O2dCQWJrRixVQUFVOzs7NkJBbUIxRixLQUFLOytCQU1MLFNBQVMsU0FBQyxjQUFjOztJQTRGM0IsK0JBQUM7Q0FBQSxBQTVHRCxJQTRHQztTQXZHWSx3QkFBd0I7OztJQUVuQywrQ0FBMEM7O0lBUzFDLGdEQUE2Qzs7Ozs7SUFFakMsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBab29tTGV2ZWwge1xuICBpZDogc3RyaW5nO1xuICBkYXRhTDEwbklkOiBzdHJpbmc7XG4gIGRhdGFMMTBuQXJnczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB2YWx1ZTogc3RyaW5nO1xuICBkaXNwbGF5VmFsdWU6IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi16b29tLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZab29tRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBfem9vbUxldmVsczogQXJyYXk8Wm9vbUxldmVsPiA9IFtdO1xuICAvLyBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMC43NSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHpvb21MZXZlbHMobGV2ZWxzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KSB7XG4gICAgdGhpcy5fem9vbUxldmVscyA9IGxldmVscy5tYXAoKGwpID0+IHRoaXMudmFsdWVUb1pvb21MZXZlbChsKSk7XG4gIH1cblxuXG4gIEBWaWV3Q2hpbGQoJ3NpemVTZWxlY3RvcicpIHNpemVTZWxlY3RvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IChlKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2FsaXplZCcsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsdWVUb1pvb21MZXZlbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogWm9vbUxldmVsIHtcbiAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5lbmRzV2l0aCgnJScpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnJScsICcnKTtcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSAvIDEwMDtcbiAgICB9XG4gICAgY29uc3QgbnVtZXJpY2FsVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmICghbnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgIGNvbnN0IHYgPSBTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHRoaXMuc25ha2VUb0NhbWVsKHZhbHVlICsgJ09wdGlvbicpLFxuICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgZGF0YUwxMG5JZDogJ3BhZ2Vfc2NhbGVfJyArIHYucmVwbGFjZSgncGFnZS0nLCAnJyksXG4gICAgICAgIGRhdGFMMTBuQXJnczogdW5kZWZpbmVkLFxuICAgICAgICBkaXNwbGF5VmFsdWU6IHYsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZChudW1lcmljYWxWYWx1ZSAqIDEwMCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBgc2NhbGVfJHtwZXJjZW50YWdlfWAsXG4gICAgICB2YWx1ZTogU3RyaW5nKG51bWVyaWNhbFZhbHVlKSxcbiAgICAgIGRhdGFMMTBuSWQ6ICdwYWdlX3NjYWxlX3BlcmNlbnQnLFxuICAgICAgZGF0YUwxMG5BcmdzOiBgeyBcInNjYWxlXCI6ICR7cGVyY2VudGFnZX0gfWAsXG4gICAgICBkaXNwbGF5VmFsdWU6IFN0cmluZyhwZXJjZW50YWdlKSArICclJyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzbmFrZVRvQ2FtZWwoc3RyOiBzdHJpbmcpIHtcbiAgICAvLyBpZGVhIGZvdW5kIGhlcmU6IGh0dHBzOi8vaGlzay5pby9qYXZhc2NyaXB0LXNuYWtlLXRvLWNhbWVsL1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFstX11bYS16XSkvZywgKGdyb3VwKSA9PiBncm91cC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJy0nLCAnJykucmVwbGFjZSgnXycsICcnKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2UgdGhlIHdpZHRoIG9mIHRoZSB6b29tIGRyb3Bkb3duIERPTSBlbGVtZW50IGlmLCBhbmQgb25seSBpZiwgaXQnc1xuICAgKiB0b28gbmFycm93IHRvIGZpdCB0aGUgKmxvbmdlc3QqIG9mIHRoZSBsb2NhbGl6ZWQgc3RyaW5ncy5cbiAgICogQHByaXZhdGVcbiAgYXN5bmMgX2FkanVzdFNjYWxlV2lkdGgoKSB7XG4gICAgY29uc3QgeyBpdGVtcywgbDEwbiB9ID0gdGhpcztcblxuICAgIGNvbnN0IHByZWRlZmluZWRWYWx1ZXNQcm9taXNlID0gUHJvbWlzZS5hbGwoW1xuICAgICAgbDEwbi5nZXQoXCJwYWdlX3NjYWxlX2F1dG9cIiwgbnVsbCwgXCJBdXRvbWF0aWMgWm9vbVwiKSxcbiAgICAgIGwxMG4uZ2V0KFwicGFnZV9zY2FsZV9hY3R1YWxcIiwgbnVsbCwgXCJBY3R1YWwgU2l6ZVwiKSxcbiAgICAgIGwxMG4uZ2V0KFwicGFnZV9zY2FsZV9maXRcIiwgbnVsbCwgXCJQYWdlIEZpdFwiKSxcbiAgICAgIGwxMG4uZ2V0KFwicGFnZV9zY2FsZV93aWR0aFwiLCBudWxsLCBcIlBhZ2UgV2lkdGhcIiksXG4gICAgXSk7XG5cbiAgICAvLyBUaGUgdGVtcG9yYXJ5IGNhbnZhcyBpcyB1c2VkIHRvIG1lYXN1cmUgdGV4dCBsZW5ndGggaW4gdGhlIERPTS5cbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgUERGSlNEZXYgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAgIFBERkpTRGV2LnRlc3QoXCJNT1pDRU5UUkFMIHx8IEdFTkVSSUNcIilcbiAgICApIHtcbiAgICAgIGNhbnZhcy5tb3pPcGFxdWUgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7IGFscGhhOiBmYWxzZSB9KTtcblxuICAgIGF3YWl0IGFuaW1hdGlvblN0YXJ0ZWQ7XG4gICAgY29uc3QgeyBmb250U2l6ZSwgZm9udEZhbWlseSB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtcy5zY2FsZVNlbGVjdCk7XG4gICAgY3R4LmZvbnQgPSBgJHtmb250U2l6ZX0gJHtmb250RmFtaWx5fWA7XG5cbiAgICBsZXQgbWF4V2lkdGggPSAwO1xuICAgIGZvciAoY29uc3QgcHJlZGVmaW5lZFZhbHVlIG9mIGF3YWl0IHByZWRlZmluZWRWYWx1ZXNQcm9taXNlKSB7XG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSBjdHgubWVhc3VyZVRleHQocHJlZGVmaW5lZFZhbHVlKTtcbiAgICAgIGlmICh3aWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgIG1heFdpZHRoID0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG92ZXJmbG93ID0gU0NBTEVfU0VMRUNUX1dJRFRIIC0gU0NBTEVfU0VMRUNUX0NPTlRBSU5FUl9XSURUSDtcbiAgICBtYXhXaWR0aCArPSAxMCArIDEuNSAqIG92ZXJmbG93O1xuXG4gICAgaWYgKG1heFdpZHRoID4gU0NBTEVfU0VMRUNUX0NPTlRBSU5FUl9XSURUSCkge1xuICAgICAgaXRlbXMuc2NhbGVTZWxlY3Quc3R5bGUud2lkdGggPSBgJHttYXhXaWR0aCArIG92ZXJmbG93fXB4YDtcbiAgICAgIGl0ZW1zLnNjYWxlU2VsZWN0Q29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7bWF4V2lkdGh9cHhgO1xuICAgIH1cbiAgICAvLyBaZXJvaW5nIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGNhdXNlIEZpcmVmb3ggdG8gcmVsZWFzZSBncmFwaGljcyByZXNvdXJjZXNcbiAgICAvLyBpbW1lZGlhdGVseSwgd2hpY2ggY2FuIGdyZWF0bHkgcmVkdWNlIG1lbW9yeSBjb25zdW1wdGlvbi5cbiAgICBjYW52YXMud2lkdGggPSAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgIGNhbnZhcyA9IGN0eCA9IG51bGw7XG4gIH1cbiovXG59XG4iXX0=