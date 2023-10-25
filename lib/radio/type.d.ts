import type { ComponentPublicInstance } from 'vue';
import type { RadioProps } from './radio';
import type { RadioGroupProps } from './radio-group';
export declare type IRadioInstance = ComponentPublicInstance<RadioProps, {
    isChecked: boolean;
    label: string;
    setChecked: (value: boolean) => void;
}>;
export interface IRadioGroupContext {
    props: RadioGroupProps;
    register: (radioInstance: IRadioInstance) => void;
    unregister: (radioInstance: IRadioInstance) => void;
    handleChange: (radioInstance: IRadioInstance) => void;
}
