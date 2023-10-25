import { CSSProperties, VNodeChild } from 'vue';
import { VueTypeDef } from 'vue-types';
declare const propTypesNS: {
    new (): {};
    defaults: Partial<import("vue-types/dist/types").VueTypesDefaults>;
    sensibleDefaults: boolean | Partial<import("vue-types/dist/types").VueTypesDefaults>;
    config: import("vue-types/dist/types").VueTypesConfig;
    readonly any: import("vue-types").VueTypeValidableDef<any>;
    readonly func: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    readonly bool: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    readonly string: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    readonly number: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    readonly array: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    readonly object: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    readonly integer: VueTypeDef<number> & {
        default: number;
    };
    readonly symbol: VueTypeDef<symbol>;
    readonly custom: typeof import("vue-types").custom;
    readonly oneOf: typeof import("vue-types").oneOf;
    readonly instanceOf: typeof import("vue-types").instanceOf;
    readonly oneOfType: typeof import("vue-types").oneOfType;
    readonly arrayOf: typeof import("vue-types").arrayOf;
    readonly objectOf: typeof import("vue-types").objectOf;
    readonly shape: typeof import("vue-types").shape;
    extend<T_3 extends {
        new (): {};
        defaults: Partial<import("vue-types/dist/types").VueTypesDefaults>;
        sensibleDefaults: boolean | Partial<import("vue-types/dist/types").VueTypesDefaults>;
        config: import("vue-types/dist/types").VueTypesConfig;
        readonly any: import("vue-types").VueTypeValidableDef<any>;
        readonly func: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        readonly bool: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        readonly string: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        readonly number: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        readonly array: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        readonly object: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        readonly integer: VueTypeDef<number> & {
            default: number;
        };
        readonly symbol: VueTypeDef<symbol>;
        readonly custom: typeof import("vue-types").custom;
        readonly oneOf: typeof import("vue-types").oneOf;
        readonly instanceOf: typeof import("vue-types").instanceOf;
        readonly oneOfType: typeof import("vue-types").oneOfType;
        readonly arrayOf: typeof import("vue-types").arrayOf;
        readonly objectOf: typeof import("vue-types").objectOf;
        readonly shape: typeof import("vue-types").shape;
        extend<T extends unknown>(props: import("vue-types/dist/types").ExtendProps<any> | import("vue-types/dist/types").ExtendProps<any>[]): T;
        utils: {
            validate<T_1, U>(value: T_1, type: U): boolean;
            toType<T_2 = unknown>(name: string, obj: import("vue-types/dist/types").PropOptions<T_2, T_2>, validable?: boolean): VueTypeDef<T_2> | import("vue-types").VueTypeValidableDef<T_2>;
        };
    }>(props: import("vue-types/dist/types").ExtendProps<any> | import("vue-types/dist/types").ExtendProps<any>[]): T_3;
    utils: {
        validate<T_1_1, U_1>(value: T_1_1, type: U_1): boolean;
        toType<T_2_1 = unknown>(name: string, obj: import("vue-types/dist/types").PropOptions<T_2_1, T_2_1>, validable?: boolean): VueTypeDef<T_2_1> | import("vue-types").VueTypeValidableDef<T_2_1>;
    };
};
export declare type VueNode = VNodeChild | JSX.Element;
export declare type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;
export declare function stringEnum<T extends string>(o: Array<T>): {
    [K in T]: K;
};
declare type UnionToIntersection<T> = (T extends any ? (v: T) => void : never) extends (v: infer V) => void ? V : never;
declare type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never;
declare type Push<T extends any[], V> = [...T, V];
export declare type UnionToArrayType<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = N extends true ? [] : Push<UnionToArrayType<Exclude<T, L>>, L>;
export declare enum SizeEnum {
    SMALL = "small",
    LARGE = "large",
    DEFAULT = "default"
}
export declare enum Placements {
    Top = "top",
    Left = "left",
    Right = "right",
    Bottom = "bottom"
}
export declare enum RenderDirectiveEnum {
    IF = "if",
    SHOW = "show"
}
export declare function renderDirectiveType(): VueTypeDef<"if" | "show">;
export declare enum AlignEnum {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}
export declare function alignType(): VueTypeDef<"right" | "left" | "center"> & {
    default: "right" | "left" | "center";
};
export declare enum ThemeEnum {
    PRIMARY = "primary",
    WARNING = "warning",
    SUCCESS = "success",
    DANGER = "danger"
}
/** 弹层出现位置选项 */
export declare enum PlacementEnum {
    AUTO = "auto",
    AUTO_START = "auto-start",
    AUTO_END = "auto-end",
    TOP = "top",
    RIGHT = "right",
    BOTTOM = "bottom",
    LEFT = "left",
    TOP_START = "top-start",
    TOP_END = "top-end",
    BOTTOM_START = "bottom-start",
    BOTTOM_END = "bottom-end",
    RIGHT_START = "right-start",
    RIGHT_END = "right-end",
    LEFT_START = "left-start",
    LEFT_END = "left-end"
}
export declare function placementType(): VueTypeDef<"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"> & {
    default: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
};
/** 弹层触发选项  */
export declare enum TriggerEnum {
    HOVER = "hover",
    CLICK = "click",
    MANUAL = "manual"
}
export declare function triggerType(): VueTypeDef<"hover" | "click" | "manual"> & {
    default: "hover" | "click" | "manual";
};
/** 内容渲染类型：目前是在popover内容渲染时使用 */
export declare enum RenderType {
    AUTO = "auto",
    SHOWN = "shown"
}
export declare function renderType(): VueTypeDef<"auto" | "shown"> & {
    default: "auto" | "shown";
};
export declare enum DialogTypeEnum {
    SHOW = "show",
    OPERATION = "operation",
    CONFIRM = "confirm",
    PROCESS = "process"
}
export declare function dialogTypeUnion(): VueTypeDef<"show" | "operation" | "confirm" | "process">;
export declare enum DirectionEnum {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
export declare function directionType(): VueTypeDef<"horizontal" | "vertical"> & {
    default: "horizontal" | "vertical";
};
export declare enum LineStyleEnum {
    DASHED = "dashed",
    SOLID = "solid"
}
export declare function lineStyleType(): VueTypeDef<"dashed" | "solid"> & {
    default: "dashed" | "solid";
};
export declare enum TagThemeEnum {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    DANGER = "danger"
}
export declare function TagThemeType(): VueTypeDef<"success" | "info" | "warning" | "danger"> & {
    default: "success" | "info" | "warning" | "danger";
};
export declare enum InputBehaviorEnum {
    SIMPLICITY = "simplicity",
    NORMAL = "normal"
}
export declare function InputBehaviorType(): VueTypeDef<"simplicity" | "normal"> & {
    default: "simplicity" | "normal";
};
export declare class PropTypes extends propTypesNS {
    static size(): VueTypeDef<"small" | "default" | "large">;
    static theme(): VueTypeDef<"success" | "warning" | "danger" | "primary">;
    static placement(): VueTypeDef<"top" | "bottom" | "right" | "left">;
    static style(): VueTypeDef<CSSProperties>;
    static position(positions?: string[]): VueTypeDef<string>;
}
export {};
