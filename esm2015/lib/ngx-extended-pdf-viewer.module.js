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
    const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
    /** @type {?} */
    const ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
    /** @type {?} */
    const acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
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
    const ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
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
    (keyDef) => isKey(keyDef, cmd, keycode)));
}
/**
 * @param {?} keyDef
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKey(keyDef, cmd, keycode) {
    /** @type {?} */
    let cmdDef = 0;
    /** @type {?} */
    let key = 0;
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
export class NgxExtendedPdfViewerModule {
    constructor() { }
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
NgxExtendedPdfViewerModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1pbGphbm45OTUvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7O0FBR3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDeEosT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDbEosT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scUdBQXFHLENBQUM7QUFDN0osT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seUdBQXlHLENBQUM7QUFDbkss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b0JBQzVCLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtvQkFDMUIsNEJBQTRCO29CQUM1QixxQ0FBcUM7b0JBQ3JDLDRCQUE0QjtvQkFDNUIsd0JBQXdCO29CQUN4QixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsc0NBQXNDO29CQUN0QyxzQ0FBc0M7b0JBQ3RDLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLG1DQUFtQztvQkFDbkMsNkJBQTZCO29CQUM3Qix3Q0FBd0M7b0JBQ3hDLDRCQUE0QjtvQkFDNUIsbUNBQW1DO29CQUNuQyxvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6QixrQ0FBa0M7b0JBQ2xDLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsNkJBQTZCO2lCQUM5QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGRmSGFuZFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWhhbmQtdG9vbC9wZGYtaGFuZC10b29sLmNvbXBvbmVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24tb3B0aW9ucyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGRmQm9va21hcmtDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWJvb2ttYXJrL3BkZi1ib29rbWFyay5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWNvbnRleHQtbWVudS9wZGYtY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZEb2N1bWVudFByb3BlcnRpZXNPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9kb2N1bWVudC1wcm9wZXJ0aWVzL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLW92ZXJsYXkvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRG93bmxvYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWRvd25sb2FkL3BkZi1kb3dubG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zT25lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zVHdvQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmQtYnV0dG9uL3BkZi1maW5kLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS13b3JkL3BkZi1maW5kLWVudGlyZS13b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kRnV6emlseUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1mdXp6aWx5L3BkZi1maW5kLWZ1enppbHkuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLWhpZ2hsaWdodC1hbGwvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZElnbm9yZUFjY2VudHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtaWdub3JlLWFjY2VudHMvcGRmLWZpbmQtaWdub3JlLWFjY2VudHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtaW5wdXQtYXJlYS9wZGYtZmluZC1pbnB1dC1hcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1tYXRjaC1jYXNlL3BkZi1maW5kLW1hdGNoLWNhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRNdWx0aXBsZVNlYXJjaFRleHRzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci9wZGYtZmluZC1lbnRpcmUtcGhyYXNlL3BkZi1maW5kLWVudGlyZS1waHJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmROZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLW5leHQvcGRmLWZpbmQtbmV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLXByZXZpb3VzL3BkZi1maW5kLXByZXZpb3VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyL3BkZi1maW5kLXJlc3VsdHMtY291bnQvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmlyc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtZmlyc3QtcGFnZS9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmTGFzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmTmV4dFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1uZXh0LXBhZ2UvcGRmLW5leHQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmT3BlbkZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLW9wZW4tZmlsZS9wZGYtb3Blbi1maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQYWdlTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnZS1udW1iZXIvcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQYWdpbmdBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByZXNlbnRhdGlvbi1tb2RlL3BkZi1wcmVzZW50YXRpb24tbW9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUHJpbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByaW50L3BkZi1wcmludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUm90YXRlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UvcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zaWRlYmFyL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWluL3BkZi16b29tLWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZab29tT3V0Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tb3V0L3BkZi16b29tLW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTZWxlY3RUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1zZWxlY3QtdG9vbC9wZGYtc2VsZWN0LXRvb2wuY29tcG9uZW50JztcbmltcG9ydCB7IER5bmFtaWNDc3NDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtY3NzL2R5bmFtaWMtY3NzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTaWRlYmFyVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci10b29sYmFyL3BkZi1zaWRlYmFyLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkxpZ2h0VGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL3BkZi1saWdodC10aGVtZS9wZGYtbGlnaHQtdGhlbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZk9yaWdpbmFsQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS9wZGYtb3JpZ2luYWwtdGhlbWUvcGRmLW9yaWdpbmFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZEYXJrVGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL3BkZi1kYXJrLXRoZW1lL3BkZi1kYXJrLXRoZW1lLmNvbXBvbmVudCc7XG5pZiAoIVByb21pc2VbJ2FsbFNldHRsZWQnXSkge1xuICBpZiAoISF3aW5kb3dbJ1pvbmUnXSAmJiAhd2luZG93WydfX3pvbmVfc3ltYm9sX19Qcm9taXNlLmFsbFNldHRsZWQnXSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIlBsZWFzZSB1cGRhdGUgem9uZS5qcyB0byB2ZXJzaW9uIDAuMTAuMyBvciBoaWdoZXIuIE90aGVyd2lzZSwgeW91J2xsIHJ1biB0aGUgc2xvdyBFQ01BU2NyaXB0IDUgdmVyc2lvbiBldmVuIG9uIG1vZGVybiBicm93c2VyIHRoYXQgY2FuIHJ1biB0aGUgZmFzdCBFU01BU2NyaXB0IDIwMTUgdmVyc2lvbi5cIlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNLZXlJZ25vcmVkKGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XG4gIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG5cbiAgY29uc3QgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleXMnKTtcbiAgY29uc3QgYWNjZXB0S2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2FjY2VwdEtleXMnKTtcbiAgaWYgKGtleWNvZGUgPT09ICdXSEVFTCcpIHtcbiAgICBpZiAoaXNLZXlJbkxpc3QoaWdub3JlS2V5cywgY21kLCAnV0hFRUwnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gIWlzS2V5SW5MaXN0KGFjY2VwdEtleXMsIGNtZCwgJ1dIRUVMJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGtleWNvZGUgPT09IDE2IHx8IGtleWNvZGUgPT09IDE3IHx8IGtleWNvZGUgPT09IDE4IHx8IGtleWNvZGUgPT09IDIyNCkge1xuICAgIC8vIGlnbm9yZSBzb2xpdGFyeSBTSElGVCwgQUxULCBDTUQsIGFuZCBDVFJMIGJlY2F1c2UgdGhleSBvbmx5IG1ha2Ugc2Vuc2UgYXMgdHdvLWtleS1jb21iaW5hdGlvbnNcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBjbWQgaXMgYSBiaXQtYXJyYXk6XG4gIC8vIDEgPT0gQ1RSTFxuICAvLyAyID09IEFMVFxuICAvLyA0ID09IFNISUZUXG4gIC8vIDggPT0gTUVUQVxuICBjb25zdCBpZ25vcmVLZXlib2FyZCA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleWJvYXJkJyk7XG4gIGlmICghIWlnbm9yZUtleWJvYXJkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoISFpZ25vcmVLZXlzICYmIGlnbm9yZUtleXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpc0tleUluTGlzdChpZ25vcmVLZXlzLCBjbWQsIGtleWNvZGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCBrZXljb2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KHNldHRpbmdzOiBBcnJheTxzdHJpbmc+LCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xuICBpZiAoIXNldHRpbmdzKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHNldHRpbmdzLnNvbWUoKGtleURlZikgPT4gaXNLZXkoa2V5RGVmLCBjbWQsIGtleWNvZGUpKTtcbn1cblxuZnVuY3Rpb24gaXNLZXkoa2V5RGVmOiBzdHJpbmcsIGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XG4gIGxldCBjbWREZWYgPSAwO1xuICBsZXQga2V5ID0gMDtcbiAga2V5RGVmID0ga2V5RGVmLnRvTG93ZXJDYXNlKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlOiBuby1iaXR3aXNlXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2N0cmwrJykpIHtcbiAgICBjbWREZWYgfD0gMTtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnY3RybCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnY21kKycpKSB7XG4gICAgY21kRGVmIHw9IDg7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2NtZCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnYWx0KycpKSB7XG4gICAgY21kRGVmIHw9IDI7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2FsdCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnc2hpZnQrJykpIHtcbiAgICBjbWREZWYgfD0gNDtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnc2hpZnQrJywgJycpO1xuICB9XG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ21ldGErJykpIHtcbiAgICBjbWREZWYgfD0gODtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnbWV0YSsnLCAnJyk7XG4gIH1cblxuICBpZiAoa2V5RGVmID09PSAndXAnKSB7XG4gICAga2V5ID0gMzg7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZG93bicpIHtcbiAgICBrZXkgPSA0MDtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICcrJyB8fCBrZXlEZWYgPT09ICdcIitcIicpIHtcbiAgICBrZXkgPSAxNzE7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnLScgfHwga2V5RGVmID09PSAnXCItXCInKSB7XG4gICAga2V5ID0gMTczO1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VzYycpIHtcbiAgICBrZXkgPSAyNztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbnRlcicpIHtcbiAgICBrZXkgPSAxMztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdzcGFjZScpIHtcbiAgICBrZXkgPSAzMjtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdmNCcpIHtcbiAgICBrZXkgPSAxMTU7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnYmFja3NwYWNlJykge1xuICAgIGtleSA9IDg7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnaG9tZScpIHtcbiAgICBrZXkgPSAzNjtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbmQnKSB7XG4gICAga2V5ID0gMzU7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnbGVmdCcpIHtcbiAgICBrZXkgPSAzNztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdyaWdodCcpIHtcbiAgICBrZXkgPSAzOTtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdlZG93bicpIHtcbiAgICBrZXkgPSAzNDtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdldXAnKSB7XG4gICAga2V5ID0gMzM7XG4gIH0gZWxzZSB7XG4gICAga2V5ID0ga2V5RGVmLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgfVxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xuICAgIHJldHVybiBrZXlEZWYgPT09ICd3aGVlbCcgJiYgY21kID09PSBjbWREZWY7XG4gIH1cbiAgcmV0dXJuIGtleSA9PT0ga2V5Y29kZSAmJiBjbWQgPT09IGNtZERlZjtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICh3aW5kb3cgYXMgYW55KS5pc0tleUlnbm9yZWQgPSBpc0tleUlnbm9yZWQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHluYW1pY0Nzc0NvbXBvbmVudCxcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCxcbiAgICBQZGZab29tRHJvcGRvd25Db21wb25lbnQsXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcbiAgICBQZGZPcGVuRmlsZUNvbXBvbmVudCxcbiAgICBQZGZQcmludENvbXBvbmVudCxcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcbiAgICBQZGZCb29rbWFya0NvbXBvbmVudCxcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZIYW5kVG9vbENvbXBvbmVudCxcbiAgICBQZGZTZWxlY3RUb29sQ29tcG9uZW50LFxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheUNvbXBvbmVudCxcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kTmV4dENvbXBvbmVudCxcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zVHdvQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zT25lQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXG4gICAgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCxcbiAgICBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCxcbiAgICBQZGZGaW5kRnV6emlseUNvbXBvbmVudCxcbiAgICBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc1RocmVlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZGaW5kQnV0dG9uQ29tcG9uZW50LFxuICAgIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZMYXN0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXG4gICAgUGRmTmV4dFBhZ2VDb21wb25lbnQsXG4gICAgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50LFxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcbiAgICBQZGZab29tSW5Db21wb25lbnQsXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcbiAgICBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmT3JpZ2luYWxDb21wb25lbnQsXG4gICAgUGRmRGFya1RoZW1lQ29tcG9uZW50LFxuICAgIFBkZkxpZ2h0VGhlbWVDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW05neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSwgUERGTm90aWZpY2F0aW9uU2VydmljZSwgTG9jYXRpb24sIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IFBhdGhMb2NhdGlvblN0cmF0ZWd5IH1dLFxuICBleHBvcnRzOiBbXG4gICAgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50LFxuICAgIFBkZkNvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQsXG4gICAgUGRmT3BlbkZpbGVDb21wb25lbnQsXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXG4gICAgUGRmRG93bmxvYWRDb21wb25lbnQsXG4gICAgUGRmQm9va21hcmtDb21wb25lbnQsXG4gICAgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyQ29tcG9uZW50LFxuICAgIFBkZlNpZGViYXJDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZEb2N1bWVudFByb3BlcnRpZXNPdmVybGF5Q29tcG9uZW50LFxuICAgIFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQsXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxuICAgIFBkZkZpbmROZXh0Q29tcG9uZW50LFxuICAgIFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck9wdGlvbnNUd29Db250YWluZXJDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck9wdGlvbnNPbmVDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCxcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxuICAgIFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50LFxuICAgIFBkZkZpbmRNdWx0aXBsZVNlYXJjaFRleHRzQ29tcG9uZW50LFxuICAgIFBkZkZpbmRJZ25vcmVBY2NlbnRzQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZIYW5kVG9vbENvbXBvbmVudCxcbiAgICBQZGZSb3RhdGVQYWdlQ29tcG9uZW50LFxuICAgIFBkZlNlbGVjdFRvb2xDb21wb25lbnQsXG4gICAgUGRmVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZGaW5kQnV0dG9uQ29tcG9uZW50LFxuICAgIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZMYXN0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXG4gICAgUGRmTmV4dFBhZ2VDb21wb25lbnQsXG4gICAgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50LFxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxuICAgIFBkZlpvb21PdXRDb21wb25lbnQsXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19