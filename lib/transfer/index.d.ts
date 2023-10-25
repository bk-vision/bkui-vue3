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
declare const Transfer: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string[];
            extCls: string;
            displayKey: string;
            searchPlaceholder: string;
            sortable: boolean;
            settingKey: string;
            sortKey: string;
            showOverflowTips: boolean;
            searchable: boolean;
            sourceList: any[];
            targetList: any[];
            emptyContent: string[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            title: import("vue-types").VueTypeDef<string[]> & {
                default: () => string[];
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            settingKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            displayKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            sortKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            showOverflowTips: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            searchable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            sortable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            sourceList: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            targetList: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            emptyContent: import("vue-types").VueTypeDef<string[]> & {
                default: () => string[];
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:targetList"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "extCls" | "displayKey" | "searchPlaceholder" | "sortable" | "settingKey" | "sortKey" | "showOverflowTips" | "searchable" | "sourceList" | "targetList" | "emptyContent">;
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
        $emit: (event: "change" | "update:targetList", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            title: import("vue-types").VueTypeDef<string[]> & {
                default: () => string[];
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            settingKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            displayKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            sortKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            showOverflowTips: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            searchable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            sortable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            sourceList: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            targetList: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            emptyContent: import("vue-types").VueTypeDef<string[]> & {
                default: () => string[];
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:targetList"?: (...args: any[]) => any;
        }, {
            selectSearchQuery: import("vue").Ref<string>;
            selectListSearch: import("vue").ComputedRef<any>;
            selectedList: import("vue").Ref<any[]>;
            selectListSort: import("vue").ComputedRef<any[]>;
            selectedListSort: import("vue").ComputedRef<any[]>;
            settingCode: import("vue").ComputedRef<string>;
            displayCode: import("vue").ComputedRef<string>;
            allToRight: () => void;
            allToLeft: () => void;
            handleItemClick: (item: any, isLeft: any) => void;
            t: import("vue").ComputedRef<{
                sourceList: string;
                targetList: string;
                removeAll: string;
                selectAll: string;
                noData: string;
                noSelected: string;
                search: string;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:targetList")[], string, {
            title: string[];
            extCls: string;
            displayKey: string;
            searchPlaceholder: string;
            sortable: boolean;
            settingKey: string;
            sortKey: string;
            showOverflowTips: boolean;
            searchable: boolean;
            sourceList: any[];
            targetList: any[];
            emptyContent: string[];
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
        title: import("vue-types").VueTypeDef<string[]> & {
            default: () => string[];
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        settingKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        displayKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        sortKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        showOverflowTips: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        searchable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        sortable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        sourceList: import("vue-types").VueTypeDef<any[]> & {
            default: () => any[];
        };
        targetList: import("vue-types").VueTypeDef<any[]> & {
            default: () => any[];
        };
        emptyContent: import("vue-types").VueTypeDef<string[]> & {
            default: () => string[];
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:targetList"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        selectSearchQuery: import("vue").Ref<string>;
        selectListSearch: import("vue").ComputedRef<any>;
        selectedList: import("vue").Ref<any[]>;
        selectListSort: import("vue").ComputedRef<any[]>;
        selectedListSort: import("vue").ComputedRef<any[]>;
        settingCode: import("vue").ComputedRef<string>;
        displayCode: import("vue").ComputedRef<string>;
        allToRight: () => void;
        allToLeft: () => void;
        handleItemClick: (item: any, isLeft: any) => void;
        t: import("vue").ComputedRef<{
            sourceList: string;
            targetList: string;
            removeAll: string;
            selectAll: string;
            noData: string;
            noSelected: string;
            search: string;
        }>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    settingKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    sortKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    showOverflowTips: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    searchable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    sortable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    sourceList: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    targetList: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    emptyContent: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:targetList"?: (...args: any[]) => any;
}, {
    selectSearchQuery: import("vue").Ref<string>;
    selectListSearch: import("vue").ComputedRef<any>;
    selectedList: import("vue").Ref<any[]>;
    selectListSort: import("vue").ComputedRef<any[]>;
    selectedListSort: import("vue").ComputedRef<any[]>;
    settingCode: import("vue").ComputedRef<string>;
    displayCode: import("vue").ComputedRef<string>;
    allToRight: () => void;
    allToLeft: () => void;
    handleItemClick: (item: any, isLeft: any) => void;
    t: import("vue").ComputedRef<{
        sourceList: string;
        targetList: string;
        removeAll: string;
        selectAll: string;
        noData: string;
        noSelected: string;
        search: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:targetList")[], "change" | "update:targetList", {
    title: string[];
    extCls: string;
    displayKey: string;
    searchPlaceholder: string;
    sortable: boolean;
    settingKey: string;
    sortKey: string;
    showOverflowTips: boolean;
    searchable: boolean;
    sourceList: any[];
    targetList: any[];
    emptyContent: string[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default Transfer;
