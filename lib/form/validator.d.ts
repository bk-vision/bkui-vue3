declare const _default: {
    required: (value: any) => boolean;
    min: (value: number, min: number) => boolean;
    max: (value: number, max: number) => boolean;
    email: (value: string) => boolean;
    maxlength: (value: string, maxlength: number) => boolean;
    pattern: (value: string, pattern: RegExp) => boolean;
};
export default _default;
