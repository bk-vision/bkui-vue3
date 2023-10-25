declare const _default: import("vue").DefineComponent<{
    /** trigger = manual时候控制显隐藏  */
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /** 弹层出现位置 */
    placement: import("vue-types").VueTypeDef<"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"> & {
        default: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    };
    /** 触发方式 */
    trigger: import("vue-types").VueTypeDef<"hover" | "click" | "manual"> & {
        default: "hover" | "click" | "manual";
    };
    /** 是否禁用 */
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /** popover属性 */
    popoverOptions: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    /** 外部设置的 class name */
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, {
    afterShow: () => void;
    afterHidden: () => void;
    popoverRef: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "show" | "showChange")[], "show" | "hide" | "showChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** trigger = manual时候控制显隐藏  */
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /** 弹层出现位置 */
    placement: import("vue-types").VueTypeDef<"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"> & {
        default: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    };
    /** 触发方式 */
    trigger: import("vue-types").VueTypeDef<"hover" | "click" | "manual"> & {
        default: "hover" | "click" | "manual";
    };
    /** 是否禁用 */
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /** popover属性 */
    popoverOptions: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    /** 外部设置的 class name */
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    onShow?: (...args: any[]) => any;
    onHide?: (...args: any[]) => any;
    onShowChange?: (...args: any[]) => any;
}, {
    placement: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    trigger: "hover" | "click" | "manual";
    isShow: boolean;
    disabled: boolean;
    extCls: string;
    popoverOptions: {
        [key: string]: any;
    };
}>;
export default _default;
