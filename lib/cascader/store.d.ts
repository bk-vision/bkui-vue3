import { IConfig, IData, INode } from './interface';
declare class Store {
    data: IData[];
    config: IConfig;
    nodes: INode[];
    constructor(props: any);
    getNodes(): INode[];
    /** 清空所有checked */
    clearChecked(): void;
    /** 移除某一个Tag的check状态 */
    removeTag(tag: string[]): void;
    /** 拍平节点，方便筛选 */
    getFlattedNodes(leafOnly?: boolean): any;
    /** 根据传入节点设置节点check状态 */
    setNodesCheck(nodes: Array<string[]>): void;
    /** 获取多选下，被选中(checked)的节点 */
    getCheckedNodes(): any;
    /** 根据值获得node实例 */
    getNodeByValue(value: Array<number | string | string[]>): INode;
    getNodeById(id: number | string): INode;
    /** 插入单个节点 */
    appendNode(nodeData: IData, parentNode: IData): void;
    appendNodes(nodeDataList: IData[], parentNode: IData): void;
}
export default Store;
