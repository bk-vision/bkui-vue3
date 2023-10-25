import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
}, {
    activeRef: import("vue").Ref<HTMLElement>;
    activeBarStyle: import("vue").ComputedRef<CSSProperties>;
    navs: import("vue").ComputedRef<any[]>;
    dragenterIndex: import("vue").Ref<number>;
    dragStartIndex: import("vue").Ref<number>;
    draggingEle: import("vue").Ref<string>;
    guid: string;
    /**
     * @description  判断拖动的元素是否是在同一个tab。
     *               使用guid，相比 el1.parentNode === el2.parentNode 判断，性能要高
     * @param e {event}  触发的元素
     * @return {boolean}
     */
    handleTabAdd(e: any): void;
    dragstart(index: number, $event: DragEvent): void;
    dragenter(index: any): void;
    dragend(): void;
    drop(index: any, sortType: any): boolean;
    handleTabChange(name: string): void;
    handleTabRemove(index: number, panel: any): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
}>>, {
    type: "card" | "border-card" | "unborder-card" | "card-tab" | "card-grid";
    active: string | number;
    closable: boolean;
    sortType: "replace" | "insert";
    tabAdd: Function;
    tabChange: Function;
    tabRemove: Function;
    tabSort: Function;
    tabDrag: Function;
    activeBarColor: string;
    activeBarSize: number;
    panels: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
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
