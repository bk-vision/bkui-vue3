import { GroupColumn } from '../props';
declare const _default: (colgroups: GroupColumn[], immediate?: boolean) => {
    registerResizeEvent: () => void;
    resetResizeEvents: () => void;
    dragOffsetX: import("vue").Ref<number>;
    dragOffsetXStyle: import("vue").ComputedRef<{
        readonly position: "absolute";
        readonly top: 0;
        readonly bottom: 0;
        readonly left: 0;
        readonly width: "1px";
        readonly 'background-color': "#ebeef5";
    }>;
};
export default _default;
