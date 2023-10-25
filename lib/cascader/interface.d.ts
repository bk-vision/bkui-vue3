export interface IPanel {
    id: string;
    name: string;
    disabled?: boolean;
    children?: IPanel;
}
export interface INodeConfig {
    multiple: boolean;
}
export interface INode {
    checked: boolean;
    children?: (null)[] | null;
    config: IConfig;
    data: IData;
    leaf: boolean;
    id: string;
    level: number;
    loading: boolean;
    loaded: boolean;
    name: string;
    parent?: INode;
    isDisabled: boolean;
    isIndeterminate: boolean;
    isLeaf: boolean;
    pathNames: string[];
    path: string[];
    setNodeCheck(status: boolean): void;
    broadcast(event: string, check: boolean): void;
    emit(event: string): void;
}
export interface IData {
    id: string;
    name: string;
    leaf?: boolean;
    disabled?: boolean;
    children?: IData[];
}
export interface IConfig {
    checkAnyLevel: boolean;
    childrenKey: string;
    clearable: boolean;
    disabled: boolean;
    idKey: string;
    isRemote: boolean;
    multiple: boolean;
    nameKey: string;
    showCompleteName: boolean;
    trigger: string;
    separator: string;
    remoteMethod: Function;
}
