/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-extended-pdf-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PdfHandToolComponent } from './toolbar/pdf-hand-tool/pdf-hand-tool.component';
// tslint:disable:max-line-length
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { NgxExtendedPdfViewerService } from './ngx-extended-pdf-viewer.service';
import { PdfBookmarkComponent } from './toolbar/pdf-bookmark/pdf-bookmark.component';
import { PdfContextMenuComponent } from './toolbar/pdf-context-menu/pdf-context-menu.component';
import { PdfDocumentPropertiesOverlayComponent } from './document-properties/pdf-document-properties-overlay/pdf-document-properties-overlay.component';
import { PdfDownloadComponent } from './toolbar/pdf-download/pdf-download.component';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { PdfFindbarComponent } from './toolbar/pdf-findbar/pdf-findbar.component';
import { PdfFindbarMessageContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-message-container/pdf-findbar-message-container.component';
import { PdfFindbarOptionsOneContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-findbar-options-one-container.component';
import { PdfFindbarOptionsThreeContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-findbar-options-three-container.component';
import { PdfFindbarOptionsTwoContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-findbar-options-two-container.component';
import { PdfFindButtonComponent } from './toolbar/pdf-find-button/pdf-find-button.component';
import { PdfFindEntireWordComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component';
import { PdfFindFuzzilyComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-fuzzily/pdf-find-fuzzily.component';
import { PdfFindHighlightAllComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component';
import { PdfFindIgnoreAccentsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-ignore-accents/pdf-find-ignore-accents.component';
import { PdfFindInputAreaComponent } from './toolbar/pdf-findbar/pdf-find-input-area/pdf-find-input-area.component';
import { PdfFindMatchCaseComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component';
import { PdfFindMultipleSearchTextsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-phrase/pdf-find-entire-phrase.component';
import { PdfFindNextComponent } from './toolbar/pdf-findbar/pdf-find-next/pdf-find-next.component';
import { PdfFindPreviousComponent } from './toolbar/pdf-findbar/pdf-find-previous/pdf-find-previous.component';
import { PdfFindResultsCountComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component';
import { PdfFirstPageComponent } from './toolbar/pdf-paging-area/pdf-first-page/pdf-first-page.component';
import { PdfLastPageComponent } from './toolbar/pdf-paging-area/pdf-last-page/pdf-last-page.component';
import { PdfNextPageComponent } from './toolbar/pdf-paging-area/pdf-next-page/pdf-next-page.component';
import { PdfOpenFileComponent } from './toolbar/pdf-open-file/pdf-open-file.component';
import { PdfPageNumberComponent } from './toolbar/pdf-paging-area/pdf-page-number/pdf-page-number.component';
import { PdfPagingAreaComponent } from './toolbar/pdf-paging-area/pdf-paging-area.component';
import { PdfPresentationModeComponent } from './toolbar/pdf-presentation-mode/pdf-presentation-mode.component';
import { PdfPreviousPageComponent } from './toolbar/pdf-paging-area/pdf-previous-page/pdf-previous-page.component';
import { PdfPrintComponent } from './toolbar/pdf-print/pdf-print.component';
import { PdfRotatePageComponent } from './toolbar/pdf-rotate-page/pdf-rotate-page.component';
import { PdfSearchInputFieldComponent } from './toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { PdfToggleSecondaryToolbarComponent } from './toolbar/pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component';
import { PdfToggleSidebarComponent } from './toolbar/pdf-toggle-sidebar/pdf-toggle-sidebar.component';
import { PdfToolbarComponent } from './toolbar/pdf-toolbar/pdf-toolbar.component';
import { PdfZoomDropdownComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component';
import { PdfZoomInComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-in/pdf-zoom-in.component';
import { PdfZoomOutComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-out/pdf-zoom-out.component';
import { PdfZoomToolbarComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-toolbar.component';
import { PdfSelectToolComponent } from './toolbar/pdf-select-tool/pdf-select-tool.component';
import { DynamicCssComponent } from './dynamic-css/dynamic-css.component';
import { PDFNotificationService } from './pdf-notification-service';
import { PdfSidebarContentComponent } from './sidebar/pdf-sidebar/pdf-sidebar-content/pdf-sidebar-content.component';
import { PdfSidebarToolbarComponent } from './sidebar/pdf-sidebar/pdf-sidebar-toolbar/pdf-sidebar-toolbar.component';
import { PdfLightThemeComponent } from './theme/pdf-light-theme/pdf-light-theme.component';
import { PdfOriginalComponent } from './theme/pdf-original-theme/pdf-original.component';
import { PdfDarkThemeComponent } from './theme/pdf-dark-theme/pdf-dark-theme.component';
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
export { NgxExtendedPdfViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1pbGphbm45OTUvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7O0FBR3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDeEosT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDbEosT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUdBQXFHLENBQUM7QUFDN0osT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seUdBQXlHLENBQUM7QUFDbkss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Qjt3QkFDcEIsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1QixxQ0FBcUM7d0JBQ3JDLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsc0NBQXNDO3dCQUN0QyxzQ0FBc0M7d0JBQ3RDLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1QiwwQkFBMEI7d0JBQzFCLG1DQUFtQzt3QkFDbkMsNkJBQTZCO3dCQUM3Qix3Q0FBd0M7d0JBQ3hDLDRCQUE0Qjt3QkFDNUIsbUNBQW1DO3dCQUNuQyxvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixrQ0FBa0M7d0JBQ2xDLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsNkJBQTZCO3FCQUM5QjtpQkFDRjs7OztJQUdELGlDQUFDO0NBQUEsQUF4R0QsSUF3R0M7U0FGWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZGZIYW5kVG9vbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtaGFuZC10b29sL3BkZi1oYW5kLXRvb2wuY29tcG9uZW50Jztcbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIExvY2F0aW9uLCBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQZGZCb29rbWFya0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtYm9va21hcmsvcGRmLWJvb2ttYXJrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtY29udGV4dC1tZW51L3BkZi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50LXByb3BlcnRpZXMvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtb3ZlcmxheS9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZEb3dubG9hZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZGJhck9wdGlvbnNPbmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZGJhck9wdGlvbnNUaHJlZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmQtZW50aXJlLXdvcmQvcGRmLWZpbmQtZW50aXJlLXdvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRGdXp6aWx5Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyL3BkZi1maW5kLWZ1enppbHkvcGRmLWZpbmQtZnV6emlseS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC9wZGYtZmluZC1oaWdobGlnaHQtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1pbnB1dC1hcmVhL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLW1hdGNoLWNhc2UvcGRmLWZpbmQtbWF0Y2gtY2FzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZE5leHRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtbmV4dC9wZGYtZmluZC1uZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtcHJldmlvdXMvcGRmLWZpbmQtcHJldmlvdXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC9wZGYtZmluZC1yZXN1bHRzLWNvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaXJzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1maXJzdC1wYWdlL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZMYXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWxhc3QtcGFnZS9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZOZXh0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLW5leHQtcGFnZS9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZPcGVuRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb3Blbi1maWxlL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlBhZ2VOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdlLW51bWJlci9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlBhZ2luZ0FyZWFDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJlc2VudGF0aW9uLW1vZGUvcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wcmV2aW91cy1wYWdlL3BkZi1wcmV2aW91cy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQcmludENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZSb3RhdGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1yb3RhdGUtcGFnZS9wZGYtcm90YXRlLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC9wZGYtc2VhcmNoLWlucHV0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZab29tRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS1kcm9wZG93bi9wZGYtem9vbS1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbUluQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlpvb21PdXRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS1vdXQvcGRmLXpvb20tb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZab29tVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNlbGVjdFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNlbGVjdC10b29sL3BkZi1zZWxlY3QtdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0Nzc0NvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1jc3MvZHluYW1pYy1jc3MuY29tcG9uZW50JztcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLXRvb2xiYXIvcGRmLXNpZGViYXItdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUvcGRmLWxpZ2h0LXRoZW1lL3BkZi1saWdodC10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmT3JpZ2luYWxDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL3BkZi1vcmlnaW5hbC10aGVtZS9wZGYtb3JpZ2luYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkRhcmtUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUvcGRmLWRhcmstdGhlbWUvcGRmLWRhcmstdGhlbWUuY29tcG9uZW50JztcbmlmICghUHJvbWlzZVsnYWxsU2V0dGxlZCddKSB7XG4gIGlmICghIXdpbmRvd1snWm9uZSddICYmICF3aW5kb3dbJ19fem9uZV9zeW1ib2xfX1Byb21pc2UuYWxsU2V0dGxlZCddKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiUGxlYXNlIHVwZGF0ZSB6b25lLmpzIHRvIHZlcnNpb24gMC4xMC4zIG9yIGhpZ2hlci4gT3RoZXJ3aXNlLCB5b3UnbGwgcnVuIHRoZSBzbG93IEVDTUFTY3JpcHQgNSB2ZXJzaW9uIGV2ZW4gb24gbW9kZXJuIGJyb3dzZXIgdGhhdCBjYW4gcnVuIHRoZSBmYXN0IEVTTUFTY3JpcHQgMjAxNSB2ZXJzaW9uLlwiXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0tleUlnbm9yZWQoY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcbiAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcblxuICBjb25zdCBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5cycpO1xuICBjb25zdCBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnYWNjZXB0S2V5cycpO1xuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xuICAgIGlmIChpc0tleUluTGlzdChpZ25vcmVLZXlzLCBjbWQsICdXSEVFTCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCEhYWNjZXB0S2V5cyAmJiBhY2NlcHRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCAnV0hFRUwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoa2V5Y29kZSA9PT0gMTYgfHwga2V5Y29kZSA9PT0gMTcgfHwga2V5Y29kZSA9PT0gMTggfHwga2V5Y29kZSA9PT0gMjI0KSB7XG4gICAgLy8gaWdub3JlIHNvbGl0YXJ5IFNISUZULCBBTFQsIENNRCwgYW5kIENUUkwgYmVjYXVzZSB0aGV5IG9ubHkgbWFrZSBzZW5zZSBhcyB0d28ta2V5LWNvbWJpbmF0aW9uc1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIGNtZCBpcyBhIGJpdC1hcnJheTpcbiAgLy8gMSA9PSBDVFJMXG4gIC8vIDIgPT0gQUxUXG4gIC8vIDQgPT0gU0hJRlRcbiAgLy8gOCA9PSBNRVRBXG4gIGNvbnN0IGlnbm9yZUtleWJvYXJkID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5Ym9hcmQnKTtcbiAgaWYgKCEhaWdub3JlS2V5Ym9hcmQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghIWlnbm9yZUtleXMgJiYgaWdub3JlS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwga2V5Y29kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICFpc0tleUluTGlzdChhY2NlcHRLZXlzLCBjbWQsIGtleWNvZGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNLZXlJbkxpc3Qoc2V0dGluZ3M6IEFycmF5PHN0cmluZz4sIGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XG4gIGlmICghc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gc2V0dGluZ3Muc29tZSgoa2V5RGVmKSA9PiBpc0tleShrZXlEZWYsIGNtZCwga2V5Y29kZSkpO1xufVxuXG5mdW5jdGlvbiBpc0tleShrZXlEZWY6IHN0cmluZywgY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcbiAgbGV0IGNtZERlZiA9IDA7XG4gIGxldCBrZXkgPSAwO1xuICBrZXlEZWYgPSBrZXlEZWYudG9Mb3dlckNhc2UoKTtcbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLWJpdHdpc2VcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnY3RybCsnKSkge1xuICAgIGNtZERlZiB8PSAxO1xuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdjdHJsKycsICcnKTtcbiAgfVxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjbWQrJykpIHtcbiAgICBjbWREZWYgfD0gODtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnY21kKycsICcnKTtcbiAgfVxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdhbHQrJykpIHtcbiAgICBjbWREZWYgfD0gMjtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnYWx0KycsICcnKTtcbiAgfVxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdzaGlmdCsnKSkge1xuICAgIGNtZERlZiB8PSA0O1xuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdzaGlmdCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnbWV0YSsnKSkge1xuICAgIGNtZERlZiB8PSA4O1xuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdtZXRhKycsICcnKTtcbiAgfVxuXG4gIGlmIChrZXlEZWYgPT09ICd1cCcpIHtcbiAgICBrZXkgPSAzODtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdkb3duJykge1xuICAgIGtleSA9IDQwO1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJysnIHx8IGtleURlZiA9PT0gJ1wiK1wiJykge1xuICAgIGtleSA9IDE3MTtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICctJyB8fCBrZXlEZWYgPT09ICdcIi1cIicpIHtcbiAgICBrZXkgPSAxNzM7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZXNjJykge1xuICAgIGtleSA9IDI3O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VudGVyJykge1xuICAgIGtleSA9IDEzO1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3NwYWNlJykge1xuICAgIGtleSA9IDMyO1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Y0Jykge1xuICAgIGtleSA9IDExNTtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdiYWNrc3BhY2UnKSB7XG4gICAga2V5ID0gODtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdob21lJykge1xuICAgIGtleSA9IDM2O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VuZCcpIHtcbiAgICBrZXkgPSAzNTtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdsZWZ0Jykge1xuICAgIGtleSA9IDM3O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3JpZ2h0Jykge1xuICAgIGtleSA9IDM5O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2Vkb3duJykge1xuICAgIGtleSA9IDM0O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2V1cCcpIHtcbiAgICBrZXkgPSAzMztcbiAgfSBlbHNlIHtcbiAgICBrZXkgPSBrZXlEZWYudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICB9XG4gIGlmIChrZXljb2RlID09PSAnV0hFRUwnKSB7XG4gICAgcmV0dXJuIGtleURlZiA9PT0gJ3doZWVsJyAmJiBjbWQgPT09IGNtZERlZjtcbiAgfVxuICByZXR1cm4ga2V5ID09PSBrZXljb2RlICYmIGNtZCA9PT0gY21kRGVmO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgKHdpbmRvdyBhcyBhbnkpLmlzS2V5SWdub3JlZCA9IGlzS2V5SWdub3JlZDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEeW5hbWljQ3NzQ29tcG9uZW50LFxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50LFxuICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcbiAgICBQZGZDb250ZXh0TWVudUNvbXBvbmVudCxcbiAgICBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50LFxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxuICAgIFBkZlByaW50Q29tcG9uZW50LFxuICAgIFBkZkRvd25sb2FkQ29tcG9uZW50LFxuICAgIFBkZkJvb2ttYXJrQ29tcG9uZW50LFxuICAgIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50LFxuICAgIFBkZlBhZ2luZ0FyZWFDb21wb25lbnQsXG4gICAgUGRmRmluZGJhckNvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyQ29tcG9uZW50LFxuICAgIFBkZkhhbmRUb29sQ29tcG9uZW50LFxuICAgIFBkZlNlbGVjdFRvb2xDb21wb25lbnQsXG4gICAgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZEb2N1bWVudFByb3BlcnRpZXNPdmVybGF5Q29tcG9uZW50LFxuICAgIFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQsXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxuICAgIFBkZkZpbmROZXh0Q29tcG9uZW50LFxuICAgIFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck9wdGlvbnNPbmVDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCxcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxuICAgIFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50LFxuICAgIFBkZkZpbmRGdXp6aWx5Q29tcG9uZW50LFxuICAgIFBkZkZpbmRNdWx0aXBsZVNlYXJjaFRleHRzQ29tcG9uZW50LFxuICAgIFBkZkZpbmRJZ25vcmVBY2NlbnRzQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRCdXR0b25Db21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkxhc3RQYWdlQ29tcG9uZW50LFxuICAgIFBkZkZpcnN0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQsXG4gICAgUGRmUGFnZU51bWJlckNvbXBvbmVudCxcbiAgICBQZGZSb3RhdGVQYWdlQ29tcG9uZW50LFxuICAgIFBkZlpvb21JbkNvbXBvbmVudCxcbiAgICBQZGZab29tT3V0Q29tcG9uZW50LFxuICAgIFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZPcmlnaW5hbENvbXBvbmVudCxcbiAgICBQZGZEYXJrVGhlbWVDb21wb25lbnQsXG4gICAgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlLCBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBMb2NhdGlvbiwgeyBwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3kgfV0sXG4gIGV4cG9ydHM6IFtcbiAgICBQZGZab29tRHJvcGRvd25Db21wb25lbnQsXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcbiAgICBQZGZPcGVuRmlsZUNvbXBvbmVudCxcbiAgICBQZGZQcmludENvbXBvbmVudCxcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcbiAgICBQZGZCb29rbWFya0NvbXBvbmVudCxcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQsXG4gICAgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQsXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXG4gICAgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc1R3b0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50LFxuICAgIFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQsXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXG4gICAgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQsXG4gICAgUGRmRmluZElnbm9yZUFjY2VudHNDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck9wdGlvbnNUaHJlZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkhhbmRUb29sQ29tcG9uZW50LFxuICAgIFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQsXG4gICAgUGRmU2VsZWN0VG9vbENvbXBvbmVudCxcbiAgICBQZGZUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRCdXR0b25Db21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkxhc3RQYWdlQ29tcG9uZW50LFxuICAgIFBkZkZpcnN0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQsXG4gICAgUGRmUGFnZU51bWJlckNvbXBvbmVudCxcbiAgICBQZGZab29tSW5Db21wb25lbnQsXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=