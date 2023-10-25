import type { InjectionKey } from 'vue';
import type { IDatePickerCtx, ITimePickerCtx, PickerTypeType } from './interface';
export declare const RANGE_SEPARATOR = " - ";
export declare const typeValueResolver: {
    default: {
        formatter(value: any): string;
        parser(text: any): any;
    };
    date: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any;
    };
    datetime: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any;
    };
    daterange: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any[];
    };
    datetimerange: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any[];
    };
    timerange: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any[];
    };
    time: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any;
    };
    month: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any;
    };
    year: {
        formatter: (value: any, format: any) => string;
        parser: (text: any, format: any) => any;
    };
    multiple: {
        formatter(value: any, format: any): any;
        parser(v: any, format: any): any;
    };
    number: {
        formatter(value: any): string;
        parser(text: any): number;
    };
};
/**
 * 设置时间，当天的零点时间
 *
 * @return {Date} date 对象
 */
export declare const initTime: () => Date;
/**
 * 判断数组中的每个值是否为空
 * 0, '', null, undefined 均判断为空
 *
 * @param {Array} arr 待判断的数组
 *
 * @return {boolean} 判断结果
 */
export declare const isAllEmptyArr: (arr: any[]) => boolean;
export declare const keyValueMapper: {
    40: string;
    39: string;
    38: string;
    37: string;
};
export declare const mapPossibleValues: (key: string, horizontal: number, vertical: number) => number;
export declare const extractTime: (date: Date) => number[];
export declare const DEFAULT_FORMATS: Record<PickerTypeType, string>;
export declare const parseDate: (val: any, type: any, multiple: any, format: any) => any;
export declare const formatDate: (val: any, type: any, multiple: any, format: any) => any;
export declare const datePickerKey: InjectionKey<IDatePickerCtx>;
export declare const timePickerKey: InjectionKey<ITimePickerCtx>;
/**
 * 寻找子组件
 *
 * @param {Object} context 上下文
 * @param {string} componentName 要找的组件类型名称
 *
 * @return {Array} 组件集合
 */
export declare function iconBtnCls(direction: any, type?: string): string[];
export declare const getDayCountOfMonth: (year: any, month: any) => number;
export declare const siblingMonth: (src: any, diff: any) => Date;
export declare const formatDateLabels: (locale: any, format: any, date: any) => {
    separator: any;
    labels: {
        label: any;
        type: string;
    }[];
};
export declare const clearHours: (time: any) => number;
export declare const isInRange: (time: any, a: any, b: any) => boolean;
/**
 * firstUpperCase
 *
 * @param {string} str str
 *
 * @return {string} str
 */
export declare function firstUpperCase(str: any): any;
/**
 * 根据 date 设置 h, m, s
 *
 * @param {Date} date date 对象
 * @param {number} h 小时数
 * @param {number} m 分钟数
 * @param {number} s 秒数
 *
 * @return {Date} date 对象
 */
export declare const mergeDateHMS: (date: any, ...hms: any[]) => Date;
export declare const capitalize: (str: any) => any;
