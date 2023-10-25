import { type InjectionKey, type Ref } from 'vue';
import type { IRadioGroupContext } from './type';
export declare const radioGroupKey: InjectionKey<IRadioGroupContext>;
export declare function useFocus(): [Ref<boolean>, {
    blur: () => void;
    focus: () => void;
}];
export declare const useRadio: () => {
    isChecked: Ref<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    setChecked: (value?: boolean) => void;
    handleChange: (event: Event) => void;
};
