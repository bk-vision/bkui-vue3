declare const BkTable: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: any[];
            pagination: boolean | {
                [key: string]: any;
            };
            height: string | number;
            maxHeight: string | number;
            border: string | ("col" | "none" | "horizontal" | "row" | "outer")[];
            minHeight: string | number;
            columns: import("./props").Column[];
            headHeight: number;
            rowKey: any;
            scrollLoading: boolean | {
                [key: string]: any;
            };
            showOverflowTooltip: boolean | import("./props").IOverflowTooltip;
            columnPick: "disabled" | "single" | "multi";
            rowHeight: any;
            showHead: boolean;
            virtualEnabled: boolean;
            paginationHeihgt: number;
            remotePagination: boolean;
            emptyText: string;
            settings: boolean | {
                fields: import("./props").Field[] | (() => import("./props").Field[]);
                checked: string[] | (() => string[]);
                limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
                size: "small" | "large" | "medium";
                sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
                showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
            };
            rowClass: any;
            rowStyle: any;
            cellStyle: any;
            cellClass: any;
            reserveExpand: boolean;
            selectionKey: string;
            isSelectedFn: (...args: any[]) => any;
            asyncData: boolean;
            rowHover: import("./const").ROW_HOVER;
            defaultSort: import("./props").ISortOption;
            isRowSelectEnable: any;
            observerResize: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            data: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            columns: import("vue-types").VueTypeDef<import("./props").Column[]> & {
                default: () => import("./props").Column[];
            };
            activeColumn: import("vue-types").VueTypeDef<number | number[]>;
            columnPick: import("vue-types").VueTypeDef<"disabled" | "single" | "multi"> & {
                default: "disabled" | "single" | "multi";
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            minHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            rowHeight: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            headHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            showHead: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            thead: import("vue-types").VueTypeShape<import("./props").Thead>;
            virtualEnabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            border: import("vue-types").VueTypeDef<string | ("col" | "none" | "horizontal" | "row" | "outer")[]> & {
                default: string | (() => ("col" | "none" | "horizontal" | "row" | "outer")[]);
            };
            pagination: import("vue-types").VueTypeDef<boolean | {
                [key: string]: any;
            }> & {
                default: boolean | (() => {
                    [key: string]: any;
                });
            };
            paginationHeihgt: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            remotePagination: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            emptyText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            settings: import("vue-types").VueTypeDef<boolean | {
                fields: import("./props").Field[] | (() => import("./props").Field[]);
                checked: string[] | (() => string[]);
                limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
                size: "small" | "large" | "medium";
                sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
                showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
            }> & {
                default: boolean | (() => {
                    fields: import("./props").Field[] | (() => import("./props").Field[]);
                    checked: string[] | (() => string[]);
                    limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
                    size: "small" | "large" | "medium";
                    sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
                    showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
                });
            };
            rowClass: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            rowStyle: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            cellStyle: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            cellClass: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            scrollLoading: import("vue-types").VueTypeDef<boolean | {
                [key: string]: any;
            }> & {
                default: boolean | (() => {
                    [key: string]: any;
                });
            };
            reserveExpand: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            selectionKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            isSelectedFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            } & {
                default: (...args: any[]) => any;
            };
            rowKey: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
                default: boolean | (() => import("./props").IOverflowTooltip);
            };
            asyncData: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            rowHover: import("vue-types").VueTypeDef<import("./const").ROW_HOVER> & {
                default: import("./const").ROW_HOVER;
            };
            defaultSort: import("vue-types").VueTypeShape<import("./props").ISortOption> & {
                default: () => Partial<import("./props").ISortOption>;
            };
            isRowSelectEnable: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
            observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onSelect?: (...args: any[]) => any;
            onColumnPick?: (...args: any[]) => any;
            onColumnSort?: (...args: any[]) => any;
            onColumnFilter?: (...args: any[]) => any;
            onColFilterSave?: (...args: any[]) => any;
            onRowClick?: (...args: any[]) => any;
            onRowDblclick?: (...args: any[]) => any;
            onRowExpand?: (...args: any[]) => any;
            onPageLimitChange?: (...args: any[]) => any;
            onPageValueChange?: (...args: any[]) => any;
            onSettingChange?: (...args: any[]) => any;
            onScrollBottom?: (...args: any[]) => any;
            onSelectAll?: (...args: any[]) => any;
            onSelectionChange?: (...args: any[]) => any;
            onCellClick?: (...args: any[]) => any;
            onCellDblclick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "data" | "pagination" | "height" | "maxHeight" | "border" | "minHeight" | "columns" | "headHeight" | "rowKey" | "scrollLoading" | "showOverflowTooltip" | "columnPick" | "rowHeight" | "showHead" | "virtualEnabled" | "paginationHeihgt" | "remotePagination" | "emptyText" | "settings" | "rowClass" | "rowStyle" | "cellStyle" | "cellClass" | "reserveExpand" | "selectionKey" | "isSelectedFn" | "asyncData" | "rowHover" | "defaultSort" | "isRowSelectEnable" | "observerResize">;
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
        $emit: ((event: import("./const").EMIT_EVENTS.COLUMN_PICK, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.COLUMN_SORT, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.COLUMN_FILTER, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.COLUMN_FILTER_SAVE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.ROW_CLICK, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.ROW_DBL_CLICK, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.ROW_EXPAND_CLICK, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.PAGE_LIMIT_CHANGE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.PAGE_VALUE_CHANGE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.SETTING_CHANGE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.SCROLL_BOTTOM, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.ROW_SELECT, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.ROW_SELECT_ALL, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.ROW_SELECT_CHANGE, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.CELL_CLICK, ...args: any[]) => void) & ((event: import("./const").EMIT_EVENTS.CELL_DBL_CLICK, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: import("vue-types").VueTypeDef<any[]> & {
                default: () => any[];
            };
            columns: import("vue-types").VueTypeDef<import("./props").Column[]> & {
                default: () => import("./props").Column[];
            };
            activeColumn: import("vue-types").VueTypeDef<number | number[]>;
            columnPick: import("vue-types").VueTypeDef<"disabled" | "single" | "multi"> & {
                default: "disabled" | "single" | "multi";
            };
            height: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            minHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            maxHeight: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            rowHeight: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            headHeight: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            showHead: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            thead: import("vue-types").VueTypeShape<import("./props").Thead>;
            virtualEnabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            border: import("vue-types").VueTypeDef<string | ("col" | "none" | "horizontal" | "row" | "outer")[]> & {
                default: string | (() => ("col" | "none" | "horizontal" | "row" | "outer")[]);
            };
            pagination: import("vue-types").VueTypeDef<boolean | {
                [key: string]: any;
            }> & {
                default: boolean | (() => {
                    [key: string]: any;
                });
            };
            paginationHeihgt: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            remotePagination: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            emptyText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            settings: import("vue-types").VueTypeDef<boolean | {
                fields: import("./props").Field[] | (() => import("./props").Field[]);
                checked: string[] | (() => string[]);
                limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
                size: "small" | "large" | "medium";
                sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
                showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
            }> & {
                default: boolean | (() => {
                    fields: import("./props").Field[] | (() => import("./props").Field[]);
                    checked: string[] | (() => string[]);
                    limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
                    size: "small" | "large" | "medium";
                    sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
                    showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
                });
            };
            rowClass: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            rowStyle: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            cellStyle: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            cellClass: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            scrollLoading: import("vue-types").VueTypeDef<boolean | {
                [key: string]: any;
            }> & {
                default: boolean | (() => {
                    [key: string]: any;
                });
            };
            reserveExpand: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            selectionKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            isSelectedFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            } & {
                default: (...args: any[]) => any;
            };
            rowKey: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
                default: boolean | (() => import("./props").IOverflowTooltip);
            };
            asyncData: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            rowHover: import("vue-types").VueTypeDef<import("./const").ROW_HOVER> & {
                default: import("./const").ROW_HOVER;
            };
            defaultSort: import("vue-types").VueTypeShape<import("./props").ISortOption> & {
                default: () => Partial<import("./props").ISortOption>;
            };
            isRowSelectEnable: import("vue-types").VueTypeDef<any> & {
                default: any;
            };
            resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
            observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onSelect?: (...args: any[]) => any;
            onColumnPick?: (...args: any[]) => any;
            onColumnSort?: (...args: any[]) => any;
            onColumnFilter?: (...args: any[]) => any;
            onColFilterSave?: (...args: any[]) => any;
            onRowClick?: (...args: any[]) => any;
            onRowDblclick?: (...args: any[]) => any;
            onRowExpand?: (...args: any[]) => any;
            onPageLimitChange?: (...args: any[]) => any;
            onPageValueChange?: (...args: any[]) => any;
            onSettingChange?: (...args: any[]) => any;
            onScrollBottom?: (...args: any[]) => any;
            onSelectAll?: (...args: any[]) => any;
            onSelectionChange?: (...args: any[]) => any;
            onCellClick?: (...args: any[]) => any;
            onCellDblclick?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            columnPick: (..._args: any[]) => boolean;
            columnFilter: (..._args: any[]) => boolean;
            columnSort: (..._args: any[]) => boolean;
            colFilterSave: (..._args: any[]) => boolean;
            rowClick: (..._args: any[]) => boolean;
            rowDblclick: (..._args: any[]) => boolean;
            rowExpand: (..._args: any[]) => boolean;
            select: (..._args: any[]) => boolean;
            selectAll: (..._args: any[]) => boolean;
            selectionChange: (..._args: any[]) => boolean;
            pageLimitChange: (..._args: any[]) => boolean;
            pageValueChange: (..._args: any[]) => boolean;
            settingChange: (..._args: any[]) => boolean;
            scrollBottom: (..._args: any[]) => boolean;
            cellClick: (..._args: any[]) => boolean;
            cellDblclick: (..._args: any[]) => boolean;
        }, string, {
            data: any[];
            pagination: boolean | {
                [key: string]: any;
            };
            height: string | number;
            maxHeight: string | number;
            border: string | ("col" | "none" | "horizontal" | "row" | "outer")[];
            minHeight: string | number;
            columns: import("./props").Column[];
            headHeight: number;
            rowKey: any;
            scrollLoading: boolean | {
                [key: string]: any;
            };
            showOverflowTooltip: boolean | import("./props").IOverflowTooltip;
            columnPick: "disabled" | "single" | "multi";
            rowHeight: any;
            showHead: boolean;
            virtualEnabled: boolean;
            paginationHeihgt: number;
            remotePagination: boolean;
            emptyText: string;
            settings: boolean | {
                fields: import("./props").Field[] | (() => import("./props").Field[]);
                checked: string[] | (() => string[]);
                limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
                size: "small" | "large" | "medium";
                sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
                showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
            };
            rowClass: any;
            rowStyle: any;
            cellStyle: any;
            cellClass: any;
            reserveExpand: boolean;
            selectionKey: string;
            isSelectedFn: (...args: any[]) => any;
            asyncData: boolean;
            rowHover: import("./const").ROW_HOVER;
            defaultSort: import("./props").ISortOption;
            isRowSelectEnable: any;
            observerResize: boolean;
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
        data: import("vue-types").VueTypeDef<any[]> & {
            default: () => any[];
        };
        columns: import("vue-types").VueTypeDef<import("./props").Column[]> & {
            default: () => import("./props").Column[];
        };
        activeColumn: import("vue-types").VueTypeDef<number | number[]>;
        columnPick: import("vue-types").VueTypeDef<"disabled" | "single" | "multi"> & {
            default: "disabled" | "single" | "multi";
        };
        height: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        minHeight: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        maxHeight: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        rowHeight: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        headHeight: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        showHead: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        thead: import("vue-types").VueTypeShape<import("./props").Thead>;
        virtualEnabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        border: import("vue-types").VueTypeDef<string | ("col" | "none" | "horizontal" | "row" | "outer")[]> & {
            default: string | (() => ("col" | "none" | "horizontal" | "row" | "outer")[]);
        };
        pagination: import("vue-types").VueTypeDef<boolean | {
            [key: string]: any;
        }> & {
            default: boolean | (() => {
                [key: string]: any;
            });
        };
        paginationHeihgt: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        remotePagination: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        emptyText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        settings: import("vue-types").VueTypeDef<boolean | {
            fields: import("./props").Field[] | (() => import("./props").Field[]);
            checked: string[] | (() => string[]);
            limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
            size: "small" | "large" | "medium";
            sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
            showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
        }> & {
            default: boolean | (() => {
                fields: import("./props").Field[] | (() => import("./props").Field[]);
                checked: string[] | (() => string[]);
                limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
                size: "small" | "large" | "medium";
                sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
                showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
            });
        };
        rowClass: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        rowStyle: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        cellStyle: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        cellClass: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        scrollLoading: import("vue-types").VueTypeDef<boolean | {
            [key: string]: any;
        }> & {
            default: boolean | (() => {
                [key: string]: any;
            });
        };
        reserveExpand: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        selectionKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        isSelectedFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        rowKey: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
            default: boolean | (() => import("./props").IOverflowTooltip);
        };
        asyncData: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        rowHover: import("vue-types").VueTypeDef<import("./const").ROW_HOVER> & {
            default: import("./const").ROW_HOVER;
        };
        defaultSort: import("vue-types").VueTypeShape<import("./props").ISortOption> & {
            default: () => Partial<import("./props").ISortOption>;
        };
        isRowSelectEnable: import("vue-types").VueTypeDef<any> & {
            default: any;
        };
        resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
        observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onSelect?: (...args: any[]) => any;
        onColumnPick?: (...args: any[]) => any;
        onColumnSort?: (...args: any[]) => any;
        onColumnFilter?: (...args: any[]) => any;
        onColFilterSave?: (...args: any[]) => any;
        onRowClick?: (...args: any[]) => any;
        onRowDblclick?: (...args: any[]) => any;
        onRowExpand?: (...args: any[]) => any;
        onPageLimitChange?: (...args: any[]) => any;
        onPageValueChange?: (...args: any[]) => any;
        onSettingChange?: (...args: any[]) => any;
        onScrollBottom?: (...args: any[]) => any;
        onSelectAll?: (...args: any[]) => any;
        onSelectionChange?: (...args: any[]) => any;
        onCellClick?: (...args: any[]) => any;
        onCellDblclick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    columns: import("vue-types").VueTypeDef<import("./props").Column[]> & {
        default: () => import("./props").Column[];
    };
    activeColumn: import("vue-types").VueTypeDef<number | number[]>;
    columnPick: import("vue-types").VueTypeDef<"disabled" | "single" | "multi"> & {
        default: "disabled" | "single" | "multi";
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    minHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    maxHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    rowHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    headHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    showHead: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    thead: import("vue-types").VueTypeShape<import("./props").Thead>;
    virtualEnabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    border: import("vue-types").VueTypeDef<string | ("col" | "none" | "horizontal" | "row" | "outer")[]> & {
        default: string | (() => ("col" | "none" | "horizontal" | "row" | "outer")[]);
    };
    pagination: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    paginationHeihgt: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    remotePagination: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    emptyText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    settings: import("vue-types").VueTypeDef<boolean | {
        fields: import("./props").Field[] | (() => import("./props").Field[]);
        checked: string[] | (() => string[]);
        limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
        size: "small" | "large" | "medium";
        sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
        showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
    }> & {
        default: boolean | (() => {
            fields: import("./props").Field[] | (() => import("./props").Field[]);
            checked: string[] | (() => string[]);
            limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
            size: "small" | "large" | "medium";
            sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
            showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
        });
    };
    rowClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    rowStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    cellStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    cellClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    scrollLoading: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    reserveExpand: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    selectionKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isSelectedFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    rowKey: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
        default: boolean | (() => import("./props").IOverflowTooltip);
    };
    asyncData: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    rowHover: import("vue-types").VueTypeDef<import("./const").ROW_HOVER> & {
        default: import("./const").ROW_HOVER;
    };
    defaultSort: import("vue-types").VueTypeShape<import("./props").ISortOption> & {
        default: () => Partial<import("./props").ISortOption>;
    };
    isRowSelectEnable: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
    observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onSelect?: (...args: any[]) => any;
    onColumnPick?: (...args: any[]) => any;
    onColumnSort?: (...args: any[]) => any;
    onColumnFilter?: (...args: any[]) => any;
    onColFilterSave?: (...args: any[]) => any;
    onRowClick?: (...args: any[]) => any;
    onRowDblclick?: (...args: any[]) => any;
    onRowExpand?: (...args: any[]) => any;
    onPageLimitChange?: (...args: any[]) => any;
    onPageValueChange?: (...args: any[]) => any;
    onSettingChange?: (...args: any[]) => any;
    onScrollBottom?: (...args: any[]) => any;
    onSelectAll?: (...args: any[]) => any;
    onSelectionChange?: (...args: any[]) => any;
    onCellClick?: (...args: any[]) => any;
    onCellDblclick?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    columnPick: (..._args: any[]) => boolean;
    columnFilter: (..._args: any[]) => boolean;
    columnSort: (..._args: any[]) => boolean;
    colFilterSave: (..._args: any[]) => boolean;
    rowClick: (..._args: any[]) => boolean;
    rowDblclick: (..._args: any[]) => boolean;
    rowExpand: (..._args: any[]) => boolean;
    select: (..._args: any[]) => boolean;
    selectAll: (..._args: any[]) => boolean;
    selectionChange: (..._args: any[]) => boolean;
    pageLimitChange: (..._args: any[]) => boolean;
    pageValueChange: (..._args: any[]) => boolean;
    settingChange: (..._args: any[]) => boolean;
    scrollBottom: (..._args: any[]) => boolean;
    cellClick: (..._args: any[]) => boolean;
    cellDblclick: (..._args: any[]) => boolean;
}, string, {
    data: any[];
    pagination: boolean | {
        [key: string]: any;
    };
    height: string | number;
    maxHeight: string | number;
    border: string | ("col" | "none" | "horizontal" | "row" | "outer")[];
    minHeight: string | number;
    columns: import("./props").Column[];
    headHeight: number;
    rowKey: any;
    scrollLoading: boolean | {
        [key: string]: any;
    };
    showOverflowTooltip: boolean | import("./props").IOverflowTooltip;
    columnPick: "disabled" | "single" | "multi";
    rowHeight: any;
    showHead: boolean;
    virtualEnabled: boolean;
    paginationHeihgt: number;
    remotePagination: boolean;
    emptyText: string;
    settings: boolean | {
        fields: import("./props").Field[] | (() => import("./props").Field[]);
        checked: string[] | (() => string[]);
        limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
        size: "small" | "large" | "medium";
        sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
        showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
    };
    rowClass: any;
    rowStyle: any;
    cellStyle: any;
    cellClass: any;
    reserveExpand: boolean;
    selectionKey: string;
    isSelectedFn: (...args: any[]) => any;
    asyncData: boolean;
    rowHover: import("./const").ROW_HOVER;
    defaultSort: import("./props").ISortOption;
    isRowSelectEnable: any;
    observerResize: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkTable;
declare const BkColumn: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
            showOverflowTooltip: boolean | import("./props").IOverflowTooltip;
            resizable: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
                default: boolean | (() => import("./props").IOverflowTooltip);
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "fixed" | "filter" | "sort" | "minWidth" | "columnKey" | "showOverflowTooltip" | "resizable">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
                default: boolean | (() => import("./props").IOverflowTooltip);
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
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
            showOverflowTooltip: boolean | import("./props").IOverflowTooltip;
            resizable: boolean;
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
        showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
            default: boolean | (() => import("./props").IOverflowTooltip);
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
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
        default: boolean | (() => import("./props").IOverflowTooltip);
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
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
    showOverflowTooltip: boolean | import("./props").IOverflowTooltip;
    resizable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export { BkColumn };
