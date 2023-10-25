import { ExtractPropTypes } from 'vue';
import { ROW_HOVER, SORT_OPTION } from './const';
export declare enum SortScope {
    CURRENT = "current",
    ALL = "all"
}
export declare type ColumnFilterListItem = {
    text?: string;
    value?: string;
};
export declare enum OverflowModeEnum {
    STATIC = "static",
    AUTO = "auto"
}
export declare const overflowModeType: import("vue-types").VueTypeDef<"auto" | "static">;
export declare enum ColumnTypeEnum {
    SELECTION = "selection",
    INDEX = "index",
    EXPAND = "expand",
    NONE = "none"
}
export declare const columnType: import("vue-types").VueTypeDef<"none" | "selection" | "index" | "expand">;
export declare enum FullEnum {
    FULL = "full",
    FUZZY = "fuzzy"
}
export declare const fullType: import("vue-types").VueTypeDef<"full" | "fuzzy">;
export declare enum SettingSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export declare const settingSizeType: import("vue-types").VueTypeDef<"small" | "large" | "medium">;
export declare enum FixedEnum {
    LEFT = "left",
    RIGHT = "right"
}
export declare const fixedType: import("vue-types").VueTypeDef<"right" | "left">;
export declare type IOverflowTooltip = {
    content: string | Function;
    disabled?: boolean;
    watchCellResize?: boolean;
    mode?: `${OverflowModeEnum}`;
};
export declare type ISortOption = {
    [key: string]: SORT_OPTION;
};
export declare enum ColumnPickEnum {
    MULTI = "multi",
    SINGLE = "single",
    DISABLED = "disabled"
}
export declare enum ResizerWay {
    DEBOUNCE = "debounce",
    THROTTLE = "throttle"
}
export declare const IColumnType: {
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
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | IOverflowTooltip> & {
        default: boolean | (() => IOverflowTooltip);
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
};
export declare const tableProps: {
    /**
     * 渲染列表
     */
    data: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    /**
     * Table 列渲染
     */
    columns: import("vue-types").VueTypeDef<Column[]> & {
        default: () => Column[];
    };
    /**
     * 当前选中列
     * 当设置选中多列时（columnPick = multi），配置为数组[index1, index2, index3]，只能选中单列时，可以为数值或者数组[index]
     */
    activeColumn: import("vue-types").VueTypeDef<number | number[]>;
    /**
     * 表格列选中方式
     * 支持：单列（single），多列（multi），禁用（disabled）
     * 默认：disabled
     */
    columnPick: import("vue-types").VueTypeDef<"disabled" | "single" | "multi"> & {
        default: "disabled" | "single" | "multi";
    };
    /**
     * 设置表格高度
     * 默认：auto 根据行数自动填充高度
     * 100%，依赖初始化时父级容器高度
     */
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    /**
     * 设置表格最小高度
     * 默认：300
     */
    minHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    /**
     * 设置表格最d大高度
     * 默认：auto，依赖外层高度
     */
    maxHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    /**
     * 行高，可以为固定数值类型
     * 可以是函数，返回当前行的高度，返回值为数值类型
     */
    rowHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * Thead行高，可以为固定数值类型
     */
    headHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /**
     * 是否显示Head
     */
    showHead: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * table header config
     */
    thead: import("vue-types").VueTypeShape<Thead>;
    /**
     * 是否启用虚拟渲染 & 滚动
     * 当数据量很大时，启用虚拟渲染可以解决压面卡顿问题
     */
    virtualEnabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 表格边框显示设置，可以是一个组合
     * 生效规则: 除非单独设置 none,否则会追加每个设置
     */
    border: import("vue-types").VueTypeDef<string | ("col" | "none" | "horizontal" | "row" | "outer")[]> & {
        default: string | (() => ("col" | "none" | "horizontal" | "row" | "outer")[]);
    };
    /**
     * 分页配置
     * 默认值为false，不启用分页
     * 设置为 true，启用分页功能，默认值参考分页组件 Pagination
     */
    pagination: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    /**
     * 分页组件高度
     * 在设置了分页配置之后才会生效
     * 用于配置分页组件的高度，在不同项目中，分页组件高度会影响表格高度计算
     * 这里设置为可配置项，避免自计算导致的性能问题以及不确定性样式问题
     */
    paginationHeihgt: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /**
     * 是否启用远程分页
     */
    remotePagination: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 空数据展示
     */
    emptyText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    /**
     * bk-table-setting-content
     */
    settings: import("vue-types").VueTypeDef<boolean | {
        fields: Field[] | (() => Field[]);
        checked: string[] | (() => string[]);
        limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
        size: "small" | "large" | "medium";
        sizeList: SizeItem[] | (object & (() => SizeItem[]));
        showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
    }> & {
        default: boolean | (() => {
            fields: Field[] | (() => Field[]);
            checked: string[] | (() => string[]);
            limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
            size: "small" | "large" | "medium";
            sizeList: SizeItem[] | (object & (() => SizeItem[]));
            showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
        });
    };
    /**
     * 行的 class 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style
     */
    rowClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style
     */
    rowStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style
     */
    cellStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className
     */
    cellClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 表格底部loading加载效果，可以配合表格scroll-bottom事件使用
     * 详细配置可参考bk-loading组件
     */
    scrollLoading: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    /**
     * 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的展开收起操作（需指定 row-key）
     */
    reserveExpand: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 仅对设置了selection的情况下生效
     * 用于初始化或者更新row已选中状态
     * 内部使用逻辑为：row[selectionKey]，可以为多级选择，但是多级选择只支持 row.child.child
     */
    selectionKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * 提供自定义判定当前行是否选中
     * 如果设置了此属性，其他判定均不生效
     * ({ row, cell, data }) => bool
     */
    isSelectedFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    /**
     * 行数据的 Key，用来优化 Table 的渲染
     * 此key用于渲染table row的key，便于大数据渲染时的性能优化
     * 在使用 reserve-selection, reserve-expand 功能的情况下，该属性是必填的。
     * 类型为 String 时，支持多层访问：user.info.id，同时支持 user.info[0].id
     */
    rowKey: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 当内容过长被隐藏时显示 tooltip, 此处为全局配置, 如果只配置此处，整个table都启用
     * column内部可以单个配置覆盖此配置
     */
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | IOverflowTooltip> & {
        default: boolean | (() => IOverflowTooltip);
    };
    /**
     * 为避免不必要的数据修改导致的不可控组件更新
     * 默认组件不会对传入组件的data进行任何修改
     * 设置此属性为true则会对源数据进行同步（如：启用selection，勾选时想要自动同步到源数据）
     * 目前只会对指定了selectionKey的情况下才会对指定的字段数据进行更新，同时需要指定 rowKey，保证匹配到的row是正确的目标对象
     */
    asyncData: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 鼠标划过行样式行为
     * @param { ROW_HOVER.AUTO }
     * @param { ROW_HOVER.HIGHLIGHT }
     */
    rowHover: import("vue-types").VueTypeDef<ROW_HOVER> & {
        default: ROW_HOVER;
    };
    /**
     * 默认的排序列的 prop 和顺序。它的 prop 属性指定默认的排序的列，order指定默认排序的顺序
     */
    defaultSort: import("vue-types").VueTypeShape<ISortOption> & {
        default: () => Partial<ISortOption>;
    };
    /**
     * 配合 column selection 使用
     * 用于配置渲染行数据的勾选框是否可用
     * 可以直接为 true|false，全部启用或者禁用
     * 如果是函数，则返回 true|false
     * ({ row, index, isCheckAll }) => boolean
     */
    isRowSelectEnable: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 当外层容器尺寸改变时，当前组件用什么方式进行重新计算
     * 默认为 throttle，按照指定频率重新计算
     * 可选值：debounce，在指定时间范围内只执行一次重新计算
     */
    resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
    /**
     * 是否监表格尺寸变化而响应式重新计算渲染
     */
    observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
};
/**
 * 配置自定义行高选项
 */
export declare type SizeItem = {
    value?: string;
    label?: string;
    height?: number;
};
export declare type Settings = {
    fields?: Field[];
    checked?: string[];
    limit?: number;
    size?: string;
    sizeList?: SizeItem[];
    showLineHeight?: boolean;
};
export declare type Field = {
    label: string;
    field?: string;
    disabled?: boolean;
};
export declare type Column = {
    label: Function | string;
    field?: Function | string;
    render?: Function | string;
    width?: number | string;
    minWidth?: number | string;
    columnKey?: string;
    showOverflowTooltip?: boolean | IOverflowTooltip;
    type?: string;
    fixed?: string | boolean;
    resizable?: boolean;
    sort?: {
        sortFn?: Function;
        sortScope?: string;
        value?: string;
    } | boolean | string;
    filter?: {
        list?: any;
        filterFn?: Function;
    } | boolean | string;
    colspan?: Function | Number;
    rowspan?: Function | Number;
};
export declare type Thead = {
    height?: Number;
    isShow?: boolean;
    cellFn?: Function;
};
export declare type GroupColumn = {
    calcWidth?: number;
    resizeWidth?: number;
    isHidden?: boolean;
    listeners?: Map<string, any>;
} & Column;
export declare type Columns = ReadonlyArray<Column>;
export declare type TablePropTypes = Readonly<ExtractPropTypes<typeof tableProps>>;
export declare type IColumnActive = {
    index: number;
    active: boolean;
};
export declare type IReactiveProp = {
    activeColumns: IColumnActive[];
    rowActions: Record<string, any>;
    scrollTranslateY: Number;
    scrollTranslateX: Number;
    pos: Record<string, any>;
    settings: any;
    setting: any;
    defaultSort: Record<string, any>;
};
export declare type Colgroups = Column & {
    calcWidth: number;
    resizeWidth: number;
    listeners: Map<string, Function>;
};
