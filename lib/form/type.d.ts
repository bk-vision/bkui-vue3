import type { FormProps } from './form';
import type { FormItemProps } from './form-item';
export interface IFormContext {
    props: FormProps;
    register: (IFormItemContext: any) => void;
    unregister: (IFormItemContext: any) => void;
}
export interface IFormItemContext extends FormItemProps {
    validate: (trigger?: string) => Promise<boolean>;
    clearValidate: () => void;
}
export interface IFormItemRule {
    required?: boolean;
    email?: boolean;
    min?: number;
    max?: number;
    maxlength?: number;
    pattern?: RegExp;
    validator?: (any: any) => boolean | Promise<boolean>;
    message: string | (() => string);
    trigger: 'blur' | 'change';
}
