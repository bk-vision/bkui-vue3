import { SORT_OPTION } from '../const';
declare const _default: import("vue").DefineComponent<{
    column: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    defaultSort: import("vue-types").VueTypeDef<SORT_OPTION> & {
        default: SORT_OPTION;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    column: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    defaultSort: import("vue-types").VueTypeDef<SORT_OPTION> & {
        default: SORT_OPTION;
    };
}>> & {
    onChange?: (...args: any[]) => any;
}, {
    column: any;
    defaultSort: SORT_OPTION;
}>;
export default _default;
