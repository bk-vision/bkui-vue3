import { PropType, VNode } from 'vue';
export declare enum TabTypeEnum {
    CARD = "card",
    BORDER_CARD = "border-card",
    UNBORDER_CARD = "unborder-card",
    CARD_TAB = "card-tab",
    CARD_GRID = "card-grid"
}
export declare enum PositionEnum {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top"
}
export declare const TabPositionType: import("vue-types").VueTypeDef<"top" | "right" | "left"> & {
    default: "top" | "right" | "left";
};
export declare enum SortTypeEnum {
    REPLACE = "replace",
    INSERT = "insert"
}
export declare const SortTypeUnion: import("vue-types").VueTypeDef<"replace" | "insert"> & {
    default: "replace" | "insert";
};
export declare const tabNavEventProps: {
    tabAdd: {
        type: FunctionConstructor;
        default: () => any;
    };
    tabChange: {
        type: FunctionConstructor;
        default: (name: string) => string;
    };
    tabRemove: {
        type: FunctionConstructor;
        default: (name: string) => string;
    };
    tabSort: {
        type: FunctionConstructor;
        default: () => any;
    };
    tabDrag: {
        type: FunctionConstructor;
        default: () => any;
    };
};
export declare const tabEventProps: {
    add: {
        type: FunctionConstructor;
        default: () => any;
    };
    change: {
        type: FunctionConstructor;
        default: () => any;
    };
    remove: {
        type: FunctionConstructor;
        default: () => any;
    };
    sort: {
        type: FunctionConstructor;
        default: () => any;
    };
    drag: {
        type: FunctionConstructor;
        default: () => any;
    };
};
export declare const tabProps: {
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
};
export declare const tabNavProps: {
    tabAdd: {
        type: FunctionConstructor;
        default: () => any;
    };
    tabChange: {
        type: FunctionConstructor;
        default: (name: string) => string;
    };
    tabRemove: {
        type: FunctionConstructor;
        default: (name: string) => string;
    };
    tabSort: {
        type: FunctionConstructor;
        default: () => any;
    };
    tabDrag: {
        type: FunctionConstructor;
        default: () => any;
    };
    active: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    type: import("vue-types").VueTypeDef<"card" | "border-card" | "unborder-card" | "card-tab" | "card-grid"> & {
        default: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
    };
    activeBarColor: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    activeBarSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    panels: {
        type: PropType<VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]>;
        default: () => any[];
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
    validateActive: import("vue-types").VueTypeValidableDef<boolean> & {
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
};
export declare const tabPanelProps: {
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
};
