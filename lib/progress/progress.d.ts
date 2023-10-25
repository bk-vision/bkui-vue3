export declare type ValidatorFunction<T> = (value: T) => boolean;
declare const _default: import("vue").DefineComponent<{
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
    } & {
        default: string;
    };
    percent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    width: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    strokeLinecap: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    textInside: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showText: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bgColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
    } & {
        default: number;
    };
    format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    titleStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
}, {}, unknown, {}, {
    /** 验证进度值 */
    validPercent(percent?: number): number;
    /** text 区域展示内容*/
    renderProcessInfo(): JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
    } & {
        default: string;
    };
    percent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    width: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    strokeWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    strokeLinecap: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    textInside: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showText: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bgColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
    } & {
        default: number;
    };
    format: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    titleStyle: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
}>>, {
    fixed: number;
    type: string;
    width: number;
    theme: "success" | "warning" | "danger" | "primary";
    color: string;
    extCls: string;
    strokeLinecap: string;
    strokeWidth: number;
    format: (...args: any[]) => any;
    percent: number;
    bgColor: string;
    titleStyle: {
        [key: string]: any;
    };
    showText: boolean;
    textInside: boolean;
}>;
export default _default;
