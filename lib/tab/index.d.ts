import { ExtractPropTypes } from 'vue';
import { PositionEnum, SortTypeEnum, tabPanelProps, tabProps } from './props';
import TabPanel from './tab-panel';
export declare type TabProps = Partial<ExtractPropTypes<typeof tabProps>>;
export declare type TabPanelProps = Partial<ExtractPropTypes<typeof tabPanelProps>>;
declare const BkTab: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
            active: string | number;
            extCls: string;
            closable: boolean;
            showHeader: boolean;
            sortType: "replace" | "insert";
            activeBarColor: string;
            activeBarSize: number;
            tabPosition: "top" | "right" | "left";
            addable: boolean;
            sortable: boolean;
            labelHeight: number;
            scrollStep: number;
            validateActive: boolean;
            changeOnHover: boolean;
            changeOnHoverDelay: number;
        }> & Omit<Readonly<ExtractPropTypes<{
            active: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            type: import("vue-types").VueTypeDef<"card" | "border-card" | "unborder-card" | "card-tab" | "card-grid"> & {
                default: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
            };
            tabPosition: import("vue-types").VueTypeDef<"top" | "right" | "left"> & {
                default: "top" | "right" | "left";
            };
            closable: BooleanConstructor;
            addable: BooleanConstructor;
            sortable: BooleanConstructor;
            sortType: import("vue-types").VueTypeDef<"replace" | "insert"> & {
                default: "replace" | "insert";
            };
            labelHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            scrollStep: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            validateActive: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showHeader: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            changeOnHover: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            changeOnHoverDelay: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            activeBarSize: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            activeBarColor: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>> & {
            onDrag?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onRemove?: (...args: any[]) => any;
            onAdd?: (...args: any[]) => any;
            "onAdd-panel"?: (...args: any[]) => any;
            "onTab-change"?: (...args: any[]) => any;
            "onRemove-panel"?: (...args: any[]) => any;
            "onSort-change"?: (...args: any[]) => any;
            "onOn-drag-tab"?: (...args: any[]) => any;
            "onUpdate:active"?: (...args: any[]) => any;
            onSort?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "active" | "extCls" | "closable" | "showHeader" | "sortType" | "activeBarColor" | "activeBarSize" | "tabPosition" | "addable" | "sortable" | "labelHeight" | "scrollStep" | "validateActive" | "changeOnHover" | "changeOnHoverDelay">;
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
        $emit: (event: "change" | "drag" | "add" | "remove" | "add-panel" | "tab-change" | "remove-panel" | "sort-change" | "on-drag-tab" | "update:active" | "sort", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            active: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            type: import("vue-types").VueTypeDef<"card" | "border-card" | "unborder-card" | "card-tab" | "card-grid"> & {
                default: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
            };
            tabPosition: import("vue-types").VueTypeDef<"top" | "right" | "left"> & {
                default: "top" | "right" | "left";
            };
            closable: BooleanConstructor;
            addable: BooleanConstructor;
            sortable: BooleanConstructor;
            sortType: import("vue-types").VueTypeDef<"replace" | "insert"> & {
                default: "replace" | "insert";
            };
            labelHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            scrollStep: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            validateActive: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showHeader: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            changeOnHover: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            changeOnHoverDelay: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            activeBarSize: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            activeBarColor: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>> & {
            onDrag?: (...args: any[]) => any;
            onChange?: (...args: any[]) => any;
            onRemove?: (...args: any[]) => any;
            onAdd?: (...args: any[]) => any;
            "onAdd-panel"?: (...args: any[]) => any;
            "onTab-change"?: (...args: any[]) => any;
            "onRemove-panel"?: (...args: any[]) => any;
            "onSort-change"?: (...args: any[]) => any;
            "onOn-drag-tab"?: (...args: any[]) => any;
            "onUpdate:active"?: (...args: any[]) => any;
            onSort?: (...args: any[]) => any;
        }, {
            isMounted: import("vue").Ref<boolean>;
            panels: import("vue").Ref<any[]>;
            tabAdd(e: MouseEvent): void;
            tabChange(name: string): void;
            tabRemove(index: number, panel: any): void;
            tabSort(dragTabIndex: number, dropTabIndex: number, sortType: string): boolean;
            tabDrag(dragTabIndex: number, dragEvent: DragEvent): void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "drag" | "add" | "remove" | "add-panel" | "tab-change" | "remove-panel" | "sort-change" | "on-drag-tab" | "update:active" | "sort")[], string, {
            type: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
            active: string | number;
            extCls: string;
            closable: boolean;
            showHeader: boolean;
            sortType: "replace" | "insert";
            activeBarColor: string;
            activeBarSize: number;
            tabPosition: "top" | "right" | "left";
            addable: boolean;
            sortable: boolean;
            labelHeight: number;
            scrollStep: number;
            validateActive: boolean;
            changeOnHover: boolean;
            changeOnHoverDelay: number;
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
    } & Readonly<ExtractPropTypes<{
        active: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        type: import("vue-types").VueTypeDef<"card" | "border-card" | "unborder-card" | "card-tab" | "card-grid"> & {
            default: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
        };
        tabPosition: import("vue-types").VueTypeDef<"top" | "right" | "left"> & {
            default: "top" | "right" | "left";
        };
        closable: BooleanConstructor;
        addable: BooleanConstructor;
        sortable: BooleanConstructor;
        sortType: import("vue-types").VueTypeDef<"replace" | "insert"> & {
            default: "replace" | "insert";
        };
        labelHeight: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        scrollStep: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        validateActive: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showHeader: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        changeOnHover: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        changeOnHoverDelay: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        activeBarSize: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        activeBarColor: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
    }>> & {
        onDrag?: (...args: any[]) => any;
        onChange?: (...args: any[]) => any;
        onRemove?: (...args: any[]) => any;
        onAdd?: (...args: any[]) => any;
        "onAdd-panel"?: (...args: any[]) => any;
        "onTab-change"?: (...args: any[]) => any;
        "onRemove-panel"?: (...args: any[]) => any;
        "onSort-change"?: (...args: any[]) => any;
        "onOn-drag-tab"?: (...args: any[]) => any;
        "onUpdate:active"?: (...args: any[]) => any;
        onSort?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        isMounted: import("vue").Ref<boolean>;
        panels: import("vue").Ref<any[]>;
        tabAdd(e: MouseEvent): void;
        tabChange(name: string): void;
        tabRemove(index: number, panel: any): void;
        tabSort(dragTabIndex: number, dropTabIndex: number, sortType: string): boolean;
        tabDrag(dragTabIndex: number, dragEvent: DragEvent): void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    active: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    type: import("vue-types").VueTypeDef<"card" | "border-card" | "unborder-card" | "card-tab" | "card-grid"> & {
        default: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
    };
    tabPosition: import("vue-types").VueTypeDef<"top" | "right" | "left"> & {
        default: "top" | "right" | "left";
    };
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    sortable: BooleanConstructor;
    sortType: import("vue-types").VueTypeDef<"replace" | "insert"> & {
        default: "replace" | "insert";
    };
    labelHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    scrollStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    validateActive: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showHeader: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    changeOnHover: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    changeOnHoverDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    activeBarSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    activeBarColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}>> & {
    onDrag?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onRemove?: (...args: any[]) => any;
    onAdd?: (...args: any[]) => any;
    "onAdd-panel"?: (...args: any[]) => any;
    "onTab-change"?: (...args: any[]) => any;
    "onRemove-panel"?: (...args: any[]) => any;
    "onSort-change"?: (...args: any[]) => any;
    "onOn-drag-tab"?: (...args: any[]) => any;
    "onUpdate:active"?: (...args: any[]) => any;
    onSort?: (...args: any[]) => any;
}, {
    isMounted: import("vue").Ref<boolean>;
    panels: import("vue").Ref<any[]>;
    tabAdd(e: MouseEvent): void;
    tabChange(name: string): void;
    tabRemove(index: number, panel: any): void;
    tabSort(dragTabIndex: number, dropTabIndex: number, sortType: string): boolean;
    tabDrag(dragTabIndex: number, dragEvent: DragEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "drag" | "add" | "remove" | "add-panel" | "tab-change" | "remove-panel" | "sort-change" | "on-drag-tab" | "update:active" | "sort")[], "change" | "drag" | "sort" | "add" | "remove" | "add-panel" | "tab-change" | "remove-panel" | "sort-change" | "on-drag-tab" | "update:active", {
    type: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
    active: string | number;
    extCls: string;
    closable: boolean;
    showHeader: boolean;
    sortType: "replace" | "insert";
    activeBarColor: string;
    activeBarSize: number;
    tabPosition: "top" | "right" | "left";
    addable: boolean;
    sortable: boolean;
    labelHeight: number;
    scrollStep: number;
    validateActive: boolean;
    changeOnHover: boolean;
    changeOnHoverDelay: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    TabPanel: import("vue").DefineComponent<{
        name: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        label: (import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        });
        closable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        visible: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        sortable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
        panel: (import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        });
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
        name: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        label: (import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        });
        closable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        visible: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        sortable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
        panel: (import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        });
    }>>, {
        label: string | ((...args: any[]) => any);
        name: string | number;
        disabled: boolean;
        visible: boolean;
        closable: boolean;
        panel: string | ((...args: any[]) => any);
        sortable: boolean;
    }>;
}>;
export { BkTab, TabPanel as BkTabPanel, SortTypeEnum, PositionEnum, };
export default BkTab;
