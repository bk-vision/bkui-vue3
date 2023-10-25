declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showHeader: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showFooter: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    collapseStatus: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    border: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableHeaderStyle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    position: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isEdit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {
    collapseActive: import("vue").Ref<boolean>;
    showInput: import("vue").Ref<boolean>;
    renderTitle: import("vue").Ref<string>;
    handleCollapse: () => void;
    saveEdit: () => void;
    clickEdit: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:collapseStatus" | "edit")[], "update:collapseStatus" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    showHeader: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showFooter: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    collapseStatus: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    border: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableHeaderStyle: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    position: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isEdit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    "onUpdate:collapseStatus"?: (...args: any[]) => any;
    onEdit?: (...args: any[]) => any;
}, {
    title: string;
    position: string;
    border: boolean;
    showHeader: boolean;
    showFooter: boolean;
    collapseStatus: boolean;
    disableHeaderStyle: boolean;
    isEdit: boolean;
    isCollapse: boolean;
}>;
export default _default;
