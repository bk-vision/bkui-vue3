import { PropType } from 'vue';
export declare type TipsType = 'tips' | 'title';
export declare type CalType = 'dom' | 'canvas';
declare const _default: {
    content: StringConstructor;
    type: {
        type: PropType<TipsType>;
        default: string;
    };
    calType: {
        type: PropType<CalType>;
        default: string;
    };
    resizeable: BooleanConstructor;
};
export default _default;
