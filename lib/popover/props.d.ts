import { ExtractPropTypes } from 'vue';
declare type IAxesOffsets = {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number | null;
};
export declare const PopoverProps: {
    onAfterHidden: FunctionConstructor;
    onAfterShow: FunctionConstructor;
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    always: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    maxHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    content: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    /**
     * 组件显示位置
     */
    placement: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    theme: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * 触发方式
     * 支持 click hover manual
     * manual： 通过isShow控制显示、隐藏
     */
    trigger: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    /**
     * content 渲染方式
     */
    renderType: import("vue-types").VueTypeDef<"auto" | "shown"> & {
        default: "auto" | "shown";
    };
    arrow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    padding: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    offset: import("vue-types").VueTypeDef<number | IAxesOffsets> & {
        default: number | (() => IAxesOffsets);
    };
    /**
     * 弹出内容绑定元素
     */
    boundary: import("vue-types").VueTypeDef<string | HTMLElement>;
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    disableTeleport: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     *  chooses the placement that has the most space available automatically
     */
    autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 当有滚动条，滚动出可是范围时自动隐藏pop
     */
    autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 是否禁用clickoutside
     */
    disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 是否禁用样式的transform更新位移
     */
    disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /**
     * 自定义 reference
     */
    reference: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    /**
     * 兼容v1版本遗留配置
     * 不建议使用
     */
    modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    /**
     * popover显示和隐藏的延时时间
     */
    popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
        default: number | (() => number[]);
    };
};
export declare type PopoverPropTypes = Readonly<ExtractPropTypes<typeof PopoverProps>>;
export {};
