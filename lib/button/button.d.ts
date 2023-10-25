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
import { ExtractPropTypes, PropType } from 'vue';
declare type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>;
declare const buttonProps: {
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    hoverTheme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    size: {
        type: PropType<"" | "small" | "large">;
        default: "";
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    iconRight: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loadingMode: {
        type: PropType<"default" | "spin">;
        default: string;
    };
    outline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    selected: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    nativeType: {
        type: IButtonNativeType;
        default: string;
    };
};
export declare type ButtonPropTypes = ExtractPropTypes<typeof buttonProps>;
declare const _default: import("vue").DefineComponent<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    hoverTheme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    size: {
        type: PropType<"" | "small" | "large">;
        default: "";
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    iconRight: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loadingMode: {
        type: PropType<"default" | "spin">;
        default: string;
    };
    outline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    selected: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    nativeType: {
        type: IButtonNativeType;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "mouseover")[], "click" | "mouseover", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    hoverTheme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    size: {
        type: PropType<"" | "small" | "large">;
        default: "";
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    iconRight: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loadingMode: {
        type: PropType<"default" | "spin">;
        default: string;
    };
    outline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    selected: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    nativeType: {
        type: IButtonNativeType;
        default: string;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    onMouseover?: (...args: any[]) => any;
}, {
    title: string;
    text: boolean;
    disabled: boolean;
    size: "" | "small" | "large";
    icon: string;
    outline: boolean;
    loading: boolean;
    iconRight: string;
    loadingMode: "default" | "spin";
    selected: boolean;
    nativeType: "button" | "reset" | "submit";
}>;
export default _default;
