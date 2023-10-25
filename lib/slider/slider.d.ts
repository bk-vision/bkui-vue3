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
export declare const on: (element: Element | Window, event: string, handler: any) => void;
export declare const off: (element: Element | Window, event: string, handler: any) => void;
declare const _default: import("vue").DefineComponent<{
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
}, {
    renderDom: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>;
export default _default;
