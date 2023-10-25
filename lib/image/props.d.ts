import { PropType } from 'vue';
export declare const propsImage: {
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
};
export declare const propsImageViever: {
    urlList: {
        type: PropType<string[]>;
        default: () => any[];
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    initialIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    isShowTitle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    loops: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    maskClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
};
