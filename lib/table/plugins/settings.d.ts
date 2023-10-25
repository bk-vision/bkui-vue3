import { Settings } from '../props';
declare const _default: import("vue").DefineComponent<{
    settings: import("vue-types").VueTypeDef<boolean | Settings> & {
        default: boolean | (() => Settings);
    };
    columns: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    rowHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}, () => "" | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    settings: import("vue-types").VueTypeDef<boolean | Settings> & {
        default: boolean | (() => Settings);
    };
    columns: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    rowHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}>> & {
    onChange?: (...args: any[]) => any;
}, {
    columns: unknown[];
    rowHeight: number;
    settings: boolean | Settings;
}>;
export default _default;
