import { DiffFormatType, LanguagesUnion, ThemesUnion } from './code-diff';
declare const BkCodeDiff: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            theme: "dark" | "light";
            oldContent: string;
            newContent: string;
            diffFormat: "side-by-side" | "line-by-line";
            language: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            oldContent: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            newContent: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            diffFormat: import("vue-types").VueTypeValidableDef<"side-by-side" | "line-by-line"> & {
                default: "side-by-side" | "line-by-line";
            };
            diffContext: import("vue-types").VueTypeValidableDef<number>;
            theme: import("vue-types").VueTypeValidableDef<"dark" | "light"> & {
                default: "dark" | "light";
            };
            language: import("vue-types").VueTypeValidableDef<"ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile"> & {
                default: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
            };
            hljs: import("vue-types").VueTypeValidableDef<any> & {
                required: true;
            };
        }>> & {
            [x: string & `on${any}`]: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "theme" | "oldContent" | "newContent" | "diffFormat" | "language">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: any, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            oldContent: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            newContent: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            diffFormat: import("vue-types").VueTypeValidableDef<"side-by-side" | "line-by-line"> & {
                default: "side-by-side" | "line-by-line";
            };
            diffContext: import("vue-types").VueTypeValidableDef<number>;
            theme: import("vue-types").VueTypeValidableDef<"dark" | "light"> & {
                default: "dark" | "light";
            };
            language: import("vue-types").VueTypeValidableDef<"ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile"> & {
                default: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
            };
            hljs: import("vue-types").VueTypeValidableDef<any> & {
                required: true;
            };
        }>> & {
            [x: string & `on${any}`]: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], string, {
            theme: "dark" | "light";
            oldContent: string;
            newContent: string;
            diffFormat: "side-by-side" | "line-by-line";
            language: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        oldContent: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        newContent: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        diffFormat: import("vue-types").VueTypeValidableDef<"side-by-side" | "line-by-line"> & {
            default: "side-by-side" | "line-by-line";
        };
        diffContext: import("vue-types").VueTypeValidableDef<number>;
        theme: import("vue-types").VueTypeValidableDef<"dark" | "light"> & {
            default: "dark" | "light";
        };
        language: import("vue-types").VueTypeValidableDef<"ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile"> & {
            default: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
        };
        hljs: import("vue-types").VueTypeValidableDef<any> & {
            required: true;
        };
    }>> & {
        [x: string & `on${any}`]: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    oldContent: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    newContent: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    diffFormat: import("vue-types").VueTypeValidableDef<"side-by-side" | "line-by-line"> & {
        default: "side-by-side" | "line-by-line";
    };
    diffContext: import("vue-types").VueTypeValidableDef<number>;
    theme: import("vue-types").VueTypeValidableDef<"dark" | "light"> & {
        default: "dark" | "light";
    };
    language: import("vue-types").VueTypeValidableDef<"ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile"> & {
        default: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
    };
    hljs: import("vue-types").VueTypeValidableDef<any> & {
        required: true;
    };
}>> & {
    [x: string & `on${any}`]: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, {
    theme: "dark" | "light";
    oldContent: string;
    newContent: string;
    diffFormat: "side-by-side" | "line-by-line";
    language: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export declare type ThemesUnionType = ThemesUnion;
export declare type DiffFormatUnionType = DiffFormatType;
export declare type LanguagesUnionType = LanguagesUnion;
export default BkCodeDiff;
