import { PropType } from 'vue';
export declare const menuProps: {
    activeKey: StringConstructor;
    collapse: BooleanConstructor;
    openedKeys: {
        type: PropType<string[]>;
    };
    mode: {
        type: PropType<"vertical">;
        default: string;
    };
    uniqueOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    activeKey: StringConstructor;
    collapse: BooleanConstructor;
    openedKeys: {
        type: PropType<string[]>;
    };
    mode: {
        type: PropType<"vertical">;
        default: string;
    };
    uniqueOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:activeKey" | "update:openKeys" | "openChange")[], "click" | "update:activeKey" | "update:openKeys" | "openChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeKey: StringConstructor;
    collapse: BooleanConstructor;
    openedKeys: {
        type: PropType<string[]>;
    };
    mode: {
        type: PropType<"vertical">;
        default: string;
    };
    uniqueOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    "onUpdate:activeKey"?: (...args: any[]) => any;
    "onUpdate:openKeys"?: (...args: any[]) => any;
    onOpenChange?: (...args: any[]) => any;
}, {
    mode: "vertical";
    collapse: boolean;
    uniqueOpen: boolean;
}>;
export default _default;
