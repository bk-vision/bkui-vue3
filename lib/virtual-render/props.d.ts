import { ExtractPropTypes } from 'vue';
export declare const virtualRenderProps: {
    onContentScroll: FunctionConstructor;
    /** 传入原始数据源 */
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    /**
     * 是否启用此功能
     * 如果设置为false，则此组件只会渲染两层指定的 容器，默认渲染两层 div
     * 设置为true才会启用所有的虚拟渲染 & 滚动相关计算
     * 此属性设置为了兼容需要按需开启\关闭虚拟渲染场景，避免外层设计两套样式架构
     * Note: 目前此属性不支持动态修改
     */
    enabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 是否启用内置的Scroll Listener
     * 当启用虚拟滚动时（enabled = true），滚动监听为内置生效
     * 只有当（enabled = false)时此配置项才生效
     */
    scrollEvent: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 每行数据高度
     * 默认为数值类型，默认高度 30px
     * 如果每行高度不一致，可为回调函数：(index: number, row: any[]): number => {}
     * 函数参数为当前行index & 当前行数据 row，row为数组，当不分组时，为当前行item
     * 如果有分组展示， index 为当前分组 index， row为数组，当前行分组所有 item 数据
     */
    lineHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    /** 整体最小高度 */
    minHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /**
     * 整体高度
     * 可设置具体值，如果设置为 100%，则组件会自动计算外层DOM元素offsetHeight，用于计算可渲染行数
     */
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    /**
     * 渲染区域宽度
     * 如果设置 100% 则自适应外层元素宽度
     */
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    /** 最外层元素ClassName */
    className: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    /** 内层层元素ClassName */
    contentClassName: import("vue-types").VueTypeDef<string | string[] | {
        [key: string]: any;
    } | {
        [key: string]: any;
    }[]> & {
        default: string | (() => {
            [key: string]: any;
        }) | (() => string[]) | (() => {
            [key: string]: any;
        }[]);
    };
    /** 内层元素样式 */
    contentStyle: import("vue-types").VueTypeValidableDef<{
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
    /** 用于自定义X轴滚动条样式 */
    scrollXName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /** 用于自定义Y轴滚动条样式 */
    scrollYName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /** 分组展示，一行数据可能有多条数据 */
    groupItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** 预加载行数，避免空白渲染 */
    preloadItemCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** 外层Dom元素需要渲染成的目标元素 */
    renderAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /** 内容层渲染成目标元素 */
    contentAs: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /** top 滚动填充 */
    scrollOffsetTop: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /**
     * 内置滚动位置
     * 可选：container （最外层容器），content（内容层容器）
     * Note: container 慎选，需要自己处理样式 & 位置
     */
    scrollPosition: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * 绝对高度 | 实际高估
     * 可选值： auto(根据行高和行数计算, LineHeight * List.length) number(外层给定高度，若为0，则不显示)
     */
    abosuteHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    /**
     * 滚动刷新计算间隔时间
     * 默认60 ms
     */
    throttleDelay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    rowKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
};
export declare type VirtualRenderProps = Readonly<ExtractPropTypes<typeof virtualRenderProps>>;
