import type { ExtractPropTypes } from 'vue';
export declare const paginationProps: {
    modelValue: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    } & {
        required: true;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    limitList: import("vue-types").VueTypeDef<number[]> & {
        default: () => number[];
    };
    showLimit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    location: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    align: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    small: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showTotalCount: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    prevText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    nextText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    layout: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
};
export declare type PaginationProps = Readonly<ExtractPropTypes<typeof paginationProps>>;
declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    } & {
        required: true;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    limitList: import("vue-types").VueTypeDef<number[]> & {
        default: () => number[];
    };
    showLimit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    location: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    align: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    small: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showTotalCount: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    prevText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    nextText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    layout: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
}, {
    totalPageNum: import("vue").Ref<number>;
    renderTotal: ({ isFirst, isLast }: {
        isFirst: any;
        isLast: any;
    }) => JSX.Element;
    renderList: ({ isFirst, isLast }: {
        isFirst: any;
        isLast: any;
    }) => JSX.Element;
    renderLimit: ({ isFirst, isLast }: {
        isFirst: any;
        isLast: any;
    }) => JSX.Element;
    renderSmallList: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "update:limit" | "limitChange")[], "change" | "update:modelValue" | "update:limit" | "limitChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    count: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    } & {
        required: true;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    limitList: import("vue-types").VueTypeDef<number[]> & {
        default: () => number[];
    };
    showLimit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    location: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    align: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    small: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showTotalCount: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    prevText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    nextText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    layout: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:limit"?: (...args: any[]) => any;
    onLimitChange?: (...args: any[]) => any;
}, {
    small: boolean;
    align: string;
    type: string;
    disabled: boolean;
    layout: string[];
    location: string;
    count: number;
    modelValue: number;
    beforeChange: (...args: any[]) => any;
    prevText: string;
    nextText: string;
    limit: number;
    limitList: number[];
    showLimit: boolean;
    showTotalCount: boolean;
}>;
export default _default;
