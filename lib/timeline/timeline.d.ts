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
declare const timelineProps: {
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    titleAble: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type TimelinePropTypes = ExtractPropTypes<typeof timelineProps>;
declare const _default: import("vue").DefineComponent<{
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    titleAble: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, {
    defaultTimelines: import("vue").Ref<any[]>;
    titleSelect: (item: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    titleAble: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    onSelect?: (...args: any[]) => any;
}, {
    list: unknown[];
    extCls: string;
    titleAble: boolean;
}>;
export default _default;
