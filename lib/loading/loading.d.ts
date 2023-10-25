import { ExtractPropTypes, PropType } from 'vue';
export declare enum BkLoadingMode {
    Default = "default",
    Spin = "spin"
}
export declare enum BkLoadingSize {
    Normal = "",
    Mini = "mini",
    Small = "small",
    Large = "large"
}
export declare function setDefaultIndicator(Indicator: any): void;
export declare const loadingTypes: {
    indicator: {
        type: FunctionConstructor;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    inline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    theme: {
        type: PropType<"success" | "warning" | "danger" | "primary" | "white">;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    size: {
        type: PropType<"" | "small" | "large" | "mini">;
        default: BkLoadingSize;
    };
    mode: {
        type: PropType<"default" | "spin">;
        default: string;
    };
    opacity: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
};
export declare type LoadingTypes = ExtractPropTypes<typeof loadingTypes>;
declare const _default: import("vue").DefineComponent<{
    indicator: {
        type: FunctionConstructor;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    inline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    theme: {
        type: PropType<"success" | "warning" | "danger" | "primary" | "white">;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    size: {
        type: PropType<"" | "small" | "large" | "mini">;
        default: BkLoadingSize;
    };
    mode: {
        type: PropType<"default" | "spin">;
        default: string;
    };
    opacity: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    indicator: {
        type: FunctionConstructor;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    inline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    theme: {
        type: PropType<"success" | "warning" | "danger" | "primary" | "white">;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    size: {
        type: PropType<"" | "small" | "large" | "mini">;
        default: BkLoadingSize;
    };
    mode: {
        type: PropType<"default" | "spin">;
        default: string;
    };
    opacity: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}>>, {
    title: string;
    zIndex: number;
    mode: "default" | "spin";
    color: string;
    size: "" | "small" | "large" | "mini";
    inline: boolean;
    opacity: number;
    loading: boolean;
}>;
export default _default;
