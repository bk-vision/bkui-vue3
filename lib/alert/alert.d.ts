declare const _default: import("vue").DefineComponent<{
    theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    closeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {
    state: {
        visible: boolean;
    };
    handleClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    size: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    closeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onClose?: (...args: any[]) => any;
}, {
    title: string;
    theme: "success" | "info" | "warning" | "danger";
    size: string;
    closable: boolean;
    closeText: string;
    showIcon: boolean;
}>;
export default _default;
