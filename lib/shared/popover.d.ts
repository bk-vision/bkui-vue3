import { Instance, Modifier, Placement, PositioningStrategy, State } from '@popperjs/core';
export declare type OnFirstUpdateFnType = (instance: Partial<State>) => void;
export declare type IOptions = {
    placement?: Placement;
    modifiers?: Array<Partial<Modifier<any, any>>>;
    strategy?: PositioningStrategy;
    onFirstUpdate?: OnFirstUpdateFnType;
    isShow?: boolean;
    always?: boolean;
    theme?: string;
    trigger?: string;
    disabled?: boolean;
    appendTo?: string | HTMLElement;
    afterShow?: () => void;
    afterHidden?: () => void;
    /**
     * 如果设置了appendTo为指定DOM，此配置项生效
     * 是否将弹出内容固定到目标元素位置
     * 例如：appendTo = document.body, fixOnBoundary = true，则弹出内容会一直固定到body
     */
    fixOnBoundary?: Boolean;
};
export declare type IBKPopover = Instance & {
    show: () => void;
    hide: () => void;
    updateDisabled: (val: boolean) => void;
    isShow: boolean;
};
export declare class BKPopover {
    /** 当前提内容是否弹出 */
    isShow: boolean;
    /** 触发条件 */
    trigger?: string;
    /** 当前popperjs实例 */
    private instance?;
    /** 是否总是可见 */
    private always?;
    /** Popover 外层容器，触发Pop的元素 */
    private reference?;
    /** Popover 弹出内容外层占位容器 */
    private referenceTarget?;
    /** Popover Content 外层容器，目标元素：实际弹出内容 */
    private popperRefer?;
    /** 默认初始化配置项 */
    private instanceOptions;
    /** hide延时 */
    private delay;
    /** 是否进入popperRefer */
    private isInnerPopper;
    /** 是否为禁用状态 */
    private disabled;
    /** 执行显示函数 */
    private afterShow;
    /** 执行隐藏函数 */
    private afterHidden;
    /** 弹出内容AppendTo */
    private appendTo;
    /** 父级容器 */
    private container?;
    /**
     * 如果设置了appendTo为指定DOM，此配置项生效
     * 是否将弹出内容固定到目标元素位置
     * 例如：appendTo = document.body, fixOnBoundary = true，则弹出内容会一直固定到body
     */
    private fixOnBoundary;
    constructor(reference?: string | HTMLElement, popperRefer?: string | HTMLElement, options?: IOptions);
    forceUpdate(): void;
    update(): void;
    updateOptions(options: IOptions): void;
    setOptions(options: IOptions): void;
    destroy(): void;
    updateDisabled(disabled?: boolean): void;
    /**
     * 展示Pop
     * @param _event 触发事件
     */
    show(_event: any): void;
    /**
     * 隐藏
     * @param event 触发事件
     */
    hide(): void;
    /**
     * 还原PopContent到初试位置
     */
    private restorePopContent;
    /**
     * 挂载PopContent到目标位置
     */
    private appendToTarget;
    /**
     * 获取目标位置元素
     * @returns
     */
    private getAppendToTarget;
    /**
     * 初始化默认配置
     * @param opts
     * @returns
     */
    private initDefaultOptions;
    /**
   * 判定是否需要将PopContent挂载到目标元素
   */
    private handleFirstUpdate;
    /**
     * 剔除 Pop 外层容器，获取目标元素
     * @returns
     */
    private getTargetReferenceElement;
    /**
     * 初始化Pop Instance
     */
    private initInstance;
    /**
     * 解析当前参数为对应的Html Element
     * @param refer Html Element Selector Or Html Element
     * @param checkVirtualDom 是否检查虚拟DOM
     * @returns Html Element Or Null
     */
    private resolveInputSelectorToHtmlElement;
    /**
     * 检查当前元素是否为Html元素
     * @param obj
     * @returns
     */
    private isElement;
    private registerEvents;
    private isSameElement;
}
export declare const getPopContainerId: (prefix?: string) => string;
