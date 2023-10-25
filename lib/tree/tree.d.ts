import { TreePropTypes as defineTypes } from './props';
export declare type TreePropTypes = defineTypes;
declare const _default: import("vue").DefineComponent<{
    data: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    label: import("vue-types").VueTypeDef<any>;
    nodeKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    children: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    indent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    lineHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    levelLine: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    virtualRender: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    prefixIcon: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    async: import("vue-types").VueTypeShape<{
        callback: (item: any, cb: any) => Promise<any>;
        cache: Boolean;
        deepAutoOpen?: string;
    }>;
    offsetLeft: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    search: import("vue-types").VueTypeDef<string | number | boolean | import("./props").SearchOption> & {
        default: string | number | boolean | (() => import("./props").SearchOption);
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
    dragSort: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    selectable: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    disabledFolderSelectable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showCheckbox: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showNodeTypeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    selected: import("vue-types").VueTypeDef<string | number | {
        [key: string]: any;
    }>;
    autoCheckChildren: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoOpenParentNode: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    expandAll: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    nodeContentAction: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    nodeClick: (..._args: any[]) => boolean;
    nodeCollapse: (..._args: any[]) => boolean;
    nodeExpand: (..._args: any[]) => boolean;
    nodeChecked: (..._args: any[]) => boolean;
    nodeDragStart: (..._args: any[]) => boolean;
    nodeDragOver: (..._args: any[]) => boolean;
    nodeDragLeave: (..._args: any[]) => boolean;
    nodeDrop: (..._args: any[]) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    label: import("vue-types").VueTypeDef<any>;
    nodeKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    children: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    indent: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    lineHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    levelLine: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    virtualRender: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    prefixIcon: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    async: import("vue-types").VueTypeShape<{
        callback: (item: any, cb: any) => Promise<any>;
        cache: Boolean;
        deepAutoOpen?: string;
    }>;
    offsetLeft: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    search: import("vue-types").VueTypeDef<string | number | boolean | import("./props").SearchOption> & {
        default: string | number | boolean | (() => import("./props").SearchOption);
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
    dragSort: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    selectable: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    disabledFolderSelectable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showCheckbox: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showNodeTypeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    selected: import("vue-types").VueTypeDef<string | number | {
        [key: string]: any;
    }>;
    autoCheckChildren: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoOpenParentNode: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    expandAll: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    nodeContentAction: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
}>> & {
    onNodeClick?: (...args: any[]) => any;
    onNodeCollapse?: (...args: any[]) => any;
    onNodeExpand?: (...args: any[]) => any;
    onNodeChecked?: (...args: any[]) => any;
    onNodeDragStart?: (...args: any[]) => any;
    onNodeDragOver?: (...args: any[]) => any;
    onNodeDragLeave?: (...args: any[]) => any;
    onNodeDrop?: (...args: any[]) => any;
}, {
    data: any[];
    search: string | number | boolean | import("./props").SearchOption;
    draggable: boolean;
    lineHeight: number;
    prefixIcon: any;
    children: string;
    offsetLeft: number;
    emptyText: string;
    nodeKey: string;
    indent: number;
    levelLine: any;
    virtualRender: boolean;
    disableDrag: (...args: any[]) => any;
    disableDrop: (...args: any[]) => any;
    dragSort: boolean;
    selectable: any;
    disabledFolderSelectable: boolean;
    showCheckbox: boolean;
    showNodeTypeIcon: boolean;
    autoCheckChildren: boolean;
    autoOpenParentNode: boolean;
    expandAll: boolean;
    nodeContentAction: any;
}>;
export default _default;
