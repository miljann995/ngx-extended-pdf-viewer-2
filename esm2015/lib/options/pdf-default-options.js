/**
 * @fileoverview added by tsickle
 * Generated from: lib/options/pdf-default-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const _isIE11 = typeof window === 'undefined' ? false : !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
/** @type {?} */
const isEdge = /Edge\/\d./i.test(navigator.userAgent);
/** @type {?} */
const needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
/** @type {?} */
export let pdfjsVersion = '2.6.416';
/** @type {?} */
export let pdfjsBleedingEdgeVersion = '2.7.225';
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
export let pdfDefaultOptions = {
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
    () => './' + pdfDefaultOptions.assetsFolder + '/cmaps/'),
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
    () => _isIE11 || isEdge || needsES5
        ? './' + pdfDefaultOptions.assetsFolder + '/pdf.worker-' + getVersionSuffix(pdfDefaultOptions.assetsFolder) + '-es5.js'
        : './' + pdfDefaultOptions.assetsFolder + '/pdf.worker-' + getVersionSuffix(pdfDefaultOptions.assetsFolder) + '.js'),
};
if (((/** @type {?} */ (window))).pdfDefaultOptions) {
    pdfDefaultOptions = ((/** @type {?} */ (window))).pdfDefaultOptions;
}
else {
    ((/** @type {?} */ (window))).pdfDefaultOptions = pdfDefaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRlZmF1bHQtb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtaWxqYW5uOTk1L25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7TUFBTSxPQUFPLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQUssUUFBUSxFQUFBLENBQUMsQ0FBQyxZQUFZOztNQUN4SCxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDOztNQUMvQyxRQUFRLEdBQUcsT0FBTyxjQUFjLEtBQUssV0FBVyxJQUFJLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLFdBQVc7O0FBRXRHLE1BQU0sS0FBSyxZQUFZLEdBQUcsU0FBUzs7QUFDbkMsTUFBTSxLQUFLLHdCQUF3QixHQUFHLFNBQVM7Ozs7O0FBRS9DLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUFjO0lBQzdDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7UUFDOUMsT0FBTyx3QkFBd0IsQ0FBQztLQUNqQztJQUNELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7O0FBRUQsTUFBTSxLQUFLLGlCQUFpQixHQUFHO0lBQzdCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsVUFBVSxFQUFFLEVBQUU7SUFDZCxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIscUJBQXFCLEVBQUUsS0FBSztJQUM1QixXQUFXLEVBQUUsS0FBSztJQUNsQixxQkFBcUIsRUFBRSxLQUFLO0lBQzVCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0Msa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGtCQUFrQixFQUFFLFdBQVc7SUFDL0IsZUFBZSxFQUFFLFFBQVE7SUFDekIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixRQUFRLEVBQUUsUUFBUTtJQUNsQixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNyQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsVUFBVSxFQUFFLElBQUk7SUFDaEIsT0FBTzs7O0lBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFlBQVksR0FBRyxTQUFTLENBQUE7SUFDaEUsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixzQkFBc0IsRUFBRSxLQUFLO0lBQzdCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDaEIsTUFBTSxFQUFFLEtBQUs7SUFDYixvQkFBb0IsRUFBRSxJQUFJO0lBQzFCLFNBQVMsRUFBRSxDQUFDO0lBQ1osVUFBVSxFQUFFLElBQUk7SUFDaEIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsU0FBUzs7O0lBQUUsR0FBRyxFQUFFLENBQ2QsT0FBTyxJQUFJLE1BQU0sSUFBSSxRQUFRO1FBQzNCLENBQUMsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxHQUFHLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsR0FBRyxTQUFTO1FBQ3ZILENBQUMsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxHQUFHLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUE7Q0FDeEg7QUFFRCxJQUFJLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtJQUNuQyxpQkFBaUIsR0FBRyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsaUJBQWlCLENBQUM7Q0FDckQ7S0FBTTtJQUNMLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztDQUNyRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9pc0lFMTEgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogISEoPGFueT53aW5kb3cpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKDxhbnk+ZG9jdW1lbnQpLmRvY3VtZW50TW9kZTtcbmNvbnN0IGlzRWRnZSA9IC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5jb25zdCBuZWVkc0VTNSA9IHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFByb21pc2VbJ2FsbFNldHRsZWQnXSA9PT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBsZXQgcGRmanNWZXJzaW9uID0gJzIuNi40MTYnO1xuZXhwb3J0IGxldCBwZGZqc0JsZWVkaW5nRWRnZVZlcnNpb24gPSAnMi43LjIyNSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZXJzaW9uU3VmZml4KGZvbGRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGZvbGRlciAmJiBmb2xkZXIuaW5jbHVkZXMoJ2JsZWVkaW5nLWVkZ2UnKSkge1xuICAgIHJldHVybiBwZGZqc0JsZWVkaW5nRWRnZVZlcnNpb247XG4gIH1cbiAgcmV0dXJuIHBkZmpzVmVyc2lvbjtcbn1cblxuZXhwb3J0IGxldCBwZGZEZWZhdWx0T3B0aW9ucyA9IHtcbiAgY3Vyc29yVG9vbE9uTG9hZDogMCxcbiAgZGVmYXVsdFVybDogJycsXG4gIGRlZmF1bHRab29tVmFsdWU6ICcnLFxuICBkaXNhYmxlSGlzdG9yeTogZmFsc2UsXG4gIGRpc2FibGVQYWdlTGFiZWxzOiBmYWxzZSxcbiAgZW5hYmxlUHJpbnRBdXRvUm90YXRlOiBmYWxzZSxcbiAgZW5hYmxlV2ViR0w6IGZhbHNlLFxuICBldmVudEJ1c0Rpc3BhdGNoVG9ET006IGZhbHNlLFxuICBleHRlcm5hbExpbmtSZWw6ICdub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93JyxcbiAgZXh0ZXJuYWxMaW5rVGFyZ2V0OiAwLFxuICBoaXN0b3J5VXBkYXRlVXJsOiBmYWxzZSxcbiAgaW1hZ2VSZXNvdXJjZXNQYXRoOiAnLi9pbWFnZXMvJyxcbiAgbWF4Q2FudmFzUGl4ZWxzOiAxNjc3NzIxNixcbiAgcGRmQnVnRW5hYmxlZDogZmFsc2UsXG4gIHJlbW92ZVBhZ2VCb3JkZXJzOiBmYWxzZSxcbiAgcmVuZGVyZXI6ICdjYW52YXMnLFxuICByZW5kZXJJbnRlcmFjdGl2ZUZvcm1zOiB0cnVlLFxuICBzaWRlYmFyVmlld09uTG9hZDogLTEsXG4gIHNjcm9sbE1vZGVPbkxvYWQ6IC0xLFxuICBzcHJlYWRNb2RlT25Mb2FkOiAtMSxcbiAgdGV4dExheWVyTW9kZTogMSxcbiAgdXNlT25seUNzc1pvb206IGZhbHNlLFxuICB2aWV3T25Mb2FkOiAwLFxuICBjTWFwUGFja2VkOiB0cnVlLFxuICBjTWFwVXJsOiAoKSA9PiAnLi8nICsgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9jbWFwcy8nLFxuICBkaXNhYmxlQXV0b0ZldGNoOiBmYWxzZSxcbiAgZGlzYWJsZUNyZWF0ZU9iamVjdFVSTDogZmFsc2UsXG4gIGRpc2FibGVGb250RmFjZTogZmFsc2UsXG4gIGRpc2FibGVSYW5nZTogZmFsc2UsXG4gIGRpc2FibGVTdHJlYW06IGZhbHNlLFxuICBpc0V2YWxTdXBwb3J0ZWQ6IHRydWUsXG4gIG1heEltYWdlU2l6ZTogLTEsXG4gIHBkZkJ1ZzogZmFsc2UsXG4gIHBvc3RNZXNzYWdlVHJhbnNmZXJzOiB0cnVlLFxuICB2ZXJib3NpdHk6IDEsXG4gIHdvcmtlclBvcnQ6IG51bGwsXG4gIGFzc2V0c0ZvbGRlcjogJ2Fzc2V0cycsXG4gIHdvcmtlclNyYzogKCkgPT5cbiAgICBfaXNJRTExIHx8IGlzRWRnZSB8fCBuZWVkc0VTNVxuICAgICAgPyAnLi8nICsgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9wZGYud29ya2VyLScgKyBnZXRWZXJzaW9uU3VmZml4KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcikgKyAnLWVzNS5qcydcbiAgICAgIDogJy4vJyArIHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvcGRmLndvcmtlci0nICsgZ2V0VmVyc2lvblN1ZmZpeChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpICsgJy5qcycsXG59O1xuXG5pZiAoKDxhbnk+d2luZG93KS5wZGZEZWZhdWx0T3B0aW9ucykge1xuICBwZGZEZWZhdWx0T3B0aW9ucyA9ICg8YW55PndpbmRvdykucGRmRGVmYXVsdE9wdGlvbnM7XG59IGVsc2Uge1xuICAoPGFueT53aW5kb3cpLnBkZkRlZmF1bHRPcHRpb25zID0gcGRmRGVmYXVsdE9wdGlvbnM7XG59XG4iXX0=