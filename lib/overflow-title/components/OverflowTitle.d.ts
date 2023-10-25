import { HTMLAttributes } from '@vue/runtime-dom';
import '../overflow.less';
declare const _default: import("vue").DefineComponent<{
    content: StringConstructor;
    type: {
        type: import("vue").PropType<import("../props").TipsType>;
        default: string;
    };
    calType: {
        type: import("vue").PropType<import("../props").CalType>;
        default: string;
    };
    resizeable: BooleanConstructor;
}, {
    boxRef: import("vue").Ref<HTMLElement>;
    textRef: import("vue").Ref<HTMLElement>;
    isShowTips: import("vue").Ref<boolean>;
    contentText: import("vue").ComputedRef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    textProps: import("vue").ShallowRef<HTMLAttributes>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    content: StringConstructor;
    type: {
        type: import("vue").PropType<import("../props").TipsType>;
        default: string;
    };
    calType: {
        type: import("vue").PropType<import("../props").CalType>;
        default: string;
    };
    resizeable: BooleanConstructor;
}>>, {
    type: import("../props").TipsType;
    calType: import("../props").CalType;
    resizeable: boolean;
}>;
export default _default;
