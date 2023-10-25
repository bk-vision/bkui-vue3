declare const _default: import("vue").DefineComponent<{
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
    placement: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    theme: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    trigger: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
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
    offset: import("vue-types").VueTypeDef<number | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number;
    }> & {
        default: number | (() => {
            mainAxis?: number;
            crossAxis?: number;
            alignmentAxis?: number;
        });
    };
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
    autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    reference: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
        default: number | (() => number[]);
    };
}, {
    boundary: import("vue").Ref<any>;
    arrow: boolean;
    refDefaultReference: import("vue").Ref<any>;
    refContent: import("vue").Ref<any>;
    refArrow: import("vue").Ref<any>;
    content: string | number;
    theme: string;
    transBoundary: import("vue").ComputedRef<boolean>;
    handleClickOutside: (_e: MouseEvent) => void;
    updatePopover: (virtualEl?: any, props?: {}) => void;
    hide: () => void;
    show: () => void;
    stopHide: () => void;
    contentIsShow: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (..._args: any[]) => boolean;
    hide: (..._args: any[]) => boolean;
    clickoutside: (..._args: any[]) => boolean;
    contentMouseenter: (..._args: any[]) => boolean;
    contentMouseleave: (..._args: any[]) => boolean;
    stopHide: (..._args: any[]) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    placement: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    theme: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    trigger: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
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
    offset: import("vue-types").VueTypeDef<number | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number;
    }> & {
        default: number | (() => {
            mainAxis?: number;
            crossAxis?: number;
            alignmentAxis?: number;
        });
    };
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
    autoPlacement: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoVisibility: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableOutsideClick: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disableTransform: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    reference: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    modifiers: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    popoverDelay: import("vue-types").VueTypeDef<number | number[]> & {
        default: number | (() => number[]);
    };
}>> & {
    onShow?: (...args: any[]) => any;
    onHide?: (...args: any[]) => any;
    onClickoutside?: (...args: any[]) => any;
    onContentMouseenter?: (...args: any[]) => any;
    onContentMouseleave?: (...args: any[]) => any;
    onStopHide?: (...args: any[]) => any;
}, {
    placement: string;
    modifiers: unknown[];
    offset: number | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number;
    };
    zIndex: number;
    content: string | number;
    trigger: string;
    width: string | number;
    height: string | number;
    maxHeight: string | number;
    arrow: boolean;
    isShow: boolean;
    always: boolean;
    disabled: boolean;
    theme: string;
    renderType: "auto" | "shown";
    padding: number;
    disableTeleport: boolean;
    autoPlacement: boolean;
    autoVisibility: boolean;
    disableOutsideClick: boolean;
    disableTransform: boolean;
    reference: any;
    popoverDelay: number | number[];
}>;
export default _default;
