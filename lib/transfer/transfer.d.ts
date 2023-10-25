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
declare const _default: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:targetList")[], "change" | "update:targetList", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>;
export default _default;
