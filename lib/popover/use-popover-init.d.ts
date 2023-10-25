declare const _default: (props: any, ctx: any, { refReference, refContent, refArrow, refRoot }: {
    refReference: any;
    refContent: any;
    refArrow: any;
    refRoot: any;
}) => {
    onMountedFn: () => void;
    onUnmountedFn: () => void;
    handleClickOutside: (_e: MouseEvent) => void;
    beforeInstanceUnmount: () => void;
    updateBoundary: () => void;
    initPopInstance: () => void;
    updatePopover: (virtualEl?: any, props?: {}) => void;
    showPopover: () => void;
    hidePopover: () => void;
    showFn: () => void;
    hideFn: () => void;
    stopHide: () => void;
    isFullscreen: import("vue").Ref<boolean>;
    boundary: import("vue").Ref<any>;
    localIsShow: import("vue").Ref<boolean>;
};
export default _default;
