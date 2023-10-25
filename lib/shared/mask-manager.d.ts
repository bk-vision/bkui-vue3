declare type BkMaskManagerConfig = {
    multiInstance?: boolean;
    maskAttrTag?: string;
    parentNode?: HTMLElement | Document;
    maskStyle?: any;
    onClick?: (e: MouseEvent) => void;
};
declare type MaskConfigStore = {
    zIndex: number;
    style: any;
    uuid?: string;
    preUID?: string;
};
export declare class BkMaskManager {
    /** 遮罩容器 */
    private readonly mask;
    /** 遮罩备份容器，用于多个组件实例显示，遮罩只显示最后一个 **/
    private readonly backupMask;
    /** 是否允许多个遮罩实例 */
    private readonly multiInstance;
    /** 遮罩控制器唯一标识 */
    private readonly uniqueMaskAttrTag;
    /** 设置弹出层父级组件，默认是body */
    private parentNode;
    /** 遮罩当前显示组件实例 **/
    private activeInstance;
    /** 记录已在使用的z-index */
    private zIndexStore;
    /** 记录最后一个UUID */
    private lastUUID;
    /** 遮罩样式 **/
    private readonly maskStyle;
    private onClick;
    /**
     * 遮罩管理器
     *
     * @param multiInstance 是否允许多实例
     * @param maskAttrTag 遮罩DOM唯一标志，支持自定义和 auto
     */
    constructor(config?: BkMaskManagerConfig);
    setOption(option: BkMaskManagerConfig): void;
    /**
     * 显示遮罩
     * @param content 遮罩内容
     * @param zIndex z-index
     * @param showMask 是否显示遮罩
     * @param appendStyle 追加样式
     * @param transfer 是否显示将内容加入遮罩下
     */
    show(content?: HTMLElement, zIndex?: number, showMask?: boolean, appendStyle?: {}, uuid?: string | null, transfer?: boolean): void;
    hide(transfer?: boolean, content?: HTMLElement, uuid?: string): void;
    storeMaskInsCfg(config: MaskConfigStore): MaskConfigStore;
    /**
     * 移除最后一次缓存数据
     */
    popIndexStore(uuid: string): boolean;
    backupActiveInstance(): void;
    backupContentElement(content?: HTMLElement): void;
    getActiveContentInstance(): HTMLElement;
    /**
     * 初始化当前遮罩管理器
     * @returns 当前遮罩容器
     */
    private getMask;
    /**
     * 创建遮罩层DOM
     * @returns 返回DOM
     */
    private createMask;
    private setMaskStyle;
    /**
     * 根据输入生成唯一遮罩标识
     * @param tag 输入标识
     * @returns string 返回唯一标识
     */
    private getMaskAttrTag;
    private appendContentToMask;
}
export declare const bKMaskManager: BkMaskManager;
export {};
