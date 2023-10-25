declare const _default: import("vue").DefineComponent<{
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
}, {
    isMounted: import("vue").Ref<boolean>;
    panels: import("vue").Ref<any[]>;
    tabAdd(e: MouseEvent): void;
    tabChange(name: string): void;
    tabRemove(index: number, panel: any): void;
    tabSort(dragTabIndex: number, dropTabIndex: number, sortType: string): boolean;
    tabDrag(dragTabIndex: number, dragEvent: DragEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "drag" | "add" | "remove" | "add-panel" | "tab-change" | "remove-panel" | "sort-change" | "on-drag-tab" | "update:active" | "sort")[], "change" | "drag" | "sort" | "add" | "remove" | "add-panel" | "tab-change" | "remove-panel" | "sort-change" | "on-drag-tab" | "update:active", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>;
export default _default;
