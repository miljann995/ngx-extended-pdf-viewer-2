/**
 * @fileoverview added by tsickle
 * Generated from: lib/secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef, ElementRef, HostListener, } from '@angular/core';
import { PDFNotificationService } from './../../pdf-notification-service';
var PdfSecondaryToolbarComponent = /** @class */ (function () {
    function PdfSecondaryToolbarComponent(element, notificationService) {
        var _this = this;
        this.element = element;
        this.notificationService = notificationService;
        this.showPresentationModeButton = true;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showDownloadButton = true;
        this.showBookmarkButton = true;
        this.showPagingButtons = true;
        this.showRotateButton = true;
        this.showHandToolButton = true;
        this.showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.spreadChange = new EventEmitter();
        this.secondaryMenuIsEmpty = new EventEmitter();
        this.disablePreviousPage = true;
        this.disableNextPage = true;
        /** @type {?} */
        var subscription = this.notificationService.onPDFJSInit.subscribe((/**
         * @return {?}
         */
        function () {
            _this.onPdfJsInit();
            subscription.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.onPdfJsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('pagechanging', (/**
         * @return {?}
         */
        function () {
            _this.updateUIState();
        }));
        PDFViewerApplication.eventBus.on('pagerendered', (/**
         * @return {?}
         */
        function () {
            _this.updateUIState();
        }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.updateUIState = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
            /** @type {?} */
            var currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
            /** @type {?} */
            var previousButton = (/** @type {?} */ (document.getElementById('previousPage')));
            if (previousButton) {
                _this.disablePreviousPage = Number(currentPage) <= 1;
                previousButton.disabled = _this.disablePreviousPage;
            }
            /** @type {?} */
            var nextButton = (/** @type {?} */ (document.getElementById('nextPage')));
            if (nextButton) {
                _this.disableNextPage = currentPage === PDFViewerApplication.pagesCount;
                nextButton.disabled = _this.disableNextPage;
            }
        }));
    };
    /**
     * @param {?} newSpread
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.onSpreadChange = /**
     * @param {?} newSpread
     * @return {?}
     */
    function (newSpread) {
        this.spreadChange.emit(newSpread);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.checkVisibility = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var visibleButtons = 0;
        /** @type {?} */
        var e = (/** @type {?} */ (this.element.nativeElement));
        /** @type {?} */
        var f = e.children.item(0);
        if (f) {
            /** @type {?} */
            var g = f.children.item(0);
            if (g && g instanceof HTMLElement) {
                visibleButtons = this.checkVisibilityRecursively(g);
            }
        }
        this.secondaryMenuIsEmpty.emit(visibleButtons === 0);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.checkVisibilityRecursively = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.style.display === 'none') {
            return 0;
        }
        if (e.classList.contains('hidden')) {
            return 0;
        }
        if (e.classList.contains('invisible')) {
            return 0;
        }
        /** @type {?} */
        var style = window.getComputedStyle(e);
        if (style.display === 'none') {
            return 0;
        }
        if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
            return 1;
        }
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        var children = e.children;
        if (children && children.length) {
            for (var i = 0; i < children.length && count === 0; i++) {
                /** @type {?} */
                var child = children.item(i);
                if (child && child instanceof HTMLElement) {
                    count += this.checkVisibilityRecursively(child);
                }
            }
        }
        return count;
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('previouspage');
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('nextpage');
    };
    PdfSecondaryToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-secondary-toolbar',
                    template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\n\n<ng-template #defaultSecondaryToolbar>\n  <div\n    id=\"secondaryToolbar\"\n    class=\"secondaryToolbar hidden doorHangerRight\"\n    [style.top]=\"secondaryToolbarTop\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'right top'\"\n  >\n    <div id=\"secondaryToolbarButtonContainer\">\n      <button\n        type=\"button\"\n        id=\"secondaryPresentationMode\"\n        [class.invisible]=\"!showPresentationModeButton\"\n        class=\"secondaryToolbarButton visibleLargeView\"\n        title=\"Switch to Presentation Mode\"\n        data-l10n-id=\"presentation_mode\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" />\n        </svg>\n        <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryOpenFile\"\n        [class.invisible]=\"!showOpenFileButton\"\n        class=\"secondaryToolbarButton visibleMediumView\"\n        title=\"Open File\"\n        data-l10n-id=\"open_file\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z\" />\n        </svg>\n        <span data-l10n-id=\"open_file_label\">Open</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryPrint\"\n        class=\"secondaryToolbarButton visibleSmallView\"\n        [class.invisible]=\"!showPrintButton\"\n        title=\"Print\"\n        data-l10n-id=\"print\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z\" />\n        </svg>\n        <span data-l10n-id=\"print_label\">Print</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryDownload\"\n        class=\"secondaryToolbarButton visibleSmallView\"\n        [class.invisible]=\"!showDownloadButton\"\n        title=\"Download\"\n        data-l10n-id=\"download\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\n        </svg>\n        <span data-l10n-id=\"download_label\">Download</span>\n      </button>\n\n      <a\n        href=\"#\"\n        id=\"secondaryViewBookmark\"\n        class=\"secondaryToolbarButton bookmark visibleTinyView\"\n        [class.invisible]=\"!showBookmarkButton\"\n        title=\"Current view (copy or open in new window)\"\n        data-l10n-id=\"bookmark\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z\" />\n        </svg>\n        <span data-l10n-id=\"bookmark_label\">Current View</span>\n      </a>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        id=\"firstPage\"\n        class=\"secondaryToolbarButton firstPage visibleLargeView\"\n        title=\"Go to First Page\"\n        data-l10n-id=\"first_page\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" />\n        </svg>\n        <span data-l10n-id=\"first_page_label\">Go to First Page</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        id=\"previousPage\"\n        class=\"secondaryToolbarButton previousPage visibleTinyView\"\n        title=\"Go to Previous Page\"\n        data-l10n-id=\"previous\"\n        [disabled]=\"disablePreviousPage\"\n        (click)=\"previousPage()\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\" />\n        </svg>\n        <span data-l10n-id=\"previous_label\">Go to Previous Page</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        [disabled]=\"disableNextPage\"\n        id=\"nextPage\"\n        class=\"secondaryToolbarButton nextPage visibleTinyView\"\n        title=\"Go to Next Page\"\n        data-l10n-id=\"next\"\n        (click)=\"nextPage()\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" />\n        </svg>\n        <span data-l10n-id=\"next_label\">Go to Next Page</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        id=\"lastPage\"\n        class=\"secondaryToolbarButton lastPage visibleLargeView\"\n        title=\"Go to Last Page\"\n        data-l10n-id=\"last_page\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z\" />\n        </svg>\n        <span data-l10n-id=\"last_page_label\">Go to Last Page</span>\n      </button>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showRotateButton\"\n        id=\"pageRotateCw\"\n        class=\"secondaryToolbarButton rotateCw visibleXLView\"\n        title=\"Rotate Clockwise\"\n        data-l10n-id=\"page_rotate_cw\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3\" />\n        </svg>\n        <span data-l10n-id=\"page_rotate_cw_label\">Rotate Clockwise</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showRotateButton\"\n        id=\"pageRotateCcw\"\n        class=\"secondaryToolbarButton rotateCcw visibleXLView\"\n        title=\"Rotate Counterclockwise\"\n        data-l10n-id=\"page_rotate_ccw\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3\" />\n        </svg>\n        <span data-l10n-id=\"page_rotate_ccw_label\">Rotate Counterclockwise</span>\n      </button>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showHandToolButton\"\n        id=\"cursorSelectTool\"\n        class=\"secondaryToolbarButton toggled visibleXXLView\"\n        title=\"Enable Text Selection Tool\"\n        data-l10n-id=\"cursor_text_select_tool\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\n        </svg>\n        <span data-l10n-id=\"cursor_text_select_tool_label\">Text Selection Tool</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showHandToolButton\"\n        id=\"cursorHandTool\"\n        class=\"secondaryToolbarButton visibleXXLView\"\n        title=\"Enable Hand Tool\"\n        data-l10n-id=\"cursor_hand_tool\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z\" />\n        </svg>\n        <span data-l10n-id=\"cursor_hand_tool_label\">Hand Tool</span>\n      </button>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollVertical\"\n        class=\"secondaryToolbarButton scrollVertical toggled\"\n        title=\"Use Vertical Scrolling\"\n        data-l10n-id=\"scroll_vertical\"\n      >\n        <svg style=\"width: 24px; height: 24px; margin-top: 3px\">\n          <path fill=\"currentColor\" d=\"M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z\"/>\n        </svg>\n        <span data-l10n-id=\"scroll_vertical_label\">Vertical Scrolling</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollHorizontal\"\n        class=\"secondaryToolbarButton scrollHorizontal\"\n        title=\"Use Horizontal Scrolling\"\n        data-l10n-id=\"scroll_horizontal\"\n      >\n        <svg style=\"width: 24px; height: 24px; margin-top: 3px\">\n          <path fill=\"currentColor\" d=\"M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z\"/>\n        </svg>\n        <span data-l10n-id=\"scroll_horizontal_label\">Horizontal Scrolling</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollWrapped\"\n        class=\"secondaryToolbarButton scrollWrapped\"\n        title=\"Use Wrapped Scrolling\"\n        data-l10n-id=\"scroll_wrapped\"\n      >\n        <svg style=\"width: 24px; height: 24px; margin-top: 3px\">\n          <path fill=\"currentColor\" d=\"M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z\"/>\n        </svg>\n        <span data-l10n-id=\"scroll_wrapped_label\">Wrapped Scrolling</span>\n      </button>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadNone\"\n        class=\"secondaryToolbarButton spreadNone toggled\"\n        title=\"Do not join page spreads\"\n        data-l10n-id=\"spread_none\"\n        (click)=\"onSpreadChange('off')\"\n      >\n        <svg height=\"16\" width=\"16\">\n          <path fill=\"currentColor\" d=\"M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z\"/>\n        </svg>\n        <span data-l10n-id=\"spread_none_label\">No Spreads</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadOdd\"\n        class=\"secondaryToolbarButton spreadOdd\"\n        title=\"Join page spreads starting with odd-numbered pages\"\n        data-l10n-id=\"spread_odd\"\n        (click)=\"onSpreadChange('odd')\"\n      >\n        <svg style=\"width: 24px; height: 24px; margin-top: 3px\">\n          <path fill=\"currentColor\" d=\"M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z\"/>\n        </svg>\n        <span data-l10n-id=\"spread_odd_label\">Odd Spreads</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadEven\"\n        class=\"secondaryToolbarButton spreadEven\"\n        title=\"Join page spreads starting with even-numbered pages\"\n        data-l10n-id=\"spread_even\"\n        (click)=\"onSpreadChange('even')\"\n      >\n        <svg style=\"width: 24px; height: 24px; margin-top: 3px\">\n          <path fill=\"currentColor\" d=\"M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z\"/>\n        </svg>\n        <span data-l10n-id=\"spread_even_label\">Even Spreads</span>\n      </button>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPropertiesButton\"\n        id=\"documentProperties\"\n        class=\"secondaryToolbarButton documentProperties\"\n        title=\"Document Properties\u2026\"\n        data-l10n-id=\"document_properties\"\n      >\n        <svg style=\"width: 16px; height: 16px; margin-top: 3px\" viewBox=\"0 0 16 16\">\n          <path fill=\"currentColor\" d=\"M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z\"/>\n          <path fill=\"currentColor\" d=\"M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z\"/>\n          <circle fill=\"currentColor\" cx=\"8\" cy=\"5\" r=\"1.188\"/>\n        </svg>\n        <span data-l10n-id=\"document_properties_label\">Document Properties\u2026</span>\n      </button>\n    </div>\n  </div>\n</ng-template>\n",
                    styles: ["svg{position:absolute;display:inline-block;top:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfSecondaryToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PDFNotificationService }
    ]; };
    PdfSecondaryToolbarComponent.propDecorators = {
        customSecondaryToolbar: [{ type: Input }],
        secondaryToolbarTop: [{ type: Input }],
        mobileFriendlyZoomScale: [{ type: Input }],
        showPresentationModeButton: [{ type: Input }],
        showOpenFileButton: [{ type: Input }],
        showPrintButton: [{ type: Input }],
        showDownloadButton: [{ type: Input }],
        showBookmarkButton: [{ type: Input }],
        showPagingButtons: [{ type: Input }],
        showRotateButton: [{ type: Input }],
        showHandToolButton: [{ type: Input }],
        showScrollingButton: [{ type: Input }],
        showSpreadButton: [{ type: Input }],
        showPropertiesButton: [{ type: Input }],
        spreadChange: [{ type: Output }],
        secondaryMenuIsEmpty: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return PdfSecondaryToolbarComponent;
}());
export { PdfSecondaryToolbarComponent };
if (false) {
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.customSecondaryToolbar;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.secondaryToolbarTop;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.mobileFriendlyZoomScale;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPresentationModeButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showOpenFileButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPrintButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showDownloadButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showBookmarkButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPagingButtons;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showRotateButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showHandToolButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showScrollingButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showSpreadButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPropertiesButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.spreadChange;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.secondaryMenuIsEmpty;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.disablePreviousPage;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.disableNextPage;
    /**
     * @type {?}
     * @private
     */
    PdfSecondaryToolbarComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    PdfSecondaryToolbarComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtaWxqYW5uOTk1L25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxRTtJQTBERSxzQ0FBb0IsT0FBbUIsRUFBVSxtQkFBMkM7UUFBNUYsaUJBS0M7UUFMbUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUExQ3JGLCtCQUEwQixHQUFHLElBQUksQ0FBQztRQUdsQyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHdkIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBR3hCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFHM0IscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBR3hCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUc1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHMUMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVuRCx3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFF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Qzs7SUFFakMsMERBQ2lDOztJQUVqQyx5REFDZ0M7O0lBRWhDLHdEQUMrQjs7SUFFL0IsMERBQ2lDOztJQUVqQywyREFDa0M7O0lBRWxDLHdEQUMrQjs7SUFFL0IsNERBQ21DOztJQUVuQyxvREFDaUQ7O0lBRWpELDREQUMwRDs7SUFFMUQsMkRBQWtDOztJQUVsQyx1REFBOEI7Ozs7O0lBRWxCLCtDQUEyQjs7Ozs7SUFBRSwyREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1zZWNvbmRhcnktdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGU6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9va21hcmtCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2Nyb2xsaW5nQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcm9wZXJ0aWVzQnV0dG9uID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2Vjb25kYXJ5TWVudUlzRW1wdHkgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHVibGljIGRpc2FibGVQcmV2aW91c1BhZ2UgPSB0cnVlO1xuXG4gIHB1YmxpYyBkaXNhYmxlTmV4dFBhZ2UgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVVJU3RhdGUoKTtcbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVVSVN0YXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVUlTdGF0ZSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcbiAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzUGFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgaWYgKHByZXZpb3VzQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZVByZXZpb3VzUGFnZSA9IE51bWJlcihjdXJyZW50UGFnZSkgPD0gMTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVQcmV2aW91c1BhZ2U7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICBpZiAobmV4dEJ1dHRvbikge1xuICAgICAgICB0aGlzLmRpc2FibGVOZXh0UGFnZSA9IGN1cnJlbnRQYWdlID09PSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50O1xuICAgICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlTmV4dFBhZ2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TcHJlYWRDaGFuZ2UobmV3U3ByZWFkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwcmVhZENoYW5nZS5lbWl0KG5ld1NwcmVhZCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgcHVibGljIG9uUmVzaXplKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1Zpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgbGV0IHZpc2libGVCdXR0b25zID0gMDtcbiAgICBjb25zdCBlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZiA9IGUuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICBpZiAoZikge1xuICAgICAgY29uc3QgZyA9IGYuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgIGlmIChnICYmIGcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB2aXNpYmxlQnV0dG9ucyA9IHRoaXMuY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2Vjb25kYXJ5TWVudUlzRW1wdHkuZW1pdCh2aXNpYmxlQnV0dG9ucyA9PT0gMCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBpZiAoZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcbiAgICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGUgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoICYmIGNvdW50ID09PSAwOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGNvdW50ICs9IHRoaXMuY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91c1BhZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgncHJldmlvdXNwYWdlJyk7XG4gIH1cblxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnbmV4dHBhZ2UnKTtcbiAgfVxufVxuIl19