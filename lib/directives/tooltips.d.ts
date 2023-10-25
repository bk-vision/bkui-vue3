import { ObjectDirective } from 'vue';
import { Placement } from '@popperjs/core';
export declare type IOptions = {
    arrow: boolean;
    disabled: boolean;
    placement: Placement;
    content: string;
    showOnInit: boolean;
    theme: string;
    trigger: string;
    distance: number;
    extCls: string;
    delay: number;
    onShow: () => void;
    onHide: () => void;
};
declare const tooltips: ObjectDirective;
export default tooltips;
