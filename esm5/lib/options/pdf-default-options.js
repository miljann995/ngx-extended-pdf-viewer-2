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
export var pdfjsVersion = '2.6.416';
/** @type {?} */
export var pdfjsBleedingEdgeVersion = '2.7.225';
/**
 * @param {?} folder
 * @return {?}
 */
export function getVersionSuffix(folder) {
    if (folder && folder.includes('bleeding-edge')) {
        return pdfjsBleedingEdgeVersion;
    }
    return pdfjsVersion;
}
/** @type {?} */
export var pdfDefaultOptions = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRlZmF1bHQtb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtaWxqYW5uOTk1L25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxPQUFPLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQUssUUFBUSxFQUFBLENBQUMsQ0FBQyxZQUFZOztJQUN4SCxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDOztJQUMvQyxRQUFRLEdBQUcsT0FBTyxjQUFjLEtBQUssV0FBVyxJQUFJLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLFdBQVc7O0FBRXRHLE1BQU0sS0FBSyxZQUFZLEdBQUcsU0FBUzs7QUFDbkMsTUFBTSxLQUFLLHdCQUF3QixHQUFHLFNBQVM7Ozs7O0FBRS9DLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUFjO0lBQzdDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7UUFDOUMsT0FBTyx3QkFBd0IsQ0FBQztLQUNqQztJQUNELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7O0FBRUQsTUFBTSxLQUFLLGlCQUFpQixHQUFHO0lBQzdCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsVUFBVSxFQUFFLEVBQUU7SUFDZCxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIscUJBQXFCLEVBQUUsS0FBSztJQUM1QixXQUFXLEVBQUUsS0FBSztJQUNsQixxQkFBcUIsRUFBRSxLQUFLO0lBQzVCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0Msa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGtCQUFrQixFQUFFLFdBQVc7SUFDL0IsZUFBZSxFQUFFLFFBQVE7SUFDekIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixRQUFRLEVBQUUsUUFBUTtJQUNsQixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNyQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsVUFBVSxFQUFFLElBQUk7SUFDaEIsT0FBTzs7O0lBQUUsY0FBTSxPQUFBLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsU0FBUyxFQUFqRCxDQUFpRCxDQUFBO0lBQ2hFLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsc0JBQXNCLEVBQUUsS0FBSztJQUM3QixlQUFlLEVBQUUsS0FBSztJQUN0QixZQUFZLEVBQUUsS0FBSztJQUNuQixhQUFhLEVBQUUsS0FBSztJQUNwQixlQUFlLEVBQUUsSUFBSTtJQUNyQixZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLE1BQU0sRUFBRSxLQUFLO0lBQ2Isb0JBQW9CLEVBQUUsSUFBSTtJQUMxQixTQUFTLEVBQUUsQ0FBQztJQUNaLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFNBQVM7OztJQUFFO1FBQ1QsT0FBQSxPQUFPLElBQUksTUFBTSxJQUFJLFFBQVE7WUFDM0IsQ0FBQyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsY0FBYyxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVM7WUFDdkgsQ0FBQyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsY0FBYyxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUs7SUFGckgsQ0FFcUgsQ0FBQTtDQUN4SDtBQUVELElBQUksQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFO0lBQ25DLGlCQUFpQixHQUFHLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztDQUNyRDtLQUFNO0lBQ0wsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0NBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2lzSUUxMSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiAhISg8YW55PndpbmRvdykuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoPGFueT5kb2N1bWVudCkuZG9jdW1lbnRNb2RlO1xuY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbmNvbnN0IG5lZWRzRVM1ID0gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgUHJvbWlzZVsnYWxsU2V0dGxlZCddID09PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGxldCBwZGZqc1ZlcnNpb24gPSAnMi42LjQxNic7XG5leHBvcnQgbGV0IHBkZmpzQmxlZWRpbmdFZGdlVmVyc2lvbiA9ICcyLjcuMjI1JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb25TdWZmaXgoZm9sZGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoZm9sZGVyICYmIGZvbGRlci5pbmNsdWRlcygnYmxlZWRpbmctZWRnZScpKSB7XG4gICAgcmV0dXJuIHBkZmpzQmxlZWRpbmdFZGdlVmVyc2lvbjtcbiAgfVxuICByZXR1cm4gcGRmanNWZXJzaW9uO1xufVxuXG5leHBvcnQgbGV0IHBkZkRlZmF1bHRPcHRpb25zID0ge1xuICBjdXJzb3JUb29sT25Mb2FkOiAwLFxuICBkZWZhdWx0VXJsOiAnJyxcbiAgZGVmYXVsdFpvb21WYWx1ZTogJycsXG4gIGRpc2FibGVIaXN0b3J5OiBmYWxzZSxcbiAgZGlzYWJsZVBhZ2VMYWJlbHM6IGZhbHNlLFxuICBlbmFibGVQcmludEF1dG9Sb3RhdGU6IGZhbHNlLFxuICBlbmFibGVXZWJHTDogZmFsc2UsXG4gIGV2ZW50QnVzRGlzcGF0Y2hUb0RPTTogZmFsc2UsXG4gIGV4dGVybmFsTGlua1JlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3cnLFxuICBleHRlcm5hbExpbmtUYXJnZXQ6IDAsXG4gIGhpc3RvcnlVcGRhdGVVcmw6IGZhbHNlLFxuICBpbWFnZVJlc291cmNlc1BhdGg6ICcuL2ltYWdlcy8nLFxuICBtYXhDYW52YXNQaXhlbHM6IDE2Nzc3MjE2LFxuICBwZGZCdWdFbmFibGVkOiBmYWxzZSxcbiAgcmVtb3ZlUGFnZUJvcmRlcnM6IGZhbHNlLFxuICByZW5kZXJlcjogJ2NhbnZhcycsXG4gIHJlbmRlckludGVyYWN0aXZlRm9ybXM6IHRydWUsXG4gIHNpZGViYXJWaWV3T25Mb2FkOiAtMSxcbiAgc2Nyb2xsTW9kZU9uTG9hZDogLTEsXG4gIHNwcmVhZE1vZGVPbkxvYWQ6IC0xLFxuICB0ZXh0TGF5ZXJNb2RlOiAxLFxuICB1c2VPbmx5Q3NzWm9vbTogZmFsc2UsXG4gIHZpZXdPbkxvYWQ6IDAsXG4gIGNNYXBQYWNrZWQ6IHRydWUsXG4gIGNNYXBVcmw6ICgpID0+ICcuLycgKyBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL2NtYXBzLycsXG4gIGRpc2FibGVBdXRvRmV0Y2g6IGZhbHNlLFxuICBkaXNhYmxlQ3JlYXRlT2JqZWN0VVJMOiBmYWxzZSxcbiAgZGlzYWJsZUZvbnRGYWNlOiBmYWxzZSxcbiAgZGlzYWJsZVJhbmdlOiBmYWxzZSxcbiAgZGlzYWJsZVN0cmVhbTogZmFsc2UsXG4gIGlzRXZhbFN1cHBvcnRlZDogdHJ1ZSxcbiAgbWF4SW1hZ2VTaXplOiAtMSxcbiAgcGRmQnVnOiBmYWxzZSxcbiAgcG9zdE1lc3NhZ2VUcmFuc2ZlcnM6IHRydWUsXG4gIHZlcmJvc2l0eTogMSxcbiAgd29ya2VyUG9ydDogbnVsbCxcbiAgYXNzZXRzRm9sZGVyOiAnYXNzZXRzJyxcbiAgd29ya2VyU3JjOiAoKSA9PlxuICAgIF9pc0lFMTEgfHwgaXNFZGdlIHx8IG5lZWRzRVM1XG4gICAgICA/ICcuLycgKyBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL3BkZi53b3JrZXItJyArIGdldFZlcnNpb25TdWZmaXgocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKSArICctZXM1LmpzJ1xuICAgICAgOiAnLi8nICsgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9wZGYud29ya2VyLScgKyBnZXRWZXJzaW9uU3VmZml4KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcikgKyAnLmpzJyxcbn07XG5cbmlmICgoPGFueT53aW5kb3cpLnBkZkRlZmF1bHRPcHRpb25zKSB7XG4gIHBkZkRlZmF1bHRPcHRpb25zID0gKDxhbnk+d2luZG93KS5wZGZEZWZhdWx0T3B0aW9ucztcbn0gZWxzZSB7XG4gICg8YW55PndpbmRvdykucGRmRGVmYXVsdE9wdGlvbnMgPSBwZGZEZWZhdWx0T3B0aW9ucztcbn1cbiJdfQ==