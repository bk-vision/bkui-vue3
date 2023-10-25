import { IConfig, IData, INode } from './interface';
declare class Node implements INode {
    data: IData;
    config: IConfig;
    parent: INode;
    level: number;
    id: string;
    name: string;
    loading: boolean;
    loaded: boolean;
    checked: boolean;
    isIndeterminate: boolean;
    children?: null[];
    leaf: boolean;
    pathNodes: INode[];
    path: string[];
    pathNames: string[];
    nodes: INode[];
    constructor(node: IData, config: any, parent?: any);
    initState(): void;
    get isLeaf(): boolean;
    get isDisabled(): any;
    broadcast(event: string, checkStatus: boolean): void;
    emit(event: string): void;
    onParentCheck(checked: boolean): void;
    onChildCheck(): void;
    setCheckState(checked: boolean): void;
    setNodeCheck(status: boolean): void;
    calculateNodesPath(): INode[];
}
export default Node;
