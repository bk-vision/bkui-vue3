declare const _default: import("vue").DefineComponent<{
    theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<"" | "stroke" | "filled"> & {
        default: "" | "stroke" | "filled";
    };
    checkable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    radius: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}, {
    wrapperCls: import("vue").ComputedRef<string>;
    wrapperStyle: import("vue").ComputedRef<{
        borderRadius: string;
    }>;
    handleClose: (e: Event) => void;
    handleClick: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close")[], "change" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<"" | "stroke" | "filled"> & {
        default: "" | "stroke" | "filled";
    };
    checkable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    radius: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
}, {
    type: "" | "stroke" | "filled";
    theme: "success" | "info" | "warning" | "danger";
    extCls: string;
    closable: boolean;
    radius: string;
    checked: boolean;
    checkable: boolean;
}>;
export default _default;
