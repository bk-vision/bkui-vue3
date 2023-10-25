declare const _default: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeValidableDef<any>;
    label: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {
    selected: import("vue").ComputedRef<boolean>;
    multiple: import("vue").ComputedRef<boolean>;
    isHover: import("vue").ComputedRef<boolean>;
    showSelectedIcon: import("vue").ComputedRef<boolean>;
    handleOptionClick: () => void;
    handleMouseEnter: () => void;
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: import("vue-types").VueTypeValidableDef<any>;
    label: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>>, {
    label: string | number;
    disabled: boolean;
}>;
export default _default;
