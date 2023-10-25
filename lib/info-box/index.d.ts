declare const BkInfoBox: ((config: Partial<import("./info-box").ModalFuncProps>) => {
    show: () => void;
    hide: () => void;
    update: (config: Partial<import("./info-box").ModalFuncProps>) => void;
    destroy: () => void;
}) & import("@vue/runtime-core").Plugin;
export default BkInfoBox;
