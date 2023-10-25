export declare const propsCollapse: {
    /**
     * 渲染列表
     * 对象数组或者字符串数组，字符串数组默认会增加 name 字段，值为传入的字符串值
     */
    list: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    /**
     * ID字段
     */
    idFiled: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * Title 字段
     */
    titleField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * Content 字段，默认渲染内容，不配置时自动读取 content 字段
     * 自定义配置slot时可以忽略
     */
    contentField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /**
     * 当前激活Index
     */
    modelValue: import("vue-types").VueTypeDef<number | string[] | number[]>;
    /**
     * 是否使用手风琴效果
     */
    accordion: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
};
export declare const CollapsePanelEventProps: {
    itemClick: {
        type: FunctionConstructor;
    };
};
export declare const propsCollapsePanel: {
    itemClick: {
        type: FunctionConstructor;
    };
    name: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    content: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isFormList: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    modelValue: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    alone: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
};
