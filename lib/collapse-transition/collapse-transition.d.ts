import { RendererElement } from 'vue';
declare const _default: import("vue").DefineComponent<{}, {
    on: {
        onBeforeEnter(el: RendererElement): void;
        onEnter(el: RendererElement): void;
        onAfterEnter(el: RendererElement): void;
        onBeforeLeave(el: RendererElement): void;
        onLeave(el: RendererElement): void;
        onAfterLeave(el: RendererElement): void;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
