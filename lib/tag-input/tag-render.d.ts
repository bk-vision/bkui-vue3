import { PropType } from 'vue';
import { IOptions } from '../directives/src/tooltips';
declare const _default: import("vue").DefineComponent<{
    node: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tpl: {
        type: FunctionConstructor;
    };
    hasTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagOverflowTips: {
        type: PropType<Partial<IOptions>>;
        default: () => {};
    };
}, {
    overflowTips: import("vue").ComputedRef<{
        boundary: string;
        theme: string;
        distance: number;
        content: any;
        disabled: boolean;
    }>;
    tagRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    node: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tpl: {
        type: FunctionConstructor;
    };
    hasTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagOverflowTips: {
        type: PropType<Partial<IOptions>>;
        default: () => {};
    };
}>>, {
    displayKey: string;
    tagOverflowTips: {};
    node: {
        [key: string]: any;
    };
    hasTips: boolean;
}>;
export default _default;
