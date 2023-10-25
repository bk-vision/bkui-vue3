export declare enum ExceptionEnum {
    CODE_404 = "404",
    CODE_403 = "403",
    CODE_500 = "500",
    BUILDING = "building",
    EMPTY = "empty",
    SEARCH = "search-empty",
    LOGIN = "login"
}
export declare enum SceneEnum {
    PAGE = "page",
    PART = "part"
}
declare const _default: import("vue").DefineComponent<{
    type: import("vue-types").VueTypeDef<"404" | "403" | "500" | "building" | "empty" | "search-empty" | "login"> & {
        default: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
    };
    scene: import("vue-types").VueTypeDef<"page" | "part"> & {
        default: "page" | "part";
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    description: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: import("vue-types").VueTypeDef<"404" | "403" | "500" | "building" | "empty" | "search-empty" | "login"> & {
        default: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
    };
    scene: import("vue-types").VueTypeDef<"page" | "part"> & {
        default: "page" | "part";
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    description: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>>, {
    title: string;
    type: "404" | "403" | "500" | "building" | "empty" | "search-empty" | "login";
    description: string;
    scene: "page" | "part";
}>;
export default _default;
