import { PropType } from 'vue';
export declare type BkNavigationType = 'top-bottom' | 'left-right';
declare const _default: import("vue").DefineComponent<{
    navWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hoverWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showSideNavTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    sideTitle: {
        type: StringConstructor;
        default: string;
    };
    headerTitle: {
        type: StringConstructor;
        default: string;
    };
    hoverLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    hoverEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    defaultOpen: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    navigationType: {
        type: PropType<BkNavigationType>;
        default: string;
        validator(v: BkNavigationType): boolean;
    };
    needMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    defaultHeaderTitle: import("vue").Ref<string>;
    nav: {
        click: boolean;
        hover: boolean;
        delay: boolean;
        timer: any;
        enterTimer: any;
    };
    onBeforeUnmount: (hook: () => any, target?: import("vue").ComponentInternalInstance) => false | Function;
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hover" | "toggle" | "leave" | "toggle-click")[], "hover" | "toggle" | "leave" | "toggle-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    navWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    hoverWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showSideNavTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    sideTitle: {
        type: StringConstructor;
        default: string;
    };
    headerTitle: {
        type: StringConstructor;
        default: string;
    };
    hoverLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    hoverEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    defaultOpen: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    navigationType: {
        type: PropType<BkNavigationType>;
        default: string;
        validator(v: BkNavigationType): boolean;
    };
    needMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onHover?: (...args: any[]) => any;
    onLeave?: (...args: any[]) => any;
    onToggle?: (...args: any[]) => any;
    "onToggle-click"?: (...args: any[]) => any;
}, {
    sideTitle: string;
    navigationType: BkNavigationType;
    navWidth: string | number;
    hoverWidth: string | number;
    showSideNavTitle: boolean;
    headerTitle: string;
    hoverLeaveDelay: number;
    hoverEnterDelay: number;
    defaultOpen: boolean;
    headHeight: string | number;
    needMenu: boolean;
}>;
export default _default;
