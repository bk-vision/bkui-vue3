import type { ComputedRef, UnwrapRef } from 'vue';
import type { Language } from '../locale';
import type { ConfigProviderProps } from './type';
export declare const defaultRootConfig: UnwrapRef<ConfigProviderProps>;
export interface LocaleInterface {
    [key: string]: any;
}
export interface LocalReceiverCtx {
    locale?: LocaleInterface;
}
export declare const rootProviderKey: unique symbol;
export declare function useLocale<T extends keyof Language>(compName: T): ComputedRef<Language[T]>;
export declare const provideGlobalConfig: (config: ConfigProviderProps) => void;
declare const _default: import("vue").DefineComponent<{
    locale: {
        type: import("vue").PropType<{
            lang: string;
            steps: {
                step1: string;
                step2: string;
                step3: string;
            };
            datePicker: {
                selectDate: string;
                selectTime: string;
                clear: string;
                ok: string;
                weekdays: {
                    sun: string;
                    mon: string;
                    tue: string;
                    wed: string;
                    thu: string;
                    fri: string;
                    sat: string;
                };
                hour: string;
                min: string;
                sec: string;
                toNow: string;
            };
            dialog: {
                ok: string;
                cancel: string;
                prev: string;
                next: string;
            };
            form: {
                notBeEmpty: string;
                incorrectFormat: string;
                max: string;
                min: string;
                maxLen: string;
                verifyError: string;
            };
            pagination: {
                eachPage: string;
                strip: string;
                total: string;
            };
            process: {
                step1: string;
                step2: string;
                step3: string;
                step4: string;
            };
            searchSelect: {
                pleaseSelect: string;
                loading: string;
                filterQueryMustHasValue: string;
                ok: string;
                cancel: string;
                or: string;
                and: string;
            };
            select: {
                noData: string;
                noMatchedData: string;
                loading: string;
                pleaseSelect: string;
                enterKeywords: string;
                all: string;
            };
            table: {
                emptyText: string;
                confirm: string;
                reset: string;
                setting: {
                    title: string;
                    fields: {
                        title: string;
                        subtitle: (max: number) => string;
                        selectAll: string;
                    };
                    lineHeight: {
                        title: string;
                        small: string;
                        medium: string;
                        large: string;
                    };
                    options: {
                        ok: string;
                        cancel: string;
                    };
                };
            };
            transfer: {
                sourceList: string;
                targetList: string;
                removeAll: string;
                selectAll: string;
                noData: string;
                noSelected: string;
                search: string;
            };
            upload: {
                uploadSuccess: string;
                uploadFailed: string;
                drapFileOr: string;
                clickUpload: string;
                uploadLabel: string;
            };
            input: {
                placeholder: string;
            };
            tagInput: {
                placeholder: string;
            };
        }>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    locale: {
        type: import("vue").PropType<{
            lang: string;
            steps: {
                step1: string;
                step2: string;
                step3: string;
            };
            datePicker: {
                selectDate: string;
                selectTime: string;
                clear: string;
                ok: string;
                weekdays: {
                    sun: string;
                    mon: string;
                    tue: string;
                    wed: string;
                    thu: string;
                    fri: string;
                    sat: string;
                };
                hour: string;
                min: string;
                sec: string;
                toNow: string;
            };
            dialog: {
                ok: string;
                cancel: string;
                prev: string;
                next: string;
            };
            form: {
                notBeEmpty: string;
                incorrectFormat: string;
                max: string;
                min: string;
                maxLen: string;
                verifyError: string;
            };
            pagination: {
                eachPage: string;
                strip: string;
                total: string;
            };
            process: {
                step1: string;
                step2: string;
                step3: string;
                step4: string;
            };
            searchSelect: {
                pleaseSelect: string;
                loading: string;
                filterQueryMustHasValue: string;
                ok: string;
                cancel: string;
                or: string;
                and: string;
            };
            select: {
                noData: string;
                noMatchedData: string;
                loading: string;
                pleaseSelect: string;
                enterKeywords: string;
                all: string;
            };
            table: {
                emptyText: string;
                confirm: string;
                reset: string;
                setting: {
                    title: string;
                    fields: {
                        title: string;
                        subtitle: (max: number) => string;
                        selectAll: string;
                    };
                    lineHeight: {
                        title: string;
                        small: string;
                        medium: string;
                        large: string;
                    };
                    options: {
                        ok: string;
                        cancel: string;
                    };
                };
            };
            transfer: {
                sourceList: string;
                targetList: string;
                removeAll: string;
                selectAll: string;
                noData: string;
                noSelected: string;
                search: string;
            };
            upload: {
                uploadSuccess: string;
                uploadFailed: string;
                drapFileOr: string;
                clickUpload: string;
                uploadLabel: string;
            };
            input: {
                placeholder: string;
            };
            tagInput: {
                placeholder: string;
            };
        }>;
    };
}>>, {}>;
export default _default;
