declare const _default: import("vue").DefineComponent<{
    list: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    idFiled: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    titleField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    contentField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeDef<number | string[] | number[]>;
    accordion: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "after-leave" | "before-enter" | "item-click")[], "update:modelValue" | "after-leave" | "before-enter" | "item-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    idFiled: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    titleField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    contentField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    modelValue: import("vue-types").VueTypeDef<number | string[] | number[]>;
    accordion: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onAfter-leave"?: (...args: any[]) => any;
    "onBefore-enter"?: (...args: any[]) => any;
    "onItem-click"?: (...args: any[]) => any;
}, {
    list: any[];
    idFiled: string;
    titleField: string;
    contentField: string;
    accordion: boolean;
}>;
export default _default;
