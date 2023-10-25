import { INode } from './interface';
declare const _default: import("vue").DefineComponent<{
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    store: import("vue-types").VueTypeValidableDef<{
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
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    suggestions: import("vue-types").VueTypeDef<INode[]>;
    isFiltering: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    searchKey: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    modelValue: import("vue-types").VueTypeDef<(string | number | string[])[]>;
}, {
    menus: {
        list: any[];
    };
    activePath: import("vue").Ref<any[]>;
    nodeExpandHandler: (node: INode) => void;
    isNodeInPath: (node: INode) => boolean;
    nodeEvent: (node: INode) => {
        onClick: (e: Event) => void;
        onMouseenter: () => void;
    };
    isCheckedNode: (node: INode, checkValue: (string | number | string[])[]) => any;
    checkValue: import("vue").Ref<(string | number | string[])[]>;
    checkNode: (node: INode, value: boolean) => void;
    iconRender: (node: any) => JSX.Element;
    panelWidth: string;
    panelHeight: string;
    searchPanelEvents: (node: INode) => {
        onClick: (e: Event) => void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    store: import("vue-types").VueTypeValidableDef<{
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
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    suggestions: import("vue-types").VueTypeDef<INode[]>;
    isFiltering: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    searchKey: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    modelValue: import("vue-types").VueTypeDef<(string | number | string[])[]>;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    width: string | number;
    height: string | number;
    separator: string;
    store: {
        [key: string]: any;
    };
    isFiltering: boolean;
    searchKey: string | number;
}>;
export default _default;
