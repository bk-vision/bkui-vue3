declare const _default: import("vue").DefineComponent<{
    /** badge theme */
    theme: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /** Number to show in badge */
    count: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    position: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    radius: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    valLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** Show capped numeric value */
    overflowCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** Whether to show red dots with no content */
    dot: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /** 外部设置的 class name */
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, {
    numberCount: import("vue").ComputedRef<string | number>;
    handleHover: () => void;
    handleLeave: () => void;
    radiusStyle: import("vue").ComputedRef<{
        borderRadius: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hover" | "leave")[], "hover" | "leave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** badge theme */
    theme: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    /** Number to show in badge */
    count: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    position: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    radius: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    valLength: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** Show capped numeric value */
    overflowCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    /** Whether to show red dots with no content */
    dot: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    visible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    /** 外部设置的 class name */
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    onHover?: (...args: any[]) => any;
    onLeave?: (...args: any[]) => any;
}, {
    theme: string;
    visible: boolean;
    position: string;
    dot: boolean;
    extCls: string;
    count: string | number;
    radius: string;
    valLength: number;
    overflowCount: number;
}>;
export default _default;
