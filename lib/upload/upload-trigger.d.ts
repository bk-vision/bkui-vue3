import { PropType } from 'vue';
import { EThemes, UploadFile } from './upload.type';
declare const _default: import("vue").DefineComponent<{
    theme: {
        type: PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: EThemes) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
    };
    file: {
        type: PropType<UploadFile>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "remove")[], "change" | "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: EThemes) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
    };
    file: {
        type: PropType<UploadFile>;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    onRemove?: (...args: any[]) => any;
}, {
    disabled: boolean;
    theme: "button" | "picture" | "draggable";
    multiple: boolean;
}>;
export default _default;
