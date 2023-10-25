import { ExtractPropTypes } from 'vue';
declare const inputContainerProps: {
    info: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
};
export declare type InputContainerProps = ExtractPropTypes<typeof inputContainerProps>;
declare const _default: import("vue").DefineComponent<{
    info: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "tab")[], "input" | "tab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    info: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
}>> & {
    onInput?: (...args: any[]) => any;
    onTab?: (...args: any[]) => any;
}, {
    info: {
        [key: string]: any;
    };
}>;
export default _default;
