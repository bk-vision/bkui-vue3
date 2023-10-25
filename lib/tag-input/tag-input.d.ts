import { type Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    list: import("vue-types").VueTypeDef<{
        [key: string]: any;
    }[]> & {
        default: () => {
            [key: string]: any;
        }[];
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    tooltipKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    saveKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    hasDeleteIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    clearable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    trigger: import("vue-types").VueTypeDef<"focus" | "search"> & {
        default: "focus" | "search";
    };
    searchKey: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    useGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    maxData: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    maxResult: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    contentMaxHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    contentWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    allowNextFocus: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowAutoMatch: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showClearOnlyHover: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    leftSpace: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    createTagValidator: {
        type: import("vue").PropType<(tag: any) => boolean>;
    };
    filterCallback: {
        type: import("vue").PropType<(value: string, searchKey: string | string[], list: any[]) => any[]>;
    };
    tagTpl: {
        type: import("vue").PropType<(node: any, highlightKeyword: Function, h: Function, ctx: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
    tpl: {
        type: import("vue").PropType<(node: any, h: Function, ctx: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
    pasteFn: {
        type: import("vue").PropType<(value: string) => any[]>;
    };
    withValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
    popoverProps: {
        type: import("vue").PropType<Partial<Readonly<import("vue").ExtractPropTypes<{
            onAfterHidden: FunctionConstructor;
            onAfterShow: FunctionConstructor;
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            always: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            content: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            placement: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            theme: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            trigger: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            renderType: import("vue-types").VueTypeDef<"auto" | "shown"> & {
                default: "auto" | "shown";
            };
            arrow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            padding: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            offset: import("vue-types").VueTypeDef<number | {
                mainAxis?: number;
                crossAxis?: number;
                alignmentAxis?: number;
            }> & {
                default: number | (() => {
                    mainAxis?: number;
                    crossAxis?: number;
                    alignmentAxis?: number;
                });
            };
            boundary: import("vue-types").VueTypeDef<string | HTMLElement>;
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            disableTeleport: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            reference: import("vue-types").VueTypeValidableDef<any> & {
                default: any;
            };
            modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
                default: number | (() => number[]);
            };
        }>>>>;
        default: () => {};
    };
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagOverflowTips: {
        type: import("vue").PropType<Partial<import("../directives/src/tooltips").IOptions>>;
        default: () => {};
    };
}, {
    isShowPlaceholder: import("vue").ComputedRef<boolean>;
    isShowClear: import("vue").ComputedRef<boolean>;
    placeholderText: import("vue").ComputedRef<string>;
    curInputValue: Ref<string>;
    renderList: import("vue").ComputedRef<any[]>;
    showTagClose: import("vue").ComputedRef<boolean>;
    tagInputRef: any;
    bkTagSelectorRef: any;
    tagListRef: any;
    tagInputItemRef: any;
    selectorListRef: any;
    triggerClass: import("vue").ComputedRef<{
        'bk-tag-input-trigger': boolean;
        active: boolean;
        disabled: boolean;
    }>;
    overflowTagIndex: Ref<number>;
    localCollapseTags: import("vue").ComputedRef<boolean>;
    focusInputTrigger: (e?: MouseEvent) => void;
    activeClass: (data: any, index: number) => {
        'bk-selector-actived': boolean;
        'bk-selector-selected': boolean;
    };
    handleInput: (e?: Event) => void;
    handleFocus: () => void;
    handleBlur: () => void;
    handleTagSelected: (item: any, type: string, e?: Event) => void;
    handleTagRemove: (data: any, index: number, e?: MouseEvent) => void;
    handleClear: (e: MouseEvent) => void;
    tagFocus: (e: MouseEvent) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    handlePaste: (e: ClipboardEvent) => boolean;
    curPage: Ref<number>;
    totalSize: Ref<number>;
    totalPage: Ref<number>;
    pageSize: Ref<number>;
    isPageLoading: Ref<boolean>;
    curPageList: Ref<any[]>;
    renderListPaged: Ref<any[]>;
    localList: Ref<any[]>;
    tagListCache: Ref<any[]>;
    selectedTagList: Ref<any[]>;
    selectedTagListCache: Ref<any[]>;
    isEdit: Ref<boolean>;
    isHover: Ref<boolean>;
    focusItemIndex: Ref<number>;
    popoverProps: {
        isShow: boolean;
        width: number;
        offset: {
            mainAxis: number;
            crossAxis: number;
        };
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "select" | "focus" | "blur" | "change" | "update:modelValue" | "remove" | "removeAll")[], "input" | "select" | "focus" | "blur" | "change" | "update:modelValue" | "remove" | "removeAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    list: import("vue-types").VueTypeDef<{
        [key: string]: any;
    }[]> & {
        default: () => {
            [key: string]: any;
        }[];
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    tooltipKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    saveKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    hasDeleteIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    clearable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    trigger: import("vue-types").VueTypeDef<"focus" | "search"> & {
        default: "focus" | "search";
    };
    searchKey: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    useGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    maxData: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    maxResult: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    contentMaxHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    contentWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    allowNextFocus: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowAutoMatch: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showClearOnlyHover: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    leftSpace: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    createTagValidator: {
        type: import("vue").PropType<(tag: any) => boolean>;
    };
    filterCallback: {
        type: import("vue").PropType<(value: string, searchKey: string | string[], list: any[]) => any[]>;
    };
    tagTpl: {
        type: import("vue").PropType<(node: any, highlightKeyword: Function, h: Function, ctx: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
    tpl: {
        type: import("vue").PropType<(node: any, h: Function, ctx: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
    pasteFn: {
        type: import("vue").PropType<(value: string) => any[]>;
    };
    withValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
    popoverProps: {
        type: import("vue").PropType<Partial<Readonly<import("vue").ExtractPropTypes<{
            onAfterHidden: FunctionConstructor;
            onAfterShow: FunctionConstructor;
            isShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            always: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            width: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            content: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            placement: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            theme: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            trigger: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            renderType: import("vue-types").VueTypeDef<"auto" | "shown"> & {
                default: "auto" | "shown";
            };
            arrow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            padding: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            offset: import("vue-types").VueTypeDef<number | {
                mainAxis?: number;
                crossAxis?: number;
                alignmentAxis?: number;
            }> & {
                default: number | (() => {
                    mainAxis?: number;
                    crossAxis?: number;
                    alignmentAxis?: number;
                });
            };
            boundary: import("vue-types").VueTypeDef<string | HTMLElement>;
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            disableTeleport: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            reference: import("vue-types").VueTypeValidableDef<any> & {
                default: any;
            };
            modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
                default: number | (() => number[]);
            };
        }>>>>;
        default: () => {};
    };
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagOverflowTips: {
        type: import("vue").PropType<Partial<import("../directives/src/tooltips").IOptions>>;
        default: () => {};
    };
}>> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onRemove?: (...args: any[]) => any;
    onRemoveAll?: (...args: any[]) => any;
}, {
    trigger: "focus" | "search";
    disabled: boolean;
    separator: string;
    list: {
        [key: string]: any;
    }[];
    placeholder: string;
    clearable: boolean;
    showClearOnlyHover: boolean;
    modelValue: string[];
    withValidate: boolean;
    searchKey: string | string[];
    allowCreate: boolean;
    collapseTags: boolean;
    tooltipKey: string;
    saveKey: string;
    displayKey: string;
    hasDeleteIcon: boolean;
    useGroup: boolean;
    maxData: number;
    maxResult: number;
    contentMaxHeight: number;
    contentWidth: number;
    allowNextFocus: boolean;
    allowAutoMatch: boolean;
    leftSpace: number;
    popoverProps: {};
    tagOverflowTips: {};
}>;
export default _default;
