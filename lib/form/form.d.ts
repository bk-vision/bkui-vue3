import type { ExtractPropTypes } from 'vue';
export declare const formProps: {
    formType: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    labelWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    labelPosition: import("vue-types").VueTypeDef<string>;
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
};
export declare type FormProps = Readonly<ExtractPropTypes<typeof formProps>>;
declare const _default: import("vue").DefineComponent<{
    formType: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    labelWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    labelPosition: import("vue-types").VueTypeDef<string>;
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
}, {
    handleSubmit: (event: Event) => void;
    validate: (fields?: string | Array<string>) => Promise<{
        [key: string]: any;
    }>;
    clearValidate: (fields?: string | Array<string>) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    formType: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    labelWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    labelPosition: import("vue-types").VueTypeDef<string>;
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
}>> & {
    onSubmit?: (...args: any[]) => any;
}, {
    labelWidth: string | number;
    rules: {
        [key: string]: any;
    };
    formType: string;
    model: {
        [key: string]: any;
    };
}>;
export default _default;
