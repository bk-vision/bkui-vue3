import { InjectionKey, Ref } from 'vue';
export interface IMenuInfo {
    key: string;
    parentKey: string;
}
export declare type MenuMode = 'vertical';
export interface IMenuProvider {
    readonly activeKey: Ref<string>;
    readonly openedKeys: Ref<string[]>;
    readonly mode: MenuMode;
    readonly collapse: Ref<Boolean>;
    readonly menuStore: Ref<Record<string, IMenuInfo>>;
    readonly registerMenuInfo: (key: string, info: IMenuInfo) => void;
    readonly unregisterMenuInfo: (key: string) => void;
    readonly handleOpenChange: (key: string, opened: boolean) => void;
    readonly handleActiveChange: (key: string) => void;
}
export interface IMenuPathProvider {
    parentKeys: Ref<string[]>;
    parentInfo: IMenuInfo;
}
export declare const MENU_PROVIDER_KEY: InjectionKey<IMenuProvider>;
export declare const MENU_PROVIDER_KEY_PATH: InjectionKey<IMenuPathProvider>;
export declare const useMenuProvider: (data: IMenuProvider) => void;
export declare const useMenuPathProvider: (key: string) => void;
export declare const useMenuInject: () => IMenuProvider;
export declare const useMenuPathInject: () => IMenuPathProvider | {
    parentInfo: any;
    parentKeys: Ref<any[]>;
};
export declare function removeClass(el: HTMLElement | Element, cls: string): void;
export declare function addClass(el: HTMLElement | Element, cls: string): void;
export declare const collapseMotion: () => {
    css: boolean;
    onBeforeEnter: (el: any) => void;
    onEnter: (el: any) => void;
    onAfterEnter: (el: any) => void;
    onBeforeLeave: (el: any) => void;
    onLeave: (el: any) => void;
    onAfterLeave: (el: any) => void;
};
