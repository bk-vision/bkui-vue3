declare const _default: import("vue").DefineComponent<{
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    message: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    theme: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "primary"> & {
        default: "error" | "success" | "warning" | "primary";
    };
    delay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    dismissable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    offsetY: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    spacing: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    onClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getContainer: import("vue-types").VueTypeDef<HTMLElement>;
}, {
    classNames: import("vue").ComputedRef<string[]>;
    styles: import("vue").ComputedRef<{
        top: string;
        zIndex: number;
        position: "absolute" | "fixed";
    }>;
    visible: import("vue").Ref<boolean>;
    close: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "destroy"[], "destroy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    message: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    theme: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "primary"> & {
        default: "error" | "success" | "warning" | "primary";
    };
    delay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    dismissable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    offsetY: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    spacing: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    onClose: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    getContainer: import("vue-types").VueTypeDef<HTMLElement>;
}>> & {
    onDestroy?: (...args: any[]) => any;
}, {
    id: string;
    theme: "error" | "success" | "warning" | "primary";
    extCls: string;
    onClose: (...args: any[]) => any;
    delay: number;
    message: string;
    offsetY: number;
    spacing: number;
    dismissable: boolean;
}>;
export default _default;
