/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param {*} value - The value to test.
 * @returns {boolean}
 * @since 2.7.0
 */
export declare function isNullOrUndef(value: any): boolean;
export declare function isEmpty(value: any, IncludeNullUndefined?: boolean): boolean;
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param {*} value - The value to test.
 * @returns {boolean}
 * @function
 */
export declare function isArray(value: any): boolean;
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param {*} value - The value to test.
 * @returns {boolean}
 * @since 2.7.0
 */
export declare function isObject(value: any): boolean;
/**
 * Returns true if `value` is a finite number, else returns false
 * @param {*} value  - The value to test.
 * @returns {boolean}
 */
declare const isNumberFinite: (value: any) => boolean;
export { isNumberFinite as isFinite, };
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param {*} value - The value to return if defined.
 * @param {*} defaultValue - The value to return if `value` is not finite.
 * @returns {*}
 */
export declare function finiteOrDefault(value: any, defaultValue: any): any;
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param {*} value - The value to return if defined.
 * @param {*} defaultValue - The value to return if `value` is undefined.
 * @returns {*}
 */
export declare function valueOrDefault(value: any, defaultValue: any): any;
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param {Array} a0 - The array to compare
 * @param {Array} a1 - The array to compare
 * @returns {boolean}
 * @private
 */
export declare function elementsEqual(a0: any, a1: any): boolean;
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param {*} source - The value to clone.
 * @returns {*}
 */
export declare function clone(source: any): any;
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */
export declare function mergerFn(key: string, target: any, source: any, options: any): void;
/**
 * Recursively deep copies `source` properties into `target` with the given `options`.
 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
 * @param {object} target - The target object in which all sources are merged into.
 * @param {object|object[]} source - Object(s) to merge into `target`.
 * @param {object} [options] - Merging options:
 * @param {function} [options.merger] - The merge method (key, target, source, options)
 * @returns {object} The `target` object.
 */
export declare function merge(target: any, source: any, options?: any): any;
/**
 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
 * @param {object} target - The target object in which all sources are merged into.
 * @param {object|object[]} source - Object(s) to merge into `target`.
 * @returns {object} The `target` object.
 */
export declare function mergeIf(target: any, source: any): any;
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */
export declare function mergerIfFn(key: string, target: any, source: any): void;
/**
 * 检查当前元素是否为Html元素
 * @param obj
 * @returns
 */
export declare function isElement(obj: any): boolean;
/**
 * Whether the text content is clipped due to CSS overflow, as in showing `...`.
 */
export declare function hasOverflowEllipsis(element: HTMLElement): boolean;
/**
 * Sets the `title` attribute in the event's element target, when the text
 * content is clipped due to CSS overflow, as in showing `...`.
 */
export declare function maybeShowTooltip(target: HTMLElement, title: string): void;
