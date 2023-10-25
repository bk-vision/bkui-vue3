import { ExtractPropTypes, PropType, VNode } from 'vue';
import { IOptions } from '../directives/src/tooltips';
declare const tagProps: () => {
    modelValue: import("vue-types").VueTypeDef<string[]> & {
        default: () => string[];
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    list: import("vue-types").VueTypeDef<{
        [key: string]: any;
    }[]> & {
        default: () => {
            [key: string]: any;
        }[];
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    tooltipKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    saveKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    hasDeleteIcon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    clearable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    trigger: import("vue-types").VueTypeDef<"focus" | "search"> & {
        default: "focus" | "search";
    };
    searchKey: import("vue-types").VueTypeDef<string | string[]> & {
        default: string | (() => string[]);
    };
    useGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowCreate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    maxData: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    maxResult: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    contentMaxHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    contentWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    separator: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    allowNextFocus: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    allowAutoMatch: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showClearOnlyHover: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    leftSpace: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    createTagValidator: {
        type: PropType<(tag: any) => boolean>;
    };
    filterCallback: {
        type: PropType<(value: string, searchKey: string | string[], list: any[]) => any[]>;
    };
    tagTpl: {
        type: PropType<(node: any, highlightKeyword: Function, h: Function, ctx: VNode) => VNode>;
    };
    tpl: {
        type: PropType<(node: any, h: Function, ctx: VNode) => VNode>;
    };
    pasteFn: {
        type: PropType<(value: string) => any[]>;
    };
    withValidate: {
        type: BooleanConstructor;
        default: boolean;
    };
    popoverProps: {
        type: PropType<Partial<Readonly<ExtractPropTypes<{
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
        }>>>>;
        default: () => {};
    };
    collapseTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagOverflowTips: {
        type: PropType<Partial<IOptions>>;
        default: () => {};
    };
};
export default tagProps;
export declare type TagProps = Partial<ExtractPropTypes<ReturnType<typeof tagProps>>>;
