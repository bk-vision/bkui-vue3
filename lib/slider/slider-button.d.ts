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
import { PropType } from 'vue';
import { PlacementEnum } from '../shared';
interface Params {
    vertical: boolean;
    showTip: boolean;
    disable: boolean;
    maxValue: number;
    minValue: number;
    step: number;
    precision: number;
    showButtonLabel: boolean;
    formatterButtonLabel: Function;
    showIntervalLabel: boolean;
    customContent: {
        [propName: string]: {
            label?: string;
            tip?: string;
        };
    };
    sliderSize: number;
    formatterTipLabel: Function;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    params: {
        type: PropType<Params>;
        default: () => {};
    };
}, {
    renderDom: () => JSX.Element;
    setPosition: (position: number) => void;
    tip: import("vue").ComputedRef<{
        content: any;
        placement: PlacementEnum;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "emitChange" | "resetSize")[], "update:modelValue" | "emitChange" | "resetSize", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    params: {
        type: PropType<Params>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onEmitChange?: (...args: any[]) => any;
    onResetSize?: (...args: any[]) => any;
}, {
    modelValue: number;
    params: Params;
}>;
export default _default;
