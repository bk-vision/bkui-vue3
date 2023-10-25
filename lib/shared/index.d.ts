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
import { Plugin } from 'vue';
export * from './z-index-manager';
export * from './popover';
export * from './pop-manager';
export * from './mask-manager';
export * from './helper';
export * from './vue-types';
export * from './scrollbar-width';
export * from './utils';
export * from './token';
export * from './hooks/use-form';
export * from './hooks/use-form-item';
export * from './dom';
export declare function classes(dynamicCls: object, constCls?: string): string;
export declare const EMPTY_OBJ: any;
export declare const noop: () => void;
export declare const renderEmptyVNode: () => any;
export declare const isEmptyObj: (target: object) => boolean;
export interface OriginComponent {
    name: string;
    install?: Plugin;
}
export declare const withInstall: <T extends OriginComponent>(component: T) => T & Plugin;
export declare const withInstallProps: <T extends OriginComponent, K extends Record<string, unknown>>(component: T, childComponents: K, isProps?: boolean) => T & Plugin & Readonly<K>;
/**
 * 解析当前组件ClassName，自动添加前缀
 * @param clsName 当前ClassName
 * @param prefix 前缀，默认为bk
 * @returns prefix-clsName
 */
export declare function resolveClassName(clsName: string, prefix?: string): string;
/**
 * 函数防抖
 * @param {*} fn 执行的函数
 * @param {*} delay 延时时间
 * @param {*} immediate 是否立即执行
 */
export declare function debounce(delay: number, fn: Function, immediate?: boolean): {
    (this: any): any;
    cancel(): void;
};
/**
 * 过滤（去除）对象中的某个属性
 * @param data 需要处理的对象
 * @param filter 过滤关键字
 * @returns object 去除属性之后的对象
 */
export declare function filterProperty(data: object, filter: string[]): any;
export declare function arrayEqual(arr1?: Array<string | number | string[]>, arr2?: Array<string | number | string[]>): any;
