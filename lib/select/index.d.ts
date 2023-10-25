import Option from './option';
import OptionGroup from './optionGroup';
declare const BkSelect: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tagTheme: "success" | "info" | "warning" | "danger";
            behavior: "simplicity" | "normal";
            disabled: boolean;
            size: "small" | "default" | "large";
            multiple: boolean;
            list: unknown[];
            showOnInit: boolean;
            placeholder: string;
            loading: boolean;
            scrollHeight: number;
            clearable: boolean;
            withValidate: boolean;
            showSelectedIcon: boolean;
            filterable: boolean;
            allowCreate: boolean;
            collapseTags: boolean;
            popoverMinWidth: number;
            displayKey: string;
            idKey: string;
            remoteMethod: (...args: any[]) => any;
            popoverOptions: {
                [key: string]: any;
            };
            showSelectAll: boolean;
            multipleMode: string;
            autoHeight: boolean;
            noDataText: string;
            noMatchText: string;
            loadingText: string;
            searchPlaceholder: string;
            selectAllText: string;
            scrollLoading: boolean;
            customContent: boolean;
            inputSearch: boolean;
            enableVirtualRender: boolean;
            allowEmptyValues: unknown[];
            autoFocus: boolean;
            keepSearchValue: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeValidableDef<any>;
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
            size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
                default: "small" | "default" | "large";
            };
            clearable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            loading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            remoteMethod: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            scrollHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            showSelectAll: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            popoverMinWidth: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            showOnInit: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            multipleMode: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
                default: "simplicity" | "normal";
            };
            collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoHeight: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            noDataText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            noMatchText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            loadingText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            placeholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            selectAllText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            scrollLoading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            popoverOptions: import("vue-types").VueTypeValidableDef<{
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
            customContent: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            list: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            idKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            displayKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showSelectedIcon: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            inputSearch: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            enableVirtualRender: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            allowEmptyValues: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            autoFocus: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            keepSearchValue: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onClear?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onToggle?: (...args: any[]) => any;
            "onScroll-end"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tagTheme" | "behavior" | "disabled" | "size" | "multiple" | "list" | "showOnInit" | "placeholder" | "loading" | "scrollHeight" | "clearable" | "withValidate" | "showSelectedIcon" | "filterable" | "allowCreate" | "collapseTags" | "popoverMinWidth" | "displayKey" | "idKey" | "remoteMethod" | "popoverOptions" | "showSelectAll" | "multipleMode" | "autoHeight" | "noDataText" | "noMatchText" | "loadingText" | "searchPlaceholder" | "selectAllText" | "scrollLoading" | "customContent" | "inputSearch" | "enableVirtualRender" | "allowEmptyValues" | "autoFocus" | "keepSearchValue">;
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
        $emit: (event: "focus" | "blur" | "change" | "toggle" | "clear" | "update:modelValue" | "scroll-end", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeValidableDef<any>;
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
            size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
                default: "small" | "default" | "large";
            };
            clearable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            loading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            remoteMethod: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            scrollHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            showSelectAll: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            popoverMinWidth: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            showOnInit: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            multipleMode: import("vue-types").VueTypeDef<string> & {
                default: string;
            };
            tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
                default: "simplicity" | "normal";
            };
            collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            autoHeight: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            noDataText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            noMatchText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            loadingText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            placeholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            selectAllText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            scrollLoading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            popoverOptions: import("vue-types").VueTypeValidableDef<{
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
            customContent: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            list: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            idKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            displayKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showSelectedIcon: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            inputSearch: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            enableVirtualRender: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            allowEmptyValues: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            autoFocus: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            keepSearchValue: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onFocus?: (...args: any[]) => any;
            onBlur?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onClear?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onToggle?: (...args: any[]) => any;
            "onScroll-end"?: (...args: any[]) => any;
        }, {
            selected: import("vue").Ref<{
                value: string;
                label: string | number;
            }[]>;
            isInput: import("vue").ComputedRef<boolean>;
            options: import("vue").ComputedRef<import("./type").OptionInstanceType[]>;
            isDisabled: import("vue").ComputedRef<boolean>;
            selectedLabel: import("vue").ComputedRef<(string | number)[]>;
            isPopoverShow: import("vue").Ref<boolean>;
            isHover: import("vue").Ref<boolean>;
            popperWidth: import("vue").Ref<string | number>;
            inputRef: import("vue").Ref<HTMLElement>;
            triggerRef: import("vue").Ref<HTMLElement>;
            contentRef: import("vue").Ref<HTMLElement>;
            searchRef: import("vue").Ref<HTMLElement>;
            selectTagInputRef: import("vue").Ref<{
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    tagTheme: "success" | "info" | "warning" | "danger";
                    disabled: boolean;
                    placeholder: string;
                    selected: import("./type").ISelected[];
                    filterable: boolean;
                    allowCreate: boolean;
                    collapseTags: boolean;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    selected: {
                        type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                        default: () => any[];
                    };
                    tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                        default: "success" | "info" | "warning" | "danger";
                    };
                    placeholder: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    } & {
                        default: string;
                    };
                    filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                    allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                    modelValue: import("vue-types").VueTypeValidableDef<any>;
                    collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                }>> & {
                    onKeydown?: (...args: any[]) => any;
                    "onUpdate:modelValue"?: (...args: any[]) => any;
                    onEnter?: (...args: any[]) => any;
                    onRemove?: (...args: any[]) => any;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tagTheme" | "disabled" | "placeholder" | "selected" | "filterable" | "allowCreate" | "collapseTags">;
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
                $emit: (event: "keydown" | "update:modelValue" | "remove" | "enter", ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    selected: {
                        type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                        default: () => any[];
                    };
                    tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                        default: "success" | "info" | "warning" | "danger";
                    };
                    placeholder: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    } & {
                        default: string;
                    };
                    filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                    allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                    modelValue: import("vue-types").VueTypeValidableDef<any>;
                    collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                        default: boolean;
                    } & {
                        default: boolean;
                    };
                }>> & {
                    onKeydown?: (...args: any[]) => any;
                    "onUpdate:modelValue"?: (...args: any[]) => any;
                    onEnter?: (...args: any[]) => any;
                    onRemove?: (...args: any[]) => any;
                }, {
                    select: import("./type").ISelectContext;
                    overflowTagIndex: import("vue").Ref<number>;
                    value: any;
                    inputRef: import("vue").Ref<HTMLElement>;
                    handleRemoveTag: (val: string) => void;
                    focus: () => void;
                    handleInput: (e: any) => void;
                    handleKeydown: (e: any) => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("keydown" | "update:modelValue" | "remove" | "enter")[], string, {
                    tagTheme: "success" | "info" | "warning" | "danger";
                    disabled: boolean;
                    placeholder: string;
                    selected: import("./type").ISelected[];
                    filterable: boolean;
                    allowCreate: boolean;
                    collapseTags: boolean;
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
                selected: {
                    type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                    default: () => any[];
                };
                tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                    default: "success" | "info" | "warning" | "danger";
                };
                placeholder: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                } & {
                    default: string;
                };
                filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                modelValue: import("vue-types").VueTypeValidableDef<any>;
                collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
            }>> & {
                onKeydown?: (...args: any[]) => any;
                "onUpdate:modelValue"?: (...args: any[]) => any;
                onEnter?: (...args: any[]) => any;
                onRemove?: (...args: any[]) => any;
            } & import("vue").ShallowUnwrapRef<{
                select: import("./type").ISelectContext;
                overflowTagIndex: import("vue").Ref<number>;
                value: any;
                inputRef: import("vue").Ref<HTMLElement>;
                handleRemoveTag: (val: string) => void;
                focus: () => void;
                handleInput: (e: any) => void;
                handleKeydown: (e: any) => void;
            }> & {} & {} & import("vue").ComponentCustomProperties>;
            virtualRenderRef: import("vue").Ref<any>;
            popoverRef: import("vue").Ref<any>;
            searchLoading: import("vue").Ref<boolean>;
            isOptionsEmpty: import("vue").ComputedRef<boolean>;
            isSearchEmpty: import("vue").ComputedRef<boolean>;
            isFocus: import("vue").Ref<boolean>;
            isShowSelectContent: import("vue").ComputedRef<boolean>;
            curContentText: import("vue").ComputedRef<string>;
            isGroup: import("vue").ComputedRef<boolean>;
            searchKey: import("vue").Ref<string>;
            isShowSelectAll: import("vue").ComputedRef<boolean>;
            virtualHeight: import("vue").ComputedRef<number>;
            virtualList: import("vue").ComputedRef<unknown[]>;
            isCollapseTags: import("vue").ComputedRef<boolean>;
            popoverConfig: import("vue").ComputedRef<Partial<Readonly<import("vue").ExtractPropTypes<{
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
            focusInput: () => void;
            setHover: () => void;
            cancelHover: () => void;
            handleFocus: () => void;
            handleBlur: () => void;
            handleTogglePopover: () => void;
            handleClear: (e: Event) => void;
            hidePopover: () => void;
            showPopover: () => void;
            handleToggleAll: () => void;
            handleOptionSelected: (option: import("./type").OptionInstanceType) => void;
            handleClickOutside: ({ event }: {
                event: any;
            }) => void;
            handleScroll: (e: any) => void;
            handleDeleteTag: (val: string) => void;
            handleInputChange: (value: any) => void;
            handleInputEnter: (val: string | number, e: Event) => void;
            handleKeydown: (e: KeyboardEvent) => void;
            handleSelectedAllOptionMouseEnter: () => void;
            handlePopoverShow: () => void;
            localLoadingText: import("vue").ComputedRef<string>;
            localPlaceholder: import("vue").ComputedRef<string>;
            localSearchPlaceholder: import("vue").ComputedRef<string>;
            localSelectAllText: import("vue").ComputedRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "change" | "toggle" | "clear" | "update:modelValue" | "scroll-end")[], string, {
            tagTheme: "success" | "info" | "warning" | "danger";
            behavior: "simplicity" | "normal";
            disabled: boolean;
            size: "small" | "default" | "large";
            multiple: boolean;
            list: unknown[];
            showOnInit: boolean;
            placeholder: string;
            loading: boolean;
            scrollHeight: number;
            clearable: boolean;
            withValidate: boolean;
            showSelectedIcon: boolean;
            filterable: boolean;
            allowCreate: boolean;
            collapseTags: boolean;
            popoverMinWidth: number;
            displayKey: string;
            idKey: string;
            remoteMethod: (...args: any[]) => any;
            popoverOptions: {
                [key: string]: any;
            };
            showSelectAll: boolean;
            multipleMode: string;
            autoHeight: boolean;
            noDataText: string;
            noMatchText: string;
            loadingText: string;
            searchPlaceholder: string;
            selectAllText: string;
            scrollLoading: boolean;
            customContent: boolean;
            inputSearch: boolean;
            enableVirtualRender: boolean;
            allowEmptyValues: unknown[];
            autoFocus: boolean;
            keepSearchValue: boolean;
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
        modelValue: import("vue-types").VueTypeValidableDef<any>;
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
        size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
            default: "small" | "default" | "large";
        };
        clearable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        loading: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        filterable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        remoteMethod: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        scrollHeight: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        showSelectAll: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        popoverMinWidth: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        showOnInit: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        multipleMode: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
        tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
            default: "success" | "info" | "warning" | "danger";
        };
        behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
            default: "simplicity" | "normal";
        };
        collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        autoHeight: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        noDataText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        noMatchText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        loadingText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        placeholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        selectAllText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        scrollLoading: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        popoverOptions: import("vue-types").VueTypeValidableDef<{
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
        customContent: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        list: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        idKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        displayKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showSelectedIcon: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        inputSearch: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        enableVirtualRender: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        allowEmptyValues: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        autoFocus: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        keepSearchValue: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onFocus?: (...args: any[]) => any;
        onBlur?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onClear?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onToggle?: (...args: any[]) => any;
        "onScroll-end"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        selected: import("vue").Ref<{
            value: string;
            label: string | number;
        }[]>;
        isInput: import("vue").ComputedRef<boolean>;
        options: import("vue").ComputedRef<import("./type").OptionInstanceType[]>;
        isDisabled: import("vue").ComputedRef<boolean>;
        selectedLabel: import("vue").ComputedRef<(string | number)[]>;
        isPopoverShow: import("vue").Ref<boolean>;
        isHover: import("vue").Ref<boolean>;
        popperWidth: import("vue").Ref<string | number>;
        inputRef: import("vue").Ref<HTMLElement>;
        triggerRef: import("vue").Ref<HTMLElement>;
        contentRef: import("vue").Ref<HTMLElement>;
        searchRef: import("vue").Ref<HTMLElement>;
        selectTagInputRef: import("vue").Ref<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                tagTheme: "success" | "info" | "warning" | "danger";
                disabled: boolean;
                placeholder: string;
                selected: import("./type").ISelected[];
                filterable: boolean;
                allowCreate: boolean;
                collapseTags: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                selected: {
                    type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                    default: () => any[];
                };
                tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                    default: "success" | "info" | "warning" | "danger";
                };
                placeholder: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                } & {
                    default: string;
                };
                filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                modelValue: import("vue-types").VueTypeValidableDef<any>;
                collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
            }>> & {
                onKeydown?: (...args: any[]) => any;
                "onUpdate:modelValue"?: (...args: any[]) => any;
                onEnter?: (...args: any[]) => any;
                onRemove?: (...args: any[]) => any;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tagTheme" | "disabled" | "placeholder" | "selected" | "filterable" | "allowCreate" | "collapseTags">;
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
            $emit: (event: "keydown" | "update:modelValue" | "remove" | "enter", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                selected: {
                    type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                    default: () => any[];
                };
                tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                    default: "success" | "info" | "warning" | "danger";
                };
                placeholder: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                } & {
                    default: string;
                };
                filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
                modelValue: import("vue-types").VueTypeValidableDef<any>;
                collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                    default: boolean;
                } & {
                    default: boolean;
                };
            }>> & {
                onKeydown?: (...args: any[]) => any;
                "onUpdate:modelValue"?: (...args: any[]) => any;
                onEnter?: (...args: any[]) => any;
                onRemove?: (...args: any[]) => any;
            }, {
                select: import("./type").ISelectContext;
                overflowTagIndex: import("vue").Ref<number>;
                value: any;
                inputRef: import("vue").Ref<HTMLElement>;
                handleRemoveTag: (val: string) => void;
                focus: () => void;
                handleInput: (e: any) => void;
                handleKeydown: (e: any) => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("keydown" | "update:modelValue" | "remove" | "enter")[], string, {
                tagTheme: "success" | "info" | "warning" | "danger";
                disabled: boolean;
                placeholder: string;
                selected: import("./type").ISelected[];
                filterable: boolean;
                allowCreate: boolean;
                collapseTags: boolean;
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
            selected: {
                type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                default: () => any[];
            };
            tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            placeholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            modelValue: import("vue-types").VueTypeValidableDef<any>;
            collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onKeydown?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onEnter?: (...args: any[]) => any;
            onRemove?: (...args: any[]) => any;
        } & import("vue").ShallowUnwrapRef<{
            select: import("./type").ISelectContext;
            overflowTagIndex: import("vue").Ref<number>;
            value: any;
            inputRef: import("vue").Ref<HTMLElement>;
            handleRemoveTag: (val: string) => void;
            focus: () => void;
            handleInput: (e: any) => void;
            handleKeydown: (e: any) => void;
        }> & {} & {} & import("vue").ComponentCustomProperties>;
        virtualRenderRef: import("vue").Ref<any>;
        popoverRef: import("vue").Ref<any>;
        searchLoading: import("vue").Ref<boolean>;
        isOptionsEmpty: import("vue").ComputedRef<boolean>;
        isSearchEmpty: import("vue").ComputedRef<boolean>;
        isFocus: import("vue").Ref<boolean>;
        isShowSelectContent: import("vue").ComputedRef<boolean>;
        curContentText: import("vue").ComputedRef<string>;
        isGroup: import("vue").ComputedRef<boolean>;
        searchKey: import("vue").Ref<string>;
        isShowSelectAll: import("vue").ComputedRef<boolean>;
        virtualHeight: import("vue").ComputedRef<number>;
        virtualList: import("vue").ComputedRef<unknown[]>;
        isCollapseTags: import("vue").ComputedRef<boolean>;
        popoverConfig: import("vue").ComputedRef<Partial<Readonly<import("vue").ExtractPropTypes<{
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
        focusInput: () => void;
        setHover: () => void;
        cancelHover: () => void;
        handleFocus: () => void;
        handleBlur: () => void;
        handleTogglePopover: () => void;
        handleClear: (e: Event) => void;
        hidePopover: () => void;
        showPopover: () => void;
        handleToggleAll: () => void;
        handleOptionSelected: (option: import("./type").OptionInstanceType) => void;
        handleClickOutside: ({ event }: {
            event: any;
        }) => void;
        handleScroll: (e: any) => void;
        handleDeleteTag: (val: string) => void;
        handleInputChange: (value: any) => void;
        handleInputEnter: (val: string | number, e: Event) => void;
        handleKeydown: (e: KeyboardEvent) => void;
        handleSelectedAllOptionMouseEnter: () => void;
        handlePopoverShow: () => void;
        localLoadingText: import("vue").ComputedRef<string>;
        localPlaceholder: import("vue").ComputedRef<string>;
        localSearchPlaceholder: import("vue").ComputedRef<string>;
        localSelectAllText: import("vue").ComputedRef<string>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeValidableDef<any>;
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
    size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
        default: "small" | "default" | "large";
    };
    clearable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    filterable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    remoteMethod: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    scrollHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    showSelectAll: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    popoverMinWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    showOnInit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    multipleMode: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
        default: "simplicity" | "normal";
    };
    collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoHeight: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    noDataText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    noMatchText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadingText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    searchPlaceholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    selectAllText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    scrollLoading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    popoverOptions: import("vue-types").VueTypeValidableDef<{
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
    customContent: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    idKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showSelectedIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    inputSearch: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    enableVirtualRender: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowEmptyValues: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    autoFocus: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    keepSearchValue: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onToggle?: (...args: any[]) => any;
    "onScroll-end"?: (...args: any[]) => any;
}, {
    selected: import("vue").Ref<{
        value: string;
        label: string | number;
    }[]>;
    isInput: import("vue").ComputedRef<boolean>;
    options: import("vue").ComputedRef<import("./type").OptionInstanceType[]>;
    isDisabled: import("vue").ComputedRef<boolean>;
    selectedLabel: import("vue").ComputedRef<(string | number)[]>;
    isPopoverShow: import("vue").Ref<boolean>;
    isHover: import("vue").Ref<boolean>;
    popperWidth: import("vue").Ref<string | number>;
    inputRef: import("vue").Ref<HTMLElement>;
    triggerRef: import("vue").Ref<HTMLElement>;
    contentRef: import("vue").Ref<HTMLElement>;
    searchRef: import("vue").Ref<HTMLElement>;
    selectTagInputRef: import("vue").Ref<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tagTheme: "success" | "info" | "warning" | "danger";
            disabled: boolean;
            placeholder: string;
            selected: import("./type").ISelected[];
            filterable: boolean;
            allowCreate: boolean;
            collapseTags: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            selected: {
                type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                default: () => any[];
            };
            tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            placeholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            modelValue: import("vue-types").VueTypeValidableDef<any>;
            collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onKeydown?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onEnter?: (...args: any[]) => any;
            onRemove?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tagTheme" | "disabled" | "placeholder" | "selected" | "filterable" | "allowCreate" | "collapseTags">;
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
        $emit: (event: "keydown" | "update:modelValue" | "remove" | "enter", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            selected: {
                type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
                default: () => any[];
            };
            tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            placeholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            filterable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            modelValue: import("vue-types").VueTypeValidableDef<any>;
            collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onKeydown?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onEnter?: (...args: any[]) => any;
            onRemove?: (...args: any[]) => any;
        }, {
            select: import("./type").ISelectContext;
            overflowTagIndex: import("vue").Ref<number>;
            value: any;
            inputRef: import("vue").Ref<HTMLElement>;
            handleRemoveTag: (val: string) => void;
            focus: () => void;
            handleInput: (e: any) => void;
            handleKeydown: (e: any) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("keydown" | "update:modelValue" | "remove" | "enter")[], string, {
            tagTheme: "success" | "info" | "warning" | "danger";
            disabled: boolean;
            placeholder: string;
            selected: import("./type").ISelected[];
            filterable: boolean;
            allowCreate: boolean;
            collapseTags: boolean;
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
        selected: {
            type: import("vue-types/dist/types").PropType<import("./type").ISelected[]>;
            default: () => any[];
        };
        tagTheme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
            default: "success" | "info" | "warning" | "danger";
        };
        placeholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        filterable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        modelValue: import("vue-types").VueTypeValidableDef<any>;
        collapseTags: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onKeydown?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onEnter?: (...args: any[]) => any;
        onRemove?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        select: import("./type").ISelectContext;
        overflowTagIndex: import("vue").Ref<number>;
        value: any;
        inputRef: import("vue").Ref<HTMLElement>;
        handleRemoveTag: (val: string) => void;
        focus: () => void;
        handleInput: (e: any) => void;
        handleKeydown: (e: any) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties>;
    virtualRenderRef: import("vue").Ref<any>;
    popoverRef: import("vue").Ref<any>;
    searchLoading: import("vue").Ref<boolean>;
    isOptionsEmpty: import("vue").ComputedRef<boolean>;
    isSearchEmpty: import("vue").ComputedRef<boolean>;
    isFocus: import("vue").Ref<boolean>;
    isShowSelectContent: import("vue").ComputedRef<boolean>;
    curContentText: import("vue").ComputedRef<string>;
    isGroup: import("vue").ComputedRef<boolean>;
    searchKey: import("vue").Ref<string>;
    isShowSelectAll: import("vue").ComputedRef<boolean>;
    virtualHeight: import("vue").ComputedRef<number>;
    virtualList: import("vue").ComputedRef<unknown[]>;
    isCollapseTags: import("vue").ComputedRef<boolean>;
    popoverConfig: import("vue").ComputedRef<Partial<Readonly<import("vue").ExtractPropTypes<{
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
    focusInput: () => void;
    setHover: () => void;
    cancelHover: () => void;
    handleFocus: () => void;
    handleBlur: () => void;
    handleTogglePopover: () => void;
    handleClear: (e: Event) => void;
    hidePopover: () => void;
    showPopover: () => void;
    handleToggleAll: () => void;
    handleOptionSelected: (option: import("./type").OptionInstanceType) => void;
    handleClickOutside: ({ event }: {
        event: any;
    }) => void;
    handleScroll: (e: any) => void;
    handleDeleteTag: (val: string) => void;
    handleInputChange: (value: any) => void;
    handleInputEnter: (val: string | number, e: Event) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    handleSelectedAllOptionMouseEnter: () => void;
    handlePopoverShow: () => void;
    localLoadingText: import("vue").ComputedRef<string>;
    localPlaceholder: import("vue").ComputedRef<string>;
    localSearchPlaceholder: import("vue").ComputedRef<string>;
    localSelectAllText: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "change" | "toggle" | "clear" | "update:modelValue" | "scroll-end")[], "focus" | "blur" | "change" | "toggle" | "clear" | "update:modelValue" | "scroll-end", {
    tagTheme: "success" | "info" | "warning" | "danger";
    behavior: "simplicity" | "normal";
    disabled: boolean;
    size: "small" | "default" | "large";
    multiple: boolean;
    list: unknown[];
    showOnInit: boolean;
    placeholder: string;
    loading: boolean;
    scrollHeight: number;
    clearable: boolean;
    withValidate: boolean;
    showSelectedIcon: boolean;
    filterable: boolean;
    allowCreate: boolean;
    collapseTags: boolean;
    popoverMinWidth: number;
    displayKey: string;
    idKey: string;
    remoteMethod: (...args: any[]) => any;
    popoverOptions: {
        [key: string]: any;
    };
    showSelectAll: boolean;
    multipleMode: string;
    autoHeight: boolean;
    noDataText: string;
    noMatchText: string;
    loadingText: string;
    searchPlaceholder: string;
    selectAllText: string;
    scrollLoading: boolean;
    customContent: boolean;
    inputSearch: boolean;
    enableVirtualRender: boolean;
    allowEmptyValues: unknown[];
    autoFocus: boolean;
    keepSearchValue: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    Option: import("vue").DefineComponent<{
        value: import("vue-types").VueTypeValidableDef<any>;
        label: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }, {
        selected: import("vue").ComputedRef<boolean>;
        multiple: import("vue").ComputedRef<boolean>;
        isHover: import("vue").ComputedRef<boolean>;
        showSelectedIcon: import("vue").ComputedRef<boolean>;
        handleOptionClick: () => void;
        handleMouseEnter: () => void;
        visible: import("vue").Ref<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        value: import("vue-types").VueTypeValidableDef<any>;
        label: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>>, {
        label: string | number;
        disabled: boolean;
    }>;
    Group: import("vue").DefineComponent<{
        label: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        collapsible: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        collapse: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }, {
        groupLabel: import("vue").ComputedRef<string>;
        handleToggleCollapse: () => void;
        groupCollapse: import("vue").Ref<boolean>;
        visible: import("vue").Ref<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        label: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        collapsible: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        collapse: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>>, {
        label: string;
        disabled: boolean;
        collapse: boolean;
        collapsible: boolean;
    }>;
}>;
export default BkSelect;
export { BkSelect, Option as BkOption, OptionGroup as BkOptionGroup, };
