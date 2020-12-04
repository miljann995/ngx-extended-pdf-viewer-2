/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-viewer-application.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IPDFViewerApplication() { }
if (false) {
    /** @type {?} */
    IPDFViewerApplication.prototype.appConfig;
    /** @type {?} */
    IPDFViewerApplication.prototype._boundEvents;
    /** @type {?} */
    IPDFViewerApplication.prototype.enablePrint;
    /** @type {?} */
    IPDFViewerApplication.prototype.eventBus;
    /** @type {?} */
    IPDFViewerApplication.prototype.isViewerEmbedded;
    /** @type {?} */
    IPDFViewerApplication.prototype.onError;
    /** @type {?} */
    IPDFViewerApplication.prototype.page;
    /** @type {?} */
    IPDFViewerApplication.prototype.pagesCount;
    /** @type {?} */
    IPDFViewerApplication.prototype.pdfDocument;
    /** @type {?} */
    IPDFViewerApplication.prototype.pdfLinkService;
    /** @type {?} */
    IPDFViewerApplication.prototype.pdfSidebar;
    /** @type {?} */
    IPDFViewerApplication.prototype.pdfViewer;
    /** @type {?} */
    IPDFViewerApplication.prototype.printKeyDownListener;
    /** @type {?} */
    IPDFViewerApplication.prototype.sidebarViewOnLoad;
    /** @type {?} */
    IPDFViewerApplication.prototype.spreadModeOnLoad;
    /** @type {?} */
    IPDFViewerApplication.prototype.secondaryToolbar;
    /** @type {?} */
    IPDFViewerApplication.prototype.toolbar;
    /** @type {?} */
    IPDFViewerApplication.prototype.viewer;
    /**
     * @return {?}
     */
    IPDFViewerApplication.prototype.cleanup = function () { };
    /**
     * @return {?}
     */
    IPDFViewerApplication.prototype.close = function () { };
    /**
     * @param {?} source
     * @param {?=} options
     * @return {?}
     */
    IPDFViewerApplication.prototype.open = function (source, options) { };
    /**
     * @return {?}
     */
    IPDFViewerApplication.prototype.unbindEvents = function () { };
    /**
     * @return {?}
     */
    IPDFViewerApplication.prototype.unbindWindowEvents = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci1hcHBsaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtaWxqYW5uOTk1L25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLDJDQXlCQzs7O0lBeEJDLDBDQUErQjs7SUFDL0IsNkNBQWtCOztJQUNsQiw0Q0FBcUI7O0lBQ3JCLHlDQUFvQjs7SUFDcEIsaURBQTBCOztJQUMxQix3Q0FBZ0M7O0lBQ2hDLHFDQUFhOztJQUNiLDJDQUFtQjs7SUFDbkIsNENBQWlCOztJQUNqQiwrQ0FBb0I7O0lBQ3BCLDJDQUFnQjs7SUFDaEIsMENBQXNCOztJQUN0QixxREFBNkU7O0lBQzdFLGtEQUF5Qjs7SUFDekIsaURBQTRCOztJQUM1QixpREFBc0I7O0lBQ3RCLHdDQUFhOztJQUNiLHVDQUF1Qjs7OztJQUV2QiwwREFBZ0I7Ozs7SUFDaEIsd0RBQWM7Ozs7OztJQUNkLHNFQUFxRjs7OztJQUNyRiwrREFBcUI7Ozs7SUFDckIscUVBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBDb25maWcgfSBmcm9tICcuL3BkZi12aWV3ZXItYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyBJUERGVmlld2VyIH0gZnJvbSAnLi9wZGYtdmlld2VyJztcbmltcG9ydCB7IElFdmVudEJ1cyB9IGZyb20gJy4vcGRmLWV2ZW50LWJ1cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBERlZpZXdlckFwcGxpY2F0aW9uIHtcbiAgYXBwQ29uZmlnOiBJUERGVmlld2VyQXBwQ29uZmlnO1xuICBfYm91bmRFdmVudHM6IGFueTtcbiAgZW5hYmxlUHJpbnQ6IGJvb2xlYW47XG4gIGV2ZW50QnVzOiBJRXZlbnRCdXM7XG4gIGlzVmlld2VyRW1iZWRkZWQ6IGJvb2xlYW47XG4gIG9uRXJyb3I6IChlcnJvcjogRXJyb3IpID0+IHZvaWQ7XG4gIHBhZ2U6IG51bWJlcjtcbiAgcGFnZXNDb3VudDogbnVtYmVyO1xuICBwZGZEb2N1bWVudDogYW55O1xuICBwZGZMaW5rU2VydmljZTogYW55O1xuICBwZGZTaWRlYmFyOiBhbnk7XG4gIHBkZlZpZXdlcjogSVBERlZpZXdlcjtcbiAgcHJpbnRLZXlEb3duTGlzdGVuZXI6IHVuZGVmaW5lZCB8ICgodGhpczogV2luZG93LCBldjogS2V5Ym9hcmRFdmVudCkgPT4gYW55KTtcbiAgc2lkZWJhclZpZXdPbkxvYWQ6IDAgfCAxO1xuICBzcHJlYWRNb2RlT25Mb2FkOiAwIHwgMSB8IDI7XG4gIHNlY29uZGFyeVRvb2xiYXI6IGFueTtcbiAgdG9vbGJhcjogYW55O1xuICB2aWV3ZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNsZWFudXAoKTogdm9pZDtcbiAgY2xvc2UoKTogdm9pZDtcbiAgb3Blbihzb3VyY2U6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwge3JhbmdlOiBhbnl9IHwgYW55LCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+O1xuICB1bmJpbmRFdmVudHMoKTogdm9pZDtcbiAgdW5iaW5kV2luZG93RXZlbnRzKCk6IHZvaWQ7XG59XG5cbiJdfQ==