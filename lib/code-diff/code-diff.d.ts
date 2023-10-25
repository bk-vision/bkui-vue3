import { ExtractPropTypes } from 'vue';
import { ElementType } from '../shared';
declare const diffFormats: readonly ["side-by-side", "line-by-line"];
export declare type DiffFormatType = ElementType<typeof diffFormats>;
export declare const LANGUAGES: readonly ["css", "java", "javascript", "json", "scss", "less", "stylus", "shell", "bash", "cpp", "go", "xml", "python", "typescript", "sql", "ruby", "vim", "php", "perl", "powershell", "makefile"];
export declare type LanguagesUnion = ElementType<typeof LANGUAGES>;
declare const themes: readonly ["dark", "light"];
export declare type ThemesUnion = ElementType<typeof themes>;
export declare const codeDiffProps: {
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
};
export declare type CodeDiffPropsType = ExtractPropTypes<typeof codeDiffProps>;
declare const _default: import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}, {
    theme: "dark" | "light";
    oldContent: string;
    newContent: string;
    diffFormat: "side-by-side" | "line-by-line";
    language: "ruby" | "css" | "java" | "javascript" | "json" | "scss" | "less" | "stylus" | "shell" | "bash" | "cpp" | "go" | "xml" | "python" | "typescript" | "sql" | "vim" | "php" | "perl" | "powershell" | "makefile";
}>;
export default _default;
