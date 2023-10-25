import { INode } from './interface';
declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue-types").VueTypeDef<(string | number | string[])[]>;
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    behavior: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    filterable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    multiple: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    clearable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    trigger: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    checkAnyLevel: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isRemote: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    remoteMethod: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showCompleteName: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    idKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    nameKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    childrenKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    limitOneLine: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    scrollWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    floatMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    bkCascaderRef: any;
    inputRef: any;
    overflowTagIndex: import("vue").Ref<number>;
    isCollapse: import("vue").ComputedRef<boolean>;
    isFocus: import("vue").Ref<boolean>;
    store: import("vue").Ref<{
        data: {
            id: string;
            name: string;
            leaf?: boolean;
            disabled?: boolean;
            children?: any[];
        }[];
        config: {
            checkAnyLevel: boolean;
            childrenKey: string;
            clearable: boolean;
            disabled: boolean;
            idKey: string;
            isRemote: boolean;
            multiple: boolean;
            nameKey: string;
            showCompleteName: boolean;
            trigger: string;
            separator: string;
            remoteMethod: Function;
        };
        nodes: {
            checked: boolean;
            children?: null[];
            config: {
                checkAnyLevel: boolean;
                childrenKey: string;
                clearable: boolean;
                disabled: boolean;
                idKey: string;
                isRemote: boolean;
                multiple: boolean;
                nameKey: string;
                showCompleteName: boolean;
                trigger: string;
                separator: string;
                remoteMethod: Function;
            };
            data: {
                id: string;
                name: string;
                leaf?: boolean;
                disabled?: boolean;
                children?: any[];
            };
            leaf: boolean;
            id: string;
            level: number;
            loading: boolean;
            loaded: boolean;
            name: string;
            parent?: any;
            isDisabled: boolean;
            isIndeterminate: boolean;
            isLeaf: boolean;
            pathNames: string[];
            path: string[];
            setNodeCheck: (status: boolean) => void;
            broadcast: (event: string, check: boolean) => void;
            emit: (event: string) => void;
        }[];
        getNodes: () => INode[];
        clearChecked: () => void;
        removeTag: (tag: string[]) => void;
        getFlattedNodes: (leafOnly?: boolean) => any;
        setNodesCheck: (nodes: string[][]) => void;
        getCheckedNodes: () => any;
        getNodeByValue: (value: (string | number | string[])[]) => INode;
        getNodeById: (id: string | number) => INode;
        appendNode: (nodeData: import("./interface").IData, parentNode: import("./interface").IData) => void;
        appendNodes: (nodeDataList: import("./interface").IData[], parentNode: import("./interface").IData) => void;
    }>;
    updateValue: (val: Array<string | number | string[]>) => void;
    selectedText: import("vue").Ref<string | number>;
    checkedValue: import("vue").WritableComputedRef<(string | number | string[])[]>;
    handleClear: (e: Event) => void;
    isHover: import("vue").Ref<boolean>;
    setHover: () => void;
    popover: any;
    cancelHover: () => void;
    selectedTags: import("vue").Ref<any[]>;
    removeTag: (value: any, index: any, e: any) => void;
    cascaderPanel: import("vue").Ref<any>;
    popoverChangeEmitter: (val: any) => void;
    searchKey: import("vue").Ref<string | number>;
    suggestions: import("vue").Ref<any[]>;
    isFiltering: import("vue").Ref<boolean>;
    searchInputHandler: {
        (this: any): any;
        cancel(): void;
    };
    focusEmitter: () => void;
    tagList: import("vue").ComputedRef<any[]>;
    isEdit: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "change" | "toggle" | "clear" | "update:modelValue")[], "focus" | "change" | "toggle" | "clear" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeDef<(string | number | string[])[]>;
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    behavior: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    filterable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    multiple: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    clearable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    trigger: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    checkAnyLevel: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isRemote: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    remoteMethod: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    showCompleteName: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    idKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    nameKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    childrenKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    limitOneLine: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    scrollHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    scrollWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    floatMode: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocus?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onToggle?: (...args: any[]) => any;
}, {
    trigger: string;
    behavior: string;
    disabled: boolean;
    separator: string;
    multiple: boolean;
    list: unknown[];
    extCls: string;
    placeholder: string;
    scrollHeight: string | number;
    clearable: boolean;
    checkAnyLevel: boolean;
    filterable: boolean;
    collapseTags: boolean;
    idKey: string;
    nameKey: string;
    childrenKey: string;
    isRemote: boolean;
    remoteMethod: (...args: any[]) => any;
    showCompleteName: boolean;
    limitOneLine: boolean;
    scrollWidth: string | number;
    floatMode: boolean;
}>;
export default _default;
