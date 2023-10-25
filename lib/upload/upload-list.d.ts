import { EThemes, UploadFile } from './upload.type';
declare const _default: import("vue").DefineComponent<{
    theme: {
        type: import("vue").PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: EThemes) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    files: {
        type: import("vue").PropType<UploadFile[]>;
        default: () => UploadFile[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("remove" | "retry")[], "remove" | "retry", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: import("vue").PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: EThemes) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    files: {
        type: import("vue").PropType<UploadFile[]>;
        default: () => UploadFile[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onRemove?: (...args: any[]) => any;
    onRetry?: (...args: any[]) => any;
}, {
    disabled: boolean;
    theme: "button" | "picture" | "draggable";
    multiple: boolean;
    files: UploadFile[];
}>;
export default _default;
