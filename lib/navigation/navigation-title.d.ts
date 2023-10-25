import { PropType } from 'vue';
import { BkNavigationType } from './navigation';
declare const _default: import("vue").DefineComponent<{
    sideTitle: {
        type: StringConstructor;
        default: string;
    };
    navigationType: {
        type: PropType<BkNavigationType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sideTitle: {
        type: StringConstructor;
        default: string;
    };
    navigationType: {
        type: PropType<BkNavigationType>;
        default: string;
    };
}>>, {
    sideTitle: string;
    navigationType: BkNavigationType;
}>;
export default _default;
