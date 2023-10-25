declare const Upload: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[];
            header: import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[];
            name: string;
            disabled: boolean;
            theme: "button" | "picture" | "draggable";
            size: number | import("./upload.type").MaxSize;
            multiple: boolean;
            extCls: string;
            tip: string;
            files: import("./upload.type").UploadFile[];
            autoUpload: boolean;
            delayTime: number;
            method: string;
            handleResCode: (res: import("./upload.type").APIResponse) => boolean;
            headers: Headers;
            withCredentials: boolean;
            formDataAttributes: import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[];
            sliceUpload: boolean;
            sliceUrl: string;
            mergeUrl: string;
            chunkSize: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            theme: {
                type: import("vue").PropType<"button" | "picture" | "draggable">;
                default: "button" | "picture" | "draggable";
                validator: (val: import("./upload.type").EThemes) => boolean;
            };
            files: {
                type: import("vue").PropType<import("./upload.type").UploadFile[]>;
                default: () => import("./upload.type").UploadFile[];
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoUpload: {
                type: BooleanConstructor;
                default: boolean;
            };
            accept: {
                type: StringConstructor;
            };
            delayTime: {
                type: NumberConstructor;
                default: number;
            };
            url: {
                type: StringConstructor;
                required: boolean;
            };
            method: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<number | import("./upload.type").MaxSize>;
                default(): {
                    maxFileSize: number;
                    maxImgSize: number;
                };
            };
            handleResCode: {
                type: import("vue").PropType<(res: import("./upload.type").APIResponse) => boolean>;
                default(res: import("./upload.type").APIResponse): boolean;
            };
            headers: {
                type: import("vue").PropType<Headers>;
                default: () => {};
            };
            header: {
                type: import("vue").PropType<import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[]>;
                default: () => any[];
            };
            tip: {
                type: StringConstructor;
                default: string;
            };
            validateName: {
                type: RegExpConstructor;
            };
            withCredentials: {
                type: BooleanConstructor;
                default: boolean;
            };
            limit: NumberConstructor;
            data: {
                type: import("vue").PropType<import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[]>;
                default: () => any[];
            };
            formDataAttributes: {
                type: import("vue").PropType<import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[]>;
                default: () => any[];
            };
            extCls: {
                type: StringConstructor;
                default: string;
            };
            customRequest: import("vue").PropType<import("./upload.type").UploadRequestHandler>;
            beforeUpload: {
                type: import("vue").PropType<(file: import("./upload.type").UploadRawFile) => boolean | Promise<boolean>>;
            };
            beforeRemove: {
                type: import("vue").PropType<(file: import("./upload.type").UploadFile, uploadFiles: import("./upload.type").UploadFile[]) => boolean | Promise<boolean>>;
            };
            sliceUpload: {
                type: BooleanConstructor;
                default: boolean;
            };
            sliceUrl: {
                type: StringConstructor;
                default: string;
            };
            mergeUrl: {
                type: StringConstructor;
                default: string;
            };
            chunkSize: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            onError?: (...args: any[]) => any;
            onProgress?: (...args: any[]) => any;
            onDelete?: (...args: any[]) => any;
            onSuccess?: (...args: any[]) => any;
            onDone?: (...args: any[]) => any;
            onExceed?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "data" | "header" | "name" | "disabled" | "theme" | "size" | "multiple" | "extCls" | "tip" | "files" | "autoUpload" | "delayTime" | "method" | "handleResCode" | "headers" | "withCredentials" | "formDataAttributes" | "sliceUpload" | "sliceUrl" | "mergeUrl" | "chunkSize">;
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
        $emit: (event: "progress" | "error" | "success" | "done" | "delete" | "exceed", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            theme: {
                type: import("vue").PropType<"button" | "picture" | "draggable">;
                default: "button" | "picture" | "draggable";
                validator: (val: import("./upload.type").EThemes) => boolean;
            };
            files: {
                type: import("vue").PropType<import("./upload.type").UploadFile[]>;
                default: () => import("./upload.type").UploadFile[];
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoUpload: {
                type: BooleanConstructor;
                default: boolean;
            };
            accept: {
                type: StringConstructor;
            };
            delayTime: {
                type: NumberConstructor;
                default: number;
            };
            url: {
                type: StringConstructor;
                required: boolean;
            };
            method: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<number | import("./upload.type").MaxSize>;
                default(): {
                    maxFileSize: number;
                    maxImgSize: number;
                };
            };
            handleResCode: {
                type: import("vue").PropType<(res: import("./upload.type").APIResponse) => boolean>;
                default(res: import("./upload.type").APIResponse): boolean;
            };
            headers: {
                type: import("vue").PropType<Headers>;
                default: () => {};
            };
            header: {
                type: import("vue").PropType<import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[]>;
                default: () => any[];
            };
            tip: {
                type: StringConstructor;
                default: string;
            };
            validateName: {
                type: RegExpConstructor;
            };
            withCredentials: {
                type: BooleanConstructor;
                default: boolean;
            };
            limit: NumberConstructor;
            data: {
                type: import("vue").PropType<import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[]>;
                default: () => any[];
            };
            formDataAttributes: {
                type: import("vue").PropType<import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[]>;
                default: () => any[];
            };
            extCls: {
                type: StringConstructor;
                default: string;
            };
            customRequest: import("vue").PropType<import("./upload.type").UploadRequestHandler>;
            beforeUpload: {
                type: import("vue").PropType<(file: import("./upload.type").UploadRawFile) => boolean | Promise<boolean>>;
            };
            beforeRemove: {
                type: import("vue").PropType<(file: import("./upload.type").UploadFile, uploadFiles: import("./upload.type").UploadFile[]) => boolean | Promise<boolean>>;
            };
            sliceUpload: {
                type: BooleanConstructor;
                default: boolean;
            };
            sliceUrl: {
                type: StringConstructor;
                default: string;
            };
            mergeUrl: {
                type: StringConstructor;
                default: string;
            };
            chunkSize: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            onError?: (...args: any[]) => any;
            onProgress?: (...args: any[]) => any;
            onDelete?: (...args: any[]) => any;
            onSuccess?: (...args: any[]) => any;
            onDone?: (...args: any[]) => any;
            onExceed?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("progress" | "error" | "success" | "done" | "delete" | "exceed")[], string, {
            data: import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[];
            header: import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[];
            name: string;
            disabled: boolean;
            theme: "button" | "picture" | "draggable";
            size: number | import("./upload.type").MaxSize;
            multiple: boolean;
            extCls: string;
            tip: string;
            files: import("./upload.type").UploadFile[];
            autoUpload: boolean;
            delayTime: number;
            method: string;
            handleResCode: (res: import("./upload.type").APIResponse) => boolean;
            headers: Headers;
            withCredentials: boolean;
            formDataAttributes: import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[];
            sliceUpload: boolean;
            sliceUrl: string;
            mergeUrl: string;
            chunkSize: number;
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
        theme: {
            type: import("vue").PropType<"button" | "picture" | "draggable">;
            default: "button" | "picture" | "draggable";
            validator: (val: import("./upload.type").EThemes) => boolean;
        };
        files: {
            type: import("vue").PropType<import("./upload.type").UploadFile[]>;
            default: () => import("./upload.type").UploadFile[];
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoUpload: {
            type: BooleanConstructor;
            default: boolean;
        };
        accept: {
            type: StringConstructor;
        };
        delayTime: {
            type: NumberConstructor;
            default: number;
        };
        url: {
            type: StringConstructor;
            required: boolean;
        };
        method: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<number | import("./upload.type").MaxSize>;
            default(): {
                maxFileSize: number;
                maxImgSize: number;
            };
        };
        handleResCode: {
            type: import("vue").PropType<(res: import("./upload.type").APIResponse) => boolean>;
            default(res: import("./upload.type").APIResponse): boolean;
        };
        headers: {
            type: import("vue").PropType<Headers>;
            default: () => {};
        };
        header: {
            type: import("vue").PropType<import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[]>;
            default: () => any[];
        };
        tip: {
            type: StringConstructor;
            default: string;
        };
        validateName: {
            type: RegExpConstructor;
        };
        withCredentials: {
            type: BooleanConstructor;
            default: boolean;
        };
        limit: NumberConstructor;
        data: {
            type: import("vue").PropType<import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[]>;
            default: () => any[];
        };
        formDataAttributes: {
            type: import("vue").PropType<import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[]>;
            default: () => any[];
        };
        extCls: {
            type: StringConstructor;
            default: string;
        };
        customRequest: import("vue").PropType<import("./upload.type").UploadRequestHandler>;
        beforeUpload: {
            type: import("vue").PropType<(file: import("./upload.type").UploadRawFile) => boolean | Promise<boolean>>;
        };
        beforeRemove: {
            type: import("vue").PropType<(file: import("./upload.type").UploadFile, uploadFiles: import("./upload.type").UploadFile[]) => boolean | Promise<boolean>>;
        };
        sliceUpload: {
            type: BooleanConstructor;
            default: boolean;
        };
        sliceUrl: {
            type: StringConstructor;
            default: string;
        };
        mergeUrl: {
            type: StringConstructor;
            default: string;
        };
        chunkSize: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        onError?: (...args: any[]) => any;
        onProgress?: (...args: any[]) => any;
        onDelete?: (...args: any[]) => any;
        onSuccess?: (...args: any[]) => any;
        onDone?: (...args: any[]) => any;
        onExceed?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: import("vue").PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: import("./upload.type").EThemes) => boolean;
    };
    files: {
        type: import("vue").PropType<import("./upload.type").UploadFile[]>;
        default: () => import("./upload.type").UploadFile[];
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
    };
    delayTime: {
        type: NumberConstructor;
        default: number;
    };
    url: {
        type: StringConstructor;
        required: boolean;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<number | import("./upload.type").MaxSize>;
        default(): {
            maxFileSize: number;
            maxImgSize: number;
        };
    };
    handleResCode: {
        type: import("vue").PropType<(res: import("./upload.type").APIResponse) => boolean>;
        default(res: import("./upload.type").APIResponse): boolean;
    };
    headers: {
        type: import("vue").PropType<Headers>;
        default: () => {};
    };
    header: {
        type: import("vue").PropType<import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[]>;
        default: () => any[];
    };
    tip: {
        type: StringConstructor;
        default: string;
    };
    validateName: {
        type: RegExpConstructor;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: NumberConstructor;
    data: {
        type: import("vue").PropType<import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[]>;
        default: () => any[];
    };
    formDataAttributes: {
        type: import("vue").PropType<import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[]>;
        default: () => any[];
    };
    extCls: {
        type: StringConstructor;
        default: string;
    };
    customRequest: import("vue").PropType<import("./upload.type").UploadRequestHandler>;
    beforeUpload: {
        type: import("vue").PropType<(file: import("./upload.type").UploadRawFile) => boolean | Promise<boolean>>;
    };
    beforeRemove: {
        type: import("vue").PropType<(file: import("./upload.type").UploadFile, uploadFiles: import("./upload.type").UploadFile[]) => boolean | Promise<boolean>>;
    };
    sliceUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    sliceUrl: {
        type: StringConstructor;
        default: string;
    };
    mergeUrl: {
        type: StringConstructor;
        default: string;
    };
    chunkSize: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onError?: (...args: any[]) => any;
    onProgress?: (...args: any[]) => any;
    onDelete?: (...args: any[]) => any;
    onSuccess?: (...args: any[]) => any;
    onDone?: (...args: any[]) => any;
    onExceed?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("progress" | "error" | "success" | "done" | "delete" | "exceed")[], "progress" | "error" | "success" | "done" | "delete" | "exceed", {
    data: import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[];
    header: import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[];
    name: string;
    disabled: boolean;
    theme: "button" | "picture" | "draggable";
    size: number | import("./upload.type").MaxSize;
    multiple: boolean;
    extCls: string;
    tip: string;
    files: import("./upload.type").UploadFile[];
    autoUpload: boolean;
    delayTime: number;
    method: string;
    handleResCode: (res: import("./upload.type").APIResponse) => boolean;
    headers: Headers;
    withCredentials: boolean;
    formDataAttributes: import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[];
    sliceUpload: boolean;
    sliceUrl: string;
    mergeUrl: string;
    chunkSize: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default Upload;
