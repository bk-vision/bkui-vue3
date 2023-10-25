/**
 * 根据饱和度面板、色值面板或普通色值标准化颜色信息
 * @param {String|Object} colorParam - 色值信息
 * @param {String} colorParam.h - 色相
 * @param {String} colorParam.s - 饱和度
 * @param {String} [colorParam.l] - 亮度
 * @param {String} [colorParam.v] - 明度
 * @param {String} colorParam.a - 透明度
 * @returns {Object} - 转化后的色值对象
 */
export declare const formatColor: (colorParam: any) => {
    hsl: any;
    hsv: any;
    hex: any;
    rgba: any;
};
/**
 * 返回指定闭区间数值
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export declare const clamp: (value: number, min: number, max: number) => number;
/**
 * 移动端获取事件位置
 * @param {Object} e
 * @param {String} prop
 * @returns {Number}
 */
export declare const getTouches: (e: any, prop: string) => any;
/**
 * 转化 rgba 色值字符串
 * @param {Object} rgba
 * @returns {String}
 */
export declare const toRGBAString: (rgba: any) => string;
