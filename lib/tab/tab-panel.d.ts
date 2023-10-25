declare const _default: import("vue").DefineComponent<{
    name: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    label: (import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    });
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    sortable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    panel: (import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    });
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    label: (import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    });
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    sortable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    panel: (import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    }) | (import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    });
}>>, {
    label: string | ((...args: any[]) => any);
    name: string | number;
    disabled: boolean;
    visible: boolean;
    closable: boolean;
    panel: string | ((...args: any[]) => any);
    sortable: boolean;
}>;
export default _default;
