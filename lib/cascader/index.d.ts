import CascaderPanel from './cascader-panel';
declare const BkCascader: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "behavior" | "disabled" | "separator" | "multiple" | "list" | "extCls" | "placeholder" | "scrollHeight" | "clearable" | "checkAnyLevel" | "filterable" | "collapseTags" | "idKey" | "nameKey" | "childrenKey" | "isRemote" | "remoteMethod" | "showCompleteName" | "limitOneLine" | "scrollWidth" | "floatMode">;
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
        $emit: (event: "focus" | "change" | "toggle" | "clear" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
                getNodes: () => import("./interface").INode[];
                clearChecked: () => void;
                removeTag: (tag: string[]) => void;
                getFlattedNodes: (leafOnly?: boolean) => any;
                setNodesCheck: (nodes: string[][]) => void;
                getCheckedNodes: () => any;
                getNodeByValue: (value: (string | number | string[])[]) => import("./interface").INode;
                getNodeById: (id: string | number) => import("./interface").INode;
                appendNode: (nodeData: import("./interface").IData, parentNode: import("./interface").IData) => void;
                appendNodes: (nodeDataList: import("./interface").IData[], parentNode: import("./interface").IData) => void;
            }>;
            updateValue: (val: (string | number | string[])[]) => void;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "change" | "toggle" | "clear" | "update:modelValue")[], string, {
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
    } & import("vue").ShallowUnwrapRef<{
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
            getNodes: () => import("./interface").INode[];
            clearChecked: () => void;
            removeTag: (tag: string[]) => void;
            getFlattedNodes: (leafOnly?: boolean) => any;
            setNodesCheck: (nodes: string[][]) => void;
            getCheckedNodes: () => any;
            getNodeByValue: (value: (string | number | string[])[]) => import("./interface").INode;
            getNodeById: (id: string | number) => import("./interface").INode;
            appendNode: (nodeData: import("./interface").IData, parentNode: import("./interface").IData) => void;
            appendNodes: (nodeDataList: import("./interface").IData[], parentNode: import("./interface").IData) => void;
        }>;
        updateValue: (val: (string | number | string[])[]) => void;
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
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        getNodes: () => import("./interface").INode[];
        clearChecked: () => void;
        removeTag: (tag: string[]) => void;
        getFlattedNodes: (leafOnly?: boolean) => any;
        setNodesCheck: (nodes: string[][]) => void;
        getCheckedNodes: () => any;
        getNodeByValue: (value: (string | number | string[])[]) => import("./interface").INode;
        getNodeById: (id: string | number) => import("./interface").INode;
        appendNode: (nodeData: import("./interface").IData, parentNode: import("./interface").IData) => void;
        appendNodes: (nodeDataList: import("./interface").IData[], parentNode: import("./interface").IData) => void;
    }>;
    updateValue: (val: (string | number | string[])[]) => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "change" | "toggle" | "clear" | "update:modelValue")[], "focus" | "change" | "toggle" | "clear" | "update:modelValue", {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    CascaderPanel: import("vue").DefineComponent<{
        width: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        height: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        store: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        } & {
            default: () => {
                [key: string]: any;
            };
        };
        separator: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        suggestions: import("vue-types").VueTypeDef<import("./interface").INode[]>;
        isFiltering: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        searchKey: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        modelValue: import("vue-types").VueTypeDef<(string | number | string[])[]>;
    }, {
        menus: {
            list: any[];
        };
        activePath: import("vue").Ref<any[]>;
        nodeExpandHandler: (node: import("./interface").INode) => void;
        isNodeInPath: (node: import("./interface").INode) => boolean;
        nodeEvent: (node: import("./interface").INode) => {
            onClick: (e: Event) => void;
            onMouseenter: () => void;
        };
        isCheckedNode: (node: import("./interface").INode, checkValue: (string | number | string[])[]) => any;
        checkValue: import("vue").Ref<(string | number | string[])[]>;
        checkNode: (node: import("./interface").INode, value: boolean) => void;
        iconRender: (node: any) => JSX.Element;
        panelWidth: string;
        panelHeight: string;
        searchPanelEvents: (node: import("./interface").INode) => {
            onClick: (e: Event) => void;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        width: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        height: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        store: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        } & {
            default: () => {
                [key: string]: any;
            };
        };
        separator: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        suggestions: import("vue-types").VueTypeDef<import("./interface").INode[]>;
        isFiltering: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        searchKey: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        modelValue: import("vue-types").VueTypeDef<(string | number | string[])[]>;
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        width: string | number;
        height: string | number;
        separator: string;
        store: {
            [key: string]: any;
        };
        isFiltering: boolean;
        searchKey: string | number;
    }>;
}>;
export default BkCascader;
export { BkCascader, CascaderPanel as BkCascaderPanel, };
