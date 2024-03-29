import { Subject, ReplaySubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser, Location, DOCUMENT, CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, Injectable, Renderer2, Inject, Input, ViewEncapsulation, ViewChild, ElementRef, EventEmitter, Output, ChangeDetectorRef, HostListener, defineInjectable, NgModule, ChangeDetectionStrategy, NgZone, PLATFORM_ID } from '@angular/core';
import { __awaiter, __generator, __values, __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-default-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _isIE11 = typeof window === 'undefined' ? false : !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
/** @type {?} */
var isEdge = /Edge\/\d./i.test(navigator.userAgent);
/** @type {?} */
var needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
/** @type {?} */
var pdfjsVersion = '2.6.416';
/** @type {?} */
var pdfjsBleedingEdgeVersion = '2.7.225';
/**
 * @param {?} folder
 * @return {?}
 */
function getVersionSuffix(folder) {
    if (folder && folder.includes('bleeding-edge')) {
        return pdfjsBleedingEdgeVersion;
    }
    return pdfjsVersion;
}
/** @type {?} */
var pdfDefaultOptions = {
    cursorToolOnLoad: 0,
    defaultUrl: '',
    defaultZoomValue: '',
    disableHistory: false,
    disablePageLabels: false,
    enablePrintAutoRotate: false,
    enableWebGL: false,
    eventBusDispatchToDOM: false,
    externalLinkRel: 'noopener noreferrer nofollow',
    externalLinkTarget: 0,
    historyUpdateUrl: false,
    imageResourcesPath: './images/',
    maxCanvasPixels: 16777216,
    pdfBugEnabled: false,
    removePageBorders: false,
    renderer: 'canvas',
    renderInteractiveForms: true,
    sidebarViewOnLoad: -1,
    scrollModeOnLoad: -1,
    spreadModeOnLoad: -1,
    textLayerMode: 1,
    useOnlyCssZoom: false,
    viewOnLoad: 0,
    cMapPacked: true,
    cMapUrl: (/**
     * @return {?}
     */
    function () { return './' + pdfDefaultOptions.assetsFolder + '/cmaps/'; }),
    disableAutoFetch: false,
    disableCreateObjectURL: false,
    disableFontFace: false,
    disableRange: false,
    disableStream: false,
    isEvalSupported: true,
    maxImageSize: -1,
    pdfBug: false,
    postMessageTransfers: true,
    verbosity: 1,
    workerPort: null,
    assetsFolder: 'assets',
    workerSrc: (/**
     * @return {?}
     */
    function () {
        return _isIE11 || isEdge || needsES5
            ? './' + pdfDefaultOptions.assetsFolder + '/pdf.worker-' + getVersionSuffix(pdfDefaultOptions.assetsFolder) + '-es5.js'
            : './' + pdfDefaultOptions.assetsFolder + '/pdf.worker-' + getVersionSuffix(pdfDefaultOptions.assetsFolder) + '.js';
    }),
};
if (((/** @type {?} */ (window))).pdfDefaultOptions) {
    pdfDefaultOptions = ((/** @type {?} */ (window))).pdfDefaultOptions;
}
else {
    ((/** @type {?} */ (window))).pdfDefaultOptions = pdfDefaultOptions;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/verbosity-level.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var VerbosityLevel = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5,
};
VerbosityLevel[VerbosityLevel.ERRORS] = 'ERRORS';
VerbosityLevel[VerbosityLevel.WARNINGS] = 'WARNINGS';
VerbosityLevel[VerbosityLevel.INFOS] = 'INFOS';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/find-result.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var FindState = {
    FOUND: 0,
    NOT_FOUND: 1,
    WRAPPED: 2,
    PENDING: 3,
};
FindState[FindState.FOUND] = 'FOUND';
FindState[FindState.NOT_FOUND] = 'NOT_FOUND';
FindState[FindState.WRAPPED] = 'WRAPPED';
FindState[FindState.PENDING] = 'PENDING';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pdf-dummy-components/pdf-dummy-components.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of all field that can be customized
 * @type {?}
 */
var requiredIds = [
    'toolbarViewer',
    'numPages',
    'pageNumber',
    'scaleSelectContainer',
    'customScaleOption',
    'previous',
    'next',
    'zoomIn',
    'zoomOut',
    'viewFind',
    'openFile',
    'print',
    'presentationMode',
    'download',
    'viewBookmark',
    'secondaryToolbar',
    'secondaryToolbarToggle',
    'secondaryToolbarButtonContainer',
    'secondaryPresentationMode',
    'secondaryOpenFile',
    'secondaryPrint',
    'secondaryDownload',
    'secondaryViewBookmark',
    'firstPage',
    'lastPage',
    'pageRotateCw',
    'pageRotateCcw',
    'cursorSelectTool',
    'cursorHandTool',
    'scrollVertical',
    'scrollHorizontal',
    'scrollWrapped',
    'spreadNone',
    'spreadOdd',
    'spreadEven',
    'documentProperties',
    'contextFirstPage',
    'contextLastPage',
    'contextPageRotateCw',
    'contextPageRotateCcw',
    'outerContainer',
    'viewerContainer',
    'sidebarToggle',
    'viewThumbnail',
    'viewOutline',
    'viewAttachments',
    'thumbnailView',
    'outlineView',
    'attachmentsView',
    'outerContainer',
    'sidebarResizer',
    'findbar',
    'viewFind',
    'findInput',
    'findInputMultiline',
    'findHighlightAll',
    'findMatchCase',
    'findEntireWord',
    'findMultipleSearchTexts',
    'findIgnoreAccents',
    'findMsg',
    'findResultsCount',
    'findPrevious',
    'findNext',
    'findFuzzy',
    'passwordOverlay',
    'passwordText',
    'password',
    'passwordSubmit',
    'passwordCancel',
    'documentPropertiesOverlay',
    'documentPropertiesClose',
    'fileNameField',
    'fileSizeField',
    'titleField',
    'authorField',
    'subjectField',
    'keywordsField',
    'creationDateField',
    'modificationDateField',
    'creatorField',
    'producerField',
    'versionField',
    'pageCountField',
    'pageSizeField',
    'linearizedField',
    'errorWrapper',
    'errorMessage',
    'errorClose',
    'errorMoreInfo',
    'errorShowMore',
    'errorShowLess',
    'scaleSelectContainer',
    'viewAttachments',
    'viewLayers',
    'viewThumbnail',
    'viewOutline'
];
var PdfDummyComponentsComponent = /** @class */ (function () {
    function PdfDummyComponentsComponent() {
    }
    /**
     * @return {?}
     */
    PdfDummyComponentsComponent.prototype.addMissingStandardWidgets = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
        /** @type {?} */
        var container = (/** @type {?} */ (this.dummyComponentsContainer));
        if (container) {
            for (var i = 0; i < container.children.length; i++) {
                /** @type {?} */
                var child = container.firstChild;
                if (child) {
                    container.removeChild(child);
                }
            }
        }
        requiredIds.forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.needsDummyWidget(id)) {
                /** @type {?} */
                var dummy = document.createElement('span');
                dummy.id = id;
                dummy.className = 'invisible dummy-component';
                _this.dummyComponentsContainer.appendChild(dummy);
            }
        }));
        if (this.needsDummyWidget('scaleSelect')) {
            /** @type {?} */
            var dummy = document.createElement('select');
            dummy.id = 'scaleSelect';
            dummy.className = 'invisible dummy-component';
            this.dummyComponentsContainer.appendChild(dummy);
        }
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    PdfDummyComponentsComponent.prototype.needsDummyWidget = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var widget = document.getElementById(id);
        if (!widget) {
            return true;
        }
        return false;
    };
    PdfDummyComponentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-dummy-components',
                    template: "<span class=\"invisible dummy-pdf-viewer-components\">\n</span>\n"
                }] }
    ];
    return PdfDummyComponentsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pdf-notification-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PDFNotificationService = /** @class */ (function () {
    function PDFNotificationService() {
        var _this = this;
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
        this.pdfjsVersion = new ReplaySubject(1);
        if (((/** @type {?} */ (window))).pdfjsLib && ((/** @type {?} */ (window))).pdfjsLib.version) {
            this.pdfjsVersion.next(((/** @type {?} */ (window))).pdfjsLib.version);
        }
        else {
            this.onPDFJSInit.subscribe((/**
             * @return {?}
             */
            function () {
                _this.pdfjsVersion.next(((/** @type {?} */ (window))).pdfjsLib.version);
            }));
        }
    }
    PDFNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PDFNotificationService.ctorParameters = function () { return []; };
    /** @nocollapse */ PDFNotificationService.ngInjectableDef = defineInjectable({ factory: function PDFNotificationService_Factory() { return new PDFNotificationService(); }, token: PDFNotificationService, providedIn: "root" });
    return PDFNotificationService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-cursor-tools.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var PdfCursorTools = {
    SELECT: 0,
    HAND: 1,
    ZOOM: 2,
};
PdfCursorTools[PdfCursorTools.SELECT] = 'SELECT';
PdfCursorTools[PdfCursorTools.HAND] = 'HAND';
PdfCursorTools[PdfCursorTools.ZOOM] = 'ZOOM';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pinch-on-mobile-support.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PinchOnMobileSupport = /** @class */ (function () {
    function PinchOnMobileSupport(_zone) {
        this._zone = _zone;
        this.startX = 0;
        this.startY = 0;
        this.initialPinchDistance = 0;
        this.pinchScale = 1;
        if (this.isMobile()) {
            this.initializePinchZoom();
        }
    }
    /**
     * @private
     * @return {?}
     */
    PinchOnMobileSupport.prototype.isMobile = /**
     * @private
     * @return {?}
     */
    function () {
        return 'ontouchstart' in document.documentElement;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    PinchOnMobileSupport.prototype.onViewerTouchStart = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.initialPinchDistance = 0;
        if (event.touches.length === 2) {
            /** @type {?} */
            var rect = this.container.getBoundingClientRect();
            // + this.container.scrollTop
            if (event.touches[0].pageX >= rect.left && event.touches[0].pageX <= rect.right) {
                if (event.touches[0].pageY >= rect.top /* && event.touches[0].pageY <= rect.bottom */) {
                    if (event.touches[1].pageX >= rect.left && event.touches[1].pageX <= rect.right) {
                        if (event.touches[1].pageY >= rect.top /* && event.touches[1].pageY <= rect.bottom  */) {
                            this.startX = (event.touches[0].pageX + event.touches[1].pageX) / 2;
                            this.startY = (event.touches[0].pageY + event.touches[1].pageY) / 2;
                            this.initialPinchDistance = Math.hypot(event.touches[1].pageX - event.touches[0].pageX, event.touches[1].pageY - event.touches[0].pageY);
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    PinchOnMobileSupport.prototype.onViewerTouchMove = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
        if (this.initialPinchDistance <= 0 || event.touches.length !== 2) {
            return;
        }
        if (this.pinchScale !== 1) {
            event.preventDefault();
        }
        /** @type {?} */
        var pinchDistance = Math.hypot(event.touches[1].pageX - event.touches[0].pageX, event.touches[1].pageY - event.touches[0].pageY);
        /** @type {?} */
        var originX = this.startX + this.container.scrollLeft;
        /** @type {?} */
        var originY = this.startY + this.container.scrollTop;
        this.pinchScale = pinchDistance / this.initialPinchDistance;
        /** @type {?} */
        var minZoom = Number(PDFViewerApplicationOptions.get('minZoom'));
        if (!minZoom) {
            minZoom = 0.1;
        }
        if (this.pinchScale < minZoom) {
            this.pinchScale = minZoom;
        }
        /** @type {?} */
        var maxZoom = Number(PDFViewerApplicationOptions.get('maxZoom'));
        if (!maxZoom) {
            maxZoom = 10;
        }
        if (this.pinchScale > maxZoom) {
            this.pinchScale = maxZoom;
        }
        this.viewer.style.transform = "scale(" + this.pinchScale + ")";
        this.viewer.style.transformOrigin = originX + "px " + originY + "px";
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    PinchOnMobileSupport.prototype.onViewerTouchEnd = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (this.initialPinchDistance <= 0) {
            return;
        }
        this.viewer.style.transform = "none";
        this.viewer.style.transformOrigin = "unset";
        PDFViewerApplication.pdfViewer.currentScale *= this.pinchScale;
        /** @type {?} */
        var rect = this.container.getBoundingClientRect();
        /** @type {?} */
        var dx = this.startX - rect.left;
        /** @type {?} */
        var dy = this.startY - rect.top;
        this.container.scrollLeft += dx * (this.pinchScale - 1);
        this.container.scrollTop += dy * (this.pinchScale - 1);
        this.resetPinchZoomParams();
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @private
     * @return {?}
     */
    PinchOnMobileSupport.prototype.resetPinchZoomParams = /**
     * @private
     * @return {?}
     */
    function () {
        this.startX = this.startY = this.initialPinchDistance = 0;
        this.pinchScale = 1;
    };
    /**
     * @return {?}
     */
    PinchOnMobileSupport.prototype.initializePinchZoom = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.viewer = document.getElementById('viewer');
        this.container = (/** @type {?} */ (document.getElementById('viewerContainer')));
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            document.addEventListener('touchstart', _this.onViewerTouchStart.bind(_this));
            document.addEventListener('touchmove', _this.onViewerTouchMove.bind(_this), { passive: false });
            document.addEventListener('touchend', _this.onViewerTouchEnd.bind(_this));
        }));
    };
    /**
     * @return {?}
     */
    PinchOnMobileSupport.prototype.destroyPinchZoom = /**
     * @return {?}
     */
    function () {
        if (this.isMobile()) {
            document.removeEventListener('touchstart', this.onViewerTouchStart);
            document.removeEventListener('touchmove', this.onViewerTouchMove);
            document.removeEventListener('touchend', this.onViewerTouchEnd);
        }
    };
    return PinchOnMobileSupport;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sidebar/pdf-sidebar/pdf-sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ScrollModeType = {
    vertical: 0,
    horizontal: 1,
    wrapped: 2,
};
ScrollModeType[ScrollModeType.vertical] = 'vertical';
ScrollModeType[ScrollModeType.horizontal] = 'horizontal';
ScrollModeType[ScrollModeType.wrapped] = 'wrapped';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-extended-pdf-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxExtendedPdfViewerComponent = /** @class */ (function () {
    function NgxExtendedPdfViewerComponent(ngZone, platformId, notificationService, location, elementRef) {
        this.ngZone = ngZone;
        this.platformId = platformId;
        this.notificationService = notificationService;
        this.location = location;
        this.elementRef = elementRef;
        this.customFindbarButtons = undefined;
        this.formData = {};
        this.formDataChange = new EventEmitter();
        this.pageViewMode = 'multiple';
        this.srcChange = new EventEmitter();
        this.scrollMode = undefined;
        this.scrollModeChange = new EventEmitter();
        this.authorization = undefined;
        this.httpHeaders = undefined;
        this.contextMenuAllowed = true;
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.currentZoomFactor = new EventEmitter();
        this.enablePrint = true;
        /**
         * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
         * Most users can let this parameter safely at it's default value of zero.
         * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
         * after the PDF files, so they are not available when the PDF viewer is initialized).
         */
        this.delayFirstView = 0;
        /**
         * How many log messages should be printed?
         * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0)
         */
        this.logLevel = VerbosityLevel.WARNINGS;
        this.enablePinchOnMobile = false;
        /**
         * Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false")
         */
        this.minifiedJSLibraries = true;
        this.primaryMenuVisible = true;
        /**
         * option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
         * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash.
         */
        this.printResolution = null;
        this.rotationChange = new EventEmitter();
        this.minHeight = undefined;
        this._height = '100%';
        /**
         * If this flag is true, this components adds a link to the locale assets. The pdf viewer
         * sees this link and uses it to load the locale files automatically.
         * @param useBrowserLocale boolean
         */
        this.useBrowserLocale = false;
        this.backgroundColor = '#e8e8eb';
        /**
         * Allows the user to define the name of the file after clicking "download"
         */
        this.filenameForDownload = 'document.pdf';
        /**
         * Allows the user to disable the keyboard bindings completely
         */
        this.ignoreKeyboard = false;
        /**
         * Allows the user to disable a list of key bindings.
         */
        this.ignoreKeys = [];
        /**
         * Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored.
         */
        this.acceptKeys = [];
        /**
         * Allows the user to put the viewer's svg images into an arbitrary folder
         */
        this.imageResourcesPath = './' + pdfDefaultOptions.assetsFolder + '/images/';
        /**
         * Allows the user to put their locale folder into an arbitrary folder
         */
        this.localeFolderPath = './' + pdfDefaultOptions.assetsFolder + '/locale';
        /**
         * Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
         */
        this.language = undefined;
        /**
         * By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router
         */
        this.listenToURL = false;
        /**
         * Navigate to a certain "named destination"
         */
        this.nameddest = undefined;
        /**
         * allows you to pass a password to read password-protected files
         */
        this.password = undefined;
        this._showSidebarButton = true;
        this.viewerPositionTop = '32px';
        /**
         * pdf.js can show signatures, but fails to verify them. So they are switched off by default.
         * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
         */
        this.showUnverifiedSignatures = false;
        this.sidebarVisible = undefined;
        this.sidebarVisibleChange = new EventEmitter();
        this.showFindButton = undefined;
        this.showPagingButtons = true;
        this.showZoomButtons = true;
        this.showPresentationModeButton = false;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showDownloadButton = true;
        this.showBookmarkButton = true;
        this.theme = 'light';
        this.showToolbar = true;
        this.showSecondaryToolbarButton = true;
        /**
         * Set by the event (secondaryMenuIsEmpty)
         */
        this.hideKebabMenuForSecondaryToolbar = false;
        this.showRotateButton = true;
        this.handTool = true;
        this.handToolChange = new EventEmitter();
        this.showHandToolButton = false;
        this.showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.showBorders = true;
        this.spreadChange = new EventEmitter();
        this.thumbnailDrawn = new EventEmitter();
        this._page = undefined;
        this.pageChange = new EventEmitter();
        this.pageLabel = undefined;
        this.pageLabelChange = new EventEmitter();
        this.pagesLoaded = new EventEmitter();
        this.pageRendered = new EventEmitter();
        this.pdfDownloaded = new EventEmitter();
        this.pdfLoaded = new EventEmitter();
        this.pdfLoadingFailed = new EventEmitter();
        this.textLayer = undefined;
        this.textLayerRendered = new EventEmitter();
        this.updateFindMatchesCount = new EventEmitter();
        this.updateFindState = new EventEmitter();
        /**
         * Legal values: undefined, 'auto', 'page-actual', 'page_fit', 'page-width', or '50' (or any other percentage)
         */
        this.zoom = undefined;
        this.zoomChange = new EventEmitter();
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 1, 1.25, 1.5, 2, 3, 4];
        this.maxZoom = 10;
        this.minZoom = 0.1;
        /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        this._mobileFriendlyZoom = '100%';
        this.mobileFriendlyZoomScale = 1;
        this.toolbarPaddingTop = '0px';
        this.toolbarWidth = '100%';
        this.toolbarWidthInPixels = 100;
        this.secondaryToolbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarLeft = undefined;
        // Additional PDF Form Field Types #567: Used to store the exported values of radio and checkbox buttons
        this.buttonValues = {};
        this.shuttingDown = false;
    }
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "src", {
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            var _this = this;
            if (url instanceof Uint8Array) {
                this._src = url.buffer;
            }
            else if (url instanceof Blob) {
                /** @type {?} */
                var reader_1 = new FileReader();
                reader_1.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.src = new Uint8Array((/** @type {?} */ (reader_1.result)));
                        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                            _this.openPDF2();
                            // else openPDF is called later, so we should load the PDF file twice
                        }
                    }));
                });
                reader_1.readAsArrayBuffer(url);
            }
            else if (typeof url === 'string') {
                this._src = url;
                if (url.length > 980) {
                    // minimal length of a base64 encoded PDF
                    if (url.length % 4 === 0) {
                        if (/^[a-zA-Z\d\/+]+={0,2}$/.test(url)) {
                            console.error('The URL looks like a base64 encoded string. If so, please use the attribute [base64Src] instead of [src]');
                        }
                    }
                }
            }
            else {
                this._src = url;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "base64Src", {
        set: /**
         * @param {?} base64
         * @return {?}
         */
        function (base64) {
            /** @type {?} */
            var binary_string = window.atob(base64);
            /** @type {?} */
            var len = binary_string.length;
            /** @type {?} */
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            this.src = bytes.buffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            var _this = this;
            this.minHeight = undefined;
            if (h) {
                this._height = h;
            }
            else {
                this.height = '100%';
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.checkHeight();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "showSidebarButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSidebarButton;
        },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            this._showSidebarButton = show;
            /** @type {?} */
            var isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
            /** @type {?} */
            var factor = 1;
            if (isIE) {
                factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
            }
            if (this._showSidebarButton) {
                this.findbarLeft = (68 * factor).toString() + 'px';
            }
            else {
                this.findbarLeft = '0px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            if (p) {
                // silently cope with strings
                this._page = Number(p);
            }
            else {
                this._page = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "mobileFriendlyZoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mobileFriendlyZoom;
        },
        /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        set: /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            // tslint:disable-next-line:triple-equals - the type conversion is intended
            if (zoom == 'true') {
                zoom = '150%';
                // tslint:disable-next-line:triple-equals - the type conversion is intended
            }
            else if (zoom == 'false' || zoom === undefined || zoom === null) {
                zoom = '100%';
            }
            this._mobileFriendlyZoom = zoom;
            /** @type {?} */
            var factor = 1;
            if (!String(zoom).includes('%')) {
                zoom = 100 * Number(zoom) + '%';
            }
            factor = Number((zoom || '100').replace('%', '')) / 100;
            this.mobileFriendlyZoomScale = factor;
            this.toolbarWidth = (100 / factor).toString() + '%';
            this.toolbarPaddingTop = (factor - 1) * 8 + 'px';
            if (this.showSidebarButton) {
                this.findbarLeft = (68 * factor).toString() + 'px';
            }
            else {
                this.findbarLeft = '0px';
            }
            this.secondaryToolbarTop = (36 + 36 * (factor - 1)).toString() + 'px';
            this.findbarTop = (36 + 52 * (factor - 1)).toString() + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "sidebarPositionTop", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.isPrimaryMenuVisible()) {
                return '0';
            }
            if (this.mobileFriendlyZoom) {
                if (this.mobileFriendlyZoom.endsWith('%')) {
                    /** @type {?} */
                    var zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                    return (2 + 0.29 * zoom).toString() + 'px';
                }
                if (this.mobileFriendlyZoom.endsWith('px')) {
                    return this.mobileFriendlyZoom;
                }
                return (16 + 0.16 * Number(this.mobileFriendlyZoom)).toString() + 'px';
            }
            return '32px';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.calcViewerPositionTop = /**
     * @return {?}
     */
    function () {
        if (!this.isPrimaryMenuVisible()) {
            this.viewerPositionTop = '0';
            return;
        }
        if (this.mobileFriendlyZoom) {
            if (this.mobileFriendlyZoom.endsWith('%')) {
                /** @type {?} */
                var zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                if (!this.isPrimaryMenuVisible()) {
                    this.viewerPositionTop = '0';
                }
                else {
                    this.viewerPositionTop = (1 + 0.32 * zoom).toString() + 'px';
                }
                return;
            }
            if (this.mobileFriendlyZoom.endsWith('px')) {
                this.viewerPositionTop = this.mobileFriendlyZoom;
                return;
            }
        }
        this.viewerPositionTop = '32px';
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.iOSVersionRequiresES5 = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (match !== undefined && match !== null) {
            return parseInt(match[1], 10) < 13;
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.loadViewer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!window['pdfjs-dist/build/pdf']) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.loadViewer(); }), 25);
        }
        else {
            /** @type {?} */
            var isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
            /** @type {?} */
            var isEdge = /Edge\/\d./i.test(navigator.userAgent);
            /** @type {?} */
            var isIOs12OrBelow = this.iOSVersionRequiresES5();
            /** @type {?} */
            var needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
            /** @type {?} */
            var suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
            /** @type {?} */
            var script2 = document.createElement('script');
            /** @type {?} */
            var assets = pdfDefaultOptions.assetsFolder;
            /** @type {?} */
            var versionSuffix = getVersionSuffix(assets);
            if (needsES5) {
                console.log('Using the ES5 version of the PDF viewer.');
            }
            script2.src = this.location.normalize(isIE || isEdge || isIOs12OrBelow || needsES5
                ? assets + '/viewer-' + versionSuffix + '-es5' + suffix
                : assets + '/viewer-' + versionSuffix + suffix);
            script2.type = 'text/javascript';
            script2.async = true;
            document.getElementsByTagName('head')[0].appendChild(script2);
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var link = document.createElement('link');
        link.href = this.localeFolderPath + '/locale.properties';
        link.setAttribute('origin', 'ngx-extended-pdf-viewer');
        link.rel = 'resource';
        link.type = 'application/l10n';
        /** @type {?} */
        var widget = this.elementRef.nativeElement;
        widget.appendChild(link);
        this.onResize();
        if (isPlatformBrowser(this.platformId)) {
            if (!window['pdfjs-dist/build/pdf']) {
                /** @type {?} */
                var isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
                /** @type {?} */
                var isEdge = /Edge\/\d./i.test(navigator.userAgent);
                /** @type {?} */
                var needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
                /** @type {?} */
                var isIOs12OrBelow = this.iOSVersionRequiresES5();
                /** @type {?} */
                var suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
                if (this.minifiedJSLibraries) {
                    if (!pdfDefaultOptions.workerSrc().endsWith('.min.js')) {
                        /** @type {?} */
                        var src_1 = pdfDefaultOptions.workerSrc();
                        pdfDefaultOptions.workerSrc = (/**
                         * @return {?}
                         */
                        function () { return src_1.replace('.js', '.min.js'); });
                    }
                }
                /** @type {?} */
                var assets = pdfDefaultOptions.assetsFolder;
                /** @type {?} */
                var versionSuffix = getVersionSuffix(assets);
                /** @type {?} */
                var script = document.createElement('script');
                script.src = this.location.normalize(isIE || isEdge || isIOs12OrBelow || needsES5 ? assets + '/pdf-' + versionSuffix + '-es5' + suffix : assets + '/pdf-' + versionSuffix + suffix);
                script.type = 'text/javascript';
                script.async = true;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            if (!((/** @type {?} */ (window))).webViewerLoad) {
                this.loadViewer();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.shuttingDown) {
            // hurried users sometimes reload the PDF before it has finished initializing
            if (((/** @type {?} */ (window))).webViewerLoad) {
                this.doInitPDFViewer();
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.ngAfterViewInit(); }), 50);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.assignTabindexes = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.startTabindex) {
            /** @type {?} */
            var r = (/** @type {?} */ (this.root.nativeElement.cloneNode(true)));
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            /** @type {?} */
            var elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            /** @type {?} */
            var sorted = elements.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            }));
            for (var i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    };
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.showElementsRecursively = /**
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
        root.classList.remove('hidden');
        root.classList.remove('invisible');
        root.classList.remove('hiddenXXLView');
        root.classList.remove('hiddenXLView');
        root.classList.remove('hiddenLargeView');
        root.classList.remove('hiddenMediumView');
        root.classList.remove('hiddenSmallView');
        root.classList.remove('hiddenTinyView');
        root.classList.remove('visibleXXLView');
        root.classList.remove('visibleXLView');
        root.classList.remove('visibleLargeView');
        root.classList.remove('visibleMediumView');
        root.classList.remove('visibleSmallView');
        root.classList.remove('visibleTinyView');
        if (root instanceof HTMLButtonElement || root instanceof HTMLAnchorElement || root instanceof HTMLInputElement || root instanceof HTMLSelectElement) {
            return;
        }
        else if (root.childElementCount > 0) {
            for (var i = 0; i < root.childElementCount; i++) {
                /** @type {?} */
                var c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    };
    /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.collectElementPositions = /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    function (copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            /** @type {?} */
            var rect = copy.getBoundingClientRect();
            /** @type {?} */
            var elementAndPos = (/** @type {?} */ ({
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            }));
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (var i = 0; i < copy.childElementCount; i++) {
                /** @type {?} */
                var c = copy.children.item(i);
                /** @type {?} */
                var o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.doInitPDFViewer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var langLinks = document.querySelectorAll('link[type="application/l10n"]');
        /** @type {?} */
        var langCount = langLinks.length;
        if (langCount === 0) {
            /** @type {?} */
            var dict = document.querySelector('script[type="application/l10n"]');
            if (!dict) {
                if (!this.useBrowserLocale) {
                    console.error(
                    // tslint:disable-next-line:quotemark
                    "If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
                    console.error('The easiest way to do this is to add them to the index.html.');
                }
            }
            else if (this.useBrowserLocale) {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        else if (this.useBrowserLocale) {
            /** @type {?} */
            var o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        /** @type {?} */
        var callback = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            document.removeEventListener('localized', callback);
            _this.initTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    _this.afterLibraryInit();
                    _this.openPDF();
                    _this.assignTabindexes();
                }
            }), _this.delayFirstView);
        });
        window.addEventListener('afterprint', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.afterPrint.emit();
        }));
        window.addEventListener('beforeprint', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforePrint.emit();
        }));
        document.addEventListener('localized', callback);
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        /** @type {?} */
        var onLoaded = (/**
         * @return {?}
         */
        function () {
            _this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
            if (_this.enablePinchOnMobile) {
                _this.pinchOnMobileSupport = new PinchOnMobileSupport(_this.ngZone);
            }
        });
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
                _this.primaryMenuVisible = _this.showToolbar;
                /** @type {?} */
                var hideSecondaryMenu = _this.hideKebabMenuForSecondaryToolbar && !_this.showSecondaryToolbarButton;
                if (hideSecondaryMenu) {
                    if (!_this.isPrimaryMenuVisible()) {
                        _this.primaryMenuVisible = false;
                    }
                }
                _this.calcViewerPositionTop();
                _this.dummyComponents.addMissingStandardWidgets();
                ((/** @type {?} */ (window))).webViewerLoad();
                /** @type {?} */
                var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
                PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
                PDFViewerApplication.appConfig.filenameForDownload = _this.filenameForDownload;
                /** @type {?} */
                var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('locale', _this.language);
                PDFViewerApplicationOptions.set('imageResourcesPath', _this.imageResourcesPath);
                PDFViewerApplicationOptions.set('minZoom', _this.minZoom);
                PDFViewerApplicationOptions.set('maxZoom', _this.maxZoom);
                PDFViewerApplicationOptions.set('pageViewMode', _this.pageViewMode);
                PDFViewerApplicationOptions.set('verbosity', _this.logLevel);
                PDFViewerApplicationOptions.set('initialZoom', _this.zoom);
                PDFViewerApplication.isViewerEmbedded = true;
                if (PDFViewerApplication.printKeyDownListener) {
                    window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                }
                /** @type {?} */
                var pc = document.getElementById('printContainer');
                if (pc) {
                    document.getElementsByTagName('body')[0].appendChild(pc);
                }
            }
        }), 0);
    };
    /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
    /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.afterLibraryInit = /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    function () {
        this.notificationService.onPDFJSInit.next();
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.checkHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = document.getElementsByClassName('zoom')[0];
        if (container) {
            if (container.clientHeight === 0 && this._height.includes('%')) {
                /** @type {?} */
                var available = window.innerHeight;
                /** @type {?} */
                var rect = container.getBoundingClientRect();
                /** @type {?} */
                var top_1 = rect.top;
                /** @type {?} */
                var mh = available - top_1;
                /** @type {?} */
                var factor = Number(this._height.replace('%', ''));
                mh = (mh * factor) / 100;
                if (mh > 100) {
                    this.minHeight = mh + 'px';
                }
                else {
                    this.minHeight = '100px';
                }
            }
        }
    };
    /**
     * @param {?} newSpread
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onSpreadChange = /**
     * @param {?} newSpread
     * @return {?}
     */
    function (newSpread) {
        this.spreadChange.emit(newSpread);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.activateTextlayerIfNecessary = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (this.textLayer === undefined) {
            if (!this.handTool) {
                if (options) {
                    options.set('textLayerMode', 1);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        // todo remove this hack:
                        /** @type {?} */
                        var viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        var findbar = (/** @type {?} */ (document.getElementById('findbar')));
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    }));
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', this.showHandToolButton ? 1 : 0);
                }
                if (!this.showHandToolButton) {
                    if (this.showFindButton || this.showFindButton === undefined) {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.showFindButton = false;
                        }));
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        }
                    }
                    if (this.showHandToolButton) {
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                            this.showHandToolButton = false;
                        }
                    }
                }
            }
        }
        else {
            if (this.textLayer) {
                if (options) {
                    options.set('textLayerMode', 1);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        // todo remove this hack:
                        /** @type {?} */
                        var viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        var findbar = (/** @type {?} */ (document.getElementById('findbar')));
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    }));
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', 0);
                }
                this.textLayer = false;
                if (this.showFindButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        // tslint:disable-next-line:max-line-length
                        console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.showFindButton = false;
                        }));
                    }
                }
                if (this.showHandToolButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        console.warn(
                        // tslint:disable-next-line:max-line-length
                        'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                        this.showHandToolButton = false;
                    }
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.overrideDefaultSettings = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = (/** @type {?} */ (((/** @type {?} */ (window))).PDFViewerApplicationOptions));
        // tslint:disable-next-line:forin
        for (var key in pdfDefaultOptions) {
            options.set(key, pdfDefaultOptions[key]);
        }
        options.set('disablePreferences', true);
        this.setZoom();
        options.set('ignoreKeyboard', this.ignoreKeyboard);
        options.set('ignoreKeys', this.ignoreKeys);
        options.set('acceptKeys', this.acceptKeys);
        this.activateTextlayerIfNecessary(options);
        if (this.scrollMode) {
            options.set('scrollModeOnLoad', this.scrollMode);
        }
        /** @type {?} */
        var sidebarVisible = this.sidebarVisible;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (sidebarVisible !== undefined) {
            PDFViewerApplication.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            if (PDFViewerApplication.appConfig) {
                PDFViewerApplication.appConfig.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            }
            options.set('sidebarViewOnLoad', this.sidebarVisible ? 1 : 0);
        }
        if (this.spread === 'even') {
            options.set('spreadModeOnLoad', 2);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 2;
            }
            this.onSpreadChange('even');
        }
        else if (this.spread === 'odd') {
            options.set('spreadModeOnLoad', 1);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 1;
            }
            this.onSpreadChange('odd');
        }
        else {
            options.set('spreadModeOnLoad', 0);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 0;
            }
            this.onSpreadChange('off');
        }
        if (this.printResolution) {
            options.set('printResolution', this.printResolution);
        }
        if (this.showBorders === false) {
            options.set('removePageBorders', !this.showBorders);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.openPDF = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.enablePrint = this.enablePrint;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = true;
        this.onResize();
        if (!this.listenToURL) {
            PDFViewerApplication.pdfLinkService.setHash = (/**
             * @return {?}
             */
            function () { });
        }
        this.initTimeout = null;
        this.selectCursorTool();
        PDFViewerApplication.eventBus.on('textlayerrendered', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.textLayerRendered.emit(x);
        }));
        PDFViewerApplication.eventBus.on('scrollmodechanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.scrollModeChange.emit(x.mode);
        }));
        PDFViewerApplication.eventBus.on('pagesloaded', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.pagesLoaded.emit(x);
            if (_this.pageViewMode === 'infinite-scroll') {
                /** @type {?} */
                var h = x.source.viewer.clientHeight;
                if (_this.primaryMenuVisible) {
                    _this.height = h + 35 + 'px';
                }
                else {
                    _this.height = h + 'px';
                }
            }
            if (_this.rotation) {
                /** @type {?} */
                var r = Number(_this.rotation);
                if (r === 0 || r === 90 || r === 180 || r === 270) {
                    PDFViewerApplication.pdfViewer.pagesRotation = r;
                }
            }
            else {
                PDFViewerApplication.pdfViewer.pagesRotation = 0;
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (_this.nameddest) {
                        PDFViewerApplication.pdfLinkService.navigateTo(_this.nameddest);
                    }
                    else if (_this.page) {
                        PDFViewerApplication.page = Number(_this.page);
                    }
                    else if (_this.pageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = _this.pageLabel;
                    }
                }
            }));
            _this.setZoom();
        }));
        PDFViewerApplication.eventBus.on('pagerendered', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.pageRendered.emit(x);
                _this.fillFormFields(_this.formData);
                _this.addFormFieldListeners(_this.formData);
            }));
        }));
        PDFViewerApplication.eventBus.on('download', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.pdfDownloaded.emit(x);
            }));
        }));
        PDFViewerApplication.eventBus.on('scalechanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.currentZoomFactor.emit(x.scale);
                    /** @type {?} */
                    var scale = (/** @type {?} */ (((/** @type {?} */ (_this.root.nativeElement))).querySelector('#scaleSelect')));
                    /** @type {?} */
                    var userZoomFactor = _this.zoom;
                    if (scale) {
                        userZoomFactor = scale.value;
                    }
                    if (userZoomFactor !== 'auto' && userZoomFactor !== 'page-fit' && userZoomFactor !== 'page-actual' && userZoomFactor !== 'page-width') {
                        _this.zoomChange.emit(x.scale * 100);
                    }
                    else if (_this.zoom !== userZoomFactor) {
                        // called when the user selects one of the text values of the zoom select dropdown
                        _this.zoomChange.emit(userZoomFactor);
                    }
                }));
            }));
        }));
        PDFViewerApplication.eventBus.on('rotationchanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.rotationChange.emit(x.pagesRotation);
            }));
        }));
        PDFViewerApplication.eventBus.on('fileinputchange', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var path = x.fileInput.value.replace('C:\\fakepath\\', '');
                _this.srcChange.emit(path);
            }));
        }));
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
            }));
        }));
        PDFViewerApplication.eventBus.on('sidebarviewchanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.sidebarVisibleChange.emit(x.view > 0);
                if (_this.sidebarComponent) {
                    _this.sidebarComponent.showToolbarWhenNecessary();
                }
            }));
        }));
        PDFViewerApplication.eventBus.on('documentloaded', (/**
         * @param {?} pdfLoadedEvent
         * @return {?}
         */
        function (pdfLoadedEvent) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.loadComplete(pdfLoadedEvent.source.pdfDocument);
            }));
        }));
        /** @type {?} */
        var hideSidebarToolbar = (/**
         * @return {?}
         */
        function () {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (_this.sidebarComponent) {
                    _this.sidebarComponent.showToolbarWhenNecessary();
                }
            }));
        });
        PDFViewerApplication.eventBus.on('outlineloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('attachmentsloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('layersloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('updatefindcontrolstate', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.updateFindMatchesCount) {
                if (x.state === FindState.NOT_FOUND) {
                    _this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                }
                else if (x.matchesCount.total) {
                    _this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
            if (_this.updateFindState) {
                _this.updateFindState.emit(x.state);
            }
        }));
        PDFViewerApplication.eventBus.on('updatefindmatchescount', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.updateFindMatchesCount) {
                if (x.matchesCount.total) {
                    _this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
        }));
        PDFViewerApplication.eventBus.on('pagechanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (!_this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                    /** @type {?} */
                    var currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                    if (currentPage !== _this.page) {
                        _this.pageChange.emit(currentPage);
                    }
                    if (currentPageLabel !== _this.pageLabel) {
                        _this.pageLabelChange.emit(currentPageLabel);
                    }
                }));
            }
        }));
        this.checkHeight();
        // open a file in the viewer
        if (!!this._src) {
            /** @type {?} */
            var options = {
                password: this.password,
                verbosity: this.logLevel,
            };
            if (this._src['range']) {
                options.range = this._src['range'];
            }
            if (this.httpHeaders) {
                options.httpHeaders = this.httpHeaders;
            }
            if (this.authorization) {
                options.withCredentials = true;
                if (options.httpHeaders) {
                    if (!options.httpHeaders.Authorization) {
                        options.httpHeaders.Authorization = this.authorization;
                    }
                }
                else {
                    options.httpHeaders = {
                        Authorization: this.authorization,
                    };
                }
            }
            PDFViewerApplication.onError = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.pdfLoadingFailed.emit(error); });
            PDFViewerApplication.open(this._src, options).then((/**
             * @return {?}
             */
            function () {
                _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
            }));
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                if (_this.page) {
                    PDFViewerApplication.page = Number(_this.page);
                }
            }
        }), 100);
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.openPDF2 = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.overrideDefaultSettings();
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var options = {
            password: this.password,
            verbosity: this.logLevel,
        };
        if (this._src['range']) {
            options.range = this._src['range'];
        }
        if (this.httpHeaders) {
            options.httpHeaders = this.httpHeaders;
        }
        if (this.authorization) {
            options.withCredentials = true;
            if (options.httpHeaders) {
                if (!options.httpHeaders.Authorization) {
                    options.httpHeaders.Authorization = this.authorization;
                }
            }
            else {
                options.httpHeaders = {
                    Authorization: this.authorization,
                };
            }
        }
        PDFViewerApplication.open(this._src, options).then((/**
         * @return {?}
         */
        function () {
            _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.pdfLoadingFailed.emit(error); }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.selectCursorTool = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        this.shuttingDown = true;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
        if (this.initTimeout) {
            clearTimeout(this.initTimeout);
            this.initTimeout = undefined;
        }
        if (PDFViewerApplication) {
            if (this.pinchOnMobileSupport) {
                this.pinchOnMobileSupport.destroyPinchZoom();
                this.pinchOnMobileSupport = undefined;
            }
            PDFViewerApplication.cleanup();
            PDFViewerApplication.close();
            if (PDFViewerApplication.printKeyDownListener) {
                removeEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
            }
            if (PDFViewerApplication._boundEvents) {
                PDFViewerApplication.unbindWindowEvents();
            }
            /** @type {?} */
            var bus = PDFViewerApplication.eventBus;
            if (bus) {
                PDFViewerApplication.unbindEvents();
                for (var key in bus._listeners) {
                    if (bus._listeners[key]) {
                        /** @type {?} */
                        var list = bus._listeners[key];
                        // not sure if the for loop is necessary - but
                        // it might improve garbage collection if the "listeners"
                        // array is stored somewhere else
                        for (var i = 0; i < list.length; i++) {
                            list[i] = undefined;
                        }
                        bus._listeners[key] = undefined;
                    }
                }
            }
            ((/** @type {?} */ (PDFViewerApplication.eventBus))) = null;
        }
        /** @type {?} */
        var body = document.getElementsByTagName('body');
        if (body[0]) {
            /** @type {?} */
            var topLevelElements = body[0].children;
            for (var i = topLevelElements.length - 1; i >= 0; i--) {
                /** @type {?} */
                var e = topLevelElements.item(i);
                if (e && e.id === 'printContainer') {
                    body[0].removeChild(e);
                }
                else if (e && e.id === 'fileInput') {
                    body[0].removeChild(e);
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.isPrimaryMenuVisible = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showToolbar) {
            /** @type {?} */
            var visible = this.showBookmarkButton ||
                this.showDownloadButton ||
                this.showFindButton ||
                this.showOpenFileButton ||
                this.showPagingButtons ||
                this.showPresentationModeButton ||
                this.showPrintButton ||
                this.showPropertiesButton ||
                this.showRotateButton ||
                this.showHandToolButton ||
                this.showScrollingButton ||
                this.showSidebarButton ||
                this.showZoomButtons;
            if (visible) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            if ('src' in changes || 'base64Src' in changes) {
                if (!!this._src) {
                    this.openPDF2();
                }
                else {
                    PDFViewerApplication.close();
                }
            }
            if ('zoom' in changes) {
                this.setZoom();
            }
            if ('maxZoom' in changes) {
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
            }
            if ('minZoom' in changes) {
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
            }
            if ('handTool' in changes) {
                this.selectCursorTool();
            }
            if ('page' in changes) {
                if (this.page) {
                    // tslint:disable-next-line: triple-equals
                    if (this.page != PDFViewerApplication.page) {
                        PDFViewerApplication.page = this.page;
                    }
                }
            }
            if ('pageLabel' in changes) {
                if (this.pageLabel) {
                    if (this.pageLabel !== PDFViewerApplication.pdfViewer.currentPageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                    }
                }
            }
            if ('rotation' in changes) {
                if (this.rotation) {
                    /** @type {?} */
                    var r = Number(this.rotation);
                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                    }
                }
                else {
                    PDFViewerApplication.pdfViewer.pagesRotation = 0;
                }
            }
            if ('scrollMode' in changes) {
                if (this.scrollMode) {
                    PDFViewerApplication.pdfViewer.scrollMode = Number(this.scrollMode);
                }
            }
            if ('sidebarVisible' in changes) {
                if (this.sidebarVisible) {
                    PDFViewerApplication.pdfSidebar.open();
                }
                else {
                    PDFViewerApplication.pdfSidebar.close();
                }
            }
            if ('filenameForDownload' in changes) {
                PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
            }
            if ('nameddest' in changes) {
                if (this.nameddest) {
                    PDFViewerApplication.pdfLinkService.navigateTo(this.nameddest);
                }
            }
            if ('spread' in changes) {
                if (this.spread === 'even') {
                    PDFViewerApplication.spreadModeOnLoad = 2;
                    PDFViewerApplication.pdfViewer.spreadMode = 2;
                    this.onSpreadChange('even');
                }
                else if (this.spread === 'odd') {
                    PDFViewerApplication.spreadModeOnLoad = 1;
                    PDFViewerApplication.pdfViewer.spreadMode = 1;
                    this.onSpreadChange('odd');
                }
                else {
                    PDFViewerApplication.spreadModeOnLoad = 0;
                    PDFViewerApplication.pdfViewer.spreadMode = 0;
                    this.onSpreadChange('off');
                }
            }
            if ('enablePinchOnMobile' in changes) {
                if (!changes['enablePinchOnMobile'].isFirstChange()) {
                    if (changes['enablePinchOnMobile'].currentValue !== changes['enablePinchOnMobile'].previousValue) {
                        if (this.enablePinchOnMobile) {
                            this.pinchOnMobileSupport = new PinchOnMobileSupport(this.ngZone);
                        }
                        else {
                            if (this.pinchOnMobileSupport) {
                                this.pinchOnMobileSupport.destroyPinchZoom();
                                this.pinchOnMobileSupport = undefined;
                            }
                        }
                    }
                }
            }
            this.primaryMenuVisible = this.showToolbar;
            if (!this.showSecondaryToolbarButton || this.hideKebabMenuForSecondaryToolbar) {
                if (!this.isPrimaryMenuVisible()) {
                    this.primaryMenuVisible = false;
                }
            }
            this.calcViewerPositionTop();
        } // end of if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized)
        this.onResize();
        if ('printResolution' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                options.set('printResolution', this.printResolution);
            }
        }
        if ('ignoreKeyboard' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('ignoreKeys' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('acceptKeys' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('showBorders' in changes) {
            if (!changes['showBorders'].isFirstChange()) {
                /** @type {?} */
                var options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                    /** @type {?} */
                    var viewer = (/** @type {?} */ (document.getElementById('viewer')));
                    if (this.showBorders) {
                        viewer.classList.remove('removePageBorders');
                    }
                    else {
                        viewer.classList.add('removePageBorders');
                    }
                    if (PDFViewerApplication.pdfViewer) {
                        PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
                    }
                    /** @type {?} */
                    var zoomEvent = (/** @type {?} */ ({
                        source: viewer,
                        // tslint:disable-next-line:no-bitwise
                        scale: (Number(this.zoom) | 100) / 100,
                        presetValue: this.zoom,
                    }));
                    PDFViewerApplication.eventBus.dispatch('scalechanging', zoomEvent);
                }
            }
            if ('showUnverifiedSignatures' in changes) {
                if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
                    PDFViewerApplication.pdfDocument._transport.messageHandler.send('showUnverifiedSignatures', this.showUnverifiedSignatures);
                }
            }
            if ('formData' in changes) {
                /** @type {?} */
                var newFormData = this.addMissingFormFields(changes['formData'].currentValue);
                if (!this.equals(newFormData, changes['formData'].previousValue)) {
                    this.fillFormFields(this.formData);
                }
            }
        }
        if ('enablePrint' in changes) {
            if (!changes['enablePrint'].isFirstChange()) {
                PDFViewerApplication.enablePrint = this.enablePrint;
            }
        }
        if (('customFindbar' in changes && !changes['customFindbar'].isFirstChange()) ||
            ('customFindbarButtons' in changes && !changes['customFindbarButtons'].isFirstChange()) ||
            ('customFindbarInputArea' in changes && !changes['customFindbarInputArea'].isFirstChange()) ||
            ('customToolbar' in changes && !changes['customToolbar'].isFirstChange())) {
            if (this.dummyComponents) {
                this.dummyComponents.addMissingStandardWidgets();
            }
        }
    };
    /**
     * @private
     * @param {?} object1
     * @param {?} object2
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.equals = /**
     * @private
     * @param {?} object1
     * @param {?} object2
     * @return {?}
     */
    function (object1, object2) {
        var e_1, _a, e_2, _b;
        if (!object1 || !object2) {
            return object1 === object2;
        }
        /** @type {?} */
        var keys1 = Object.keys(object1);
        /** @type {?} */
        var keys2 = Object.keys(object2);
        try {
            for (var keys1_1 = __values(keys1), keys1_1_1 = keys1_1.next(); !keys1_1_1.done; keys1_1_1 = keys1_1.next()) {
                var key = keys1_1_1.value;
                if (object1.hasOwnProperty(key)) {
                    if (object1[key] !== undefined && object2[key] !== undefined) {
                        if (object1[key] !== object2[key]) {
                            return false;
                        }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys1_1_1 && !keys1_1_1.done && (_a = keys1_1.return)) _a.call(keys1_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var keys2_1 = __values(keys2), keys2_1_1 = keys2_1.next(); !keys2_1_1.done; keys2_1_1 = keys2_1.next()) {
                var key = keys2_1_1.value;
                if (object2.hasOwnProperty(key)) {
                    if (object1[key] !== undefined && object2[key] !== undefined) {
                        if (object1[key] !== object2[key]) {
                            return false;
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys2_1_1 && !keys2_1_1.done && (_b = keys2_1.return)) _b.call(keys2_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.setZoom = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var zoomAsNumber = this.zoom;
        if (String(zoomAsNumber).endsWith('%')) {
            zoomAsNumber = Number(String(zoomAsNumber).replace('%', '')) / 100;
        }
        else if (!isNaN(Number(zoomAsNumber))) {
            zoomAsNumber = Number(zoomAsNumber) / 100;
        }
        if (!zoomAsNumber) {
            zoomAsNumber = 'auto';
        }
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication) {
            /** @type {?} */
            var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
            PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
        }
        if (PDFViewerApplication.pdfViewer) {
            PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber;
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            /** @type {?} */
            var container = document.getElementById('outerContainer');
            if (container) {
                /** @type {?} */
                var width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onContextMenu = /**
     * @return {?}
     */
    function () {
        return this.contextMenuAllowed;
    };
    /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onSecondaryMenuIsEmpty = /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    function (hideKebabButton) {
        this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
        if (hideKebabButton) {
            if (!this.isPrimaryMenuVisible()) {
                this.primaryMenuVisible = false;
            }
        }
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.fillFormFields = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (!PDFViewerApplication || !PDFViewerApplication.pdfDocument || !PDFViewerApplication.pdfDocument.annotationStorage) {
            // ngOnChanges calls this method too early - so just ignore it
            return;
        }
        /** @type {?} */
        var annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
        for (var annotation in annotations) {
            if (annotation) {
                /** @type {?} */
                var container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                if (container) {
                    /** @type {?} */
                    var field = container.querySelector('input');
                    if (field) {
                        /** @type {?} */
                        var fieldName = field.name;
                        /** @type {?} */
                        var newValue = formData[fieldName];
                        if (newValue === undefined) {
                            if (field.type === 'checkbox') {
                                // Additional PDF Form Field Types #567: use exportValue from the field annotation for the value
                                this.formData[fieldName] = field.checked ? this.buttonValues[annotation] : null;
                            }
                            else if (field.type === 'radio') {
                                // Additional PDF Form Field Types #567: use buttonValue from the field annotation for the value
                                if (field.checked)
                                    this.formData[fieldName] = this.buttonValues[annotation];
                            }
                            else {
                                this.formData[fieldName] = field.value;
                            }
                        }
                        if (newValue !== undefined) {
                            PDFViewerApplication.pdfDocument.annotationStorage.setValue(annotation, newValue);
                            if (field.type === 'checkbox') {
                                /** @type {?} */
                                var v = String(newValue) == this.buttonValues[annotation];
                                field.checked = v;
                            }
                            else if (field.type === 'radio') {
                                /** @type {?} */
                                var v = String(newValue) == this.buttonValues[annotation];
                                field.checked = v;
                            }
                            else {
                                field.value = (/** @type {?} */ (newValue));
                            }
                        }
                    }
                    // Additional PDF Form Field Types #567: handle multi line text fields
                    /** @type {?} */
                    var textarea = container.querySelector('textarea');
                    if (textarea) {
                        /** @type {?} */
                        var fieldName = textarea.name;
                        /** @type {?} */
                        var newValue = formData[fieldName];
                        if (newValue === undefined) {
                            this.formData[fieldName] = textarea.value;
                        }
                        if (newValue !== undefined) {
                            PDFViewerApplication.pdfDocument.annotationStorage.setValue(annotation, newValue);
                            textarea.value = (/** @type {?} */ (newValue));
                        }
                    }
                    /** @type {?} */
                    var select = container.querySelector('select');
                    if (select) {
                        /** @type {?} */
                        var fieldName = select.name;
                        /** @type {?} */
                        var newValue = formData[fieldName];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                            this.formData[fieldName] = this.getSelectValue(select);
                        }
                        if (newValue !== undefined) {
                            PDFViewerApplication.pdfDocument.annotationStorage.setValue(annotation, newValue);
                            // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                            this.setSelectValue(select, newValue);
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.addFormFieldListeners = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
        var _loop_1 = function (annotation) {
            if (annotation) {
                /** @type {?} */
                var container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                if (container) {
                    /** @type {?} */
                    var field_1 = container.querySelector('input');
                    if (field_1) {
                        /** @type {?} */
                        var fieldName_1 = field_1.name;
                        /** @type {?} */
                        var newValue = formData[fieldName_1];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: use exportValue/buttonValue from the field annotation for the value for checkboxes/radio buttons
                            if (field_1.type === 'checkbox' || field_1.type === 'radio') {
                                if (field_1.checked)
                                    this_1.formData[fieldName_1] = this_1.buttonValues[annotation];
                            }
                            else
                                this_1.formData[fieldName_1] = field_1.value;
                        }
                        field_1.addEventListener('input', (/**
                         * @return {?}
                         */
                        function () { return _this.emitFormDataChange(annotation, fieldName_1, field_1); }));
                    }
                    // Additional PDF Form Field Types #567: handle multi line text fields
                    /** @type {?} */
                    var textarea_1 = container.querySelector('textarea');
                    if (textarea_1) {
                        /** @type {?} */
                        var fieldName_2 = textarea_1.name;
                        /** @type {?} */
                        var newValue = formData[fieldName_2];
                        if (newValue === undefined) {
                            this_1.formData[fieldName_2] = textarea_1.value;
                        }
                        textarea_1.addEventListener('input', (/**
                         * @return {?}
                         */
                        function () { return _this.emitFormDataChange(annotation, fieldName_2, textarea_1); }));
                    }
                    /** @type {?} */
                    var select_1 = container.querySelector('select');
                    if (select_1) {
                        /** @type {?} */
                        var fieldName_3 = select_1.name;
                        /** @type {?} */
                        var newValue = formData[fieldName_3];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                            this_1.formData[fieldName_3] = this_1.getSelectValue(select_1);
                        }
                        select_1.addEventListener('input', (/**
                         * @return {?}
                         */
                        function () { return _this.emitFormDataChange(annotation, fieldName_3, select_1); }));
                    }
                }
            }
        };
        var this_1 = this;
        for (var annotation in annotations) {
            _loop_1(annotation);
        }
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.addMissingFormFields = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var result = __assign({}, formData);
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
            /** @type {?} */
            var annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
            for (var annotation in annotations) {
                if (annotation) {
                    /** @type {?} */
                    var container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                    if (container) {
                        /** @type {?} */
                        var field = container.querySelector('input');
                        if (field) {
                            /** @type {?} */
                            var fieldName = field.name;
                            /** @type {?} */
                            var newValue = result[fieldName];
                            if (newValue === undefined) {
                                // Additional PDF Form Field Types #567: use exportValue/buttonValue from the field annotation for the value for checkboxes/radio buttons
                                if (field.type === 'checkbox') {
                                    result[fieldName] = field.checked ? this.buttonValues[annotation] : null;
                                }
                                else if (field.type === 'radio') {
                                    if (field.checked)
                                        result[fieldName] = this.buttonValues[annotation];
                                }
                                else {
                                    result[fieldName] = field.value;
                                }
                            }
                        }
                        /** @type {?} */
                        var select = container.querySelector('select');
                        if (select) {
                            /** @type {?} */
                            var fieldName = select.name;
                            /** @type {?} */
                            var newValue = result[fieldName];
                            if (newValue === undefined) {
                                // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                                result[fieldName] = this.getSelectValue(select);
                            }
                        }
                        // Additional PDF Form Field Types #567: handle multi line text fields
                        /** @type {?} */
                        var textarea = container.querySelector('textarea');
                        if (textarea) {
                            /** @type {?} */
                            var fieldName = textarea.name;
                            /** @type {?} */
                            var newValue = result[fieldName];
                            if (newValue === undefined) {
                                result[fieldName] = textarea.value;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.getSelectValue = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.multiple) {
            /** @type {?} */
            var values = [];
            /** @type {?} */
            var options = field.options;
            for (var i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    values.push(options[i].value);
                }
            }
            return (values);
        }
        else
            return (field.value);
    };
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.setSelectValue = /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        if (field.multiple && Array.isArray(value)) {
            /** @type {?} */
            var values = value;
            /** @type {?} */
            var options = field.options;
            for (var i = 0; i < options.length; i++)
                options[i].selected = (values.indexOf(options[i].value) != -1);
        }
        else
            field.value = (/** @type {?} */ (value));
    };
    /**
     * @private
     * @param {?} annotation
     * @param {?} fieldName
     * @param {?} field
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.emitFormDataChange = /**
     * @private
     * @param {?} annotation
     * @param {?} fieldName
     * @param {?} field
     * @return {?}
     */
    function (annotation, fieldName, field) {
        var _this = this;
        /** @type {?} */
        var value = null;
        if (field instanceof HTMLSelectElement) {
            value = this.getSelectValue(field);
        }
        // Additional PDF Form Field Types #567: handle multi line text fields
        else if (field instanceof HTMLTextAreaElement) {
            value = field.value;
        }
        else if (field instanceof HTMLInputElement) {
            // Additional PDF Form Field Types #567: use exportValue/buttonValue from the field annotation for the value for checkboxes/radio buttons
            if (field.type === 'checkbox') {
                if (field.checked)
                    value = this.buttonValues[annotation];
            }
            else if (field.type === 'radio') {
                if (field.checked)
                    value = this.buttonValues[annotation];
            }
            else {
                value = field.value;
            }
        }
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            if (_this.formData[fieldName] !== undefined) {
                _this.formData[fieldName] = value;
                _this.formDataChange.emit(_this.formData);
            }
        }));
    };
    /*
    private addInput(annotation: PDFAnnotationData, rect: number[]): void {
      // add input to page
      console.log(annotation);
    }
    */
    /*
      private addInput(annotation: PDFAnnotationData, rect: number[]): void {
        // add input to page
        console.log(annotation);
      }
      */
    /**
     * @param {?} pdf
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.loadComplete = /*
      private addInput(annotation: PDFAnnotationData, rect: number[]): void {
        // add input to page
        console.log(annotation);
      }
      */
    /**
     * @param {?} pdf
     * @return {?}
     */
    function (pdf /* PDFDocumentProxy */) {
        var _this = this;
        this.hasSignature = false;
        this.buttonValues = {};
        var _loop_2 = function (i) {
            pdf
                .getPage(i)
                .then((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                // get the annotations of the current page
                return p.getAnnotations();
            }))
                .then((/**
             * @param {?} ann
             * @return {?}
             */
            function (ann) {
                // ugly cast due to missing typescript definitions
                // please contribute to complete @types/pdfjs-dist
                /** @type {?} */
                var annotations = ann;
                annotations
                    .filter((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) { return a.subtype === 'Widget'; })) // get the form field annotation only
                    .forEach((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) {
                    // Additional PDF Form Field Types #567: Store the exportValue for the check boxes and buttonValue for radio buttons for quick reference 
                    if (a.checkBox)
                        _this.buttonValues[a.id] = a.exportValue;
                    else if (a.radioButton)
                        _this.buttonValues[a.id] = a.buttonValue;
                    if (a.fieldType === 'Sig') {
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.hasSignature = true;
                            setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                /** @type {?} */
                                var viewerContainer = (/** @type {?} */ (document.querySelector('#viewerContainer')));
                                viewerContainer.scrollBy(0, -32);
                            }));
                        }));
                    }
                    /*
                    // get the rectangle that represent the single field
                    // and resize it according to the current DPI
                    const fieldRect = currentPage.getViewport(dpiRatio).convertToViewportRectangle(a.rect);
      
                    // add the corresponding input
                    this.addInput(a, fieldRect);
                    */
                }));
            }));
        };
        for (var i = 1; i <= pdf.numPages; i++) {
            _loop_2(i);
        }
    };
    NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
    NgxExtendedPdfViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-extended-pdf-viewer',
                    template: "<link *ngIf=\"useBrowserLocale\" rel=\"resource\" type=\"application/l10n\" [attr.xhref]=\"localeFolderPath+'/locale.properties'\" origin=\"ngx-extended-pdf-viewer\" />\n<pdf-dark-theme *ngIf=\"theme==='dark'\"></pdf-dark-theme>\n<pdf-light-theme *ngIf=\"theme==='light'\"></pdf-light-theme>\n\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\n<div class=\"zoom\" [style.height]=\"height\" [style.minHeight]=\"minHeight\" #root>\n  <div class=\"html\">\n    <div class=\"loadingInProgress body\" [style.backgroundColor]=\"backgroundColor\">\n      <div id=\"outerContainer\" (window:resize)=\"onResize()\">\n        <div class=\"free-floating-bar\">\n          <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"></ng-content>\n        </div>\n        <pdf-sidebar #pdfsidebar\n                     [sidebarPositionTop]=\"sidebarPositionTop\"\n                     [sidebarVisible]=\"sidebarVisible\"\n                     [showSidebarButton]=\"showSidebarButton\"\n                     [customSidebar]=\"customSidebar\"\n                     [customThumbnail]=\"customThumbnail\"\n                     (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\">\n        </pdf-sidebar>\n        <div id=\"mainContainer\">\n          <pdf-dummy-components></pdf-dummy-components>\n\n          <pdf-toolbar\n            [customToolbar]=\"customToolbar\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [primaryMenuVisible]=\"primaryMenuVisible\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showFindButton]=\"showFindButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showRotateButton]=\"showRotateButton\"\n            [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !hideKebabMenuForSecondaryToolbar\"\n            [showSidebarButton]=\"showSidebarButton\"\n            [showZoomButtons]=\"showZoomButtons\"\n            [textLayer]=\"textLayer\"\n            [toolbarPaddingTop]=\"toolbarPaddingTop\"\n            [toolbarWidth]=\"toolbarWidth\"\n            [zoomLevels]=\"zoomLevels\"\n          ></pdf-toolbar>\n\n          <pdf-secondary-toolbar #pdfSecondaryToolbarComponent\n            [customSecondaryToolbar]=\"customSecondaryToolbar\"\n            [secondaryToolbarTop]=\"secondaryToolbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showRotateButton]=\"showRotateButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showScrollingButton]=\"showScrollingButton\"\n            [showSpreadButton]=\"showSpreadButton\"\n            [showPropertiesButton]=\"showPropertiesButton\"\n            (spreadChange)=\"onSpreadChange($event)\"\n            (secondaryMenuIsEmpty)=\"onSecondaryMenuIsEmpty($event)\"\n          >\n          </pdf-secondary-toolbar>\n\n          <pdf-findbar\n            [findbarLeft]=\"findbarLeft\"\n            [findbarTop]=\"findbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showFindButton]=\"showFindButton\"\n            [customFindbarInputArea]=\"customFindbarInputArea\"\n            [customFindbarButtons]=\"customFindbarButtons\"\n          >\n          </pdf-findbar>\n\n          <pdf-context-menu></pdf-context-menu>\n\n          <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\">\n            <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature\">\n              This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.\n            </div>\n            <div id=\"viewer\" class=\"pdfViewer\" [style.backgroundColor]=\"backgroundColor\">\n            </div>\n          </div>\n\n          <div id=\"errorWrapper\" hidden=\"true\">\n            <div id=\"errorMessageLeft\">\n              <span id=\"errorMessage\"></span>\n              <button type=\"button\" id=\"errorShowMore\" data-l10n-id=\"error_more_info\">\n                More Information\n              </button>\n              <button type=\"button\" id=\"errorShowLess\" data-l10n-id=\"error_less_info\" hidden=\"true\">\n                Less Information\n              </button>\n            </div>\n            <div id=\"errorMessageRight\">\n              <button type=\"button\" id=\"errorClose\" data-l10n-id=\"error_close\">Close</button>\n            </div>\n            <div class=\"clearBoth\"></div>\n            <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\n          </div>\n        </div>\n        <!-- mainContainer -->\n\n        <div id=\"overlayContainer\" class=\"hidden\">\n          <div id=\"passwordOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <p id=\"passwordText\" data-l10n-id=\"password_label\">\n                  Enter the password to open this PDF file:\n                </p>\n              </div>\n              <div class=\"row\">\n                <input id=\"password\" class=\"toolbarField\" />\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"passwordCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_cancel\">Cancel</span>\n                </button>\n                <button type=\"button\" id=\"passwordSubmit\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_ok\">OK</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <pdf-document-properties-overlay class=\"container hidden\" id=\"documentPropertiesOverlay\"> </pdf-document-properties-overlay>\n\n          <div id=\"printServiceOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <span data-l10n-id=\"print_progress_message\">Preparing document for printing\u2026</span>\n              </div>\n              <div class=\"row\">\n                <progress value=\"0\" max=\"100\"></progress>\n                <span data-l10n-id=\"print_progress_percent\" data-l10n-args='{ \"progress\": 0 }' class=\"relative-progress\">0%</span>\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"printCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"print_progress_close\">Cancel</span>\n                </button>\n              </div>\n            </div>\n          </div>\n         </div>\n        <!-- overlayContainer -->\n      </div>\n      <!-- outerContainer -->\n      <div id=\"printContainer\"></div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultFreeFloatingBar>\n\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NgxExtendedPdfViewerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PDFNotificationService },
        { type: Location },
        { type: ElementRef }
    ]; };
    NgxExtendedPdfViewerComponent.propDecorators = {
        dummyComponents: [{ type: ViewChild, args: [PdfDummyComponentsComponent,] }],
        root: [{ type: ViewChild, args: ['root',] }],
        customFindbarInputArea: [{ type: Input }],
        customToolbar: [{ type: Input }],
        customFindbar: [{ type: Input }],
        customFindbarButtons: [{ type: Input }],
        customSecondaryToolbar: [{ type: Input }],
        customSidebar: [{ type: Input }],
        customThumbnail: [{ type: Input }],
        customFreeFloatingBar: [{ type: Input }],
        formData: [{ type: Input }],
        formDataChange: [{ type: Output }],
        pageViewMode: [{ type: Input }],
        secondaryToolbarComponent: [{ type: ViewChild, args: ['pdfSecondaryToolbarComponent',] }],
        sidebarComponent: [{ type: ViewChild, args: ['pdfsidebar',] }],
        srcChange: [{ type: Output }],
        scrollMode: [{ type: Input }],
        scrollModeChange: [{ type: Output }],
        authorization: [{ type: Input }],
        httpHeaders: [{ type: Input }],
        contextMenuAllowed: [{ type: Input }],
        afterPrint: [{ type: Output }],
        beforePrint: [{ type: Output }],
        currentZoomFactor: [{ type: Output }],
        enablePrint: [{ type: Input }],
        delayFirstView: [{ type: Input }],
        logLevel: [{ type: Input }],
        enablePinchOnMobile: [{ type: Input }],
        minifiedJSLibraries: [{ type: Input }],
        printResolution: [{ type: Input }],
        rotation: [{ type: Input }],
        rotationChange: [{ type: Output }],
        src: [{ type: Input }],
        base64Src: [{ type: Input }],
        height: [{ type: Input }],
        useBrowserLocale: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        filenameForDownload: [{ type: Input }],
        ignoreKeyboard: [{ type: Input }],
        ignoreKeys: [{ type: Input }],
        acceptKeys: [{ type: Input }],
        imageResourcesPath: [{ type: Input }],
        localeFolderPath: [{ type: Input }],
        language: [{ type: Input }],
        listenToURL: [{ type: Input }],
        nameddest: [{ type: Input }],
        password: [{ type: Input }],
        showUnverifiedSignatures: [{ type: Input }],
        startTabindex: [{ type: Input }],
        showSidebarButton: [{ type: Input }],
        sidebarVisible: [{ type: Input }],
        sidebarVisibleChange: [{ type: Output }],
        showFindButton: [{ type: Input }],
        showPagingButtons: [{ type: Input }],
        showZoomButtons: [{ type: Input }],
        showPresentationModeButton: [{ type: Input }],
        showOpenFileButton: [{ type: Input }],
        showPrintButton: [{ type: Input }],
        showDownloadButton: [{ type: Input }],
        showBookmarkButton: [{ type: Input }],
        theme: [{ type: Input }],
        showToolbar: [{ type: Input }],
        showSecondaryToolbarButton: [{ type: Input }],
        showRotateButton: [{ type: Input }],
        handTool: [{ type: Input }],
        handToolChange: [{ type: Output }],
        showHandToolButton: [{ type: Input }],
        showScrollingButton: [{ type: Input }],
        showSpreadButton: [{ type: Input }],
        showPropertiesButton: [{ type: Input }],
        showBorders: [{ type: Input }],
        spread: [{ type: Input }],
        spreadChange: [{ type: Output }],
        thumbnailDrawn: [{ type: Output }],
        page: [{ type: Input }],
        pageChange: [{ type: Output }],
        pageLabel: [{ type: Input }],
        pageLabelChange: [{ type: Output }],
        pagesLoaded: [{ type: Output }],
        pageRendered: [{ type: Output }],
        pdfDownloaded: [{ type: Output }],
        pdfLoaded: [{ type: Output }],
        pdfLoadingFailed: [{ type: Output }],
        textLayer: [{ type: Input }],
        textLayerRendered: [{ type: Output }],
        updateFindMatchesCount: [{ type: Output }],
        updateFindState: [{ type: Output }],
        zoom: [{ type: Input }],
        zoomChange: [{ type: Output }],
        zoomLevels: [{ type: Input }],
        maxZoom: [{ type: Input }],
        minZoom: [{ type: Input }],
        _mobileFriendlyZoom: [{ type: Input }],
        mobileFriendlyZoom: [{ type: Input }],
        onContextMenu: [{ type: HostListener, args: ['contextmenu',] }]
    };
    return NgxExtendedPdfViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-extended-pdf-viewer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxExtendedPdfViewerService = /** @class */ (function () {
    function NgxExtendedPdfViewerService() {
    }
    /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.findMultiple = /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    function (text, options) {
        if (options === void 0) { options = {}; }
        options = __assign({}, options, { findMultipleSearchTexts: true });
        /** @type {?} */
        var searchString = text.join('\n') + '\n';
        return this.find(searchString, options);
    };
    /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.find = /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    function (text, options) {
        if (options === void 0) { options = {}; }
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
            return false;
        }
        else {
            /** @type {?} */
            var highlightAllCheckbox = (/** @type {?} */ (document.getElementById('findHighlightAll')));
            if (highlightAllCheckbox) {
                highlightAllCheckbox.checked = options.highlightAll || false;
            }
            /** @type {?} */
            var matchCaseCheckbox = (/** @type {?} */ (document.getElementById('findMatchCase')));
            if (matchCaseCheckbox) {
                matchCaseCheckbox.checked = options.matchCase || false;
            }
            /** @type {?} */
            var entireWordCheckbox = (/** @type {?} */ (document.getElementById('findEntireWord')));
            if (entireWordCheckbox) {
                entireWordCheckbox.checked = options.wholeWords || false;
            }
            /** @type {?} */
            var findIgnoreAccentsCheckbox = (/** @type {?} */ (document.getElementById('findIgnoreAccents')));
            if (findIgnoreAccentsCheckbox) {
                findIgnoreAccentsCheckbox.checked = options.ignoreAccents || false;
            }
            /** @type {?} */
            var multipleSearchTerms = options.findMultipleSearchTexts || text.includes('\n') || false;
            /** @type {?} */
            var findMultipleSearchTextsCheckbox = (/** @type {?} */ (document.getElementById('findMultipleSearchTexts')));
            if (findMultipleSearchTextsCheckbox) {
                findMultipleSearchTextsCheckbox.checked = multipleSearchTerms;
            }
            /** @type {?} */
            var individualWordsModeCheckbox = (/** @type {?} */ (document.getElementById('individualWordsMode')));
            if (individualWordsModeCheckbox) {
                individualWordsModeCheckbox.checked = false;
            }
            /** @type {?} */
            var fuzzySearchCheckbox = (/** @type {?} */ (document.getElementById('findFuzzy')));
            if (fuzzySearchCheckbox) {
                fuzzySearchCheckbox.checked = options.fuzzySearch || false;
            }
            /** @type {?} */
            var inputField = multipleSearchTerms ? document.getElementById('findInputMultiline') : document.getElementById('findInput');
            if (inputField) {
                if (inputField instanceof HTMLTextAreaElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    ((/** @type {?} */ (document.getElementById('findInput')))).classList.add('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsModeLabel')))).classList.remove('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsMode')))).classList.remove('hidden');
                    // end of the dirty hack
                }
                else if (inputField instanceof HTMLInputElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    ((/** @type {?} */ (document.getElementById('findInputMultiline')))).classList.add('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsModeLabel')))).classList.add('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsMode')))).classList.add('hidden');
                    // end of the dirty hack
                }
                inputField.dispatchEvent(new Event('input'));
                return true;
            }
            else {
                // tslint:disable-next-line:quotemark
                console.error("Unexpected error: the input field used to search isn't part of the DOM.");
                return false;
            }
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.findNext = /**
     * @return {?}
     */
    function () {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
            return false;
        }
        else {
            /** @type {?} */
            var button = document.getElementById('findNext');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.findPrevious = /**
     * @return {?}
     */
    function () {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
            return false;
        }
        else {
            /** @type {?} */
            var button = document.getElementById('findPrevious');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    };
    /**
     * @param {?=} printRange
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.print = /**
     * @param {?=} printRange
     * @return {?}
     */
    function (printRange) {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var alreadyThere = !!window['isInPDFPrintRange'] && !printRange;
        if (!alreadyThere) {
            if (!printRange) {
                printRange = (/** @type {?} */ ({}));
            }
            this.setPrintRange(printRange);
        }
        ((/** @type {?} */ (window))).printPDF();
        if (!alreadyThere) {
            PDFViewerApplication.eventBus.on('afterprint', (/**
             * @return {?}
             */
            function () {
                _this.removePrintRange();
            }));
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.removePrintRange = /**
     * @return {?}
     */
    function () {
        window['isInPDFPrintRange'] = undefined;
        window['filteredPageCount'] = undefined;
    };
    /**
     * @param {?} printRange
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.setPrintRange = /**
     * @param {?} printRange
     * @return {?}
     */
    function (printRange) {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        window['isInPDFPrintRange'] = (/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return _this.isInPDFPrintRange(page, (/** @type {?} */ (printRange))); });
        window['filteredPageCount'] = this.filteredPageCount(PDFViewerApplication.pagesCount, printRange);
    };
    /**
     * @param {?} pageCount
     * @param {?} range
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.filteredPageCount = /**
     * @param {?} pageCount
     * @param {?} range
     * @return {?}
     */
    function (pageCount, range) {
        /** @type {?} */
        var result = 0;
        for (var page = 1; page <= pageCount; page++) {
            if (this.isInPDFPrintRange(page, range)) {
                result++;
            }
        }
        return result;
    };
    /**
     * @param {?} pageIndex
     * @param {?} printRange
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.isInPDFPrintRange = /**
     * @param {?} pageIndex
     * @param {?} printRange
     * @return {?}
     */
    function (pageIndex, printRange) {
        /** @type {?} */
        var page = pageIndex + 1;
        if (printRange.from) {
            if (page < printRange.from) {
                return false;
            }
        }
        if (printRange.to) {
            if (page > printRange.to) {
                return false;
            }
        }
        if (printRange.excluded) {
            /** @type {?} */
            var e = (/** @type {?} */ (printRange.excluded));
            if (e.some((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p === page; }))) {
                return false;
            }
        }
        if (printRange.included) {
            if (!printRange.included.some((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p === page; }))) {
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.getPageAsText = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var pdfDocument = PDFViewerApplication.pdfDocument;
        /** @type {?} */
        var pagePromise = pdfDocument.getPage(pageNumber);
        /** @type {?} */
        var extractTextSnippets = (/**
         * @param {?} pdfPage
         * @return {?}
         */
        function (pdfPage) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var textSnippets = pdfPage.getTextContent();
                resolve(textSnippets);
            }));
        });
        /** @type {?} */
        var combineTextSnippets = (/**
         * @param {?} textSnippets
         * @return {?}
         */
        function (textSnippets) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var text = _this.convertTextInfoToText(textSnippets);
                resolve(text);
            }));
        });
        return pagePromise.then(extractTextSnippets).then(combineTextSnippets);
    };
    /**
     * @private
     * @param {?} textInfo
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.convertTextInfoToText = /**
     * @private
     * @param {?} textInfo
     * @return {?}
     */
    function (textInfo) {
        if (!textInfo) {
            return '';
        }
        return textInfo.items.map((/**
         * @param {?} info
         * @return {?}
         */
        function (info) { return info.str; })).join('');
    };
    /**
     * @param {?} pageNumber
     * @param {?} scale
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.getPageAsImage = /**
     * @param {?} pageNumber
     * @param {?} scale
     * @return {?}
     */
    function (pageNumber, scale) {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var pdfDocument = PDFViewerApplication.pdfDocument;
        /** @type {?} */
        var pagePromise = pdfDocument.getPage(pageNumber);
        /** @type {?} */
        var imagePromise = (/**
         * @param {?} pdfPage
         * @return {?}
         */
        function (pdfPage) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                resolve(_this.draw(pdfPage, scale));
            }));
        });
        return pagePromise.then(imagePromise);
    };
    /**
     * @private
     * @param {?} pdfPage
     * @param {?} scale
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.draw = /**
     * @private
     * @param {?} pdfPage
     * @param {?} scale
     * @return {?}
     */
    function (pdfPage, scale) {
        /** @type {?} */
        var zoomFactor = 1;
        if (scale.scale) {
            zoomFactor = scale.scale;
        }
        else if (scale.width) {
            zoomFactor = scale.width / pdfPage.getViewport({ scale: 1 }).width;
        }
        else if (scale.height) {
            zoomFactor = scale.height / pdfPage.getViewport({ scale: 1 }).height;
        }
        /** @type {?} */
        var viewport = pdfPage.getViewport({
            scale: zoomFactor,
        });
        var _a = this.getPageDrawContext(viewport.width, viewport.height), ctx = _a.ctx, canvas = _a.canvas;
        /** @type {?} */
        var drawViewport = viewport.clone();
        /** @type {?} */
        var renderContext = {
            canvasContext: ctx,
            viewport: drawViewport,
        };
        /** @type {?} */
        var renderTask = pdfPage.render(renderContext);
        /** @type {?} */
        var dataUrlPromise = (/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                resolve(canvas.toDataURL());
            }));
        });
        return renderTask.promise.then(dataUrlPromise);
    };
    /**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.getPageDrawContext = /**
     * @private
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        /** @type {?} */
        var canvas = (/** @type {?} */ (document.createElement('canvas')));
        /** @type {?} */
        var ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) {
            // tslint:disable-next-line: quotemark
            throw new Error("Couldn't create the 2d context");
        }
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        return { ctx: ctx, canvas: canvas };
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.getCurrentDocumentAsBlob = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var PDFViewerApplication, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
                        return [4 /*yield*/, PDFViewerApplication.pdfDocument.saveDocument(PDFViewerApplication.pdfDocument.annotationStorage)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new Blob([data], { type: 'application/pdf' })];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.getFormData = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var PDFViewerApplication, pdf /*: PDFDocumentProxy */, dpiRatio, result, _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
                        pdf = PDFViewerApplication.pdfDocument;
                        // screen DPI / PDF DPI
                        dpiRatio = 96 / 72;
                        result = [];
                        _loop_1 = function (i) {
                            var currentPage /* : PDFPageProxy */, annotations;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // track the current page
                                        return [4 /*yield*/, pdf.getPage(i)];
                                    case 1:
                                        currentPage = _a.sent();
                                        return [4 /*yield*/, currentPage.getAnnotations()];
                                    case 2:
                                        annotations = _a.sent();
                                        annotations
                                            .filter((/**
                                         * @param {?} a
                                         * @return {?}
                                         */
                                        function (a) { return a.subtype === 'Widget'; })) // get the form field annotations only
                                            .forEach((/**
                                         * @param {?} a
                                         * @return {?}
                                         */
                                        function (a) {
                                            // get the rectangle that represent the single field
                                            // and resize it according to the current DPI
                                            /** @type {?} */
                                            var fieldRect = currentPage.getViewport({ scale: dpiRatio }).convertToViewportRectangle(a.rect);
                                            // add the corresponding input
                                            result.push({ fieldAnnotation: a, fieldRect: fieldRect });
                                        }));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= pdf.numPages)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    return NgxExtendedPdfViewerService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-print-range.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-hand-tool/pdf-hand-tool.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfHandToolComponent = /** @class */ (function () {
    function PdfHandToolComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.showHandToolButton = true;
        this.isSelected = false;
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
     * @private
     * @return {?}
     */
    PdfHandToolComponent.prototype.onPdfJsInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var tool = _a.tool;
            return (_this.isSelected = tool === PdfCursorTools.HAND);
        }));
    };
    /**
     * @return {?}
     */
    PdfHandToolComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.HAND });
    };
    PdfHandToolComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-hand-tool',
                    template: "<button\n  (click)=\"onClick()\"\n  type=\"button\"\n  [class.invisible]=\"!showHandToolButton\"\n  [class.toggled]=\"isSelected\"\n  id=\"primaryCursorHandTool\"\n  class=\"toolbarButton hiddenXXLView\"\n  title=\"Enable hand tool\"\n  data-l10n-id=\"cursor_hand_tool\">\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z\" />\n  </svg>\n  <span data-l10n-id=\"cursor_hand_tool_label\">Hand Tool</span>\n</button>\n",
                    styles: [":host{margin-top:0}:host:focus{outline:0}button:focus,svg:focus{outline:0}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}"]
                }] }
    ];
    /** @nocollapse */
    PdfHandToolComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfHandToolComponent.propDecorators = {
        showHandToolButton: [{ type: Input }]
    };
    return PdfHandToolComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-bookmark/pdf-bookmark.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfBookmarkComponent = /** @class */ (function () {
    function PdfBookmarkComponent() {
        this.showBookmarkButton = true;
    }
    PdfBookmarkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-bookmark',
                    template: "<a\n  href=\"#\"\n  [class.invisible]=\"!showBookmarkButton\"\n  id=\"viewBookmark\"\n  class=\"toolbarButton hiddenTinyView\"\n  title=\"Current view (copy or open in new window)\"\n  data-l10n-id=\"bookmark\"\n>\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z\" />\n  </svg>\n  <span data-l10n-id=\"bookmark_label\">Current View</span>\n</a>\n",
                    styles: [":host a.toolbarButton svg{margin-top:4px}:host:focus{outline:0}a:focus,svg:focus{outline:0}"]
                }] }
    ];
    PdfBookmarkComponent.propDecorators = {
        showBookmarkButton: [{ type: Input }]
    };
    return PdfBookmarkComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-context-menu/pdf-context-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfContextMenuComponent = /** @class */ (function () {
    function PdfContextMenuComponent() {
    }
    /**
     * @return {?}
     */
    PdfContextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-context-menu',
                    template: "<!-- the context menu is deactivated because only Firefox supports it -->\n<div style=\"display:none\" type=\"context\" id=\"viewerContextMenu\">\n  <div style=\"display:none\" id=\"contextFirstPage\"></div>\n  <div style=\"display:none\" id=\"contextLastPage\"></div>\n  <div style=\"display:none\" id=\"contextPageRotateCw\"></div>\n  <div style=\"display:none\" id=\"contextPageRotateCcw\"></div>\n</div>\n",
                    styles: [":host{margin-top:4px}"]
                }] }
    ];
    /** @nocollapse */
    PdfContextMenuComponent.ctorParameters = function () { return []; };
    return PdfContextMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/document-properties/pdf-document-properties-overlay/pdf-document-properties-overlay.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfDocumentPropertiesOverlayComponent = /** @class */ (function () {
    function PdfDocumentPropertiesOverlayComponent() {
    }
    /**
     * @return {?}
     */
    PdfDocumentPropertiesOverlayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfDocumentPropertiesOverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-document-properties-overlay',
                    template: "<div>\n  <div class=\"dialog\">\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_file_name\"\n        >File name:</span\n      >\n      <p id=\"fileNameField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_file_size\"\n        >File size:</span\n      >\n      <p id=\"fileSizeField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_title\">Title:</span>\n      <p id=\"titleField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_author\">Author:</span>\n      <p id=\"authorField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_subject\">Subject:</span>\n      <p id=\"subjectField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_keywords\"\n        >Keywords:</span\n      >\n      <p id=\"keywordsField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_creation_date\"\n        >Creation Date:</span\n      >\n      <p id=\"creationDateField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_modification_date\"\n        >Modification Date:</span\n      >\n      <p id=\"modificationDateField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_creator\">Creator:</span>\n      <p id=\"creatorField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_producer\"\n        >PDF Producer:</span\n      >\n      <p id=\"producerField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_version\"\n        >PDF Version:</span\n      >\n      <p id=\"versionField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_page_count\"\n        >Page Count:</span\n      >\n      <p id=\"pageCountField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_page_size\"\n        >Page Size:</span\n      >\n      <p id=\"pageSizeField\">-</p>\n    </div>\n    <div class=\"separator\"></div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_linearized\"\n        >Fast Web View:</span\n      >\n      <p id=\"linearizedField\">-</p>\n    </div>\n    <div class=\"buttonRow\">\n      <button type=\"button\" id=\"documentPropertiesClose\" class=\"overlayButton\">\n        <span data-l10n-id=\"document_properties_close\">Close</span>\n      </button>\n    </div>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfDocumentPropertiesOverlayComponent.ctorParameters = function () { return []; };
    return PdfDocumentPropertiesOverlayComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-download/pdf-download.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfDownloadComponent = /** @class */ (function () {
    function PdfDownloadComponent() {
        this.showDownloadButton = true;
    }
    PdfDownloadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-download',
                    template: "<button\n  type=\"button\"\n  id=\"download\"\n  class=\"toolbarButton hiddenSmallView\"\n  [class.invisible]=\"!showDownloadButton\"\n  title=\"Download\"\n  data-l10n-id=\"download\"\n>\n  <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\n  </svg>\n  <span data-l10n-id=\"download_label\">Download</span>\n</button>\n",
                    styles: [":host{margin-top:0}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    PdfDownloadComponent.propDecorators = {
        showDownloadButton: [{ type: Input }]
    };
    return PdfDownloadComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindbarComponent = /** @class */ (function () {
    function PdfFindbarComponent() {
        this.showFindButton = true;
    }
    PdfFindbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-findbar',
                    template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\">\n</ng-container>\n\n<ng-template #defaultFindbar>\n  <div\n    class=\"findbar hidden doorHanger\"\n    [class.invisible]=\"!showFindButton\"\n    id=\"findbar\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'left center'\"\n    [style.left]=\"findbarLeft\"\n    [style.top]=\"findbarTop\"\n  >\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\n    </div>\n</ng-template>\n\n<ng-template #defaultFindbarButtons>\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\n  <pdf-findbar-options-one-container></pdf-findbar-options-one-container>\n  <pdf-findbar-options-two-container></pdf-findbar-options-two-container>\n  <pdf-findbar-options-three-container></pdf-findbar-options-three-container>\n  <pdf-findbar-message-container></pdf-findbar-message-container>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    PdfFindbarComponent.propDecorators = {
        showFindButton: [{ type: Input }],
        mobileFriendlyZoomScale: [{ type: Input }],
        findbarLeft: [{ type: Input }],
        findbarTop: [{ type: Input }],
        customFindbarInputArea: [{ type: Input }],
        customFindbar: [{ type: Input }],
        customFindbarButtons: [{ type: Input }]
    };
    return PdfFindbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-message-container/pdf-findbar-message-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindbarMessageContainerComponent = /** @class */ (function () {
    function PdfFindbarMessageContainerComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindbarMessageContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindbarMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-findbar-message-container',
                    template: "<div id=\"findbarMessageContainer\">\n  <span id=\"findMsg\" class=\"toolbarLabel\"></span>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindbarMessageContainerComponent.ctorParameters = function () { return []; };
    return PdfFindbarMessageContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-findbar-options-one-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindbarOptionsOneContainerComponent = /** @class */ (function () {
    function PdfFindbarOptionsOneContainerComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindbarOptionsOneContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindbarOptionsOneContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-findbar-options-one-container',
                    template: "<div id=\"findbarOptionsOneContainer\">\n  <pdf-find-highlight-all></pdf-find-highlight-all>\n  <pdf-find-match-case></pdf-find-match-case>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindbarOptionsOneContainerComponent.ctorParameters = function () { return []; };
    return PdfFindbarOptionsOneContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-findbar-options-three-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindbarOptionsThreeContainerComponent = /** @class */ (function () {
    function PdfFindbarOptionsThreeContainerComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindbarOptionsThreeContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindbarOptionsThreeContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-findbar-options-three-container',
                    template: "<div id=\"findbarOptionsThreeContainer\">\n  <pdf-find-ignore-accents></pdf-find-ignore-accents>\n  <pdf-find-fuzzily></pdf-find-fuzzily>\n  <pdf-find-results-count></pdf-find-results-count>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindbarOptionsThreeContainerComponent.ctorParameters = function () { return []; };
    return PdfFindbarOptionsThreeContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-findbar-options-two-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindbarOptionsTwoContainerComponent = /** @class */ (function () {
    function PdfFindbarOptionsTwoContainerComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindbarOptionsTwoContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindbarOptionsTwoContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-findbar-options-two-container',
                    template: "<div id=\"findbarOptionsTwoContainer\">\n  <pdf-find-entire-word></pdf-find-entire-word>\n  <pdf-find-entire-phrase></pdf-find-entire-phrase>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindbarOptionsTwoContainerComponent.ctorParameters = function () { return []; };
    return PdfFindbarOptionsTwoContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-find-button/pdf-find-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindButtonComponent = /** @class */ (function () {
    function PdfFindButtonComponent() {
        this.showFindButton = undefined;
        this.textLayer = undefined;
    }
    /**
     * @return {?}
     */
    PdfFindButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-button',
                    template: "<button\n  type=\"button\"\n  [class.invisible]=\"!showFindButton || !textLayer\"\n  id=\"viewFind\"\n  class=\"toolbarButton\"\n  title=\"Find in Document\"\n  data-l10n-id=\"findbar\"\n>\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" />\n  </svg>\n  <span data-l10n-id=\"findbar_label\">Find</span>\n</button>\n",
                    styles: ["button svg{margin-top:-2px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfFindButtonComponent.ctorParameters = function () { return []; };
    PdfFindButtonComponent.propDecorators = {
        showFindButton: [{ type: Input }],
        textLayer: [{ type: Input }]
    };
    return PdfFindButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindEntireWordComponent = /** @class */ (function () {
    function PdfFindEntireWordComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindEntireWordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindEntireWordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-entire-word',
                    template: "<input\n  type=\"checkbox\"\n  id=\"findEntireWord\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findEntireWord\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_entire_word_label\">\n  Whole words\n</label>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindEntireWordComponent.ctorParameters = function () { return []; };
    return PdfFindEntireWordComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-fuzzily/pdf-find-fuzzily.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindFuzzilyComponent = /** @class */ (function () {
    function PdfFindFuzzilyComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindFuzzilyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindFuzzilyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-fuzzily',
                    template: "<input\n  type=\"checkbox\"\n  id=\"findFuzzy\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findFuzzy\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_fuzzy\">\n    Fuzzy search\n</label>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindFuzzilyComponent.ctorParameters = function () { return []; };
    return PdfFindFuzzilyComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindHighlightAllComponent = /** @class */ (function () {
    function PdfFindHighlightAllComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindHighlightAllComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindHighlightAllComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-highlight-all',
                    template: "<input\n  type=\"checkbox\"\n  id=\"findHighlightAll\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findHighlightAll\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_highlight\">\n  Highlight all\n</label>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindHighlightAllComponent.ctorParameters = function () { return []; };
    return PdfFindHighlightAllComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-ignore-accents/pdf-find-ignore-accents.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindIgnoreAccentsComponent = /** @class */ (function () {
    function PdfFindIgnoreAccentsComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindIgnoreAccentsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindIgnoreAccentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-ignore-accents',
                    template: "<input\n  type=\"checkbox\"\n  id=\"findIgnoreAccents\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findIgnoreAccents\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_ignore_accents\">\n    Ignore accents and diacritics\n</label>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindIgnoreAccentsComponent.ctorParameters = function () { return []; };
    return PdfFindIgnoreAccentsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-find-input-area/pdf-find-input-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindInputAreaComponent = /** @class */ (function () {
    function PdfFindInputAreaComponent() {
    }
    PdfFindInputAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-input-area',
                    template: "<div id=\"findbarInputContainer\" *ngIf=\"!customFindbarInputArea\">\n  <pdf-search-input-field></pdf-search-input-field>\n  <pdf-find-previous></pdf-find-previous>\n  <pdf-find-next></pdf-find-next>\n</div>\n\n<ng-container [ngTemplateOutlet]=\"customFindbarInputArea\"> </ng-container>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindInputAreaComponent.ctorParameters = function () { return []; };
    PdfFindInputAreaComponent.propDecorators = {
        customFindbarInputArea: [{ type: Input }]
    };
    return PdfFindInputAreaComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindMatchCaseComponent = /** @class */ (function () {
    function PdfFindMatchCaseComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindMatchCaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindMatchCaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-match-case',
                    template: "<input\n  type=\"checkbox\"\n  id=\"findMatchCase\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findMatchCase\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_match_case_label\">\n    Match case\n</label>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindMatchCaseComponent.ctorParameters = function () { return []; };
    return PdfFindMatchCaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindbarService = /** @class */ (function () {
    function PdfFindbarService() {
        this.individualWordsMode = true;
        this.multipleSearchTexts = false;
    }
    PdfFindbarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PdfFindbarService.ngInjectableDef = defineInjectable({ factory: function PdfFindbarService_Factory() { return new PdfFindbarService(); }, token: PdfFindbarService, providedIn: "root" });
    return PdfFindbarService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-phrase/pdf-find-entire-phrase.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindMultipleSearchTextsComponent = /** @class */ (function () {
    function PdfFindMultipleSearchTextsComponent(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
    /**
     * @return {?}
     */
    PdfFindMultipleSearchTextsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PdfFindMultipleSearchTextsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-entire-phrase',
                    template: "<input\n  type=\"checkbox\"\n  id=\"findMultipleSearchTexts\"\n  class=\"toolbarField\"\n  [(ngModel)]=\"pdfFindbarService.multipleSearchTexts\"\n/>\n\n<label\n  for=\"findMultipleSearchTexts\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_multiple_texts_label\">\n  multiple search texts\n</label>\n\n<input [class.hidden]=\"!pdfFindbarService.multipleSearchTexts\"\n  type=\"checkbox\"\n  id=\"individualWordsMode\"\n  class=\"toolbarField\"\n  [(ngModel)]=\"pdfFindbarService.individualWordsMode\"\n/>\n\n<label [class.hidden]=\"!pdfFindbarService.multipleSearchTexts\"\n  for=\"individualWordsMode\"\n  id=\"individualWordsModeLabel\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_individual_words_label\">\n  separated by word boundaries\n</label>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindMultipleSearchTextsComponent.ctorParameters = function () { return [
        { type: PdfFindbarService }
    ]; };
    return PdfFindMultipleSearchTextsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-find-next/pdf-find-next.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindNextComponent = /** @class */ (function () {
    function PdfFindNextComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindNextComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindNextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-next',
                    template: "<button type=\"button\"\n  id=\"findNext\"\n  class=\"toolbarButton\"\n  title=\"Find the next occurrence of the phrase\"\n  data-l10n-id=\"find_next\">\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"find_next_label\">Next</span>\n</button>\n",
                    styles: ["button.toolbarButton#findNext{margin-top:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfFindNextComponent.ctorParameters = function () { return []; };
    return PdfFindNextComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-find-previous/pdf-find-previous.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindPreviousComponent = /** @class */ (function () {
    function PdfFindPreviousComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindPreviousComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindPreviousComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-previous',
                    template: "<button type=\"button\"\n  id=\"findPrevious\"\n  class=\"toolbarButton\"\n  title=\"Find the previous occurrence of the phrase\"\n  data-l10n-id=\"find_previous\"\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"find_previous_label\">Previous</span>\n</button>\n",
                    styles: ["button.toolbarButton#findPrevious{margin-top:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfFindPreviousComponent.ctorParameters = function () { return []; };
    return PdfFindPreviousComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFindResultsCountComponent = /** @class */ (function () {
    function PdfFindResultsCountComponent() {
    }
    /**
     * @return {?}
     */
    PdfFindResultsCountComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfFindResultsCountComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-find-results-count',
                    template: "<span id=\"findResultsCount\" class=\"toolbarLabel hidden\"></span>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFindResultsCountComponent.ctorParameters = function () { return []; };
    return PdfFindResultsCountComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-paging-area/pdf-first-page/pdf-first-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfFirstPageComponent = /** @class */ (function () {
    function PdfFirstPageComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.disableFirstPage = true;
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
    PdfFirstPageComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    };
    /**
     * @return {?}
     */
    PdfFirstPageComponent.prototype.onPdfJsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.updateUIState(event); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PdfFirstPageComponent.prototype.updateUIState = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.disableFirstPage = event.pageNumber <= 1;
        this.button.nativeElement.disabled = this.disableFirstPage;
    };
    PdfFirstPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-first-page',
                    template: "<button type=\"button\"\n  class=\"toolbarButton hiddenLargeView\"\n  title=\"First page\"\n  id=\"primaryFirstPage\"\n  data-l10n-id=\"first_page\"\n  (click)=\"firstPage()\"\n  [disabled]=\"disableFirstPage\"\n  #button\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" />\n  </svg>\n  <span data-l10n-id=\"first_page_label\">First page</span>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFirstPageComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfFirstPageComponent.propDecorators = {
        button: [{ type: ViewChild, args: ['button',] }]
    };
    return PdfFirstPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-paging-area/pdf-last-page/pdf-last-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfLastPageComponent = /** @class */ (function () {
    function PdfLastPageComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.disableLastPage = true;
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
    PdfLastPageComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    };
    /**
     * @return {?}
     */
    PdfLastPageComponent.prototype.onPdfJsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.updateUIState(event); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PdfLastPageComponent.prototype.updateUIState = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.disableLastPage = event.pageNumber === event.pagesCount;
        this.button.nativeElement.disabled = this.disableLastPage;
    };
    /**
     * @return {?}
     */
    PdfLastPageComponent.prototype.lastPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('lastpage');
    };
    PdfLastPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-last-page',
                    template: "<button type=\"button\"\n  class=\"toolbarButton hiddenLargeView\"\n  title=\"Last page\"\n  id=\"primaryLastPage\"\n  data-l10n-id=\"last_page\"\n  (click)=\"lastPage()\"\n  [disabled]=\"disableLastPage\"\n  #button\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z\" />\n  </svg>\n  <span data-l10n-id=\"last_page_label\">Last page</span>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfLastPageComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfLastPageComponent.propDecorators = {
        button: [{ type: ViewChild, args: ['button',] }]
    };
    return PdfLastPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-paging-area/pdf-next-page/pdf-next-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfNextPageComponent = /** @class */ (function () {
    function PdfNextPageComponent() {
    }
    /**
     * @return {?}
     */
    PdfNextPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PdfNextPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-next-page',
                    template: "<button type=\"button\"\n  class=\"toolbarButton\"\n  title=\"Next Page\"\n  id=\"next\"\n  data-l10n-id=\"next\"\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"next_label\">Next</span>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfNextPageComponent.ctorParameters = function () { return []; };
    return PdfNextPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-open-file/pdf-open-file.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfOpenFileComponent = /** @class */ (function () {
    function PdfOpenFileComponent() {
        this.showOpenFileButton = true;
    }
    PdfOpenFileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-open-file',
                    template: "<button type=\"button\"\n        [class.invisible]=\"!showOpenFileButton\"\n        id=\"openFile\"\n        class=\"toolbarButton hiddenMediumView\"\n        title=\"Open File\"\n        data-l10n-id=\"open_file\">\n  <svg style=\"width:24px;height:20px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z\" />\n  </svg>\n  <span data-l10n-id=\"open_file_label\">Open</span>\n</button>\n",
                    styles: [":host{margin-top:0}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    PdfOpenFileComponent.propDecorators = {
        showOpenFileButton: [{ type: Input }]
    };
    return PdfOpenFileComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-paging-area/pdf-page-number/pdf-page-number.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfPageNumberComponent = /** @class */ (function () {
    function PdfPageNumberComponent() {
        this.showPagingButtons = true;
    }
    /**
     * @return {?}
     */
    PdfPageNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PdfPageNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-page-number',
                    template: "<input\n  [class.invisible]=\"!showPagingButtons\"\n  type=\"number\"\n  id=\"pageNumber\"\n  class=\"toolbarField pageNumber\"\n  title=\"Page\"\n  value=\"1\"\n  size=\"4\"\n  min=\"1\"\n  data-l10n-id=\"page\"\n/>\n<span [class.invisible]=\"!showPagingButtons\" id=\"numPages\" class=\"toolbarLabel hiddenXLView\"></span>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfPageNumberComponent.ctorParameters = function () { return []; };
    PdfPageNumberComponent.propDecorators = {
        showPagingButtons: [{ type: Input }]
    };
    return PdfPageNumberComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-paging-area/pdf-paging-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfPagingAreaComponent = /** @class */ (function () {
    function PdfPagingAreaComponent() {
        this.showPagingButtons = true;
    }
    PdfPagingAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-paging-area',
                    template: "<div\n[class.invisible]=\"!showPagingButtons\"\nclass=\"paging-left hiddenTinyView\"\n>\n<pdf-first-page style=\"margin-right: -3px;\"></pdf-first-page>\n<pdf-previous-page style=\"margin-left: -3px;\"></pdf-previous-page>\n</div>\n<pdf-page-number [showPagingButtons]=\"showPagingButtons\"></pdf-page-number>\n<div\n[class.invisible]=\"!showPagingButtons\"\nclass=\"paging-right hiddenTinyView\"\n>\n<pdf-next-page style=\"margin-right: -3px;margin-left: -3px;\"></pdf-next-page>\n<pdf-last-page style=\"margin-left: -3px;\"></pdf-last-page>\n</div>\n",
                    styles: [".paging-right{float:right;display:block;margin-top:-2px}.paging-left{float:left;display:block;margin-top:-2px}"]
                }] }
    ];
    PdfPagingAreaComponent.propDecorators = {
        showPagingButtons: [{ type: Input }]
    };
    return PdfPagingAreaComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-presentation-mode/pdf-presentation-mode.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfPresentationModeComponent = /** @class */ (function () {
    function PdfPresentationModeComponent() {
        this.showPresentationModeButton = true;
    }
    PdfPresentationModeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-presentation-mode',
                    template: "<button type=\"button\"\n        [class.invisible]=\"!showPresentationModeButton\"\n        id=\"presentationMode\"\n        class=\"toolbarButton hiddenLargeView\"\n        title=\"Switch to Presentation Mode\"\n        data-l10n-id=\"presentation_mode\">\n  <svg style=\"width:27px;height:27px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" />\n  </svg>\n  <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\n  </button>\n",
                    styles: [":host button.toolbarButton{margin-top:0}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    PdfPresentationModeComponent.propDecorators = {
        showPresentationModeButton: [{ type: Input }]
    };
    return PdfPresentationModeComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-paging-area/pdf-previous-page/pdf-previous-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfPreviousPageComponent = /** @class */ (function () {
    function PdfPreviousPageComponent() {
    }
    /**
     * @return {?}
     */
    PdfPreviousPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PdfPreviousPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-previous-page',
                    template: "\n<button type=\"button\"\n  class=\"toolbarButton\"\n  title=\"Previous Page\"\n  id=\"previous\"\n  data-l10n-id=\"previous\"\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"previous_label\">Previous</span>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfPreviousPageComponent.ctorParameters = function () { return []; };
    return PdfPreviousPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-print/pdf-print.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfPrintComponent = /** @class */ (function () {
    function PdfPrintComponent() {
        this.showPrintButton = true;
    }
    PdfPrintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-print',
                    template: "<button type=\"button\"\n    [class.invisible]=\"!showPrintButton\"\n    id=\"print\"\n    class=\"toolbarButton hiddenSmallView\"\n    title=\"Print\"\n    data-l10n-id=\"print\"\n    >\n    <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z\" />\n    </svg>\n    <span data-l10n-id=\"print_label\">Print</span>\n</button>\n",
                    styles: [":host{margin-top:-1px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    PdfPrintComponent.propDecorators = {
        showPrintButton: [{ type: Input }]
    };
    return PdfPrintComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-rotate-page/pdf-rotate-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfRotatePageComponent = /** @class */ (function () {
    function PdfRotatePageComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.showRotateButton = true;
        this.disableRotate = true;
        this.clockwise = true;
        this.counterClockwise = true;
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
    PdfRotatePageComponent.prototype.rotateCW = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotatecw');
    };
    /**
     * @return {?}
     */
    PdfRotatePageComponent.prototype.rotateCCW = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotateccw');
    };
    /**
     * @return {?}
     */
    PdfRotatePageComponent.prototype.onPdfJsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.updateUIState(event); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PdfRotatePageComponent.prototype.updateUIState = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.disableRotate = event.pagesCount === 0;
        if (this.button1) {
            this.button1.nativeElement.disabled = this.disableRotate;
        }
        if (this.button2) {
            this.button2.nativeElement.disabled = this.disableRotate;
        }
    };
    PdfRotatePageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-rotate-page',
                    template: "<button\n  *ngIf=\"clockwise\"\n  (click)=\"rotateCW()\"\n  type=\"button\"\n  [class.invisible]=\"!showRotateButton\"\n  id=\"primaryPageRotateCw\"\n  class=\"toolbarButton hiddenXLView rotateCw\"\n  title=\"Rotate Clockwise\"\n  data-l10n-id=\"page_rotate_cw\"\n  [disabled]=\"disableRotate\"\n  #button1>\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3\" />\n    </svg>\n</button>\n<button\n  *ngIf=\"counterClockwise\"\n  (click)=\"rotateCCW()\"\n  type=\"button\"\n  [class.invisible]=\"!showRotateButton\"\n  id=\"primaryPageRotateCcw\"\n  class=\"toolbarButton hiddenXLView rotateCcw\"\n  title=\"Rotate Counterclockwise\"\n  data-l10n-id=\"page_rotate_ccw\"\n  [disabled]=\"disableRotate\"\n  #button2>\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3\" />\n    </svg>\n</button>\n",
                    styles: [":host{margin-top:-1px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfRotatePageComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfRotatePageComponent.propDecorators = {
        showRotateButton: [{ type: Input }],
        clockwise: [{ type: Input }],
        counterClockwise: [{ type: Input }],
        button1: [{ type: ViewChild, args: ['button1',] }],
        button2: [{ type: ViewChild, args: ['button2',] }]
    };
    return PdfRotatePageComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfToggleSecondaryToolbarComponent = /** @class */ (function () {
    function PdfToggleSecondaryToolbarComponent() {
        this.showSecondaryToolbarButton = true;
    }
    /**
     * @return {?}
     */
    PdfToggleSecondaryToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PdfToggleSecondaryToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-toggle-secondary-toolbar',
                    template: "<button\n  type=\"button\"\n  [class.invisible]=\"!showSecondaryToolbarButton\"\n  id=\"secondaryToolbarToggle\"\n  class=\"toolbarButton\"\n  title=\"Tools\"\n  data-l10n-id=\"tools\"\n>\n  <svg style=\"width:27px;height:27px\" viewBox=\"0 0 24 24\" onclick=\"event.preventDefault(); return false;\">\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\n  </svg>\n  <span data-l10n-id=\"tools_label\">Tools</span>\n</button>\n",
                    styles: ["svg{margin-top:-3px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfToggleSecondaryToolbarComponent.ctorParameters = function () { return []; };
    PdfToggleSecondaryToolbarComponent.propDecorators = {
        showSecondaryToolbarButton: [{ type: Input }]
    };
    return PdfToggleSecondaryToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-toggle-sidebar/pdf-toggle-sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfToggleSidebarComponent = /** @class */ (function () {
    function PdfToggleSidebarComponent() {
        this.showSidebarButton = true;
    }
    /**
     * @return {?}
     */
    PdfToggleSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PdfToggleSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-toggle-sidebar',
                    template: "<button\n  type=\"button\"\n  [class.invisible]=\"!showSidebarButton\"\n  id=\"sidebarToggle\"\n  title=\"Toggle Sidebar\"\n  class=\"toolbarButton\"\n  data-l10n-id=\"toggle_sidebar\"\n>\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\n  </svg>\n  <span data-l10n-id=\"toggle_sidebar_label\">Toggle Sidebar</span>\n</button>\n",
                    styles: ["button svg{margin-top:-2px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfToggleSidebarComponent.ctorParameters = function () { return []; };
    PdfToggleSidebarComponent.propDecorators = {
        showSidebarButton: [{ type: Input }]
    };
    return PdfToggleSidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-toolbar/pdf-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfToolbarComponent = /** @class */ (function () {
    function PdfToolbarComponent() {
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
    PdfToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-toolbar',
                    template: "<div class=\"toolbar\" [class.invisible]=\"!primaryMenuVisible\" >\n  <div\n    id=\"toolbarContainer\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'left center'\"\n    [style.width]=\"toolbarWidth\"\n    [style.paddingTop]=\"toolbarPaddingTop\"\n  >\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\n    <div id=\"loadingBar\">\n      <div class=\"progress\"><div class=\"glimmer\"></div></div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultToolbar>\n  <div id=\"toolbarViewer\">\n    <div id=\"toolbarViewerLeft\">\n      <pdf-toggle-sidebar [showSidebarButton]=\"showSidebarButton\"></pdf-toggle-sidebar>\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\"></pdf-find-button>\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\n    </div>\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" [zoomLevels]=\"zoomLevels\"></pdf-zoom-toolbar>\n    <div id=\"toolbarViewerRight\">\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"true\" [counterClockwise]=\"false\"></pdf-rotate-page>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"false\" [counterClockwise]=\"true\"></pdf-rotate-page>\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\n      <pdf-bookmark [showBookmarkButton]=\"showBookmarkButton\"></pdf-bookmark>\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"></pdf-toggle-secondary-toolbar>\n    </div>\n   </div>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfToolbarComponent.ctorParameters = function () { return []; };
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
    return PdfToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-zoom-toolbar/pdf-zoom-in/pdf-zoom-in.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfZoomInComponent = /** @class */ (function () {
    function PdfZoomInComponent() {
    }
    /**
     * @return {?}
     */
    PdfZoomInComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfZoomInComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-zoom-in',
                    template: "<button type=\"button\"\n  id=\"zoomIn\"\n  class=\"toolbarButton zoomIn\"\n  title=\"Zoom In\"\n  data-l10n-id=\"zoom_in\">\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\" />\n  </svg>\n  <span data-l10n-id=\"zoom_in_label\">Zoom In</span>\n</button>\n",
                    styles: ["button{margin-left:-2px!important;margin-right:-2px!important}"]
                }] }
    ];
    /** @nocollapse */
    PdfZoomInComponent.ctorParameters = function () { return []; };
    return PdfZoomInComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-zoom-toolbar/pdf-zoom-out/pdf-zoom-out.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfZoomOutComponent = /** @class */ (function () {
    function PdfZoomOutComponent() {
    }
    /**
     * @return {?}
     */
    PdfZoomOutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfZoomOutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-zoom-out',
                    template: "<button type=\"button\"\n  id=\"zoomOut\"\n  class=\"toolbarButton zoomOut\"\n  title=\"Zoom Out\"\n  data-l10n-id=\"zoom_out\">\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M19,13H5V11H19V13Z\" />\n  </svg>\n  <span data-l10n-id=\"zoom_out_label\">Zoom Out</span>\n</button>\n",
                    styles: ["button{margin-left:-2px!important;margin-right:-2px!important}"]
                }] }
    ];
    /** @nocollapse */
    PdfZoomOutComponent.ctorParameters = function () { return []; };
    return PdfZoomOutComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-zoom-toolbar/pdf-zoom-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfZoomToolbarComponent = /** @class */ (function () {
    function PdfZoomToolbarComponent() {
        this.showZoomButtons = true;
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    }
    PdfZoomToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-zoom-toolbar',
                    template: "<div [class.invisible]=\"!showZoomButtons\" id=\"toolbarViewerMiddle\">\n  <pdf-zoom-out></pdf-zoom-out>\n  <pdf-zoom-in></pdf-zoom-in>\n  <pdf-zoom-dropdown\n      style=\"width: unset; max-width: unset;padding-top:3px\" [zoomLevels]=\"zoomLevels\">\n  </pdf-zoom-dropdown>\n</div>\n",
                    styles: [""]
                }] }
    ];
    PdfZoomToolbarComponent.propDecorators = {
        showZoomButtons: [{ type: Input }],
        zoomLevels: [{ type: Input }]
    };
    return PdfZoomToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/toolbar/pdf-select-tool/pdf-select-tool.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfSelectToolComponent = /** @class */ (function () {
    function PdfSelectToolComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.showSelectToolButton = true;
        this.isSelected = true;
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
     * @private
     * @return {?}
     */
    PdfSelectToolComponent.prototype.onPdfJsInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var tool = _a.tool;
            return (_this.isSelected = tool === PdfCursorTools.SELECT);
        }));
    };
    /**
     * @return {?}
     */
    PdfSelectToolComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.SELECT });
    };
    PdfSelectToolComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-select-tool',
                    template: "<button\n  (click)=\"onClick()\"\n  type=\"button\"\n  [class.invisible]=\"!showSelectToolButton\"\n  [class.toggled]=\"isSelected\"\n  id=\"primaryCursorSelectTool\"\n  class=\"toolbarButton hiddenXXLView\"\n  title=\"Enable text selection tool\"\n  data-l10n-id=\"cursor_text_select_tool\">\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\n  </svg>\n  <span data-l10n-id=\"cursor_text_select_tool_label\">Text selection tool</span>\n</button>\n",
                    styles: [":host{margin-top:0;margin-right:-3px}:host:focus{outline:0}button:focus,svg:focus{outline:0}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}"]
                }] }
    ];
    /** @nocollapse */
    PdfSelectToolComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfSelectToolComponent.propDecorators = {
        showSelectToolButton: [{ type: Input }]
    };
    return PdfSelectToolComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-css/dynamic-css.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicCssComponent = /** @class */ (function () {
    function DynamicCssComponent(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.zoom = 1.0;
        this.width = 100;
        this.xs = 490;
        this.sm = 560;
        this.md = 610;
        this.lg = 660;
        this.xl = 740;
        this.xxl = 830;
    }
    Object.defineProperty(DynamicCssComponent.prototype, "style", {
        get: /**
         * @return {?}
         */
        function () {
            return "\n@media all and (max-width: " + this.xl + "px) {\n  #toolbarViewerMiddle {\n    display: table;\n    margin: auto;\n    left: auto;\n    position: inherit;\n    transform: none;\n  }\n}\n\n@media all and (max-width: 840px) {\n  #sidebarContent {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {\n    left: 0px !important;\n  }\n  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {\n    right: 0px !important;\n  }\n\n  #outerContainer .hiddenLargeView,\n  #outerContainer .hiddenMediumView {\n    display: inherit;\n  }\n  #outerContainer .visibleLargeView,\n  #outerContainer .visibleMediumView {\n    display: none;\n  }\n}\n\n@media all and (max-width: " + this.lg + "px) {\n  .toolbarButtonSpacer {\n    width: 15px;\n  }\n\n  #outerContainer .hiddenLargeView {\n    display: none;\n  }\n  #outerContainer .visibleLargeView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.md + "px) {\n  .toolbarButtonSpacer {\n    display: none;\n  }\n  #outerContainer .hiddenMediumView {\n    display: none;\n  }\n  #outerContainer .visibleMediumView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.sm + "px) {\n  .hiddenSmallView,\n  .hiddenSmallView * {\n    display: none;\n  }\n  .visibleSmallView {\n    display: inherit;\n  }\n  .toolbarButtonSpacer {\n    width: 0;\n  }\n  html[dir='ltr'] .findbar {\n    left: 38px;\n  }\n  html[dir='rtl'] .findbar {\n    right: 38px;\n  }\n}\n\n@media all and (max-width: " + this.xs + "px) {\n  #scaleSelectContainer {\n    display: none;\n  }\n}\n\n.visibleXLView,\n.visibleXXLView,\n.visibleTinyView {\n  display: none;\n}\n\n.hiddenXLView,\n.hiddenXXLView {\n  display: unset;\n}\n\n@media all and (max-width: " + this.xl + "px) {\n  #outerContainer .hiddenXLView {\n    display: none;\n  }\n  #outerContainer .visibleXLView {\n    display: inherit;\n  }\n\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-36%);\n    transform: translateX(-36%);\n    display: unset;\n    margin: unset;\n    left: 50%;\n    position: absolute;\n  }\n}\n\n@media all and (max-width: " + this.xxl + "px) {\n  #outerContainer .hiddenXXLView {\n    display: none;\n  }\n  #outerContainer .visibleXXLView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.md + "px) {\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-26%);\n    transform: translateX(-26%);\n  }\n}\n\n@media all and (max-width: " + this.xs + "px) {\n  .hiddenTinyView,\n  .hiddenTinyView * {\n    display: none;\n  }\n  .visibleTinyView {\n    display: inherit;\n  }\n}\n  ";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicCssComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.injectStyle();
    };
    /**
     * @return {?}
     */
    DynamicCssComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fullWith = this.document.body.clientWidth;
        /** @type {?} */
        var partialViewScale = fullWith / this.width;
        /** @type {?} */
        var scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
        this.xs = scaleFactor * 490;
        this.sm = scaleFactor * 560;
        this.md = scaleFactor * 610;
        this.lg = scaleFactor * 660;
        this.xl = scaleFactor * 740;
        this.xxl = scaleFactor * 830;
        /** @type {?} */
        var styles = this.document.getElementById('pdf-dynamic-css');
        if (styles) {
            styles.innerHTML = this.style;
        }
    };
    /**
     * @private
     * @return {?}
     */
    DynamicCssComponent.prototype.injectStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styles = (/** @type {?} */ (this.document.createElement('STYLE')));
        styles.id = 'pdf-dynamic-css';
        styles.innerHTML = this.style;
        this.renderer.appendChild(this.document.head, styles);
    };
    /**
     * @return {?}
     */
    DynamicCssComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styles = (/** @type {?} */ (this.document.getElementById('pdf-dynamic-css')));
        if (styles && styles.parentElement) {
            ((/** @type {?} */ (styles.parentElement))).removeChild(styles);
        }
    };
    DynamicCssComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-dynamic-css',
                    template: "",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DynamicCssComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DynamicCssComponent.propDecorators = {
        zoom: [{ type: Input }],
        width: [{ type: Input }]
    };
    return DynamicCssComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sidebar/pdf-sidebar/pdf-sidebar-content/pdf-sidebar-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var THUMBNAIL_CANVAS_BORDER_WIDTH = 1;
// px
var PdfSidebarContentComponent = /** @class */ (function () {
    function PdfSidebarContentComponent() {
        var _this = this;
        this.thumbnailDrawn = new EventEmitter();
        this.top = '32px';
        this._hideSidebarToolbar = false;
        ((/** @type {?} */ (window))).pdfThumbnailGeneratorReady = (/**
         * @return {?}
         */
        function () { return _this.pdfThumbnailGeneratorReady(); });
        ((/** @type {?} */ (window))).pdfThumbnailGenerator = (/**
         * @param {?} pdfThumbnailView
         * @param {?} linkService
         * @param {?} id
         * @param {?} container
         * @param {?} thumbPageTitlePromise
         * @return {?}
         */
        function (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) { return _this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise); });
    }
    /**
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.linkService = undefined;
    };
    /**
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.pdfThumbnailGeneratorReady = /**
     * @return {?}
     */
    function () {
        if (!this.thumbnailViewTemplate) {
            return false;
        }
        /** @type {?} */
        var t = (/** @type {?} */ (this.thumbnailViewTemplate.nativeElement));
        return !!t && !!t.innerHTML && t.innerHTML.length > 0;
    };
    /**
     * @private
     * @param {?} pdfThumbnailView
     * @param {?} linkService
     * @param {?} id
     * @param {?} container
     * @param {?} thumbPageTitlePromise
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.createThumbnail = /**
     * @private
     * @param {?} pdfThumbnailView
     * @param {?} linkService
     * @param {?} id
     * @param {?} container
     * @param {?} thumbPageTitlePromise
     * @return {?}
     */
    function (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
        this.linkService = linkService;
        /** @type {?} */
        var template = this.thumbnailViewTemplate;
        // get the inner HTML without the attributes and classes added by Angular
        /** @type {?} */
        var inner = template.nativeElement.innerHTML
            .split(/_ng\w+-\w+-\w+=""/g)
            .join('')
            .split(/ng-\w+-\w+/g)
            .join('')
            .split(/<!--[\s\S]*?-->/g)
            .join('');
        /** @type {?} */
        var borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
        /** @type {?} */
        var widthOfRing = pdfThumbnailView.canvasWidth + borderAdjustment + 'px';
        /** @type {?} */
        var heightOfRing = pdfThumbnailView.canvasHeight + borderAdjustment + 'px';
        /** @type {?} */
        var newHtml = inner.split('WIDTH_OF_RING').join(widthOfRing).split('HEIGHT_OF_RING').join(heightOfRing).split('PAGE_NUMBER').join(id);
        /** @type {?} */
        var newElement = this.createElementFromHTML(newHtml);
        newElement.classList.remove('pdf-viewer-template');
        /** @type {?} */
        var anchor = (/** @type {?} */ (newElement));
        anchor.href = linkService.getAnchorUrl('#page=' + id);
        thumbPageTitlePromise.then((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) {
            anchor.title = msg;
        }));
        anchor.onclick = (/**
         * @return {?}
         */
        function () {
            linkService.page = id;
            return false;
        });
        pdfThumbnailView.anchor = anchor;
        /** @type {?} */
        var ring = (/** @type {?} */ (newElement.getElementsByClassName('image-container')[0]));
        pdfThumbnailView.ring = ring;
        pdfThumbnailView.div = (/** @type {?} */ (newElement.getElementsByClassName('thumbnail')[0]));
        container.appendChild(newElement);
        /** @type {?} */
        var thumbnailDrawnEvent = {
            thumbnail: newElement,
            container: container,
            pageId: id,
        };
        this.thumbnailDrawn.emit(thumbnailDrawnEvent);
    };
    /**
     * @private
     * @param {?} htmlString
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.createElementFromHTML = /**
     * @private
     * @param {?} htmlString
     * @return {?}
     */
    function (htmlString) {
        /** @type {?} */
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        // Change this to div.childNodes to support multiple top-level nodes
        return (/** @type {?} */ (div.firstChild));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PdfSidebarContentComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.code === 'ArrowDown') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = this.linkService.pagesCount;
                }
                else if (this.linkService.page < this.linkService.pagesCount) {
                    this.linkService.page = this.linkService.page + 1;
                }
                event.preventDefault();
            }
        }
        else if (event.code === 'ArrowUp') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = 1;
                }
                else if (this.linkService.page > 1) {
                    this.linkService.page = this.linkService.page - 1;
                }
                event.preventDefault();
            }
        }
    };
    Object.defineProperty(PdfSidebarContentComponent.prototype, "hideSidebarToolbar", {
        set: /**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            this._hideSidebarToolbar = h;
            if (this._hideSidebarToolbar) {
                this.top = '0';
            }
            else {
                this.top = '32px';
            }
        },
        enumerable: true,
        configurable: true
    });
    PdfSidebarContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-sidebar-content',
                    template: "<div id=\"sidebarContent\" [style.top]=\"top\">\n  <div #thumbnailViewTemplate>\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\n  </div>\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\n  <div id=\"outlineView\" class=\"hidden\"></div>\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\n  <div id=\"layersView\" class=\"hidden\"></div>\n</div>\n\n<ng-template #defaultThumbnail>\n  <a class=\"pdf-viewer-template\">\n    <div class=\"thumbnail\" data-page-number=\"$page\">\n      <div class=\"thumbnailSelectionRing image-container\" style=\"width: WIDTH_OF_RING; height: HEIGHT_OF_RING\">\n        <!-- image is automatically inserted here -->\n        <!-- <img class=\"thumbnailImage\" style=\"width: 98px; height: 73px;\" /> -->\n      </div>\n    </div>\n  </a>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfSidebarContentComponent.ctorParameters = function () { return []; };
    PdfSidebarContentComponent.propDecorators = {
        customThumbnail: [{ type: Input }],
        thumbnailViewTemplate: [{ type: ViewChild, args: ['thumbnailViewTemplate',] }],
        thumbnailDrawn: [{ type: Output }],
        hideSidebarToolbar: [{ type: Input }]
    };
    return PdfSidebarContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sidebar/pdf-sidebar/pdf-sidebar-toolbar/pdf-sidebar-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfSidebarToolbarComponent = /** @class */ (function () {
    function PdfSidebarToolbarComponent() {
    }
    /**
     * @return {?}
     */
    PdfSidebarToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PdfSidebarToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-sidebar-toolbar',
                    template: "<div id=\"toolbarSidebar\">\n    <button type=\"button\" id=\"viewThumbnail\" class=\"toolbarButton toggled\" title=\"Show Thumbnails\" data-l10n-id=\"thumbs\">\n      <span data-l10n-id=\"thumbs_label\">Thumbnails</span>\n      <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z\" />\n      </svg>\n    </button>\n\n    <button\n      type=\"button\"\n      id=\"viewOutline\"\n      class=\"toolbarButton\"\n      title=\"Show Document Outline (double-click to expand/collapse all items)\"\n      data-l10n-id=\"document_outline\"\n      hidden=\"true\"\n    >\n      <span data-l10n-id=\"document_outline_label\">Document Outline</span>\n      <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\n      </svg>\n    </button>\n\n    <button type=\"button\" id=\"viewAttachments\" class=\"toolbarButton\" title=\"Show Attachments\" data-l10n-id=\"attachments\" hidden=\"true\">\n      <span data-l10n-id=\"attachments_label\">Attachments</span>\n      <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z\" />\n    </svg>\n    </button>\n    <button\n      id=\"viewLayers\"\n      class=\"toolbarButton\"\n      title=\"Show Layers (double-click to reset all layers to the default state)\"\n      data-l10n-id=\"layers\"\n      hidden=\"true\"\n    >\n      <span data-l10n-id=\"layers_label\">Layers</span>\n      <svg style=\"width:20px;height:20px\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 4.233 4.233\">\n        <path\n          d=\"M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z\"\n        />\n      </svg>\n    </button>\n</div>\n",
                    styles: ["button{margin-right:4px!important}div#toolbarSidebar>button:first-child{margin-left:4px!important}"]
                }] }
    ];
    /** @nocollapse */
    PdfSidebarToolbarComponent.ctorParameters = function () { return []; };
    return PdfSidebarToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme/pdf-light-theme/pdf-light-theme.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfLightThemeComponent = /** @class */ (function () {
    function PdfLightThemeComponent() {
    }
    PdfLightThemeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-light-theme',
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ngx-extended-pdf-viewer .fancyDropdownToolbarButton::after{content:url(\"data:image/svg+xml; utf8, <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(90, 90, 90)' d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>\")}ngx-extended-pdf-viewer .textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}ngx-extended-pdf-viewer .textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:var(#b400aa);border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::-moz-selection{background:#00f}ngx-extended-pdf-viewer .textLayer ::selection{background:#00f}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer .annotationLayer section{position:absolute}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.pushButton>a,ngx-extended-pdf-viewer .annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}ngx-extended-pdf-viewer .annotationLayer .textAnnotation img{position:absolute;cursor:pointer}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input,ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);color:#5a5a5a;border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select option{padding:0}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled],ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#5a5a5a;content:'';display:block;position:absolute}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{height:80%;left:45%;width:1px}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}ngx-extended-pdf-viewer .annotationLayer .popupWrapper{position:absolute;width:20em}ngx-extended-pdf-viewer .annotationLayer .popup{position:absolute;z-index:4;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #888;border-radius:2px;padding:6px;margin-left:5px;cursor:pointer;font:message-box;font-size:9px;word-wrap:break-word}ngx-extended-pdf-viewer .annotationLayer .popup>*{font-size:9px}ngx-extended-pdf-viewer .annotationLayer .popup h1{display:inline-block}ngx-extended-pdf-viewer .annotationLayer .popup span{display:inline-block;margin-left:5px}ngx-extended-pdf-viewer .annotationLayer .popup p{border-top:1px solid #333;margin-top:2px;padding-top:2px}ngx-extended-pdf-viewer .annotationLayer .caretAnnotation,ngx-extended-pdf-viewer .annotationLayer .circleAnnotation svg ellipse,ngx-extended-pdf-viewer .annotationLayer .fileAttachmentAnnotation,ngx-extended-pdf-viewer .annotationLayer .freeTextAnnotation,ngx-extended-pdf-viewer .annotationLayer .highlightAnnotation,ngx-extended-pdf-viewer .annotationLayer .inkAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .lineAnnotation svg line,ngx-extended-pdf-viewer .annotationLayer .polygonAnnotation svg polygon,ngx-extended-pdf-viewer .annotationLayer .polylineAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .squareAnnotation svg rect,ngx-extended-pdf-viewer .annotationLayer .squigglyAnnotation,ngx-extended-pdf-viewer .annotationLayer .stampAnnotation,ngx-extended-pdf-viewer .annotationLayer .strikeoutAnnotation,ngx-extended-pdf-viewer .annotationLayer .underlineAnnotation{cursor:pointer}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;-o-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;background-color:#fff}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}ngx-extended-pdf-viewer .pdfViewer.singlePageView{display:inline-block}ngx-extended-pdf-viewer .pdfViewer.singlePageView .page{margin:0;border:none}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread,ngx-extended-pdf-viewer .spread .page{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .spread .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(data:image/gif;base64,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) center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .html *{padding:0;margin:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer select{font:message-box;outline:0}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#fff!important;color:#5a5a5a}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none!important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer>span{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0!important;overflow:hidden!important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#f9f9f9}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid transparent;background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid transparent;background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{border-top:2px solid transparent;background-color:#f9f9f9;width:100%;height:100%;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid transparent;background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer>span,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:2;transition-duration:.2s;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:calc(0px - $sidebar-width)}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px;right:calc(0px - $sidebar-width)}ngx-extended-pdf-viewer .loadingInProgress #sidebarContainer{top:36px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:320px}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:#f2f2f3}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{-webkit-overflow-scrolling:touch;top:32px;right:0;bottom:0;left:0;outline:0}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:.2s;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:7;cursor:default;border:1px solid #ddd}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:100%;height:32px;background-color:#f2f2f3;color:#5a5a5a;border:none;padding-top:1px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:4;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{position:relative;height:32px;background-color:#f9f9f9}ngx-extended-pdf-viewer #toolbarViewer{height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width .2s}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg,#bbb 0,#999 5px,#999 45px,#ddd 55px,#ddd 95px,#bbb 100px);-webkit-animation:950ms linear infinite progressIndeterminate;animation:950ms linear infinite progressIndeterminate}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{top:40px;position:absolute;z-index:7;height:auto;min-width:16px;padding:0 6px;margin:4px 2px;color:#5a5a5a;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}ngx-extended-pdf-viewer .secondaryToolbar{padding:6px;height:auto;z-index:8}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer{max-width:200px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-bottom:-4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none!important}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#f9f9f9;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after{right:13px;margin-right:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#5a5a5a;color:#f9f9f9;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #findInput.notFound{background-color:#f66}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=ltr] ngx-extended-pdf-viewer .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:0;background:0 0;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .overlayButton[disabled],ngx-extended-pdf-viewer .secondaryToolbarButton[disabled],ngx-extended-pdf-viewer .toolbarButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:1px solid transparent;color:#5a5a5a}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{min-width:16px;padding:2px 6px 0;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=rtl] ngx-extended-pdf-viewer .overlayButton,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .overlayButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .secondaryToolbarButton.toggled,ngx-extended-pdf-viewer .toolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#5a5a5a;background-color:#fff}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#f9f9f9}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious,html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext,html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}ngx-extended-pdf-viewer .secondaryToolbarButton::before,ngx-extended-pdf-viewer .toolbarButton::before{position:absolute;display:inline-block;top:4px;left:7px}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark,ngx-extended-pdf-viewer .toolbarButton.bookmark{box-sizing:border-box;outline:0;padding-top:4px;text-decoration:none}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-top:5px}ngx-extended-pdf-viewer .bookmark[href='#']{opacity:.5;pointer-events:none}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:'';background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .secondaryToolbarButton{position:relative;margin:0 0 4px;padding:3px 0 1px;height:auto;min-height:25px;width:auto;min-width:100%;white-space:normal}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-left:27px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-right:27px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}ngx-extended-pdf-viewer .toolbarField{padding:3px 6px;margin:4px 0;border-radius:2px;background-color:#fff;background-clip:padding-box;color:#5a5a5a;font-size:12px;line-height:14px;outline-style:none;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid transparent;border-radius:2px;color:#5a5a5a;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .thumbnail{margin:0 10px 5px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid transparent;opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView,ngx-extended-pdf-viewer #outlineView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#5a5a5a;font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a>*{cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url(assets/images/treeitem-expanded.svg);display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url(assets/images/treeitem-collapsed.svg);max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{-webkit-transform:scaleX(-1);transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItem>a:hover,ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:#f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer .loadingInProgress #errorWrapper{top:37px}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f9f9f9;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .overlayButton{width:auto;margin:3px 4px 2px!important;padding:2px 6px 3px}ngx-extended-pdf-viewer #overlayContainer{display:table;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:9}ngx-extended-pdf-viewer #overlayContainer>*{overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #overlayContainer>.container{display:table-cell;vertical-align:middle;text-align:center}ngx-extended-pdf-viewer #overlayContainer>.container .dialog{display:inline-block;padding:15px;border-spacing:4px;color:#5a5a5a;font-size:12px;line-height:14px;background-color:#f9f9f9;border-radius:4px}ngx-extended-pdf-viewer .dialog>.row{display:table-row}ngx-extended-pdf-viewer .dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer .dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer .dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer .dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordOverlay>.dialog{text-align:center}ngx-extended-pdf-viewer #passwordOverlay .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesOverlay>.dialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{min-width:100px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:right}.fileInput{background:#fff;color:#f9f9f9;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=),move!important;cursor:-webkit-grab!important;cursor:grab!important}ngx-extended-pdf-viewer .grab-to-pan-grab :not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit!important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=),move!important;cursor:-webkit-grabbing!important;cursor:grabbing!important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}#printContainer{display:none}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{right:4px;left:186px}ngx-extended-pdf-viewer #findInput[data-status=pending],ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(data:image/png;base64,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);background-size:16px 17px}@media print{body{background:rgba(0,0,0,0)}#errorWrapper,#loadingBox,#secondaryToolbar,#sidebarContainer,.textLayer,.toolbar{display:none}#viewerContainer{overflow:visible}#mainContainer,#viewerContainer,.page,.page canvas{position:static;padding:0;margin:0}.page{float:left;display:none;border:none;box-shadow:none;background-clip:content-box;background-color:#fff}.page[data-loaded]{display:block}.fileInput,body[data-pdfjsprinting] #outerContainer{display:none}#printContainer canvas,#printContainer img,body[data-pdfjsprinting] #printContainer{display:block}#printContainer{height:100%}#printContainer>div{position:relative;top:0;left:0;width:1px;height:1px;overflow:visible;page-break-after:always;page-break-inside:avoid}}ngx-extended-pdf-viewer .visibleLargeView,ngx-extended-pdf-viewer .visibleMediumView,ngx-extended-pdf-viewer .visibleSmallView{display:none}ngx-extended-pdf-viewer .html .unverified-signature-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute}ngx-extended-pdf-viewer .invisible{display:none!important}body[data-pdfjsprinting] #printContainer,body[data-pdfjsprinting] #printContainer *{padding:0;margin:0;font:message-box;outline:0}#printContainer canvas,#printContainer img{display:block!important}@media print{body[data-pdfjsprinting]>*{display:none!important}body[data-pdfjsprinting] #printContainer{display:block!important}body[data-pdfjsprinting] #printContainer div img{height:100vh!important}body,html{overflow-y:visible!important}html.cdk-global-scrollblock{width:initial;position:initial}}ngx-extended-pdf-viewer .textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color0.selected{background-color:#b400aa}ngx-extended-pdf-viewer .textLayer .highlight.color1{background-color:rgba(0,100,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color1.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer .highlight.color2{background-color:rgba(0,0,255,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color2.selected{background-color:#00f}ngx-extended-pdf-viewer .textLayer .highlight.color3{background-color:rgba(255,0,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color3.selected{background-color:red}ngx-extended-pdf-viewer textLayer .highlight.color4{background-color:rgba(255,94,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] ngx-extended-pdf-viewer .overlayButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed!important;left:-9999px!important;display:block!important;width:3000px!important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px!important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px!important;margin-right:-2px!important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:0;border:1px solid #00f}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:#00f solid 1px}"]
                }] }
    ];
    return PdfLightThemeComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme/pdf-original-theme/pdf-original.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfOriginalComponent = /** @class */ (function () {
    function PdfOriginalComponent() {
    }
    PdfOriginalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-original-theme',
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}.textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}.textLayer .highlight{margin:-1px;padding:1px;background-color:rgba(180,0,170,1);border-radius:4px}.textLayer .highlight.begin{border-radius:4px 0 0 4px}.textLayer .highlight.end{border-radius:0 4px 4px 0}.textLayer .highlight.middle{border-radius:0}.textLayer .highlight.selected{background-color:rgba(0,100,0,1)}.textLayer ::-moz-selection{background:rgba(0,0,255,1)}.textLayer ::selection{background:rgba(0,0,255,1)}.textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.textLayer .endOfContent.active{top:0}.annotationLayer section{position:absolute}.annotationLayer .buttonWidgetAnnotation.pushButton>a,.annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer .buttonWidgetAnnotation.pushButton>a:hover,.annotationLayer .linkAnnotation>a:hover{opacity:.2;background:rgba(255,255,0,1);box-shadow:0 2px 10px rgba(255,255,0,1)}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input,.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,.annotationLayer .buttonWidgetAnnotation.radioButton input:hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid rgba(0,0,0,1)}.annotationLayer .choiceWidgetAnnotation select:focus,.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus{background:0 0;border:1px solid transparent}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:rgba(0,0,0,1);content:'';display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.annotationLayer .popupWrapper{position:absolute;width:20em}.annotationLayer .popup{position:absolute;z-index:4;max-width:20em;background-color:rgba(255,255,153,1);box-shadow:0 2px 5px rgba(136,136,136,1);border-radius:2px;padding:6px;margin-left:5px;cursor:pointer;font:message-box;font-size:9px;word-wrap:break-word}.annotationLayer .popup>*{font-size:9px}.annotationLayer .popup h1{display:inline-block}.annotationLayer .popup span{display:inline-block;margin-left:5px}.annotationLayer .popup p{border-top:1px solid rgba(51,51,51,1);margin-top:2px;padding-top:2px}.annotationLayer .caretAnnotation,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .fileAttachmentAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .highlightAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .lineAnnotation svg line,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .squareAnnotation svg rect,.annotationLayer .squigglyAnnotation,.annotationLayer .stampAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .underlineAnnotation{cursor:pointer}.pdfViewer .canvasWrapper{overflow:hidden}.pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;-o-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;background-color:rgba(255,255,255,1)}.pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}.pdfViewer.singlePageView{display:inline-block}.pdfViewer.singlePageView .page{margin:0;border:none}.pdfViewer.scrollHorizontal,.pdfViewer.scrollWrapped,.spread{margin-left:3.5px;margin-right:3.5px;text-align:center}.pdfViewer.scrollHorizontal,.spread{white-space:nowrap}.pdfViewer.removePageBorders,.pdfViewer.scrollHorizontal .spread,.pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}.pdfViewer.scrollHorizontal .page,.pdfViewer.scrollHorizontal .spread,.pdfViewer.scrollWrapped .page,.pdfViewer.scrollWrapped .spread,.spread .page{display:inline-block;vertical-align:middle}.pdfViewer.scrollHorizontal .page,.pdfViewer.scrollWrapped .page,.spread .page{margin-left:-3.5px;margin-right:-3.5px}.pdfViewer.removePageBorders .spread .page,.pdfViewer.removePageBorders.scrollHorizontal .page,.pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}.pdfViewer .page canvas{margin:0;display:block}.pdfViewer .page canvas[hidden]{display:none}.pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(data:image/gif;base64,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) center no-repeat}.pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}.pdfPresentationMode .pdfViewer .page,.pdfPresentationMode .pdfViewer .spread{display:block}.pdfPresentationMode .pdfViewer .page,.pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}.pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}.pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}.pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100%;border:0}.pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}:root{--sidebar-width:200px;--sidebar-transition-duration:200ms;--sidebar-transition-timing-function:ease}.html *{padding:0;margin:0}.html{height:100%;width:100%;font-size:10px}.body{height:100%;width:100%;background-color:rgba(64,64,64,1);background-image:url(data:image/png;base64,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)}.body,.pdf-viewer button,.pdf-viewer input,.pdf-viewer select{font:message-box;outline:0}.hidden,[hidden]{display:none!important}.pdfViewer.enablePermissions .textLayer>span{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;cursor:not-allowed}#viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0!important;overflow:hidden!important}#viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:rgba(0,0,0,1)}#viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:-ms-fullscreen{border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;cursor:none;-ms-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}.pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}.pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}.pdfPresentationMode:fullscreen a:not(.internalLink){display:none}.pdfPresentationMode:-webkit-full-screen .textLayer>span{cursor:none}.pdfPresentationMode:-moz-full-screen .textLayer>span{cursor:none}.pdfPresentationMode:-ms-fullscreen .textLayer>span{cursor:none}.pdfPresentationMode:fullscreen .textLayer>span{cursor:none}.pdfPresentationMode.pdfPresentationModeControls .textLayer>span,.pdfPresentationMode.pdfPresentationModeControls>*{cursor:default}#outerContainer{width:100%;height:100%;position:relative}#sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;width:var(--sidebar-width);visibility:hidden;z-index:2;border-top:1px solid rgba(51,51,51,1);transition-duration:.2s;transition-duration:var(--sidebar-transition-duration);transition-timing-function:ease;transition-timing-function:var(--sidebar-transition-timing-function)}html[dir=ltr] #sidebarContainer{transition-property:left;left:-200px;left:calc(0px - var(--sidebar-width))}html[dir=rtl] #sidebarContainer{transition-property:right;right:-200px;right:calc(0px - var(--sidebar-width))}.loadingInProgress #sidebarContainer{top:36px}#outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#outerContainer.sidebarMoving #sidebarContainer,#outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] #outerContainer.sidebarOpen #sidebarContainer{right:0}#mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:320px}#sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] #sidebarContent{left:0;box-shadow:inset -1px 0 0 rgba(0,0,0,.25)}html[dir=rtl] #sidebarContent{right:0;box-shadow:inset 1px 0 0 rgba(0,0,0,.25)}#viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;top:32px;right:0;bottom:0;left:0;outline:0}#viewerContainer:not(.pdfPresentationMode){transition-duration:.2s;transition-duration:var(--sidebar-transition-duration);transition-timing-function:ease;transition-timing-function:var(--sidebar-transition-timing-function)}html[dir=ltr] #viewerContainer{box-shadow:inset 1px 0 0 rgba(255,255,255,.05)}html[dir=rtl] #viewerContainer{box-shadow:inset -1px 0 0 rgba(255,255,255,.05)}#outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px;left:var(--sidebar-width)}html[dir=rtl] #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px;right:var(--sidebar-width)}.toolbar{position:relative;left:0;right:0;z-index:7;cursor:default}#toolbarContainer{width:100%}#toolbarSidebar{width:100%;height:32px;background-color:rgba(66,66,66,1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAAAsLCwYGBgyMjIuLi4UFBQlJSUcHBw0NDQ/Pz8nJycaGhowMDAhISEfHx8pKSk2NjYjIyM5OTkNDQ07OzsWFhY9PT1BQUFGRkYRERFKSkpISEgPDw8LCwsHBwdMTEwJCQlEREQEBAROTk5XV1dRUVFeXl4CAgJVVVVcXFxTU1NZWVlgYGBiYmJpaWltbW1kZGRxcXFmZmZvb292dnZ4eHhra2uFhYV0dHR6enon69kAAAAAOnRSTlMPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8Pfl6gHwAACDhJREFUeAGFlwWW9EgSgyOZ0cxVhqKGf5bo/hfbRwPNJ/CzQvqkBKiye2kHPr5ArjdxfiLSE05rAUDMeEvtUk81SswxNnR3EMdDLfr0N8SU8mrbK5h4vHWhx63U+tiNbhmXIle5HJ9NGkOVRZXRdDSMDmM2C4gBuGTFcMBq1TAhSAAceQdsxuaxzgz2810+FqsDVbcLShlpWED95h7jCk5zNwcqNnKhDUpJaQ/nkhObBzztEArQpn9urrFoZEF6e3KtePtDvb9UHnUtvURv4Qpig/KpFBUvH6w5K935tTzBeFueS8maLgGhVCfgBZlPzYhRvXpG0z+jrvARBgPSEHiv2/vPfKLbG90hwIwkQOHhFU4QzKChg2OOihQn6Hw4mVkxpNhz17jtqsU91drmwFhTVp2XGUinYRZ1K8aSW1AOtYnXea9sHKoucQ6lZhEemKo+tUCH++ImfR5J3ZSSW6ygQ+4kgVzjF3JLjFBbAzRVGwvRK1bHU7iwPpvSyAt0cAOTBjIt/ImezuswX2hdsH8afgFV8OXxJOpBKKpKz1Ed46V0hdOu6eRhpACRBJS0x+WchsbCtW38GRk0nLd8nv814gBc96bijYDg6isY/Pe9SgdtgdWsBzG4QOH5KnzbYVZX50ugvb4JW0c6QRIcZGSVvdviCktZVgvCDYHruaTFiKCccvtc8A3g37yoT6pmvuQ+ljfWgCsqMVvhkMd79voeCQF+npdeYicni1ZxnVE8nQsmKwzreLMWsdyCbQDNhhW/YnQoIk1nLxaFJtuSi3W7Hk5dkwo9R/SkGb8GHwwqa1hbARp12LR5jjMikClnVWtG6R56n3CoDCJl7bg5NorS6ExibR9YKK4lqagAe2sULmWqbyNWz5gQep4mESKyJtW+gPJOPWmh40VDRAOkwgjPjvSb3MKsowUp03Zw2g8JDWdVdHfHJqOvK5LNVfC5k+k1oPoYWTKqnKWCPb7yBwwSjy/enkqA8V+JRKzgDCPCoVpy6nC40onjvAywr37Znyu+06ecjBi9tKqmbbD1qw60+U8BjxMXWQaEh7BZSzwu9KTgqZSLOD33rsBP07GjJaSycIBuXd9cJEwPkoKTStkdum6lJQbfHkAjsH5Ik+upX1k9vgKY+PlxM4YpUBRdBnKzICpUvdRh/UdPJvGrMr+u3YNWmSC6lCWi/T6p+gm1YLtL0o/EDiQlmxzuqxrDHBN9PM6Cx01RD5aPjJxx0dhurRsC/jPM2TnzZkpDw6kEPkzMyWXoKnG/iKwA3RGTfWnU4BBdBT15vMrpJHNFdUEqsakKwqK9qE8+nBzQ3ozkPh3S24kjQrUpDk+I4gI8LliX8CnnzpJ/F4jvNSx5KRE+jRpBQ7zqHJCBTmoYl27EqWBhB9dCWdAWTuWJTRfX/tZkhF3rX7K3AQg2yI884tK7fq8aDsmyRteqW60xFsy8Y2CADV8XfMWwlJ+eRhc6lonYrYkwohFOOsfG0jSIK7JqaKSquQaO/cb5GGct0nXscjbNUUt87wW9FeGVTqnnWnw09/twCCYAIN1paYE9Y/EuHPBe9YYpfPlHO+L1liMweK/6h6upn7g9Fq3oFSorXFcdjQX88tHCGjRx6cgjfHQ/J8EteU9TCCqLj+5/mx74FHR/AWWY6UK2Tc0Cikdd3yYYjf0LKOH32FLjdo7nDvdgcGhft57SWcj699h+FXv4yiC/GwwsljDz/b/0dKJdYJUrh2RO8XeDwd+0C5lXX1r+TiJCKqjCZRdp/+igLdidsZnBUyYMgcegiWjItaJTKAuXaylrfd6sB8rYiTFa05XAkGlRclBjn9tUdXDOEBBtgoGPCX9LiBDVidhsY6Ch4bK37i0h4JO+fNO3UxwRYwZgRggxGFrM3/Qt/BUeVWFskPBYjb8aVvq6Pu1/hcdn8IHP6uqvdXcsPUSiibgILCnyrZnXv9YdvKGHPM7rExml+e2A4RduOgJv6PEJfeAx/rZ4TU4RQkMIxAsqaBzZ8uvv2uuSbF/4C9Z5WV4eMsFPC2Q1L37VUPsWhs8UhSS+3yj2/v1GAUecFTTX5ia0TLArpplDB4epKWOzQxVScT5f0RB4a1pc9s6eBXBHIUuxN+W7dH+kg1Tk3gu7DJtIMXykA3y2i1SCuOpuIr68fraL/rqrIBt7lOZ/i+Y15RpWFM2arbenWUNEu9Rdo+PNmB0BmPbsRn3cwoCHGEYbMmDI3Ef0t0gq67euAgP87V8XNjtGDjd2BZ6as6yrivoyTdirHMQNQcVlFfR/8RaqSLljtuS9MPJa3+6xwUmiHx4U39pUYicxoLF8tnRs5Pmc6NYxo0gVhWSlPJYe4D0v36+NP0bzGU37J2sDNpjUzazC7TQE2CpMF1mbl86Wrs4gMeAnUfSxrkqQipQHjhcowBDridFPxMPnHOqKFqgGG9XnHPqTY2A3mdIMvAVRkkkju26pbaTqXh3VXA13uPGeHEt5xgkYIUNVDEDmamy2grkxAXoYaOjwdCt9Al01d/S2Db95Ti0A5ALfF5c6YcH4C7ShKJq84s28tzZ8vw7I4/t1kCws/JDuDFcAd+JzlhEINonXR3vYaDFDXLBeNTMG3gePesL+HiDyJ9X8+/lJdQl+wMHjBxwkwAgGsPPZtgU6Hy29ktBe8MUosBPfSr8oqk+ccaeze+HSCHhIc2v/8Y95tGy0f4cEfb34yepmOCicJM6vQ3s7Zcgx3FQDCQoPBQAtXdtGEzeilARoSNkCKlYEj1QnlEcj2rrTXuUamDbuPFcWTYvG47dTXiOAP1ryq5a9PAPsTsAXLft/Jk0NzNpMD2QAAAAASUVORK5CYII=),linear-gradient(rgba(77,77,77,.99),rgba(64,64,64,.95))}html[dir=ltr] #toolbarSidebar{box-shadow:inset -1px 0 0 rgba(0,0,0,.25),inset 0 -1px 0 rgba(255,255,255,.05),0 1px 0 rgba(0,0,0,.15),0 0 1px rgba(0,0,0,.1)}html[dir=rtl] #toolbarSidebar{box-shadow:inset 1px 0 0 rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.05),0 1px 0 rgba(0,0,0,.15),0 0 1px rgba(0,0,0,.1)}#sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:4;cursor:ew-resize}html[dir=ltr] #sidebarResizer{right:-6px}html[dir=rtl] #sidebarResizer{left:-6px}#toolbarContainer,.findbar,.secondaryToolbar{position:relative;height:32px;background-color:rgba(71,71,71,1);background-image:url(data:image/png;base64,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),linear-gradient(rgba(82,82,82,.99),rgba(69,69,69,.95))}.findbar,.secondaryToolbar,html[dir=ltr] #toolbarContainer,html[dir=rtl] #toolbarContainer{box-shadow:inset 0 1px 1px rgba(0,0,0,.15),inset 0 -1px 0 rgba(255,255,255,.05),0 1px 0 rgba(0,0,0,.15),0 1px 1px rgba(0,0,0,.1)}#toolbarViewer{height:32px}#loadingBar{position:relative;width:100%;height:4px;background-color:rgba(51,51,51,1);border-bottom:1px solid rgba(51,51,51,1)}#loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:rgba(221,221,221,1);overflow:hidden;transition:width .2s}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}#loadingBar .progress.indeterminate{background-color:rgba(153,153,153,1);transition:none}#loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg,rgba(187,187,187,1) 0,rgba(153,153,153,1) 5px,rgba(153,153,153,1) 45px,rgba(221,221,221,1) 55px,rgba(221,221,221,1) 95px,rgba(187,187,187,1) 100px);-webkit-animation:950ms linear infinite progressIndeterminate;animation:950ms linear infinite progressIndeterminate}.findbar,.secondaryToolbar{top:32px;position:absolute;z-index:7;height:auto;min-width:16px;padding:0 6px;margin:4px 2px;color:rgba(217,217,217,1);font-size:12px;line-height:14px;text-align:left;cursor:default}.findbar{min-width:300px}.findbar>div{height:32px}.findbar.wrapContainers>div{clear:both}.findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] .findbar{left:68px}html[dir=rtl] .findbar{right:68px}.findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#findInput{width:200px}#findInput::-webkit-input-placeholder{color:rgba(191,191,191,1)}#findInput::-moz-placeholder{font-style:italic}#findInput:-ms-input-placeholder{font-style:italic}#findInput::-ms-input-placeholder{font-style:italic}#findInput::placeholder{font-style:italic}#findInput[data-status=pending]{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:right}html[dir=rtl] #findInput[data-status=pending]{background-position:left}.secondaryToolbar{padding:6px;height:auto;z-index:8}html[dir=ltr] .secondaryToolbar{right:4px}html[dir=rtl] .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{max-width:200px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-bottom:-4px}#secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,#secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none!important}.doorHanger,.doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.3)}.doorHanger:after,.doorHanger:before,.doorHangerRight:after,.doorHangerRight:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.doorHanger:after,.doorHangerRight:after{border-bottom-color:rgba(82,82,82,.99);border-width:8px}.doorHanger:before,.doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] .doorHanger:after,html[dir=rtl] .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] .doorHanger:before,html[dir=rtl] .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=ltr] .doorHangerRight:after,html[dir=rtl] .doorHanger:after{right:13px;margin-right:-8px}html[dir=ltr] .doorHangerRight:before,html[dir=rtl] .doorHanger:before{right:13px;margin-right:-9px}#findResultsCount{background-color:rgba(217,217,217,1);color:rgba(82,82,82,1);text-align:center;padding:3px 4px}#findMsg{font-style:italic;color:rgba(166,183,208,1)}#findMsg:empty{display:none}#findInput.notFound{background-color:rgba(255,102,102,1)}#toolbarViewerMiddle{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir=ltr] #toolbarViewerLeft,html[dir=rtl] #toolbarViewerRight{float:left}html[dir=ltr] #toolbarViewerRight,html[dir=rtl] #toolbarViewerLeft{float:right}html[dir=ltr] #toolbarViewerLeft>*,html[dir=ltr] #toolbarViewerMiddle>*,html[dir=ltr] #toolbarViewerRight>*,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] #toolbarViewerLeft>*,html[dir=rtl] #toolbarViewerMiddle>*,html[dir=rtl] #toolbarViewerRight>*,html[dir=rtl] .findbar *{position:relative;float:right}.overlayButton,.secondaryToolbarButton,.toolbarButton{border:0;background:0 0;width:32px;height:25px}.toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}.overlayButton[disabled],.secondaryToolbarButton[disabled],.toolbarButton[disabled]{opacity:.5}.toolbarButton.textButton{background-color:rgba(0,0,0,.12);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;border:1px solid rgba(0,0,0,.35);border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.15) inset,0 1px 0 rgba(255,255,255,.05)}.dropdownToolbarButton:hover,.overlayButton:focus,.overlayButton:hover,.toolbarButton.textButton:focus,.toolbarButton.textButton:hover{background-color:rgba(0,0,0,.2);box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.15) inset,0 0 1px rgba(0,0,0,.05);z-index:3}.dropdownToolbarButton:hover{background-color:rgba(0,0,0,.26)}.dropdownToolbarButton,.overlayButton,.secondaryToolbarButton,.toolbarButton{min-width:16px;padding:2px 6px 0;border:1px solid transparent;border-radius:2px;color:rgba(255,255,255,.8);font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}html[dir=ltr] .dropdownToolbarButton,html[dir=ltr] .overlayButton,html[dir=ltr] .toolbarButton{margin:3px 2px 4px 0}html[dir=rtl] .dropdownToolbarButton,html[dir=rtl] .overlayButton,html[dir=rtl] .toolbarButton{margin:3px 0 4px 2px}.dropdownToolbarButton,.overlayButton,.secondaryToolbarButton:focus,.secondaryToolbarButton:hover,.toolbarButton:focus,.toolbarButton:hover{background-color:rgba(0,0,0,.12);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;border:1px solid rgba(0,0,0,.35);border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.15) inset,0 1px 0 rgba(255,255,255,.05)}.dropdownToolbarButton:hover:active,.overlayButton:hover:active,.secondaryToolbarButton:hover:active,.toolbarButton:hover:active{background-color:rgba(0,0,0,.2);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));border-color:rgba(0,0,0,.35) rgba(0,0,0,.4) rgba(0,0,0,.45);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}.secondaryToolbarButton.toggled,.toolbarButton.toggled{background-color:rgba(0,0,0,.3);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}.secondaryToolbarButton.toggled:hover:active,.toolbarButton.toggled:hover:active{background-color:rgba(0,0,0,.4);border-color:rgba(0,0,0,.4) rgba(0,0,0,.5) rgba(0,0,0,.55);box-shadow:0 1px 1px rgba(0,0,0,.2) inset,0 0 1px rgba(0,0,0,.3) inset,0 1px 0 rgba(255,255,255,.05)}.dropdownToolbarButton{width:140px;padding:0;overflow:hidden}.dropdownToolbarButton::after{position:absolute;display:inline-block;top:4px;content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAQCAYAAADagWXwAAAAMklEQVR4AWMYSPD//39+IF4AotElWIB4LRA/g9IsyJJLwBIIvIR8NxAylrCDML0ygAAAMdZbs0uKR4sAAAAASUVORK5CYII=)}html[dir=ltr] .dropdownToolbarButton::after{right:8px}html[dir=rtl] .dropdownToolbarButton::after{left:8px}.dropdownToolbarButton>select{width:162px;height:23px;font-size:12px;color:rgba(242,242,242,1);margin:0;padding:3px 2px 2px;border:none;background:rgba(0,0,0,0)}.dropdownToolbarButton>select>option{background:rgba(61,61,61,1)}#customScaleOption{display:none}#pageWidthOption{border-bottom:1px solid rgba(255,255,255,.5)}html[dir=ltr] .toolbarButton:first-child,html[dir=rtl] .toolbarButton:last-child{margin-left:4px}html[dir=ltr] .toolbarButton:last-child,html[dir=rtl] .toolbarButton:first-child{margin-right:4px}.toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] #findPrevious,html[dir=rtl] #findNext{margin-left:3px}html[dir=ltr] #findNext,html[dir=rtl] #findPrevious{margin-right:3px}.secondaryToolbarButton::before,.toolbarButton::before{position:absolute;display:inline-block;top:4px;left:7px}html[dir=ltr] .secondaryToolbarButton::before{left:4px}html[dir=rtl] .secondaryToolbarButton::before{right:4px}.secondaryToolbarButton.bookmark,.toolbarButton.bookmark{box-sizing:border-box;outline:0;padding-top:4px;text-decoration:none}.secondaryToolbarButton.bookmark{padding-top:5px}.bookmark[href='#']{opacity:.5;pointer-events:none}.toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:'';background-color:rgba(112,219,85,1);height:9px;width:9px;border-radius:50%}html[dir=ltr] .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] .toolbarButton.pdfSidebarNotification::after{right:17px}.secondaryToolbarButton{position:relative;margin:0 0 4px;padding:3px 0 1px;height:auto;min-height:25px;width:auto;min-width:100%;white-space:normal}html[dir=ltr] .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] .secondaryToolbarButton.bookmark{padding-left:27px}html[dir=rtl] .secondaryToolbarButton.bookmark{padding-right:27px}html[dir=ltr] .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbarButton.scrollVertical::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVQ4y8WSTQpCIRRGz82IBjloCw3aQyt+E1fUIoKUoKCrTXwgcgNtkiDi58fx/gnGKqU8gHu9Sj29iBx679YCqKo65/YtU1Wz5TUBy7KcYoybVvPemwArfJl5ky/GG7BGUKqviMhxKAXgBcS+iMM1AHL9ed0AOgNQ4L2GXs88C8iGxswc7HptGBBCuKSU/jsHV8D1mYnIebSITyB1mp/tgjZt/GkOhtr4AeCVUDEo9o/6AAAAAElFTkSuQmCC)}.secondaryToolbarButton.scrollHorizontal::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVQ4y+2QsQpCMQxFT2zr6KRfo5P/+b7gfZgIDop0EEnjYKq1+gZnvVBCODe5pPDXQ2YmZibfcjGzHZBEZOnGA9Abi4isnO+BUucjcAQWjfkCnKrBa8uvwLk2EVB/VeoJ0tRPHMCiN1MGAOt4659coJ5szVAfYPWE1Ceo6jyEUBe8naCqKYRw/4NhGLallDZhPY7jLOf83PjKNz3/dd0AKIVY6yZsfmAAAAAASUVORK5CYII=)}.secondaryToolbarButton.scrollWrapped::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVQ4y62SUUoEMQyGv9iignZBb6AP3sET92VO5CEWdoYFF0zjg+2QLdsdhM1Lm35p0uaPAJjZETjwZ1LXJCLPjs+c205EniKAqmoI4dFBU9XSHFUtIYQHf1tVFSAC5Jzf53m+8wEppTVBzvltyM1MGJiZyRaXutkDrYLVPpiIvAw4lb/G6pxck9YmumInYPHFgd3aA6DUQ3MV1F0onb/y6Jyf9vS6li64ONaSniUolyq4/fgFdQ7uL+m8xSPANE2fy7IM5+Aqv9UcfAGh/6OIfGzx1sTvTud+DjxvSqVeBXXwmgotRv8rY+lGXQF+AT5JoDHpim/qAAAAAElFTkSuQmCC)}.secondaryToolbarButton.spreadNone::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVQ4y92TMQ6AIBAE9zxjRSz8kQ/maxaGxmI5GwpykQRiY6QclmGPBOB/y8xkZE8awQPAVCMAJiKbz86Nyy4Ap2PrU7AlIIDsmnJEkMsBKfXhhN0NrHonjgpY1bc3I+DNCJ71CUhSVRfPugUxxj2lpDULIeRv/p0bxlgxLtRRJCAAAAAASUVORK5CYII=)}.secondaryToolbarButton.spreadOdd::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVQ4y9XRvWpUURQF4O/MXARhGgUhkN7KxkawEPEZREgXEmwkeQNLSysfIFXAQpm3EAtrewu1ScgPMkQmuTcrzZnhEEimFBcczs/aa++19+H/R5JyG7eKL/VwjNHiHQUppdy7gVf5+129zNHjE47wGnebYnMc42NN8AprrZXDJI+TrCdZS/Ijya+GP0nyIMnTJM+T3KmulrYu8Ba7tUJw2Tg4xUt8wGYp5bw6XiaY42HdYairxQ5+llK2k7zDGXTXBIvqQx3kApf4Ukp5k2QPT647GOEzvuEv9nHQJJhV8TN8xXv8aR2kCtaxgd9NO3CWZKuJHy1mVKDv++/j8bhvGx6Goeu67tEqvoPpdPpiNpuN24DJZLL8hVX8v8UVGX2ZknnnEZIAAAAASUVORK5CYII=)}.secondaryToolbarButton.spreadEven::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVQ4y9WSO0pEQRBFT/keYjDJGPhZgGBgYCYTKLgFPwsQIzP34AqMjEyNHAVTIw0EQz+B+EdMBBkQBkGYmWPSTxpBJxQr6bp1mqpbdMP/DzV+Y/14pKQFDFR1IAAjov4DJ/HhMokPoAXsJL0EjGXDPoAnYB8ogGVgNLfSUkfUhjqnDqapFX9O56I6ow5VvHLwBiwAq8B5RByr3cxBT31K9vci4lTt5Q4e1Au1mfSG+viNX6kTSW/mHPVO3Ur5dmp2m/F79Ua9VndT7SxfoR0Ra+oscAIcAevZCi8R0VCXgNdUGyR7mnd1BZhMtQGglzWoqwfAODCtHlYgADqdzmVRFJ38k3S73bIsy6l+vARoNpvz7Xa7yC/UarUvB/3438YnK2jWph8eMkkAAAAASUVORK5CYII=)}.secondaryToolbarButton.documentProperties::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABWklEQVQYGU3BwUrCAAAG4H8Mdgn00K2Ll0p2EHKeuvYMHrp26EEqcOCI6u5lBUKaBUUkEYKBMJg6obAOQUFibnWwghzW9qc2R98HBBinRoM99mhQYxz/UaLq2+y5N93z7rl7w55vU6WEP5RYZPf1amMdy0gggeWt9dcrdnlECWNehs93ejSFCKai0dSdzmcvA4BxPjnlWRkCRnjKM4wJs7JT5iMX4Wb5sLcKARP9i/4F/gh7q3xwsxhUvwxEMJWEgqnIwBhU4d2+HCLEY54gZJe8W/iWnUeIbbYReit81/F+6VYRokULIff6vYz2LptUEGCddQSosHm/A3XFN4Z5iphwCk4RExSHed9QV4CZ5jZNblHEWBIKRihyk2ZzGzMAYnJHp8kDLiHAJPdpdvSYjAlhTmlk/RpbrDDHHCts+bWGNqdAQEDA/Fra0j5L/vVP5ePI0tbSWICAkV+DHsfDVCx2KwAAAABJRU5ErkJggg==)}.verticalToolbarSeparator{display:block;padding:8px 0;margin:8px 4px;width:1px;background-color:rgba(0,0,0,.5);box-shadow:0 0 0 1px rgba(255,255,255,.08)}html[dir=ltr] .verticalToolbarSeparator{margin-left:2px}html[dir=rtl] .verticalToolbarSeparator{margin-right:2px}.toolbarField{padding:3px 6px;margin:4px 0;border-radius:2px;background-color:rgba(255,255,255,.09);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow:0 1px 0 rgba(0,0,0,.05) inset,0 1px 0 rgba(255,255,255,.05);color:rgba(242,242,242,1);font-size:12px;line-height:14px;outline-style:none}.toolbarField[type=checkbox]{display:inline-block;margin:8px 0}.toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}.toolbarField.pageNumber.visiblePageIsLoading{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:1px}.toolbarField.pageNumber::-webkit-inner-spin-button,.toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.toolbarField:hover{background-color:rgba(255,255,255,.11);border-color:rgba(0,0,0,.4) rgba(0,0,0,.43) rgba(0,0,0,.45)}.toolbarField:focus{background-color:rgba(255,255,255,.15);border-color:rgba(77,184,255,.8) rgba(77,184,255,.85) rgba(77,184,255,.9)}.toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid transparent;border-radius:2px;color:rgba(217,217,217,1);font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}#thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}#thumbnailView>a:active,#thumbnailView>a:focus{outline:0}.thumbnail{margin:0 10px 5px}html[dir=ltr] .thumbnail{float:left}html[dir=rtl] .thumbnail{float:right}#thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}#thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}.thumbnail:not([data-loaded]){border:1px dashed rgba(255,255,255,.5);margin:-1px 9px 4px}.thumbnailImage{border:1px solid transparent;box-shadow:0 0 0 1px rgba(0,0,0,.5),0 2px 8px rgba(0,0,0,.3);opacity:.8;z-index:1;background-color:rgba(255,255,255,1);background-clip:content-box}.thumbnailSelectionRing{border-radius:2px;padding:7px}.thumbnail:hover>.thumbnailSelectionRing>.thumbnailImage,a:focus>.thumbnail>.thumbnailSelectionRing>.thumbnailImage{opacity:.9}.thumbnail:hover>.thumbnailSelectionRing,a:focus>.thumbnail>.thumbnailSelectionRing{background-color:rgba(255,255,255,.15);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.2) inset,0 0 1px rgba(0,0,0,.2);color:rgba(255,255,255,.9)}.thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{box-shadow:0 0 0 1px rgba(0,0,0,.5);opacity:1}.thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.3);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.1) inset,0 0 1px rgba(0,0,0,.2);color:rgba(255,255,255,1)}#attachmentsView,#layersView,#outlineView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#outlineView{padding:4px 4px 0}#attachmentsView{padding:3px 4px 0}html[dir=ltr] .outlineItem>.outlineItems,html[dir=ltr] .outlineWithDeepNesting>.outlineItem{margin-left:20px}html[dir=rtl] .outlineItem>.outlineItems,html[dir=rtl] .outlineWithDeepNesting>.outlineItem{margin-right:20px}.attachmentsItem>button,.outlineItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:rgba(255,255,255,.8);font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.attachmentsItem>button{border:0;background:0 0;cursor:pointer;width:100%}html[dir=ltr] .outlineItem>a{padding:2px 0 5px 4px}html[dir=ltr] .attachmentsItem>button{padding:2px 0 3px 7px;text-align:left}html[dir=rtl] .outlineItem>a{padding:2px 4px 5px 0}html[dir=rtl] .attachmentsItem>button{padding:2px 7px 3px 0;text-align:right}.outlineItemToggler{position:relative;height:0;width:0;color:rgba(255,255,255,.5)}.outlineItemToggler::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAARElEQVR4AWMgDrzofXEGBbYxvBB7cQhJYPcLAZC6MCQhN4hWphfzoQJ9CPNUX5wACux/IYpsSTZQyB/VXrYXFS8YIWwAuoI/FPk23zUAAAAASUVORK5CYII=);display:inline-block;position:absolute}.outlineItemToggler.outlineItemsHidden::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAAR0lEQVQI12NgYHgx6YUSAyp4cebFyRc1L0RQhUDw0IukF+yoQiC45YXvCyZUIRAsQhVa/8IRWeP+FzEvWJFtLH8hgGwjmrsAP6JHRnPnejIAAAAASUVORK5CYII=)}html[dir=rtl] .outlineItemToggler.outlineItemsHidden::before{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.outlineItemToggler.outlineItemsHidden~.outlineItems{display:none}html[dir=ltr] .outlineItemToggler{float:left}html[dir=rtl] .outlineItemToggler{float:right}html[dir=ltr] .outlineItemToggler::before{right:4px}html[dir=rtl] .outlineItemToggler::before{left:4px}.attachmentsItem>button:hover,.outlineItem>a:hover,.outlineItemToggler:hover,.outlineItemToggler:hover+a,.outlineItemToggler:hover~.outlineItems{background-color:rgba(255,255,255,.02);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.2) inset,0 0 1px rgba(0,0,0,.2);border-radius:2px;color:rgba(255,255,255,.9)}.outlineItem.selected{background-color:rgba(255,255,255,.08);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.1) inset,0 0 1px rgba(0,0,0,.2);color:rgba(255,255,255,1)}html[dir=ltr] .treeItem>.treeItems,html[dir=ltr] .treeWithDeepNesting>.treeItem{margin-left:20px}html[dir=rtl] .treeItem>.treeItems,html[dir=rtl] .treeWithDeepNesting>.treeItem{margin-right:20px}.treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:var(--outline-color);font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] .treeItem>a{padding:2px 4px 5px 0}#layersView .treeItem>a>*{cursor:pointer}html[dir=ltr] #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] #layersView .treesItem>a>label{padding-right:4px}.treeItemToggler{position:relative;height:0;width:0;color:rgba(255,255,255,.5)}.treeItemToggler::before{content:url(assets/images/treeitem-expanded.svg);display:inline-block;position:absolute;max-width:16px}.treeItemToggler.treeItemsHidden::before{content:url(assets/images/treeitem-collapsed.svg);max-width:16px}html[dir=rtl] .treeItemToggler.treeItemsHidden::before{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] .treeItemToggler{float:left}html[dir=rtl] .treeItemToggler{float:right}html[dir=ltr] .treeItemToggler::before{right:4px}html[dir=rtl] .treeItemToggler::before{left:4px}.treeItem>a:hover,.treeItemToggler:hover,.treeItemToggler:hover+a,.treeItemToggler:hover~.treeItems{background-color:var(--sidebaritem-bg-color);background-clip:padding-box;border-radius:2px;color:var(--outline-hover-color)}.treeItem.selected{background-color:var(--outline-active-bg-color);background-clip:padding-box;color:var(--outline-active-color)}.noResults{font-size:12px;color:rgba(255,255,255,.8);font-style:italic;cursor:default}::-moz-selection{background:rgba(0,0,255,.3)}::selection{background:rgba(0,0,255,.3)}#errorWrapper{background:rgba(255,85,85,1);color:rgba(255,255,255,1);left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}.loadingInProgress #errorWrapper{top:37px}#errorMessageLeft{float:left}#errorMessageRight{float:right}#errorMoreInfo{background-color:rgba(255,255,255,1);color:rgba(0,0,0,1);padding:3px;margin:3px;width:98%}.overlayButton{width:auto;margin:3px 4px 2px!important;padding:2px 6px 3px}#overlayContainer{display:table;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:9}#overlayContainer>*{overflow:auto;-webkit-overflow-scrolling:touch}#overlayContainer>.container{display:table-cell;vertical-align:middle;text-align:center}#overlayContainer>.container .dialog{display:inline-block;padding:15px;border-spacing:4px;color:rgba(217,217,217,1);font-size:12px;line-height:14px;background-color:rgba(71,71,71,1);background-image:url(data:image/png;base64,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),linear-gradient(rgba(82,82,82,.99),rgba(69,69,69,.95));border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}.dialog>.row{display:table-row}.dialog>.row>*{display:table-cell}.dialog .toolbarField{margin:5px 0}.dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.5);box-shadow:0 0 0 1px rgba(255,255,255,.08)}.dialog .buttonRow{text-align:center;vertical-align:middle}.dialog :link{color:rgba(255,255,255,1)}#passwordOverlay>.dialog{text-align:center}#passwordOverlay .toolbarField{width:200px}#documentPropertiesOverlay>.dialog{text-align:left}#documentPropertiesOverlay .row>*{min-width:100px}html[dir=ltr] #documentPropertiesOverlay .row>*{text-align:left}html[dir=rtl] #documentPropertiesOverlay .row>*{text-align:right}#documentPropertiesOverlay .row>span{width:125px;word-wrap:break-word}#documentPropertiesOverlay .row>p{max-width:225px;word-wrap:break-word}#documentPropertiesOverlay .buttonRow{margin-top:10px}.clearBoth{clear:both}.fileInput{background:rgba(255,255,255,1);color:rgba(0,0,0,1);margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}#PDFBug{background:rgba(255,255,255,1);border:1px solid rgba(102,102,102,1);position:fixed;top:32px;right:0;bottom:0;font-size:10px;padding:0;width:300px}#PDFBug .controls{background:rgba(238,238,238,1);border-bottom:1px solid rgba(102,102,102,1);padding:3px}#PDFBug .panels{bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;right:0;top:27px}#PDFBug .panels>div{padding:5px}#PDFBug button.active{font-weight:700}.debuggerShowText{background:rgba(255,255,0,1);color:rgba(0,0,255,1)}.debuggerHideText:hover{background:rgba(255,255,0,1)}#PDFBug .stats{font-family:courier;font-size:10px;white-space:pre}#PDFBug .stats .title{font-weight:700}#PDFBug table{font-size:10px}#viewer.textLayer-visible .textLayer{opacity:1}#viewer.textLayer-visible .canvasWrapper{background-color:rgba(128,255,128,1)}#viewer.textLayer-visible .canvasWrapper canvas{mix-blend-mode:screen}#viewer.textLayer-visible .textLayer>span{background-color:rgba(255,255,0,.1);color:rgba(0,0,0,1);border:1px solid rgba(255,0,0,.5);box-sizing:border-box}#viewer.textLayer-hover .textLayer>span:hover{background-color:rgba(255,255,255,1);color:rgba(0,0,0,1)}#viewer.textLayer-shadow .textLayer>span{background-color:rgba(255,255,255,.6);color:rgba(0,0,0,1)}.grab-to-pan-grab{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=),move!important;cursor:-webkit-grab!important;cursor:grab!important}.grab-to-pan-grab :not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit!important}.grab-to-pan-grab:active,.grab-to-pan-grabbing{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=),move!important;cursor:-webkit-grabbing!important;cursor:grabbing!important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}#printContainer,.visibleLargeView,.visibleMediumView,.visibleSmallView{display:none}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){.toolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-5px}.secondaryToolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-4px}html[dir=ltr] .toolbarButton::before,html[dir=rtl] .toolbarButton::before{left:-1px}html[dir=ltr] .secondaryToolbarButton::before{left:-2px}html[dir=rtl] .secondaryToolbarButton::before{left:186px}#findInput[data-status=pending],.toolbarField.pageNumber.visiblePageIsLoading{background-image:url(data:image/png;base64,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);background-size:16px 17px}.dropdownToolbarButton::after{-webkit-transform:scale(.5);transform:scale(.5);top:-5px;content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAQAAACI54EcAAAAX0lEQVR4AWMYieB/PBAyICADEsf2/yMgtMUmqfz/+v9nQHgdyEKT5P9/GCgBhkAWP7Iky/+VQEE4BPJYEJLtUEEEbIdI4oA0kiToIMJewQwEgsFHOOAREDPK0OAwlQQAP2d+rjszeyAAAAAASUVORK5CYII=)}html[dir=ltr] .dropdownToolbarButton::after{right:4px}html[dir=rtl] .dropdownToolbarButton::after{left:4px}.toolbarButton.zoomIn::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAZ0lEQVR4AWMYBGAUMOKT/P8OyhDCrYblPz4TvhN2AQte2f+UGvCPdANGDXiMJvsFh7gsLgM+4bDmE7Eu+IsuTaoX/lFoAGMBWkLsg4oXkZuZTkMZpiRnptGkjDBgoAsUxgYGeoBRAADcyxzU99YUOAAAAABJRU5ErkJggg==)}.secondaryToolbarButton.scrollVertical::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJElEQVRYw+1XwW3DMAy8C/p23/k3GxTdoitkh6yQUbpCtyi6QWP32Wcg/Svm4xgGIRmirSgIEgKGDJkgz6KPPBOZJiJ/MBjJdY7fkyGmqHXIlfBDaQChTyaRVSdmbtBVrqNz7tCDELWe74fLe/9T/AS6rts5555zfJum8XjYrRgNfeATwOsEPcexvkm+lwZwiFBPxzk/B8mXS/SBVCMKNRqRGPevBoAWUHNaMVS9pdYsiPV8WUpDKwBJ7LPmNxBLGKy0XkLD2OiVuSW5Og2z9YD3/jcy/7U+EACh9y17Am3b7h964O71wAeAt4k4YzZ8kdyWpuEGwDGz821qzYLFNvfHRCbKwEsB0O24yAlZAPwn3q7aNEyJEq2MTYBKiVJR4jS7DCdrO4IxIrnNqQAAAABJRU5ErkJggg==)}.secondaryToolbarButton.scrollHorizontal::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABE0lEQVRYw+1TwW0DIRCcjfj5kTacv/tIMy7BDaWDKyAVRDrFKeGQ30w+nLRZ7wJWpHzCSKcDsTMsMwBMTExM/HcIyY86PgB4F5FXXUDyDcBpUC/iv+g9AXD/pzoBgBuAoyN6rGs9sMGnmhfVBHQDe1eeMIyIPQmCmn1DzfnRRFIF0hDw1mjGET86hOtAROaA/VFNaRGTIstA962I0Ggg1E7GYnY2KCZLvS4dF8SLKg1Y7N0RPuAEjcv0GujlO2I1Bu4AozuAzsnoPDsGT7Hl4B3PRiANATox8IFovIPyqW6wi306AlcAyDmz1haTa1HfV8Bnztk+VwJgWpblrIqzI3AB8LyuK7Zt6+X9W/7ExMTE3+MbtVGT7qYHUMoAAAAASUVORK5CYII=)}.secondaryToolbarButton.scrollWrapped::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYw+1XQU7DQAz0oJzLmXvzAhC/4AnwhvIF+Alf6C+AH7RZjhyr7J01l7RsjO3dpCCEVEtRkpXtzDq2xwsahJnfaYIAuMjf59o3uQ9xP+iKdzZ8Ms2QHEAaPsbKXX4ADgBpJzczWj/bP/R9vx1AsLjvnw9XjHEjPSv2OTDO/cYYt98iEEK47/v+vCZsi8UiyrUQwuoY+5P8mSCr4zURXTnZnWf+K4Ab0QfWRHQpMl0rYeT2OYCtU0IQDgjAUgDYGPpqCQJotT5gNaI0sRF5OiMgzQ92uJJe0qI7B4DV5djxAwuE1oqp0FKnRIpLv6eZolwR4qPIiJ1dYEYOeHZcigCM3aEAgJXqgceQjRFCq3658hdAsCCsCP9WGdYm7tc8EGN8U/hfzgdMRGnQHUmMMYgZwvSV2x8i0HXdwzF83nXd42ke+PfzwBMRXTt6eSY/A7gTdOzZS3kBcCvLsCWiXWXna421XSWAZS0XTBGe0LaLBxPvUFHq76wcbuRop3JBidFKEUoV/ODS8Ydz5JrLhqzNkxYAayjRwgdn5JLAUy0dp8IIBkdHhhvOgDPKgU/8BAgVvVaLzwAAAABJRU5ErkJggg==)}.secondaryToolbarButton.spreadNone::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYw+1W2w3CMBCLEd9hCUboGuzFPqzBCOSDEZIBYn4KilBzuqbpSYhY6keq09nxPRTnBgYG/h3QBpK8OecmKaTIeQdw6S3gMZNAIP/kBXDW5D2ucCtXyJxCUBcBFP6jtQdaHMACKVtu3+oAF27f7MLWErAizEQAe+yBtT2AytyXpdjVASp7A5ZjaL4HKIwirMbwm+x9zhZNWKt5tugBrijP7g5Ia5lWDnDrUjpoA1NKz0KE+M2xfR0IIVxjjCdNrPc+jcfmwM/gBc7GXpo/qW9+AAAAAElFTkSuQmCC)}.secondaryToolbarButton.spreadOdd::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNElEQVRYw+2Wu2sUURTGfyesaCGrrZBGjFgpokFRsLK2EC200MpGFAtBiaiVTUTEv8BarAO2qYJE0kgKQV1NfKCFCDvFhkWczyJnljs3985EUli4By47e893HnOeA2Ma05j+d7LqQdIcMJ3AKMYCS2Z2pgZalz/quJRMpctC+dCB9wFAGUcrPmY2FTnwLoMP70b/zWw/QCcAlAmhSrBMRCQXqTZMzZGJiFmd38BT4KB7ej3iK6O8OvPABU/pNHAOeO56y1C+k/D6A3DHzF5HvDIVyoT8nJndinjLwLKneSYXgcqzew6+JGlf4g3LBgdKYNZr4rCkBUmLkk445hkwbEvBAQfOANszIU45UAKfgAlJO4DLwG5gJ3DSC28IrDWlQMDdTCGppaUFTHr+Q32/gBcelb3uUNlUA8r0b5m4TxVh2D0D4LaZvZFkwP2oo5JtGDuTM5BKQWj8O3DDjXeABz6olHNAf/F2bXPgLXDVzH5I2gM8BA6ldHQyRqzBgDL8KkUrwBUz60s6Ajz2YiyDFra2FDQVYVM0hsBNNz4JPPJOWgsw28Lu6yTG5DXgm99Vvy+Bs/58HriYicC8mX30lvsCnN4QRukJcKopBZ/N7GttGZgNgFVX8LNhEA02sYFrEQy34WJizFq0QEZ8MzsevdmrzNKJ17PWxe1YUxGyxTZsauUajYqhKIrVaNYrMf8FyLE1CuRbT1EUKxtqoNfrzfb7/V2b+YzqdrtFfLdV+TGN6Z/RH9SvJLfI2RKxAAAAAElFTkSuQmCC)}.secondaryToolbarButton.spreadEven::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfUlEQVRYw+2WPWhUQRSFv7smaCEJqCBRQQQtFCGgYoiVKCgWFoqIP+APpLAWBBs70UCK1BZaCCoIgqCRdEZEJSFiEDRiElQICBLEXZAkSt6xyN1lMnnzNmBh4V4YdmfmnOHOmTNzHzSiEY3438OqfyQ9AnblYBRjgWEzO7wANM/f6bg8TnUtC/lhAuMBQIlEq/OY2eYogbEEPhyr9c1sC0BTAMhySFVilqNISql6mAWJNCVIA8ANYNz7G4ETwFGgVCeBaeA28BiYBJqdfxI4knMsNQk/eOtJGUbSOceMJvijkjoK+F0xvxQdQQZ0O7hd0ktJg5I6HXMPmE1ILOAdMCapWdJlSW8lPZO0zTF3gbmiI5gESpJWAGeBVp/bA7wys1lJ0xEv3MBW4Hk0vgbYC7wHfnsCy1IJrAeeRmO/gCeuyiZgZYECcX/OfdTnY/td9azIhAqMMgNcMrNRSQZcqePwcO6+mV31xFdLOg9ciG5Urgfkv1+BM2Y2IKkJuOYPTRYvEvCVSPAH8Ab4GGNKOTuQA0/5ztuAW8ChCJNSoLqBY5JeS+oD9pnZiCswVZRABnwCusxsStIOd+72aHEVKJAFzYB1wGl//X4CI6kEMjfcRTMrS9oA9ADL/erNeJtLHAHAQ+AA0An0+6P0HXgQYFpz+ZKGJV2vV70k9UoaTvD7Ja0t4LZLGgr58S2YXkIFLfLAKuCmpDvAC+Cb3/k24CBwfFFRCrIbzKmEFhWQ2ryZdUS7G0oUnbg8a55uu/MUUJ0KpwJlsgS3sErWTFipVL5ELleO8wXIsQsi4NdtlUrl8yIPTExMdJfL5dalfEa1tLRU4rG/5TeiEf8s/gDDWIJiYZyY4wAAAABJRU5ErkJggg==)}.secondaryToolbarButton.documentProperties::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAADbElEQVR4AZWUX2hTZxjGHzMvEjAFd7cbbeiFpI3buitXLxyCF14IC1jEC4dTcRO8GJPeiMwVxCFbaRp6sYn0TnFr6dxwBVtLZ2zTNEebNC1mxjYxmVtnKJaMNX9Kcp69Hwdmer6msPd3OHx5/rznBEKw2bCJfvZylCkuCyk5BegXFTq65GEf/2Cef0n1T1osy6e8qEFxt1zg5JcqLNHNkaWScDZa0Gw+lMALi7X44u1Qz93uu92hnsXba3HRLJYl1bzZgjbzN7F/F7LpwS9OYx+82IW3hF1y2td9Oj3ILJX/QpJt9gXNZpI5RWHq4km0ogm2EaX14snClJWSdHP9Aqf5gFlFdqhlP9xoNO6W/dkhKykN538LapdFyjDzfGjnXjiw1Th27n0+pLLM1i7XUINc9JgZppkuhFrbsa0+zYOcEw4Sr8G21vZCSOWl5SFArPdxiUvm4pVj9qfX4ipYi9dQDxxXjpmLqrMeWAfoNlN8xmdLt/TvXn6snGK0iI3AvXRLOdJ0o/IhU4rr/uuw8+2nJaMYufHJDdj5TlqKih+FAJ/y6VoYTdDnTXTgfbnr07QWVr1CAP/8wiSTmYEM/icDqvf3CCoGn/BJ4lICOhxmTviR0ElcUr11A+YcF7gwf24eOkwqT+7QmT+nPHMOZowJJlJnU9ARxwI6qbPKMWOoTKkfS+5CDjriWEAnd0E5lTBe3WGMsZX+FeiIYwGdlX7lvPoJ6SBnOVueKENHHAvolCeUkw5i/GM+Emb5rh4S3QIa70hDnLFTOOGpTtOgUQwWYUd0C9gpBpVenT7hAbYn+xkVZunTglELTffxsdKT/dgOoOtANcwII9Wf6dwYzH+v9PwPedRDpyRVPtx1oAuQyzVzjdNCtBbkG8Rr0I4PhPdQN5LoY1TlZ67BBWt83tVhhgWDgQ1voeOUhKGyq8M+rw8+KQtwfHS4NMpJIco7bCMa0CZuVOVKo6cOb/z7cX12tHSPD4Uw4/yGb9vLonzNmLiSKd37vBMu2GbH8SOrgwxRMcM5jvErnmGncEZOY6LMWO7q4PEj2AF94NrdEblqTvABFZOM0OAjwZDTpKWaE5GruzvgQoNxoKXTv9Bbvc9fdar3F3o7/WiR1Jbjwh7voYHziZ6XN8sj5rg5Xh55eTPRM3Deewh79Gf/C1dTNwWJacanAAAAAElFTkSuQmCC)}.outlineItemToggler::before{-webkit-transform:scale(.5);transform:scale(.5);top:-1px;content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAc0lEQVR4AWOgM3gx4cUZAnACwwupF8fwKQHKSoPMSserKA1iIduLTbiUAGXYYO6yw6nIlrDzJ6D6URbT+UARKfSgyMDmZHRF7AjnI5yMqcwBRZEN4dDvwx1FciDnYzoZu/NT8Uc3x4vNLzZiOBnT+ZhOBgAIx/kNQRV40AAAAABJRU5ErkJggg==)}.outlineItemToggler.outlineItemsHidden::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAXElEQVR4AWMAgRd9L6QZCIEXZ14cfZH2gp2AIjDc8MIWryIYBFlMUBHMYryK8FiMkMZjMUIKj8UICWwWE1a08YUdxdb1v5BBczimJRQGJsISTICwhNKkArYEDwAAaN/49eXnGYUAAAAASUVORK5CYII=)}html[dir=rtl] .outlineItemToggler.outlineItemsHidden::before{-webkit-transform:scale(-.5,.5);transform:scale(-.5,.5)}html[dir=ltr] .outlineItemToggler::before{right:0}html[dir=rtl] .outlineItemToggler::before{left:0}}@media print{body{background:rgba(0,0,0,0)}#errorWrapper,#loadingBox,#secondaryToolbar,#sidebarContainer,.textLayer,.toolbar{display:none}#viewerContainer{overflow:visible}#mainContainer,#viewerContainer,.page,.page canvas{position:static;padding:0;margin:0}.page{float:left;display:none;border:none;box-shadow:none;background-clip:content-box;background-color:rgba(255,255,255,1)}.page[data-loaded]{display:block}.fileInput,body[data-pdfjsprinting] #outerContainer{display:none}#printContainer canvas,#printContainer img,body[data-pdfjsprinting] #printContainer{display:block}#printContainer{height:100%}#printContainer>div{position:relative;top:0;left:0;width:1px;height:1px;overflow:visible;page-break-after:always;page-break-inside:avoid}}", "#viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute}.invisible{display:none!important}body[data-pdfjsprinting] #printContainer,body[data-pdfjsprinting] #printContainer *{padding:0;margin:0;font:message-box;outline:0}#printContainer canvas,#printContainer img{display:block!important}#outerContainer{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}@media print{body[data-pdfjsprinting]>*{display:none!important}body[data-pdfjsprinting] #printContainer{display:block!important}body[data-pdfjsprinting] #printContainer div img{height:100vh!important}body,html{overflow-y:visible!important}html.cdk-global-scrollblock{width:initial;position:initial}}.textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}.textLayer .highlight.color0.selected{background-color:#b400aa}.textLayer .highlight.color1{background-color:rgb(0,100,0,.4)}.textLayer .highlight.color1.selected{background-color:#006400}.textLayer .highlight.color2{background-color:rgb(0,0,255,.4)}.textLayer .highlight.color2.selected{background-color:#00f}.textLayer .highlight.color3{background-color:rgb(255,0,0,.4)}.textLayer .highlight.color3.selected{background-color:red}textLayer .highlight.color4{background-color:rgb(255,94,0,.4)}.textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] .overlayButton,html[dir=ltr] .toolbarButton{margin:3px 0 4px}html[dir=ltr] .toolbarButton:last-child,html[dir=rtl] .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] #secondaryToolbarToggle{margin-right:0;margin-left:4px}.overlayButton,.secondaryToolbarButton,.toolbarButton{padding-left:0;padding-right:0}.offscreen{position:fixed!important;left:-9999px!important;display:block!important;width:3000px!important}.offscreen #sidebarContainer{top:1000px!important}.toolbarButton{margin-left:-1px!important;margin-right:-2px!important}#numPages{padding-right:0}.pdf-viewer-template,.pdf-viewer-template *{display:none}"]
                }] }
    ];
    return PdfOriginalComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme/pdf-dark-theme/pdf-dark-theme.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfDarkThemeComponent = /** @class */ (function () {
    function PdfDarkThemeComponent() {
    }
    PdfDarkThemeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-dark-theme',
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ngx-extended-pdf-viewer .fancyDropdownToolbarButton::after{content:url(\"data:image/svg+xml; utf8, <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(217, 217, 217)' d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>\")}ngx-extended-pdf-viewer .textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}ngx-extended-pdf-viewer .textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:var(#b400aa);border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::-moz-selection{background:#00f}ngx-extended-pdf-viewer .textLayer ::selection{background:#00f}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer .annotationLayer section{position:absolute}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.pushButton>a,ngx-extended-pdf-viewer .annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}ngx-extended-pdf-viewer .annotationLayer .textAnnotation img{position:absolute;cursor:pointer}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input,ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input,ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);color:#474747;border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select option{padding:0}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled],ngx-extended-pdf-viewer .annotationLayer .choiceWidgetAnnotation select[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input[disabled],ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation textarea[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#474747;content:'';display:block;position:absolute}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{height:80%;left:45%;width:1px}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}ngx-extended-pdf-viewer .annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.checkBox input,ngx-extended-pdf-viewer .annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}ngx-extended-pdf-viewer .annotationLayer .popupWrapper{position:absolute;width:20em}ngx-extended-pdf-viewer .annotationLayer .popup{position:absolute;z-index:4;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #888;border-radius:2px;padding:6px;margin-left:5px;cursor:pointer;font:message-box;font-size:9px;word-wrap:break-word}ngx-extended-pdf-viewer .annotationLayer .popup>*{font-size:9px}ngx-extended-pdf-viewer .annotationLayer .popup h1{display:inline-block}ngx-extended-pdf-viewer .annotationLayer .popup span{display:inline-block;margin-left:5px}ngx-extended-pdf-viewer .annotationLayer .popup p{border-top:1px solid #333;margin-top:2px;padding-top:2px}ngx-extended-pdf-viewer .annotationLayer .caretAnnotation,ngx-extended-pdf-viewer .annotationLayer .circleAnnotation svg ellipse,ngx-extended-pdf-viewer .annotationLayer .fileAttachmentAnnotation,ngx-extended-pdf-viewer .annotationLayer .freeTextAnnotation,ngx-extended-pdf-viewer .annotationLayer .highlightAnnotation,ngx-extended-pdf-viewer .annotationLayer .inkAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .lineAnnotation svg line,ngx-extended-pdf-viewer .annotationLayer .polygonAnnotation svg polygon,ngx-extended-pdf-viewer .annotationLayer .polylineAnnotation svg polyline,ngx-extended-pdf-viewer .annotationLayer .squareAnnotation svg rect,ngx-extended-pdf-viewer .annotationLayer .squigglyAnnotation,ngx-extended-pdf-viewer .annotationLayer .stampAnnotation,ngx-extended-pdf-viewer .annotationLayer .strikeoutAnnotation,ngx-extended-pdf-viewer .annotationLayer .underlineAnnotation{cursor:pointer}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;-o-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;background-color:#fff}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}ngx-extended-pdf-viewer .pdfViewer.singlePageView{display:inline-block}ngx-extended-pdf-viewer .pdfViewer.singlePageView .page{margin:0;border:none}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread,ngx-extended-pdf-viewer .spread .page{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .spread .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(data:image/gif;base64,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) center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}ngx-extended-pdf-viewer .html *{padding:0;margin:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer select{font:message-box;outline:0}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:rgba(255,255,255,.09)!important;color:#d9d9d9}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none!important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer>span{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0!important;overflow:hidden!important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#000}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{border-top:2px solid transparent;background-color:#000;width:100%;height:100%;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid transparent;background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer>span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer>span,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:2;transition-duration:.2s;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:calc(0px - $sidebar-width)}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px;right:calc(0px - $sidebar-width)}ngx-extended-pdf-viewer .loadingInProgress #sidebarContainer{top:36px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:320px}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{-webkit-overflow-scrolling:touch;top:32px;right:0;bottom:0;left:0;outline:0}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:.2s;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:7;cursor:default;border:1px solid rgba(0,0,0,.5)}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:100%;height:32px;background-color:#424242;color:#d9d9d9;border:none;padding-top:1px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:4;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{position:relative;height:32px;background-color:#474747}ngx-extended-pdf-viewer #toolbarViewer{height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width .2s}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg,#bbb 0,#999 5px,#999 45px,#ddd 55px,#ddd 95px,#bbb 100px);-webkit-animation:950ms linear infinite progressIndeterminate;animation:950ms linear infinite progressIndeterminate}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar{top:40px;position:absolute;z-index:7;height:auto;min-width:16px;padding:0 6px;margin:4px 2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}ngx-extended-pdf-viewer .secondaryToolbar{padding:6px;height:auto;z-index:8}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer{max-width:200px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-bottom:-4px}ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,ngx-extended-pdf-viewer #secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none!important}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#474747;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after{right:13px;margin-right:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#d9d9d9;color:#474747;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #findInput.notFound{background-color:#f66}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=ltr] ngx-extended-pdf-viewer .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:0;background:0 0;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .overlayButton[disabled],ngx-extended-pdf-viewer .secondaryToolbarButton[disabled],ngx-extended-pdf-viewer .toolbarButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{border:1px solid transparent;color:#d9d9d9}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{min-width:16px;padding:2px 6px 0;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=rtl] ngx-extended-pdf-viewer .overlayButton,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .overlayButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .secondaryToolbarButton.toggled,ngx-extended-pdf-viewer .toolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#d9d9d9;background-color:rgba(255,255,255,.09)}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#474747}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious,html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext,html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}ngx-extended-pdf-viewer .secondaryToolbarButton::before,ngx-extended-pdf-viewer .toolbarButton::before{position:absolute;display:inline-block;top:4px;left:7px}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark,ngx-extended-pdf-viewer .toolbarButton.bookmark{box-sizing:border-box;outline:0;padding-top:4px;text-decoration:none}ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-top:5px}ngx-extended-pdf-viewer .bookmark[href='#']{opacity:.5;pointer-events:none}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:'';background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .secondaryToolbarButton{position:relative;margin:0 0 4px;padding:3px 0 1px;height:auto;min-height:25px;width:auto;min-width:100%;white-space:normal}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-left:27px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton.bookmark{padding-right:27px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}ngx-extended-pdf-viewer .toolbarField{padding:3px 6px;margin:4px 0;border-radius:2px;background-color:rgba(255,255,255,.09);background-clip:padding-box;color:#d9d9d9;font-size:12px;line-height:14px;outline-style:none;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid transparent;border-radius:2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .thumbnail{margin:0 10px 5px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid transparent;opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView,ngx-extended-pdf-viewer #outlineView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems,html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#424242;font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a>*{cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url(assets/images/treeitem-expanded.svg);display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url(assets/images/treeitem-collapsed.svg);max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{-webkit-transform:scaleX(-1);transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItem>a:hover,ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:#f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer .loadingInProgress #errorWrapper{top:37px}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#000;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .overlayButton{width:auto;margin:3px 4px 2px!important;padding:2px 6px 3px}ngx-extended-pdf-viewer #overlayContainer{display:table;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:9}ngx-extended-pdf-viewer #overlayContainer>*{overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer #overlayContainer>.container{display:table-cell;vertical-align:middle;text-align:center}ngx-extended-pdf-viewer #overlayContainer>.container .dialog{display:inline-block;padding:15px;border-spacing:4px;color:#d9d9d9;font-size:12px;line-height:14px;background-color:#474747;border-radius:4px}ngx-extended-pdf-viewer .dialog>.row{display:table-row}ngx-extended-pdf-viewer .dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer .dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer .dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer .dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordOverlay>.dialog{text-align:center}ngx-extended-pdf-viewer #passwordOverlay .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesOverlay>.dialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{min-width:100px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesOverlay .row>*{text-align:right}.fileInput{background:#fff;color:#000;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesOverlay .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=),move!important;cursor:-webkit-grab!important;cursor:grab!important}ngx-extended-pdf-viewer .grab-to-pan-grab :not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit!important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=),move!important;cursor:-webkit-grabbing!important;cursor:grabbing!important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}#printContainer{display:none}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{right:4px;left:186px}ngx-extended-pdf-viewer #findInput[data-status=pending],ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading{background-image:url(data:image/png;base64,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);background-size:16px 17px}@media print{body{background:rgba(0,0,0,0)}#errorWrapper,#loadingBox,#secondaryToolbar,#sidebarContainer,.textLayer,.toolbar{display:none}#viewerContainer{overflow:visible}#mainContainer,#viewerContainer,.page,.page canvas{position:static;padding:0;margin:0}.page{float:left;display:none;border:none;box-shadow:none;background-clip:content-box;background-color:#fff}.page[data-loaded]{display:block}.fileInput,body[data-pdfjsprinting] #outerContainer{display:none}#printContainer canvas,#printContainer img,body[data-pdfjsprinting] #printContainer{display:block}#printContainer{height:100%}#printContainer>div{position:relative;top:0;left:0;width:1px;height:1px;overflow:visible;page-break-after:always;page-break-inside:avoid}}ngx-extended-pdf-viewer .visibleLargeView,ngx-extended-pdf-viewer .visibleMediumView,ngx-extended-pdf-viewer .visibleSmallView{display:none}ngx-extended-pdf-viewer .html .unverified-signature-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute}ngx-extended-pdf-viewer .invisible{display:none!important}body[data-pdfjsprinting] #printContainer,body[data-pdfjsprinting] #printContainer *{padding:0;margin:0;font:message-box;outline:0}#printContainer canvas,#printContainer img{display:block!important}@media print{body[data-pdfjsprinting]>*{display:none!important}body[data-pdfjsprinting] #printContainer{display:block!important}body[data-pdfjsprinting] #printContainer div img{height:100vh!important}body,html{overflow-y:visible!important}html.cdk-global-scrollblock{width:initial;position:initial}}ngx-extended-pdf-viewer .textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color0.selected{background-color:#b400aa}ngx-extended-pdf-viewer .textLayer .highlight.color1{background-color:rgba(0,100,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color1.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer .highlight.color2{background-color:rgba(0,0,255,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color2.selected{background-color:#00f}ngx-extended-pdf-viewer .textLayer .highlight.color3{background-color:rgba(255,0,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color3.selected{background-color:red}ngx-extended-pdf-viewer textLayer .highlight.color4{background-color:rgba(255,94,0,.4)}ngx-extended-pdf-viewer .textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] ngx-extended-pdf-viewer .overlayButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .overlayButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .toolbarButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed!important;left:-9999px!important;display:block!important;width:3000px!important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px!important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px!important;margin-right:-2px!important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:0;border:1px solid #00f}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:#00f solid 1px}"]
                }] }
    ];
    return PdfDarkThemeComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-extended-pdf-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
if (!Promise['allSettled']) {
    if (!!window['Zone'] && !window['__zone_symbol__Promise.allSettled']) {
        console.error("Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version.");
    }
}
/**
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKeyIgnored(cmd, keycode) {
    /** @type {?} */
    var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
    /** @type {?} */
    var ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
    /** @type {?} */
    var acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
    if (keycode === 'WHEEL') {
        if (isKeyInList(ignoreKeys, cmd, 'WHEEL')) {
            return true;
        }
        if (!!acceptKeys && acceptKeys.length > 0) {
            return !isKeyInList(acceptKeys, cmd, 'WHEEL');
        }
        return false;
    }
    if (keycode === 16 || keycode === 17 || keycode === 18 || keycode === 224) {
        // ignore solitary SHIFT, ALT, CMD, and CTRL because they only make sense as two-key-combinations
        return true;
    }
    // cmd is a bit-array:
    // 1 == CTRL
    // 2 == ALT
    // 4 == SHIFT
    // 8 == META
    /** @type {?} */
    var ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
    if (!!ignoreKeyboard) {
        return true;
    }
    if (!!ignoreKeys && ignoreKeys.length > 0) {
        if (isKeyInList(ignoreKeys, cmd, keycode)) {
            return true;
        }
    }
    if (!!acceptKeys && acceptKeys.length > 0) {
        return !isKeyInList(acceptKeys, cmd, keycode);
    }
    return false;
}
/**
 * @param {?} settings
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKeyInList(settings, cmd, keycode) {
    if (!settings) {
        return true;
    }
    return settings.some((/**
     * @param {?} keyDef
     * @return {?}
     */
    function (keyDef) { return isKey(keyDef, cmd, keycode); }));
}
/**
 * @param {?} keyDef
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKey(keyDef, cmd, keycode) {
    /** @type {?} */
    var cmdDef = 0;
    /** @type {?} */
    var key = 0;
    keyDef = keyDef.toLowerCase();
    // tslint:disable: no-bitwise
    if (keyDef.includes('ctrl+')) {
        cmdDef |= 1;
        keyDef = keyDef.replace('ctrl+', '');
    }
    if (keyDef.includes('cmd+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('cmd+', '');
    }
    if (keyDef.includes('alt+')) {
        cmdDef |= 2;
        keyDef = keyDef.replace('alt+', '');
    }
    if (keyDef.includes('shift+')) {
        cmdDef |= 4;
        keyDef = keyDef.replace('shift+', '');
    }
    if (keyDef.includes('meta+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('meta+', '');
    }
    if (keyDef === 'up') {
        key = 38;
    }
    else if (keyDef === 'down') {
        key = 40;
    }
    else if (keyDef === '+' || keyDef === '"+"') {
        key = 171;
    }
    else if (keyDef === '-' || keyDef === '"-"') {
        key = 173;
    }
    else if (keyDef === 'esc') {
        key = 27;
    }
    else if (keyDef === 'enter') {
        key = 13;
    }
    else if (keyDef === 'space') {
        key = 32;
    }
    else if (keyDef === 'f4') {
        key = 115;
    }
    else if (keyDef === 'backspace') {
        key = 8;
    }
    else if (keyDef === 'home') {
        key = 36;
    }
    else if (keyDef === 'end') {
        key = 35;
    }
    else if (keyDef === 'left') {
        key = 37;
    }
    else if (keyDef === 'right') {
        key = 39;
    }
    else if (keyDef === 'pagedown') {
        key = 34;
    }
    else if (keyDef === 'pageup') {
        key = 33;
    }
    else {
        key = keyDef.toUpperCase().charCodeAt(0);
    }
    if (keycode === 'WHEEL') {
        return keyDef === 'wheel' && cmd === cmdDef;
    }
    return key === keycode && cmd === cmdDef;
}
if (typeof window !== 'undefined') {
    ((/** @type {?} */ (window))).isKeyIgnored = isKeyIgnored;
}
var NgxExtendedPdfViewerModule = /** @class */ (function () {
    function NgxExtendedPdfViewerModule() {
    }
    NgxExtendedPdfViewerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [
                        DynamicCssComponent,
                        NgxExtendedPdfViewerComponent,
                        PdfZoomDropdownComponent,
                        PdfContextMenuComponent,
                        PdfPresentationModeComponent,
                        PdfOpenFileComponent,
                        PdfPrintComponent,
                        PdfDownloadComponent,
                        PdfBookmarkComponent,
                        PdfZoomToolbarComponent,
                        PdfPagingAreaComponent,
                        PdfFindbarComponent,
                        PdfSidebarComponent,
                        PdfHandToolComponent,
                        PdfSelectToolComponent,
                        PdfSecondaryToolbarComponent,
                        PdfDocumentPropertiesOverlayComponent,
                        PdfSearchInputFieldComponent,
                        PdfFindPreviousComponent,
                        PdfFindNextComponent,
                        PdfFindInputAreaComponent,
                        PdfFindbarOptionsTwoContainerComponent,
                        PdfFindbarOptionsOneContainerComponent,
                        PdfFindMatchCaseComponent,
                        PdfFindHighlightAllComponent,
                        PdfFindEntireWordComponent,
                        PdfFindFuzzilyComponent,
                        PdfFindMultipleSearchTextsComponent,
                        PdfFindIgnoreAccentsComponent,
                        PdfFindbarOptionsThreeContainerComponent,
                        PdfFindResultsCountComponent,
                        PdfFindbarMessageContainerComponent,
                        PdfToolbarComponent,
                        PdfFindButtonComponent,
                        PdfToggleSidebarComponent,
                        PdfToggleSecondaryToolbarComponent,
                        PdfLastPageComponent,
                        PdfFirstPageComponent,
                        PdfNextPageComponent,
                        PdfPreviousPageComponent,
                        PdfPageNumberComponent,
                        PdfRotatePageComponent,
                        PdfZoomInComponent,
                        PdfZoomOutComponent,
                        PdfDummyComponentsComponent,
                        PdfSidebarContentComponent,
                        PdfSidebarToolbarComponent,
                        PdfOriginalComponent,
                        PdfDarkThemeComponent,
                        PdfLightThemeComponent,
                    ],
                    providers: [NgxExtendedPdfViewerService, PDFNotificationService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
                    exports: [
                        PdfZoomDropdownComponent,
                        PdfContextMenuComponent,
                        PdfPresentationModeComponent,
                        PdfOpenFileComponent,
                        PdfPrintComponent,
                        PdfDownloadComponent,
                        PdfBookmarkComponent,
                        PdfZoomToolbarComponent,
                        PdfPagingAreaComponent,
                        PdfFindbarComponent,
                        PdfSidebarComponent,
                        PdfSidebarContentComponent,
                        PdfSidebarToolbarComponent,
                        PdfSecondaryToolbarComponent,
                        PdfDocumentPropertiesOverlayComponent,
                        PdfSearchInputFieldComponent,
                        PdfFindPreviousComponent,
                        PdfFindNextComponent,
                        PdfFindInputAreaComponent,
                        PdfFindbarOptionsTwoContainerComponent,
                        PdfFindbarOptionsOneContainerComponent,
                        PdfFindMatchCaseComponent,
                        PdfFindHighlightAllComponent,
                        PdfFindEntireWordComponent,
                        PdfFindMultipleSearchTextsComponent,
                        PdfFindIgnoreAccentsComponent,
                        PdfFindbarOptionsThreeContainerComponent,
                        PdfFindResultsCountComponent,
                        PdfFindbarMessageContainerComponent,
                        PdfHandToolComponent,
                        PdfRotatePageComponent,
                        PdfSelectToolComponent,
                        PdfToolbarComponent,
                        PdfFindButtonComponent,
                        PdfToggleSidebarComponent,
                        PdfToggleSecondaryToolbarComponent,
                        PdfLastPageComponent,
                        PdfFirstPageComponent,
                        PdfNextPageComponent,
                        PdfPreviousPageComponent,
                        PdfPageNumberComponent,
                        PdfZoomInComponent,
                        PdfZoomOutComponent,
                        NgxExtendedPdfViewerComponent,
                    ],
                },] }
    ];
    /** @nocollapse */
    NgxExtendedPdfViewerModule.ctorParameters = function () { return []; };
    return NgxExtendedPdfViewerModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pdf-document-properties-extractor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PdfDocumentPropertiesExtractor = /** @class */ (function () {
    function PdfDocumentPropertiesExtractor() {
        this.pdfDateStringRegex = new RegExp('^D:' + // Prefix (required)
            '(\\d{4})' + // Year (required)
            '(\\d{2})?' + // Month (optional)
            '(\\d{2})?' + // Day (optional)
            '(\\d{2})?' + // Hour (optional)
            '(\\d{2})?' + // Minute (optional)
            '(\\d{2})?' + // Second (optional)
            '([Z|+|-])?' + // Universal time relation (optional)
            '(\\d{2})?' + // Offset hour (optional)
            // tslint:disable-next-line: quotemark
            "'?" + // Splitting apostrophe (optional)
            '(\\d{2})?' + // Offset minute (optional)
            // tslint:disable-next-line: quotemark
            "'?" // Trailing apostrophe (optional)
        );
    }
    /**
     * @return {?}
     */
    PdfDocumentPropertiesExtractor.prototype.getDocumentProperties = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var PDFViewerApplication, pdfDocument, result;
            var _this = this;
            return __generator(this, function (_a) {
                PDFViewerApplication = ((/** @type {?} */ (window)))
                    .PDFViewerApplication;
                pdfDocument = PDFViewerApplication.pdfDocument;
                result = {};
                return [2 /*return*/, pdfDocument
                        .getMetadata()
                        .then((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var info = _a.info, metadata = _a.metadata, contentDispositionFilename = _a.contentDispositionFilename;
                        result.author = info.Author;
                        result.creationDate = _this.toDateObject(info.CreationDate);
                        result.creator = info.Creator;
                        result.keywords = info.Keywords;
                        result.linearized = info.IsLinearized;
                        result.modificationDate = _this.toDateObject(info.ModDate);
                        result.pdfFormatVersion = info.PDFFormatVersion;
                        result.producer = info.Producer;
                        result.subject = info.Subject;
                        result.title = info.Title;
                        if (contentDispositionFilename) {
                            result.fileName = contentDispositionFilename;
                        }
                        return pdfDocument.getDownloadInfo();
                    }))
                        .then((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var length = _a.length;
                        result.maybeFileSize = length;
                        return result;
                    }))];
            });
        });
    };
    /** shamelessly copied from pdf.js */
    /**
     * shamelessly copied from pdf.js
     * @private
     * @param {?} input
     * @return {?}
     */
    PdfDocumentPropertiesExtractor.prototype.toDateObject = /**
     * shamelessly copied from pdf.js
     * @private
     * @param {?} input
     * @return {?}
     */
    function (input) {
        // if (!input ||  typeof input !== "string")) {
        //  return null;
        //  }
        // if (!input ||  typeof input !== "string")) {
        //  return null;
        //  }
        // Optional fields that don't satisfy the requirements from the regular
        // expression (such as incorrect digit counts or numbers that are out of
        // range) will fall back the defaults from the specification.
        /** @type {?} */
        var matches = this.pdfDateStringRegex.exec(input);
        if (!matches) {
            return null;
        }
        // JavaScript's `Date` object expects the month to be between 0 and 11
        // instead of 1 and 12, so we have to correct for that.
        /** @type {?} */
        var year = parseInt(matches[1], 10);
        /** @type {?} */
        var month = parseInt(matches[2], 10);
        month = month >= 1 && month <= 12 ? month - 1 : 0;
        /** @type {?} */
        var day = parseInt(matches[3], 10);
        day = day >= 1 && day <= 31 ? day : 1;
        /** @type {?} */
        var hour = parseInt(matches[4], 10);
        hour = hour >= 0 && hour <= 23 ? hour : 0;
        /** @type {?} */
        var minute = parseInt(matches[5], 10);
        minute = minute >= 0 && minute <= 59 ? minute : 0;
        /** @type {?} */
        var second = parseInt(matches[6], 10);
        second = second >= 0 && second <= 59 ? second : 0;
        /** @type {?} */
        var universalTimeRelation = matches[7] || 'Z';
        /** @type {?} */
        var offsetHour = parseInt(matches[8], 10);
        offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
        /** @type {?} */
        var offsetMinute = parseInt(matches[9], 10) || 0;
        offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
        // Universal time relation 'Z' means that the local time is equal to the
        // universal time, whereas the relations '+'/'-' indicate that the local
        // time is later respectively earlier than the universal time. Every date
        // is normalized to universal time.
        if (universalTimeRelation === '-') {
            hour += offsetHour;
            minute += offsetMinute;
        }
        else if (universalTimeRelation === '+') {
            hour -= offsetHour;
            minute -= offsetMinute;
        }
        return new Date(Date.UTC(year, month, day, hour, minute, second));
    };
    return PdfDocumentPropertiesExtractor;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/link-target.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LinkTarget = {
    NONE: 0,
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/pages-loaded-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/page-number-change.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/page-rendered-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/pages-rotation-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/pdf-downloaded-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/pdf-loaded-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/pdf-thumbnail-drawn-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/invalid-pdf-exception.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/scale-changing-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/sidebarview-changed.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/textlayer-rendered.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-viewer-application.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-viewer-app-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: miljann995-ngx-extended-pdf-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxExtendedPdfViewerComponent, NgxExtendedPdfViewerService, PDFNotificationService, NgxExtendedPdfViewerModule, PdfDocumentPropertiesExtractor, getVersionSuffix, pdfjsVersion, pdfjsBleedingEdgeVersion, pdfDefaultOptions, FindState, LinkTarget, VerbosityLevel, PdfFindNextComponent, PdfSearchInputFieldComponent, PdfFindPreviousComponent, PdfToggleSecondaryToolbarComponent, PdfContextMenuComponent, PdfBookmarkComponent, PdfDownloadComponent, PdfFindbarComponent, PdfHandToolComponent, PdfOpenFileComponent, PdfPresentationModeComponent, PdfPrintComponent, PdfSelectToolComponent, PdfZoomToolbarComponent, PdfPagingAreaComponent, PdfSidebarComponent, PdfSidebarContentComponent, PdfSidebarToolbarComponent, PdfSecondaryToolbarComponent, PdfDocumentPropertiesOverlayComponent, PdfFindInputAreaComponent, PdfFindbarOptionsTwoContainerComponent, PdfFindbarOptionsOneContainerComponent, PdfFindMatchCaseComponent, PdfFindHighlightAllComponent, PdfFindEntireWordComponent, PdfFindFuzzilyComponent, PdfFindIgnoreAccentsComponent, PdfFindbarOptionsThreeContainerComponent, PdfFindResultsCountComponent, PdfFindbarMessageContainerComponent, PdfFindMultipleSearchTextsComponent, PdfToolbarComponent, PdfFindButtonComponent, PdfToggleSidebarComponent, PdfFirstPageComponent, PdfLastPageComponent, PdfNextPageComponent, PdfPreviousPageComponent, PdfZoomInComponent, PdfZoomOutComponent, PdfZoomDropdownComponent, ScrollModeType, PdfRotatePageComponent, DynamicCssComponent as ɵb, PdfDummyComponentsComponent as ɵa, PdfDarkThemeComponent as ɵf, PdfLightThemeComponent as ɵg, PdfOriginalComponent as ɵe, PdfFindbarService as ɵc, PdfPageNumberComponent as ɵd };

//# sourceMappingURL=miljann995-ngx-extended-pdf-viewer.js.map