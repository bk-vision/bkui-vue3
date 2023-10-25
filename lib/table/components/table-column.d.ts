import { Column } from '../props';
export declare type ITableColumn = Column & {
    prop?: string | Function;
};
declare const _default: import("vue").DefineComponent<{
    prop: import("vue-types").VueTypeDef<any>;
    label: import("vue-types").VueTypeDef<any>;
    field: import("vue-types").VueTypeDef<any>;
    render: import("vue-types").VueTypeDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    minWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    columnKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("../props").IOverflowTooltip> & {
        default: boolean | (() => import("../props").IOverflowTooltip);
    };
    type: import("vue-types").VueTypeDef<"none" | "selection" | "index" | "expand">;
    resizable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    fixed: import("vue-types").VueTypeDef<boolean | "right" | "left"> & {
        default: boolean | "right" | "left";
    };
    sort: import("vue-types").VueTypeDef<string | boolean | {
        sortFn: any;
        sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
    }> & {
        default: string | boolean | (() => {
            sortFn: any;
            sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
        });
    };
    filter: import("vue-types").VueTypeDef<string | boolean | {
        list: any[] | (object & (() => any[]));
        filterFn: any;
        match: "full" | "fuzzy";
        filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
    }> & {
        default: string | boolean | (() => {
            list: any[] | (object & (() => any[]));
            filterFn: any;
            match: "full" | "fuzzy";
            filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        });
    };
    colspan: import("vue-types").VueTypeDef<any>;
    rowspan: import("vue-types").VueTypeDef<any>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prop: import("vue-types").VueTypeDef<any>;
    label: import("vue-types").VueTypeDef<any>;
    field: import("vue-types").VueTypeDef<any>;
    render: import("vue-types").VueTypeDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    minWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    columnKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("../props").IOverflowTooltip> & {
        default: boolean | (() => import("../props").IOverflowTooltip);
    };
    type: import("vue-types").VueTypeDef<"none" | "selection" | "index" | "expand">;
    resizable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    fixed: import("vue-types").VueTypeDef<boolean | "right" | "left"> & {
        default: boolean | "right" | "left";
    };
    sort: import("vue-types").VueTypeDef<string | boolean | {
        sortFn: any;
        sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
    }> & {
        default: string | boolean | (() => {
            sortFn: any;
            sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
        });
    };
    filter: import("vue-types").VueTypeDef<string | boolean | {
        list: any[] | (object & (() => any[]));
        filterFn: any;
        match: "full" | "fuzzy";
        filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
    }> & {
        default: string | boolean | (() => {
            list: any[] | (object & (() => any[]));
            filterFn: any;
            match: "full" | "fuzzy";
            filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
            btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
            btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        });
    };
    colspan: import("vue-types").VueTypeDef<any>;
    rowspan: import("vue-types").VueTypeDef<any>;
}>>, {
    fixed: boolean | "right" | "left";
    filter: string | boolean | {
        list: any[] | (object & (() => any[]));
        filterFn: any;
        match: "full" | "fuzzy";
        filterScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        btnSave: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
        btnReset: (string | boolean | object | (() => string | boolean) | ((props: Record<string, unknown>) => string | boolean)) & (string | boolean);
    };
    sort: string | boolean | {
        sortFn: any;
        sortScope: (object | "all" | "current" | (() => "all" | "current") | ((props: Record<string, unknown>) => "all" | "current")) & ("all" | "current");
        value: (string | object | (() => string) | ((props: Record<string, unknown>) => string)) & string;
    };
    minWidth: string | number;
    columnKey: string;
    showOverflowTooltip: boolean | import("../props").IOverflowTooltip;
    resizable: boolean;
}>;
export default _default;
