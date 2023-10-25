import { ExtractPropTypes } from 'vue';
import uploadProps from './props';
export declare const CLASS_PREFIX = "bk-upload";
export declare const enum EThemes {
    BUTTON = "button",
    DRAGGABLE = "draggable",
    PICTURE = "picture"
}
export declare type Theme = Lowercase<keyof typeof EThemes>;
export declare const enum EUploadStatus {
    NEW = "new",
    UPLOADING = "uploading",
    SUCCESS = "success",
    FAIL = "fail"
}
export declare type UploadStatus = Lowercase<keyof typeof EUploadStatus>;
export declare type FormDataAttr = {
    name: string;
    value: string | Blob | [string | Blob, string];
};
export declare type HeaderDataAttr = {
    name: string;
    value: string;
};
export declare type ExtraFormData = Record<string, string | Blob | [string | Blob, string]>;
export declare type UploadFiles = UploadFile[];
export declare type UploadFile = {
    name: string;
    status: UploadStatus;
    statusText?: string;
    percentage?: number;
    response?: unknown;
    size: number;
    uid: number;
    url?: string;
    raw: UploadRawFile;
    isPic?: boolean;
};
export interface UploadRawFile extends File {
    uid: number;
}
export declare type MaxSize = {
    maxFileSize: number;
    maxImgSize: number;
};
export interface UploadProgressEvent extends ProgressEvent {
    percent: number;
}
export interface APIResponse {
    code: number;
    data: unknown;
    message?: string;
}
export declare type SuccessResponse = APIResponse | XMLHttpRequestResponseType | unknown;
export declare type UploadProps = ExtractPropTypes<typeof uploadProps>;
export interface UploadRequestOptions {
    action: string;
    method: string;
    data?: ExtraFormData | ExtraFormData[];
    formDataAttributes?: FormDataAttr | FormDataAttr[];
    filename: string;
    file: File;
    headers?: Headers | Record<string, string | number | null | undefined>;
    header?: HeaderDataAttr | HeaderDataAttr[];
    withCredentials: boolean;
    sliceUrl: string;
    mergeUrl: string;
    chunkSize: number;
    onProgress: (event: UploadProgressEvent, i?: number) => void;
    onError: (error: Error) => void;
    onSuccess: (res: SuccessResponse) => void;
    onComplete: () => void;
}
export declare type UploadRequestHandler = (options: UploadRequestOptions) => XMLHttpRequest | Promise<unknown>;
export declare type HookHandler = (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
export interface UploadHanderHooks {
    onRemove: HookHandler;
}
