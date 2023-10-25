import { PopoverPropTypes } from './props';
export declare type $Popover = PopoverPropTypes & {
    target: HTMLElement | HTMLElement | MouseEvent;
};
export default function createPopoverComponent(options: $Popover): {
    close: () => void;
    show: () => void;
    hide: () => void;
    update: (e: MouseEvent) => void;
    readonly vm: any;
    readonly $el: HTMLElement;
};
