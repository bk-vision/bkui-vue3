import { UploadFile, UploadHanderHooks, UploadProgressEvent, UploadProps, UploadRawFile } from './upload.type';
declare const _default: (props: UploadProps, hooks: UploadHanderHooks) => {
    fileList: import("vue").Ref<{
        name: string;
        status: "success" | "new" | "uploading" | "fail";
        statusText?: string;
        percentage?: number;
        response?: unknown;
        size: number;
        uid: number;
        url?: string;
        raw: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number, end?: number, contentType?: string): Blob;
                (start?: number, end?: number, contentType?: string): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): NodeJS.ReadableStream;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
        isPic?: boolean;
    }[]>;
    handlePreprocess: (file: UploadRawFile) => any;
    handleRemove: (file: UploadFile | UploadRawFile) => Promise<void>;
    handleError: (err: Error, rawFile: UploadRawFile, res?: unknown) => Promise<void>;
    handleSuccess: (res: unknown, rawFile: UploadRawFile) => Promise<void>;
    handleProgress: (event: UploadProgressEvent, rawFile: UploadRawFile) => Promise<void>;
};
export default _default;
