import type { ComponentPublicInstance } from 'vue';
import type { CheckboxProps } from './checkbox';
import type { CheckboxGroupProps } from './checkbox-group';
export declare type ICheckboxInstance = ComponentPublicInstance<CheckboxProps, {
    isChecked: boolean;
    label: string;
    setChecked: (value: boolean) => void;
}>;
export interface ICheckboxGroupContext {
    name: 'CheckboxGroup';
    props: CheckboxGroupProps;
    register: (checkboxInstance: ICheckboxInstance) => void;
    unregister: (checkboxInstance: ICheckboxInstance) => void;
    handleChange: () => void;
}
