/**
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
declare const Slider: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            vertical: boolean;
            height: string;
            range: boolean;
            step: number;
            extCls: string;
            showInput: boolean;
            customContent: Record<string, any>;
            disable: boolean;
            showTip: boolean;
            maxValue: number;
            minValue: number;
            showInterval: boolean;
            showIntervalLabel: boolean;
            showButtonLabel: boolean;
            showBetweenLabel: boolean;
            formatterLabel: Function;
            formatterButtonLabel: Function;
            formatterTipLabel: Function;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeDef<number | unknown[]>;
            extCls: {
                type: StringConstructor;
                default: string;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            height: {
                type: StringConstructor;
                default: string;
            };
            disable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showTip: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxValue: {
                type: NumberConstructor[];
                default: number;
            };
            minValue: {
                type: NumberConstructor[];
                default: number;
            };
            step: {
                type: NumberConstructor[];
                default: number;
            };
            range: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInterval: {
                type: BooleanConstructor;
                default: boolean;
            };
            showIntervalLabel: {
                type: BooleanConstructor;
                default: boolean;
            };
            showButtonLabel: {
                type: BooleanConstructor;
                default: boolean;
            };
            showBetweenLabel: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInput: {
                type: BooleanConstructor;
                default: boolean;
            };
            customContent: {
                type: ObjectConstructor;
                default: any;
            };
            formatterLabel: {
                type: FunctionConstructor;
                default: (value: number) => number;
            };
            formatterButtonLabel: {
                type: FunctionConstructor;
                default: (value: number) => number;
            };
            formatterTipLabel: {
                type: FunctionConstructor;
                default: (value: number) => number;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "vertical" | "height" | "range" | "step" | "extCls" | "showInput" | "customContent" | "disable" | "showTip" | "maxValue" | "minValue" | "showInterval" | "showIntervalLabel" | "showButtonLabel" | "showBetweenLabel" | "formatterLabel" | "formatterButtonLabel" | "formatterTipLabel">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeDef<number | unknown[]>;
            extCls: {
                type: StringConstructor;
                default: string;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            height: {
                type: StringConstructor;
                default: string;
            };
            disable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showTip: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxValue: {
                type: NumberConstructor[];
                default: number;
            };
            minValue: {
                type: NumberConstructor[];
                default: number;
            };
            step: {
                type: NumberConstructor[];
                default: number;
            };
            range: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInterval: {
                type: BooleanConstructor;
                default: boolean;
            };
            showIntervalLabel: {
                type: BooleanConstructor;
                default: boolean;
            };
            showButtonLabel: {
                type: BooleanConstructor;
                default: boolean;
            };
            showBetweenLabel: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInput: {
                type: BooleanConstructor;
                default: boolean;
            };
            customContent: {
                type: ObjectConstructor;
                default: any;
            };
            formatterLabel: {
                type: FunctionConstructor;
                default: (value: number) => number;
            };
            formatterButtonLabel: {
                type: FunctionConstructor;
                default: (value: number) => number;
            };
            formatterTipLabel: {
                type: FunctionConstructor;
                default: (value: number) => number;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            renderDom: () => JSX.Element;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
            vertical: boolean;
            height: string;
            range: boolean;
            step: number;
            extCls: string;
            showInput: boolean;
            customContent: Record<string, any>;
            disable: boolean;
            showTip: boolean;
            maxValue: number;
            minValue: number;
            showInterval: boolean;
            showIntervalLabel: boolean;
            showButtonLabel: boolean;
            showBetweenLabel: boolean;
            formatterLabel: Function;
            formatterButtonLabel: Function;
            formatterTipLabel: Function;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: import("vue-types").VueTypeDef<number | unknown[]>;
        extCls: {
            type: StringConstructor;
            default: string;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        height: {
            type: StringConstructor;
            default: string;
        };
        disable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showTip: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxValue: {
            type: NumberConstructor[];
            default: number;
        };
        minValue: {
            type: NumberConstructor[];
            default: number;
        };
        step: {
            type: NumberConstructor[];
            default: number;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        showInterval: {
            type: BooleanConstructor;
            default: boolean;
        };
        showIntervalLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        showButtonLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        showBetweenLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        showInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        customContent: {
            type: ObjectConstructor;
            default: any;
        };
        formatterLabel: {
            type: FunctionConstructor;
            default: (value: number) => number;
        };
        formatterButtonLabel: {
            type: FunctionConstructor;
            default: (value: number) => number;
        };
        formatterTipLabel: {
            type: FunctionConstructor;
            default: (value: number) => number;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        renderDom: () => JSX.Element;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeDef<number | unknown[]>;
    extCls: {
        type: StringConstructor;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTip: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxValue: {
        type: NumberConstructor[];
        default: number;
    };
    minValue: {
        type: NumberConstructor[];
        default: number;
    };
    step: {
        type: NumberConstructor[];
        default: number;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInterval: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIntervalLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    showButtonLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBetweenLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    customContent: {
        type: ObjectConstructor;
        default: any;
    };
    formatterLabel: {
        type: FunctionConstructor;
        default: (value: number) => number;
    };
    formatterButtonLabel: {
        type: FunctionConstructor;
        default: (value: number) => number;
    };
    formatterTipLabel: {
        type: FunctionConstructor;
        default: (value: number) => number;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    renderDom: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
    vertical: boolean;
    height: string;
    range: boolean;
    step: number;
    extCls: string;
    showInput: boolean;
    customContent: Record<string, any>;
    disable: boolean;
    showTip: boolean;
    maxValue: number;
    minValue: number;
    showInterval: boolean;
    showIntervalLabel: boolean;
    showButtonLabel: boolean;
    showBetweenLabel: boolean;
    formatterLabel: Function;
    formatterButtonLabel: Function;
    formatterTipLabel: Function;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default Slider;
