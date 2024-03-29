/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-toolbar/pdf-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class PdfToolbarComponent {
    constructor() {
        this.mobileFriendlyZoomScale = 1;
        this.primaryMenuVisible = true;
        this.showBookmarkButton = true;
        this.showDownloadButton = true;
        this.showFindButton = undefined;
        this.showHandToolButton = true;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showPagingButtons = true;
        this.showPresentationModeButton = false;
        this.showRotateButton = true;
        this.showSecondaryToolbarButton = true;
        this.showSidebarButton = true;
        this.showZoomButtons = true;
        this.textLayer = undefined;
        this.toolbarPaddingTop = '0px';
        this.toolbarWidth = '100%';
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    }
}
PdfToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-toolbar',
                template: "<div class=\"toolbar\" [class.invisible]=\"!primaryMenuVisible\" >\n  <div\n    id=\"toolbarContainer\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'left center'\"\n    [style.width]=\"toolbarWidth\"\n    [style.paddingTop]=\"toolbarPaddingTop\"\n  >\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\n    <div id=\"loadingBar\">\n      <div class=\"progress\"><div class=\"glimmer\"></div></div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultToolbar>\n  <div id=\"toolbarViewer\">\n    <div id=\"toolbarViewerLeft\">\n      <pdf-toggle-sidebar [showSidebarButton]=\"showSidebarButton\"></pdf-toggle-sidebar>\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\"></pdf-find-button>\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\n    </div>\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" [zoomLevels]=\"zoomLevels\"></pdf-zoom-toolbar>\n    <div id=\"toolbarViewerRight\">\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"true\" [counterClockwise]=\"false\"></pdf-rotate-page>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"false\" [counterClockwise]=\"true\"></pdf-rotate-page>\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\n      <pdf-bookmark [showBookmarkButton]=\"showBookmarkButton\"></pdf-bookmark>\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"></pdf-toggle-secondary-toolbar>\n    </div>\n   </div>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfToolbarComponent.ctorParameters = () => [];
PdfToolbarComponent.propDecorators = {
    customToolbar: [{ type: Input }],
    mobileFriendlyZoomScale: [{ type: Input }],
    primaryMenuVisible: [{ type: Input }],
    showBookmarkButton: [{ type: Input }],
    showDownloadButton: [{ type: Input }],
    showFindButton: [{ type: Input }],
    showHandToolButton: [{ type: Input }],
    showOpenFileButton: [{ type: Input }],
    showPrintButton: [{ type: Input }],
    showPagingButtons: [{ type: Input }],
    showPresentationModeButton: [{ type: Input }],
    showRotateButton: [{ type: Input }],
    showSecondaryToolbarButton: [{ type: Input }],
    showSidebarButton: [{ type: Input }],
    showZoomButtons: [{ type: Input }],
    textLayer: [{ type: Input }],
    toolbarPaddingTop: [{ type: Input }],
    toolbarWidth: [{ type: Input }],
    zoomLevels: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PdfToolbarComponent.prototype.customToolbar;
    /** @type {?} */
    PdfToolbarComponent.prototype.mobileFriendlyZoomScale;
    /** @type {?} */
    PdfToolbarComponent.prototype.primaryMenuVisible;
    /** @type {?} */
    PdfToolbarComponent.prototype.showBookmarkButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showDownloadButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showFindButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showHandToolButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showOpenFileButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showPrintButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showPagingButtons;
    /** @type {?} */
    PdfToolbarComponent.prototype.showPresentationModeButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showRotateButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showSecondaryToolbarButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showSidebarButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showZoomButtons;
    /** @type {?} */
    PdfToolbarComponent.prototype.textLayer;
    /** @type {?} */
    PdfToolbarComponent.prototype.toolbarPaddingTop;
    /** @type {?} */
    PdfToolbarComponent.prototype.toolbarWidth;
    /** @type {?} */
    PdfToolbarComponent.prototype.zoomLevels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1pbGphbm45OTUvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBTzVGLE1BQU0sT0FBTyxtQkFBbUI7SUEwRDlCO1FBckRPLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUd2QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIsK0JBQTBCLEdBQUcsS0FBSyxDQUFDO1FBR25DLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUd4QiwrQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFHbEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLGNBQVMsR0FBd0IsU0FBUyxDQUFDO1FBRzNDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUcxQixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUd0QixlQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXpGLENBQUM7OztZQS9EakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qixza0VBQTJDOzthQUU1Qzs7Ozs7NEJBRUUsS0FBSztzQ0FHTCxLQUFLO2lDQUdMLEtBQUs7aUNBR0wsS0FBSztpQ0FHTCxLQUFLOzZCQUdMLEtBQUs7aUNBR0wsS0FBSztpQ0FHTCxLQUFLOzhCQUdMLEtBQUs7Z0NBR0wsS0FBSzt5Q0FHTCxLQUFLOytCQUdMLEtBQUs7eUNBR0wsS0FBSztnQ0FHTCxLQUFLOzhCQUdMLEtBQUs7d0JBR0wsS0FBSztnQ0FHTCxLQUFLOzJCQUdMLEtBQUs7eUJBR0wsS0FBSzs7OztJQXRETiw0Q0FDdUM7O0lBRXZDLHNEQUNtQzs7SUFFbkMsaURBQ2lDOztJQUVqQyxpREFDaUM7O0lBRWpDLGlEQUNpQzs7SUFFakMsNkNBQ3VEOztJQUV2RCxpREFDaUM7O0lBRWpDLGlEQUNpQzs7SUFFakMsOENBQzhCOztJQUU5QixnREFDZ0M7O0lBRWhDLHlEQUMwQzs7SUFFMUMsK0NBQytCOztJQUUvQix5REFDeUM7O0lBRXpDLGdEQUNnQzs7SUFFaEMsOENBQzhCOztJQUU5Qix3Q0FDa0Q7O0lBRWxELGdEQUNpQzs7SUFFakMsMkNBQzZCOztJQUU3Qix5Q0FDd0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi10b29sYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZGZUb29sYmFyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcHJpbWFyeU1lbnVWaXNpYmxlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Jvb2ttYXJrQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Rvd25sb2FkQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dIYW5kVG9vbEJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1JvdGF0ZUJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NpZGViYXJCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnMgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0ZXh0TGF5ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRvb2xiYXJQYWRkaW5nVG9wID0gJzBweCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAwLjc1LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==