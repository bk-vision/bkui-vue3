export declare class BKPopIndexManager {
    /** 用来缓存弹出层实例 */
    private popInstanceList;
    private readonly uuidAttrName;
    private clickFn;
    private activePopId;
    constructor();
    onMaskClick(callFn: (e: MouseEvent) => void, target: HTMLElement): void;
    /**
     * 展示弹窗
     * @param content 弹窗内容
     * @param showMask 是否显示遮罩
     * @param appendStyle 追加样式
     * @param transfer 是否显示在body内（即是否显示在div#app内，默认为false）
     * @returns
     */
    show(content?: HTMLElement, showMask?: boolean, appendStyle?: {}, transfer?: boolean, zindex?: any): void;
    /**
     * 销毁指定实例
     * @param content 指定实例内容
     * @param transfer
     */
    destroy(content?: HTMLElement, transfer?: boolean): void;
    /**
     * 关闭最后一个弹窗 如果当前还有父级弹窗，则激活父级弹窗
     * @param removeLastContent 默认:true 是否自动关闭最后一个弹窗实例 某些场景下，已经主动关闭最后一个弹窗，此处只需要处理其他逻辑
     */
    popHide(removeLastContent?: boolean): void;
    /**
     * 关闭指定弹窗
     * @param content { HTMLElement } 关闭弹窗内容
     * **/
    hide(content?: HTMLElement, transfer?: boolean): void;
    private getActiveClickFnIndex;
    private getActiveClickFn;
    private onMaskClickFn;
}
export declare const bkPopIndexManager: BKPopIndexManager;
