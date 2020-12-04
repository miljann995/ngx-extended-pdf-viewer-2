/**
 * @fileoverview added by tsickle
 * Generated from: lib/sidebar/pdf-sidebar/pdf-sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
var PdfSidebarComponent = /** @class */ (function () {
    function PdfSidebarComponent(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.sidebarVisible = true;
        this.showSidebarButton = true;
        this.thumbnailDrawn = new EventEmitter();
        this.hideSidebarToolbar = true;
    }
    /**
     * @return {?}
     */
    PdfSidebarComponent.prototype.showToolbarWhenNecessary = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = (/** @type {?} */ (this.elementRef.nativeElement));
        /** @type {?} */
        var buttons = element.querySelectorAll('button');
        /** @type {?} */
        var visible = 0;
        for (var index = 0; index < buttons.length; index++) {
            /** @type {?} */
            var b = buttons.item(index);
            if (!b.hidden) {
                visible++;
            }
            index++;
        }
        this.hideSidebarToolbar = visible <= 1;
        this.ref.markForCheck();
    };
    PdfSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-sidebar',
                    template: "<div>\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\n</div>\n\n<ng-template #defaultSidebar>\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\n      <pdf-sidebar-toolbar></pdf-sidebar-toolbar>\n    </div>\n    <pdf-sidebar-content\n      [customThumbnail]=\"customThumbnail\"\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\n    ></pdf-sidebar-content>\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\n  </div>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfSidebarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    PdfSidebarComponent.propDecorators = {
        sidebarPositionTop: [{ type: Input }],
        sidebarVisible: [{ type: Input }],
        showSidebarButton: [{ type: Input }],
        customSidebar: [{ type: Input }],
        customThumbnail: [{ type: Input }],
        thumbnailDrawn: [{ type: Output }]
    };
    return PdfSidebarComponent;
}());
export { PdfSidebarComponent };
if (false) {
    /** @type {?} */
    PdfSidebarComponent.prototype.sidebarPositionTop;
    /** @type {?} */
    PdfSidebarComponent.prototype.sidebarVisible;
    /** @type {?} */
    PdfSidebarComponent.prototype.showSidebarButton;
    /** @type {?} */
    PdfSidebarComponent.prototype.customSidebar;
    /** @type {?} */
    PdfSidebarComponent.prototype.customThumbnail;
    /** @type {?} */
    PdfSidebarComponent.prototype.thumbnailDrawn;
    /** @type {?} */
    PdfSidebarComponent.prototype.hideSidebarToolbar;
    /**
     * @type {?}
     * @private
     */
    PdfSidebarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    PdfSidebarComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1pbGphbm45OTUvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQThDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE2QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxTDtJQTBCRSw2QkFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQm5FLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3RCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQVN6QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRTVELHVCQUFrQixHQUFHLElBQUksQ0FBQztJQUU0QyxDQUFDOzs7O0lBRXZFLHNEQUF3Qjs7O0lBQS9COztZQUNRLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBZTs7WUFDdEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7O1lBQzlDLE9BQU8sR0FBRyxDQUFDO1FBQ2YsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2dCQUM3QyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG9xQkFBMkM7O2lCQUU1Qzs7OztnQkFQbUYsVUFBVTtnQkFBbUQsaUJBQWlCOzs7cUNBUy9KLEtBQUs7aUNBR0wsS0FBSztvQ0FHTCxLQUFLO2dDQUdMLEtBQUs7a0NBR0wsS0FBSztpQ0FHTCxNQUFNOztJQXFCVCwwQkFBQztDQUFBLEFBMUNELElBMENDO1NBckNZLG1CQUFtQjs7O0lBQzlCLGlEQUNrQzs7SUFFbEMsNkNBQzZCOztJQUU3QixnREFDZ0M7O0lBRWhDLDRDQUN1Qzs7SUFFdkMsOENBQ3lDOztJQUV6Qyw2Q0FDbUU7O0lBRW5FLGlEQUFpQzs7Ozs7SUFFckIseUNBQThCOzs7OztJQUFFLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGRmVGh1bWJuYWlsRHJhd25FdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cy9wZGYtdGh1bWJuYWlsLWRyYXduLWV2ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2lkZWJhci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZlNpZGViYXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2lkZWJhclBvc2l0aW9uVG9wOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NpZGViYXJCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21TaWRlYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB0aHVtYm5haWxEcmF3biA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmVGh1bWJuYWlsRHJhd25FdmVudD4oKTtcblxuICBwdWJsaWMgaGlkZVNpZGViYXJUb29sYmFyID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBidXR0b25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBsZXQgdmlzaWJsZSA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJ1dHRvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBiID0gYnV0dG9ucy5pdGVtKGluZGV4KTtcbiAgICAgIGlmICghYi5oaWRkZW4pIHtcbiAgICAgICAgdmlzaWJsZSsrO1xuICAgICAgfVxuICAgICAgaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5oaWRlU2lkZWJhclRvb2xiYXIgPSB2aXNpYmxlIDw9IDE7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==