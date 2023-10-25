declare const _default: import("vue").DefineComponent<{
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    message: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    theme: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "primary"> & {
        default: "error" | "success" | "warning" | "primary";
    };
    position: import("vue-types").VueTypeDef<string> & {
        default: string;
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
    offsetX: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
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
}, {
    classNames: import("vue").ComputedRef<string[]>;
    styles: import("vue").ComputedRef<{
        [x: string]: string | number;
        zIndex: number;
    }>;
    visible: import("vue").Ref<boolean>;
    renderMessage: import("vue").ComputedRef<any>;
    handleClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "destroy"[], "destroy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    message: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    theme: import("vue-types").VueTypeDef<"error" | "success" | "warning" | "primary"> & {
        default: "error" | "success" | "warning" | "primary";
    };
    position: import("vue-types").VueTypeDef<string> & {
        default: string;
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
    offsetX: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
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
}>> & {
    onDestroy?: (...args: any[]) => any;
}, {
    title: string;
    id: string;
    theme: "error" | "success" | "warning" | "primary";
    position: string;
    extCls: string;
    onClose: (...args: any[]) => any;
    delay: number;
    message: any;
    offsetX: number;
    offsetY: number;
    spacing: number;
    dismissable: boolean;
}>;
export default _default;
