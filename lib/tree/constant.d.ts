export declare enum EVENTS {
    NODE_CLICK = "nodeClick",
    NODE_COLLAPSE = "nodeCollapse",
    NODE_EXPAND = "nodeExpand",
    NODE_CHECKED = "nodeChecked",
    NODE_DRAG_START = "nodeDragStart",
    NODE_DRAG_OVER = "nodeDragOver",
    NODE_DRAG_LEAVE = "nodeDragLeave",
    NODE_DROP = "nodeDrop"
}
export declare const TreeEmitEventsType: {
    nodeClick: (..._args: any[]) => boolean;
    nodeCollapse: (..._args: any[]) => boolean;
    nodeExpand: (..._args: any[]) => boolean;
    nodeChecked: (..._args: any[]) => boolean;
    nodeDragStart: (..._args: any[]) => boolean;
    nodeDragOver: (..._args: any[]) => boolean;
    nodeDragLeave: (..._args: any[]) => boolean;
    nodeDrop: (..._args: any[]) => boolean;
};
/**
 * 节点扩展属性
 */
export declare const enum NODE_ATTRIBUTES {
    DEPTH = "__depth",
    INDEX = "__index",
    UUID = "__uuid",
    PARENT_ID = "__parent_id",
    HAS_CHILD = "__has_child",
    PATH = "__path",
    IS_ROOT = "__is_root",
    ORDER = "__order",
    IS_OPEN = "__is_open",
    IS_CHECKED = "__is_checked",
    IS_SELECTED = "__is_selected",
    IS_ASYNC_INIT = "__is_async_init",
    IS_MATCH = "__is_match",
    IS_NULL = "__IS_NULL",
    IS_CACHED = "__is_cached",
    IS_ASYNC = "__is_async",
    IS_LOADING = "__is_loading",
    TREE_NODE_ATTR = "__attr__"
}
export declare const NODE_SOURCE_ATTRS: {
    __is_open: string;
    __is_selected: string;
    __is_match: string;
    __has_child: string;
    __is_checked: string;
    __is_async: string;
    __is_loading: string;
    __is_root: string;
};
/**
 * 节点点击可执行行为配置
 */
export declare enum NodeContentActionEnum {
    CLICK = "click",
    SELECTED = "selected",
    EXPAND = "expand",
    COLLAPSE = "collapse"
}
