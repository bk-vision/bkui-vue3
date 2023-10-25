import type { PropType } from 'vue';
import { APIResponse, EThemes, ExtraFormData, FormDataAttr, HeaderDataAttr, MaxSize, UploadFile, UploadRawFile, UploadRequestHandler } from './upload.type';
declare const _default: {
    theme: {
        type: PropType<"button" | "picture" | "draggable">;
        default: "button" | "picture" | "draggable";
        validator: (val: EThemes) => boolean;
    };
    files: {
        type: PropType<UploadFile[]>;
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
        type: PropType<number | MaxSize>;
        default(): {
            maxFileSize: number;
            maxImgSize: number;
        };
    };
    handleResCode: {
        type: PropType<(res: APIResponse) => boolean>;
        default(res: APIResponse): boolean;
    };
    headers: {
        type: PropType<Headers>;
        default: () => {};
    };
    header: {
        type: PropType<HeaderDataAttr | HeaderDataAttr[]>;
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
        type: PropType<ExtraFormData | ExtraFormData[]>;
        default: () => any[];
    };
    formDataAttributes: {
        type: PropType<FormDataAttr | FormDataAttr[]>;
        default: () => any[];
    };
    extCls: {
        type: StringConstructor;
        default: string;
    };
    customRequest: PropType<UploadRequestHandler>;
    beforeUpload: {
        type: PropType<(file: UploadRawFile) => Promise<boolean> | boolean>;
    };
    beforeRemove: {
        type: PropType<(file: UploadFile, uploadFiles: UploadFile[]) => Promise<boolean> | boolean>;
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
};
export default _default;
