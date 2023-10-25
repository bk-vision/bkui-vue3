import { IOverflowTooltip } from '../props';
declare const _default: import("vue").DefineComponent<{
    column: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    row: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    parentSetting: import("vue-types").VueTypeDef<boolean | IOverflowTooltip> & {
        default: boolean | (() => IOverflowTooltip);
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    column: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    row: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    parentSetting: import("vue-types").VueTypeDef<boolean | IOverflowTooltip> & {
        default: boolean | (() => IOverflowTooltip);
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
}>>, {
    title: string;
    column: any;
    row: any;
    observerResize: boolean;
    parentSetting: boolean | IOverflowTooltip;
}>;
export default _default;
