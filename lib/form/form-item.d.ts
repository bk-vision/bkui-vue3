import type { ComputedRef, ExtractPropTypes } from 'vue';
declare const formItemProps: {
    label: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    labelWidth: import("vue-types").VueTypeDef<string | number>;
    labelPosition: import("vue-types").VueTypeDef<string>;
    property: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    required: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    email: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxlength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    rules: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    autoCheck: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    description: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorDisplayType: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
};
export declare type FormItemProps = Readonly<ExtractPropTypes<typeof formItemProps>>;
declare const _default: import("vue").DefineComponent<{
    label: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    labelWidth: import("vue-types").VueTypeDef<string | number>;
    labelPosition: import("vue-types").VueTypeDef<string>;
    property: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    required: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    email: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxlength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    rules: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    autoCheck: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    description: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorDisplayType: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
}, {
    isShowLabel: ComputedRef<boolean>;
    labelStyles: ComputedRef<any>;
    contentStyles: ComputedRef<{
        "margin-left": any;
    }>;
    isFormTypeVertical: ComputedRef<boolean>;
    validate: (trigger?: String) => Promise<boolean>;
    clearValidate: () => void;
    isError: import("vue").Ref<boolean>;
    errorMessage: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    label: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    labelWidth: import("vue-types").VueTypeDef<string | number>;
    labelPosition: import("vue-types").VueTypeDef<string>;
    property: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    required: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    email: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    maxlength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    rules: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    autoCheck: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    description: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorDisplayType: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
}>>, {
    label: string;
    required: boolean;
    email: boolean;
    property: string;
    max: number;
    min: number;
    maxlength: number;
    rules: unknown[];
    autoCheck: boolean;
    description: string;
    errorDisplayType: string;
}>;
export default _default;
