declare const _default: import("vue").DefineComponent<{
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    to: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }> & {
        default: string | (() => {
            [key: string]: any;
        });
    };
    replace: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    to: import("vue-types").VueTypeDef<string | {
        [key: string]: any;
    }> & {
        default: string | (() => {
            [key: string]: any;
        });
    };
    replace: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    replace: boolean;
    to: string | {
        [key: string]: any;
    };
    extCls: string;
}>;
export default _default;
