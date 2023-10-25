import { ExtractPropTypes } from 'vue';
declare const colorPickerProps: {
    colorObj: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
};
export declare type ColorPickerPropTypes = ExtractPropTypes<typeof colorPickerProps>;
declare const _default: import("vue").DefineComponent<{
    colorObj: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "tab")[], "change" | "tab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    colorObj: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        required: true;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    onTab?: (...args: any[]) => any;
}, {
    colorObj: {
        [key: string]: any;
    };
}>;
export default _default;
