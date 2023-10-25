import Popover from '../popover';
import Option from './option';
import Group from './optionGroup';
import SelectTagInput from './selectTagInput';
export interface OptionInstanceType extends InstanceType<typeof Option> {
    value: string;
}
export declare type GroupInstanceType = InstanceType<typeof Group>;
export declare type PopoverInstanceType = InstanceType<typeof Popover>;
export declare type SelectTagInputType = InstanceType<typeof SelectTagInput>;
export interface ISelectContext {
    multiple?: boolean;
    selected: ISelected[];
    activeOptionValue: any;
    showSelectedIcon: boolean;
    register(key: any, option: OptionInstanceType): any;
    unregister(key: any): any;
    registerGroup(key: any, option: GroupInstanceType): any;
    unregisterGroup(key: any): any;
    handleOptionSelected(option: OptionInstanceType): void;
    handleGetLabelByValue(value: any): string | number;
}
export interface IOptionGroupContext {
    disabled: boolean;
    groupCollapse: boolean;
    register(key: any, option: OptionInstanceType): any;
    unregister(key: any): any;
}
export interface ISelectState {
    currentPlaceholder: string;
    currentSelectedLabel: string;
}
export interface IPopoverConfig {
    popoverMinWidth: number;
}
export interface ISelected {
    value: string;
    label: string | number;
}
