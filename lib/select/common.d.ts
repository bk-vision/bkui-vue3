import { InjectionKey, Ref } from 'vue';
import { IOptionGroupContext, IPopoverConfig, ISelectContext } from './type';
export declare const selectKey: InjectionKey<ISelectContext>;
export declare const optionGroupKey: InjectionKey<IOptionGroupContext>;
export declare function useHover(): {
    isHover: Ref<boolean>;
    setHover: () => void;
    cancelHover: () => void;
};
export declare function useRegistry<T>(data: Ref<Map<any, T>>): {
    register: (key: any, item: T) => Map<any, T>;
    unregister: (key: any) => void;
};
export declare function useDebouncedRef<T>(value: any, delay?: number): Ref<T>;
export declare function usePopover(config: IPopoverConfig, triggerRef: Ref<HTMLElement>): {
    isPopoverShow: Ref<boolean>;
    popperWidth: Ref<string | number>;
    togglePopover: () => void;
    hidePopover: () => void;
    showPopover: () => void;
};
export declare function useRemoteSearch(method: Function, callBack?: Function): {
    searchKey: Ref<string>;
    searchLoading: Ref<boolean>;
};
export declare function toLowerCase(value?: string): string;
