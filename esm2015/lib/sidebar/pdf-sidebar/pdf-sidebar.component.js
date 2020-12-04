/**
 * @fileoverview added by tsickle
 * Generated from: lib/sidebar/pdf-sidebar/pdf-sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
export class PdfSidebarComponent {
    /**
     * @param {?} elementRef
     * @param {?} ref
     */
    constructor(elementRef, ref) {
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
    showToolbarWhenNecessary() {
        /** @type {?} */
        const element = (/** @type {?} */ (this.elementRef.nativeElement));
        /** @type {?} */
        const buttons = element.querySelectorAll('button');
        /** @type {?} */
        let visible = 0;
        for (let index = 0; index < buttons.length; index++) {
            /** @type {?} */
            const b = buttons.item(index);
            if (!b.hidden) {
                visible++;
            }
            index++;
        }
        this.hideSidebarToolbar = visible <= 1;
        this.ref.markForCheck();
    }
}
PdfSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-sidebar',
                template: "<div>\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\n</div>\n\n<ng-template #defaultSidebar>\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\n      <pdf-sidebar-toolbar></pdf-sidebar-toolbar>\n    </div>\n    <pdf-sidebar-content\n      [customThumbnail]=\"customThumbnail\"\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\n    ></pdf-sidebar-content>\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\n  </div>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfSidebarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
PdfSidebarComponent.propDecorators = {
    sidebarPositionTop: [{ type: Input }],
    sidebarVisible: [{ type: Input }],
    showSidebarButton: [{ type: Input }],
    customSidebar: [{ type: Input }],
    customThumbnail: [{ type: Input }],
    thumbnailDrawn: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1pbGphbm45OTUvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQThDLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE2QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVExTCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQXFCOUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQm5FLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3RCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQVN6QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRTVELHVCQUFrQixHQUFHLElBQUksQ0FBQztJQUU0QyxDQUFDOzs7O0lBRXZFLHdCQUF3Qjs7Y0FDdkIsT0FBTyxHQUFHLG1CQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFlOztjQUN0RCxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQzs7WUFDOUMsT0FBTyxHQUFHLENBQUM7UUFDZixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7a0JBQzdDLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsb3FCQUEyQzs7YUFFNUM7Ozs7WUFQbUYsVUFBVTtZQUFtRCxpQkFBaUI7OztpQ0FTL0osS0FBSzs2QkFHTCxLQUFLO2dDQUdMLEtBQUs7NEJBR0wsS0FBSzs4QkFHTCxLQUFLOzZCQUdMLE1BQU07Ozs7SUFmUCxpREFDa0M7O0lBRWxDLDZDQUM2Qjs7SUFFN0IsZ0RBQ2dDOztJQUVoQyw0Q0FDdUM7O0lBRXZDLDhDQUN5Qzs7SUFFekMsNkNBQ21FOztJQUVuRSxpREFBaUM7Ozs7O0lBRXJCLHlDQUE4Qjs7Ozs7SUFBRSxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24sIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1zaWRlYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNpZGViYXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIHNpZGViYXJQb3NpdGlvblRvcDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tU2lkZWJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XG5cbiAgcHVibGljIGhpZGVTaWRlYmFyVG9vbGJhciA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHVibGljIHNob3dUb29sYmFyV2hlbk5lY2Vzc2FyeSgpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYnV0dG9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgbGV0IHZpc2libGUgPSAwO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBidXR0b25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgYiA9IGJ1dHRvbnMuaXRlbShpbmRleCk7XG4gICAgICBpZiAoIWIuaGlkZGVuKSB7XG4gICAgICAgIHZpc2libGUrKztcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuaGlkZVNpZGViYXJUb29sYmFyID0gdmlzaWJsZSA8PSAxO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=