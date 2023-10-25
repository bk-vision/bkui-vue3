declare const props: {
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    confirmText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cancelText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prevText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    nextText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    current: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    totalStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    headerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
        default: "right" | "left" | "center";
    };
    footerAlign: import("vue-types").VueTypeDef<"right" | "left" | "center"> & {
        default: "right" | "left" | "center";
    };
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    dialogType: import("vue-types").VueTypeDef<"show" | "operation" | "confirm" | "process">;
    isLoading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    isShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    extCls: (import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    }) | (import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    });
    scrollable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showMask: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    escClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    fullscreen: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    size: import("vue-types").VueTypeDef<"small" | "normal" | "large" | "medium">;
    draggable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    quickClose: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    transfer: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    maxHeight: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    animateType: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    renderDirective: import("vue-types").VueTypeDef<"if" | "show">;
    beforeClose: import("vue-types").VueTypeDef<unknown>;
    multiInstance: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    infoType: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
};
export default props;
