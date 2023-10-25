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
declare const BkConfigProvider: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{
            locale: {
                type: import("vue").PropType<{
                    lang: string;
                    steps: {
                        step1: string;
                        step2: string;
                        step3: string;
                    };
                    datePicker: {
                        selectDate: string;
                        selectTime: string;
                        clear: string;
                        ok: string;
                        weekdays: {
                            sun: string;
                            mon: string;
                            tue: string;
                            wed: string;
                            thu: string;
                            fri: string;
                            sat: string;
                        };
                        hour: string;
                        min: string;
                        sec: string;
                        toNow: string;
                    };
                    dialog: {
                        ok: string;
                        cancel: string;
                        prev: string;
                        next: string;
                    };
                    form: {
                        notBeEmpty: string;
                        incorrectFormat: string;
                        max: string;
                        min: string;
                        maxLen: string;
                        verifyError: string;
                    };
                    pagination: {
                        eachPage: string;
                        strip: string;
                        total: string;
                    };
                    process: {
                        step1: string;
                        step2: string;
                        step3: string;
                        step4: string;
                    };
                    searchSelect: {
                        pleaseSelect: string;
                        loading: string;
                        filterQueryMustHasValue: string;
                        ok: string;
                        cancel: string;
                        or: string;
                        and: string;
                    };
                    select: {
                        noData: string;
                        noMatchedData: string;
                        loading: string;
                        pleaseSelect: string;
                        enterKeywords: string;
                        all: string;
                    };
                    table: {
                        emptyText: string;
                        confirm: string;
                        reset: string;
                        setting: {
                            title: string;
                            fields: {
                                title: string;
                                subtitle: (max: number) => string;
                                selectAll: string;
                            };
                            lineHeight: {
                                title: string;
                                small: string;
                                medium: string;
                                large: string;
                            };
                            options: {
                                ok: string;
                                cancel: string;
                            };
                        };
                    };
                    transfer: {
                        sourceList: string;
                        targetList: string;
                        removeAll: string;
                        selectAll: string;
                        noData: string;
                        noSelected: string;
                        search: string;
                    };
                    upload: {
                        uploadSuccess: string;
                        uploadFailed: string;
                        drapFileOr: string;
                        clickUpload: string;
                        uploadLabel: string;
                    };
                    input: {
                        placeholder: string;
                    };
                    tagInput: {
                        placeholder: string;
                    };
                }>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            locale: {
                type: import("vue").PropType<{
                    lang: string;
                    steps: {
                        step1: string;
                        step2: string;
                        step3: string;
                    };
                    datePicker: {
                        selectDate: string;
                        selectTime: string;
                        clear: string;
                        ok: string;
                        weekdays: {
                            sun: string;
                            mon: string;
                            tue: string;
                            wed: string;
                            thu: string;
                            fri: string;
                            sat: string;
                        };
                        hour: string;
                        min: string;
                        sec: string;
                        toNow: string;
                    };
                    dialog: {
                        ok: string;
                        cancel: string;
                        prev: string;
                        next: string;
                    };
                    form: {
                        notBeEmpty: string;
                        incorrectFormat: string;
                        max: string;
                        min: string;
                        maxLen: string;
                        verifyError: string;
                    };
                    pagination: {
                        eachPage: string;
                        strip: string;
                        total: string;
                    };
                    process: {
                        step1: string;
                        step2: string;
                        step3: string;
                        step4: string;
                    };
                    searchSelect: {
                        pleaseSelect: string;
                        loading: string;
                        filterQueryMustHasValue: string;
                        ok: string;
                        cancel: string;
                        or: string;
                        and: string;
                    };
                    select: {
                        noData: string;
                        noMatchedData: string;
                        loading: string;
                        pleaseSelect: string;
                        enterKeywords: string;
                        all: string;
                    };
                    table: {
                        emptyText: string;
                        confirm: string;
                        reset: string;
                        setting: {
                            title: string;
                            fields: {
                                title: string;
                                subtitle: (max: number) => string;
                                selectAll: string;
                            };
                            lineHeight: {
                                title: string;
                                small: string;
                                medium: string;
                                large: string;
                            };
                            options: {
                                ok: string;
                                cancel: string;
                            };
                        };
                    };
                    transfer: {
                        sourceList: string;
                        targetList: string;
                        removeAll: string;
                        selectAll: string;
                        noData: string;
                        noSelected: string;
                        search: string;
                    };
                    upload: {
                        uploadSuccess: string;
                        uploadFailed: string;
                        drapFileOr: string;
                        clickUpload: string;
                        uploadLabel: string;
                    };
                    input: {
                        placeholder: string;
                    };
                    tagInput: {
                        placeholder: string;
                    };
                }>;
            };
        }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & {
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
        locale: {
            type: import("vue").PropType<{
                lang: string;
                steps: {
                    step1: string;
                    step2: string;
                    step3: string;
                };
                datePicker: {
                    selectDate: string;
                    selectTime: string;
                    clear: string;
                    ok: string;
                    weekdays: {
                        sun: string;
                        mon: string;
                        tue: string;
                        wed: string;
                        thu: string;
                        fri: string;
                        sat: string;
                    };
                    hour: string;
                    min: string;
                    sec: string;
                    toNow: string;
                };
                dialog: {
                    ok: string;
                    cancel: string;
                    prev: string;
                    next: string;
                };
                form: {
                    notBeEmpty: string;
                    incorrectFormat: string;
                    max: string;
                    min: string;
                    maxLen: string;
                    verifyError: string;
                };
                pagination: {
                    eachPage: string;
                    strip: string;
                    total: string;
                };
                process: {
                    step1: string;
                    step2: string;
                    step3: string;
                    step4: string;
                };
                searchSelect: {
                    pleaseSelect: string;
                    loading: string;
                    filterQueryMustHasValue: string;
                    ok: string;
                    cancel: string;
                    or: string;
                    and: string;
                };
                select: {
                    noData: string;
                    noMatchedData: string;
                    loading: string;
                    pleaseSelect: string;
                    enterKeywords: string;
                    all: string;
                };
                table: {
                    emptyText: string;
                    confirm: string;
                    reset: string;
                    setting: {
                        title: string;
                        fields: {
                            title: string;
                            subtitle: (max: number) => string;
                            selectAll: string;
                        };
                        lineHeight: {
                            title: string;
                            small: string;
                            medium: string;
                            large: string;
                        };
                        options: {
                            ok: string;
                            cancel: string;
                        };
                    };
                };
                transfer: {
                    sourceList: string;
                    targetList: string;
                    removeAll: string;
                    selectAll: string;
                    noData: string;
                    noSelected: string;
                    search: string;
                };
                upload: {
                    uploadSuccess: string;
                    uploadFailed: string;
                    drapFileOr: string;
                    clickUpload: string;
                    uploadLabel: string;
                };
                input: {
                    placeholder: string;
                };
                tagInput: {
                    placeholder: string;
                };
            }>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    locale: {
        type: import("vue").PropType<{
            lang: string;
            steps: {
                step1: string;
                step2: string;
                step3: string;
            };
            datePicker: {
                selectDate: string;
                selectTime: string;
                clear: string;
                ok: string;
                weekdays: {
                    sun: string;
                    mon: string;
                    tue: string;
                    wed: string;
                    thu: string;
                    fri: string;
                    sat: string;
                };
                hour: string;
                min: string;
                sec: string;
                toNow: string;
            };
            dialog: {
                ok: string;
                cancel: string;
                prev: string;
                next: string;
            };
            form: {
                notBeEmpty: string;
                incorrectFormat: string;
                max: string;
                min: string;
                maxLen: string;
                verifyError: string;
            };
            pagination: {
                eachPage: string;
                strip: string;
                total: string;
            };
            process: {
                step1: string;
                step2: string;
                step3: string;
                step4: string;
            };
            searchSelect: {
                pleaseSelect: string;
                loading: string;
                filterQueryMustHasValue: string;
                ok: string;
                cancel: string;
                or: string;
                and: string;
            };
            select: {
                noData: string;
                noMatchedData: string;
                loading: string;
                pleaseSelect: string;
                enterKeywords: string;
                all: string;
            };
            table: {
                emptyText: string;
                confirm: string;
                reset: string;
                setting: {
                    title: string;
                    fields: {
                        title: string;
                        subtitle: (max: number) => string;
                        selectAll: string;
                    };
                    lineHeight: {
                        title: string;
                        small: string;
                        medium: string;
                        large: string;
                    };
                    options: {
                        ok: string;
                        cancel: string;
                    };
                };
            };
            transfer: {
                sourceList: string;
                targetList: string;
                removeAll: string;
                selectAll: string;
                noData: string;
                noSelected: string;
                search: string;
            };
            upload: {
                uploadSuccess: string;
                uploadFailed: string;
                drapFileOr: string;
                clickUpload: string;
                uploadLabel: string;
            };
            input: {
                placeholder: string;
            };
            tagInput: {
                placeholder: string;
            };
        }>;
    };
}>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkConfigProvider;
export { useLocale, rootProviderKey, provideGlobalConfig, defaultRootConfig, } from './config-provider';
export type { LocalReceiverCtx, LocaleInterface, } from './config-provider';
export * from './type';
