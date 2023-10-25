import OverflowTitle from './components/OverflowTitle';
import overflowTitle from './directive/overflowTitle';
import getActualWidthByCanvas from './utils/getActualWidthByCanvas';
import getActualWidthByDom from './utils/getActualWidthByDom';
declare const BkOverflowTitle: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: import("./props").TipsType;
            calType: import("./props").CalType;
            resizeable: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            content: StringConstructor;
            type: {
                type: import("vue").PropType<import("./props").TipsType>;
                default: string;
            };
            calType: {
                type: import("vue").PropType<import("./props").CalType>;
                default: string;
            };
            resizeable: BooleanConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "calType" | "resizeable">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            content: StringConstructor;
            type: {
                type: import("vue").PropType<import("./props").TipsType>;
                default: string;
            };
            calType: {
                type: import("vue").PropType<import("./props").CalType>;
                default: string;
            };
            resizeable: BooleanConstructor;
        }>>, {
            boxRef: import("vue").Ref<HTMLElement>;
            textRef: import("vue").Ref<HTMLElement>;
            isShowTips: import("vue").Ref<boolean>;
            contentText: import("vue").ComputedRef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]>;
            textProps: import("vue").ShallowRef<import("vue").HTMLAttributes>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            type: import("./props").TipsType;
            calType: import("./props").CalType;
            resizeable: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        content: StringConstructor;
        type: {
            type: import("vue").PropType<import("./props").TipsType>;
            default: string;
        };
        calType: {
            type: import("vue").PropType<import("./props").CalType>;
            default: string;
        };
        resizeable: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<{
        boxRef: import("vue").Ref<HTMLElement>;
        textRef: import("vue").Ref<HTMLElement>;
        isShowTips: import("vue").Ref<boolean>;
        contentText: import("vue").ComputedRef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]>;
        textProps: import("vue").ShallowRef<import("vue").HTMLAttributes>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    content: StringConstructor;
    type: {
        type: import("vue").PropType<import("./props").TipsType>;
        default: string;
    };
    calType: {
        type: import("vue").PropType<import("./props").CalType>;
        default: string;
    };
    resizeable: BooleanConstructor;
}>>, {
    boxRef: import("vue").Ref<HTMLElement>;
    textRef: import("vue").Ref<HTMLElement>;
    isShowTips: import("vue").Ref<boolean>;
    contentText: import("vue").ComputedRef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    textProps: import("vue").ShallowRef<import("vue").HTMLAttributes>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    type: import("./props").TipsType;
    calType: import("./props").CalType;
    resizeable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export { getActualWidthByDom, getActualWidthByCanvas, overflowTitle, OverflowTitle, };
export default BkOverflowTitle;
