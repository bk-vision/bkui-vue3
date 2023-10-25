import { type InjectionKey, type Ref } from 'vue';
import type { ICheckboxGroupContext } from './type';
export declare const checkboxGroupKey: InjectionKey<ICheckboxGroupContext>;
export declare function useFocus(): [Ref<boolean>, {
    blur: () => void;
    focus: () => void;
}];
export declare const useCheckbox: () => {
    inputRef: Ref<any>;
    isChecked: Ref<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    setChecked: (value?: boolean) => void;
    handleChange: (event: Event) => void;
};
