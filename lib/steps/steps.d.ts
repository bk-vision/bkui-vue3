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
import { ExtractPropTypes } from 'vue';
declare const stepsProps: {
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    curStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    controllable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    status: import("vue-types").VueTypeDef<"" | "error" | "loading"> & {
        default: "" | "error" | "loading";
    };
    lineType: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
        default: "dashed" | "solid";
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    steps: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
};
export declare type StepsPropTypes = ExtractPropTypes<typeof stepsProps>;
declare const _default: import("vue").DefineComponent<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    curStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    controllable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    status: import("vue-types").VueTypeDef<"" | "error" | "loading"> & {
        default: "" | "error" | "loading";
    };
    lineType: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
        default: "dashed" | "solid";
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    steps: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}, {
    defaultSteps: import("vue").Ref<any[]>;
    jumpTo: (index: any) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:curStep")[], "click" | "update:curStep", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    curStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    controllable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    status: import("vue-types").VueTypeDef<"" | "error" | "loading"> & {
        default: "" | "error" | "loading";
    };
    lineType: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
        default: "dashed" | "solid";
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    steps: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    "onUpdate:curStep"?: (...args: any[]) => any;
}, {
    text: boolean;
    direction: "horizontal" | "vertical";
    lineType: "dashed" | "solid";
    steps: unknown[];
    theme: "success" | "warning" | "danger" | "primary";
    extCls: string;
    beforeChange: (...args: any[]) => any;
    controllable: boolean;
    status: "" | "error" | "loading";
    curStep: number;
}>;
export default _default;
