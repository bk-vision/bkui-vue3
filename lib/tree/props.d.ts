import { ExtractPropTypes } from 'vue';
/**
 * Tree Prop: prefixIcon function
 * @param {} isRoot 是否为分跟节点
 * @param {} hasChild 是否有孩子节点
 * @param {} isOpen 当前节点是否展开
 * @param {} renderType 当前渲染类型（action: 用来标识当前节点状态，展开 | 收起, node_type：节点类型，文件、文件夹）
 * @param {} item 当前节点数据
 */
export declare type IPrefixIcon = (isRoot: boolean, hasChild: boolean, isOpen: boolean, renderType: string, item: any) => any;
export declare const treeProps: {
    /**
     * 渲染列表
     */
    data: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    /**
     * 指定节点标签为节点对象的某个属性值
     */
    label: import("vue-types").VueTypeDef<any>;
    /**
     * 每个树节点用来作为唯一标识的属性，此标识应该是唯一的
     * 如果设置系统会默认自动生成唯一id
     */
    nodeKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * 子节点 Key, 用于读取子节点
     * 默认 children
     */
    children: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * 相邻级节点间的水平缩进，单位为像素
     */
    indent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /**
     * 设置行高
     */
    lineHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /**
     * 设置层级连线
     */
    levelLine: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 是否开启虚拟滚动
     * 默认虚拟滚动是开启的，数据量大的情况下有利于性能优化，可以通过设置 virtualRender = false 关闭虚拟滚动
     */
    virtualRender: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 当前节点标识图标
     * 默认 true
     */
    prefixIcon: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /**
     * 异步加载节点数据配置
     * @param callback 请求数据回调函数，函数返回 Promise
     * @param cache 是否缓存请求结果，默认为True，只有在第一次才会发起请求，若设置为false则每次都会发起请求
     */
    async: import("vue-types").VueTypeShape<AsyncOption>;
    /**
     * 每个节点偏移左侧距离
     */
    offsetLeft: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /**
     * 搜索配置
     * 可以为一个配置项 SearchOption
     * 或者直接为一个字符串，如果直接为字符串则模糊匹配此值
     */
    search: import("vue-types").VueTypeDef<string | number | boolean | SearchOption> & {
        default: string | number | boolean | (() => SearchOption);
    };
    emptyText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    draggable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableDrag: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    disableDrop: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    /**
     * 节点拖拽时可交换位置（开启拖拽可交换位置后将不支持改变层级）
     */
    dragSort: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 节点是否可以选中
     */
    selectable: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    disabledFolderSelectable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 是否支持多选
     */
    showCheckbox: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 是否显示节点类型Icon
     */
    showNodeTypeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 默认选中的节点id，selectable为false时无效
     */
    selected: import("vue-types").VueTypeDef<string | number | {
        [key: string]: any;
    }>;
    /**
     * 是否自动检查当前节点是否有子节点
     * 节点前面的展开收起Icon会根据判定值做改变
     * 如果需要自已控制，请设置为false
     */
    autoCheckChildren: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 如果设置了某一个叶子节点状态为展开，是否自动展开所有父级节点
     * 默认为true，如果设置为false，则每层状态需要自己控制
     */
    autoOpenParentNode: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 默认是否展开所有节点
     */
    expandAll: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 节点内容点击行为
     * 此处配置每个节点除了展开\收起箭头之外的内容块时的行为
     * 默认为 ['selected', 'expand', 'click']，点击内容块为选中当前节点
     */
    nodeContentAction: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
};
declare type AsyncOption = {
    callback: (item: any, cb: any) => Promise<any>;
    cache: Boolean;
    deepAutoOpen?: string;
};
export declare type SearchOption = {
    value: string | number | boolean;
    match: string | Function;
    resultType: string;
    openResultNode: boolean;
};
export declare type TreePropTypes = Readonly<ExtractPropTypes<typeof treeProps>>;
export {};
