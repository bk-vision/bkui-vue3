import { PopoverPropTypes } from './props';
declare const _default: (props: PopoverPropTypes, ctx: any, { refReference, refContent, refArrow, refRoot }: {
    refReference: any;
    refContent: any;
    refArrow: any;
    refRoot: any;
}) => {
    showPopover: () => void;
    hidePopover: () => void;
    resolveTriggerEvents: () => any;
    updatePopover: (virtualEl?: any, props?: {}) => void;
    triggerPopover: () => void;
    resolvePopElements: () => {
        elReference: any;
        elContent: any;
        elArrow: any;
        root: any;
    };
    isElementFullScreen: () => boolean;
    resolveTargetElement: (target: any) => any;
    createPopInstance: () => void;
    updateFullscreenTarget: (val?: HTMLElement) => void;
    getFullscreenRoot: (selector: any) => any;
    stopHide: () => void;
    localIsShow: import("vue").Ref<boolean>;
    cleanup: any;
};
/**
 * 解析popover相关配置
 */
export default _default;
