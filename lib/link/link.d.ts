declare const _default: import("vue").DefineComponent<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "default" | "primary"> & {
        default: "success" | "warning" | "danger" | "default" | "primary";
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    underline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    target: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}, {
    handleClick: (event: Event) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "default" | "primary"> & {
        default: "success" | "warning" | "danger" | "default" | "primary";
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    underline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    target: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    target: string;
    disabled: boolean;
    theme: "success" | "warning" | "danger" | "default" | "primary";
    underline: boolean;
    href: string;
}>;
export default _default;
