import './image-viewer.less';
declare const _default: import("vue").DefineComponent<{
    src: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    fallback: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    fit: import("vue-types").VueTypeDef<"none" | "fill" | "contain" | "cover" | "scale-down"> & {
        default: "none" | "fill" | "contain" | "cover" | "scale-down";
    };
    lazy: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    urlList: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    isShowPreviewTitle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    maskClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "error" | "loaded")[], "change" | "close" | "error" | "loaded", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    fallback: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    fit: import("vue-types").VueTypeDef<"none" | "fill" | "contain" | "cover" | "scale-down"> & {
        default: "none" | "fill" | "contain" | "cover" | "scale-down";
    };
    lazy: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    urlList: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    isShowPreviewTitle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    maskClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onLoaded?: (...args: any[]) => any;
}, {
    zIndex: number;
    fit: "none" | "fill" | "contain" | "cover" | "scale-down";
    urlList: unknown[];
    maskClose: boolean;
    src: string;
    fallback: string;
    lazy: boolean;
    isShowPreviewTitle: boolean;
}>;
export default _default;
