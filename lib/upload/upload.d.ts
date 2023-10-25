import { APIResponse, EThemes, UploadFile, UploadRawFile } from './upload.type';
declare const _default: import("vue").DefineComponent<{
    theme: {
        type: import("vue").PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: EThemes) => boolean;
    };
    files: {
        type: import("vue").PropType<UploadFile[]>;
        default: () => UploadFile[];
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
        type: import("vue").PropType<(res: APIResponse) => boolean>;
        default(res: APIResponse): boolean;
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
        type: import("vue").PropType<(file: UploadRawFile) => boolean | Promise<boolean>>;
    };
    beforeRemove: {
        type: import("vue").PropType<(file: UploadFile, uploadFiles: UploadFile[]) => boolean | Promise<boolean>>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("progress" | "error" | "success" | "done" | "delete" | "exceed")[], "progress" | "error" | "success" | "done" | "delete" | "exceed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: import("vue").PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: EThemes) => boolean;
    };
    files: {
        type: import("vue").PropType<UploadFile[]>;
        default: () => UploadFile[];
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
        type: import("vue").PropType<(res: APIResponse) => boolean>;
        default(res: APIResponse): boolean;
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
        type: import("vue").PropType<(file: UploadRawFile) => boolean | Promise<boolean>>;
    };
    beforeRemove: {
        type: import("vue").PropType<(file: UploadFile, uploadFiles: UploadFile[]) => boolean | Promise<boolean>>;
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
}, {
    data: import("./upload.type").ExtraFormData | import("./upload.type").ExtraFormData[];
    header: import("./upload.type").HeaderDataAttr | import("./upload.type").HeaderDataAttr[];
    name: string;
    disabled: boolean;
    theme: "button" | "picture" | "draggable";
    size: number | import("./upload.type").MaxSize;
    multiple: boolean;
    extCls: string;
    tip: string;
    files: UploadFile[];
    autoUpload: boolean;
    delayTime: number;
    method: string;
    handleResCode: (res: APIResponse) => boolean;
    headers: Headers;
    withCredentials: boolean;
    formDataAttributes: import("./upload.type").FormDataAttr | import("./upload.type").FormDataAttr[];
    sliceUpload: boolean;
    sliceUrl: string;
    mergeUrl: string;
    chunkSize: number;
}>;
export default _default;
