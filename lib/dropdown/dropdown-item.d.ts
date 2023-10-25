declare const _default: import("vue").DefineComponent<{
    /** 外部设置的 class name */
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, {
    wrapperCLasses: import("vue").ComputedRef<any[]>;
    handleClick: (evt: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 外部设置的 class name */
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    extCls: string;
}>;
export default _default;
