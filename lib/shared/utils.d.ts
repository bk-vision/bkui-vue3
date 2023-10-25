/**
 * 生成n位长度的字符串
 * @param {Number} n
 * @param str,默认26位字母及数字
 */
export declare const random: (n: number, str?: string) => string;
/**
 * 监听目标元素的Resize事件
 * @param root 目标元素
 * @param callbackFn 执行函数
 * @param delay 延迟执行时间，默认 60
 * @param immediate 是否立即执行回调函数
 * @returns "{ start: () => void, stop: () => void }"
 */
export declare const observerResize: (root: HTMLElement, callbackFn: () => void, delay?: number, immediate?: boolean) => {
    start: () => void;
    stop: () => void;
};
export declare const capitalize: (str: any) => any;
/**
 * 判断元素是否溢出容器
 * @param {*} el
 * @returns
 */
export declare function checkOverflow(el: any): boolean;
