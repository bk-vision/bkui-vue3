import { PropType } from 'vue-types/dist/types';
import { ISelected } from './type';
declare const _default: import("vue").DefineComponent<{
    selected: {
        type: PropType<ISelected[]>;
        default: () => any[];
    };
    tagTheme: import("vue-types/dist/types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    placeholder: import("vue-types/dist/types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    filterable: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowCreate: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    modelValue: import("vue-types/dist/types").VueTypeValidableDef<any>;
    collapseTags: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {
    select: import("./type").ISelectContext;
    overflowTagIndex: import("vue").Ref<number>;
    value: any;
    inputRef: import("vue").Ref<HTMLElement>;
    handleRemoveTag: (val: string) => void;
    focus: () => void;
    handleInput: (e: any) => void;
    handleKeydown: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("keydown" | "update:modelValue" | "remove" | "enter")[], "keydown" | "update:modelValue" | "remove" | "enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selected: {
        type: PropType<ISelected[]>;
        default: () => any[];
    };
    tagTheme: import("vue-types/dist/types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    placeholder: import("vue-types/dist/types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    filterable: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowCreate: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    modelValue: import("vue-types/dist/types").VueTypeValidableDef<any>;
    collapseTags: import("vue-types/dist/types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onKeydown?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onEnter?: (...args: any[]) => any;
    onRemove?: (...args: any[]) => any;
}, {
    tagTheme: "success" | "info" | "warning" | "danger";
    disabled: boolean;
    placeholder: string;
    selected: ISelected[];
    filterable: boolean;
    allowCreate: boolean;
    collapseTags: boolean;
}>;
export default _default;
