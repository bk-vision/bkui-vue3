import { TreePropTypes } from './props';
/**
 * 获取当前节点显示Label
 * @param item 当前节点
 * @param props Props
 */
export declare const getLabel: (item: any, props: TreePropTypes) => any;
/**
 * 根据Props获取Tree样式设置
 * @param item
 * @param props
 * @returns
 */
export declare const getTreeStyle: (item: any, props: TreePropTypes) => {
    '--level-line': any;
    '--lineHeight': string;
    '--indent': string;
    '--offset-left': string;
};
/**
 * 获取节点样式配置
 * @param item
 * @param props
 * @returns
 */
export declare const getNodeItemStyle: any;
/**
 * 获取当前渲染节点Class List
 * @param item
 * @returns
 */
export declare const getNodeItemClass: (item: any, schema: any, props: TreePropTypes) => {
    'is-root': any;
    'bk-tree-node': boolean;
    'is-open': any;
    'is-virtual-render': boolean;
    'level-line': any;
};
/**
 * 获取当前渲染节点Class List
 * @param item
 * @returns
 */
export declare const getNodeRowClass: (item: any, schema: any) => {
    [x: string]: any;
    'is-checked': any;
    'is-selected': any;
    'node-folder': any;
    'node-leaf': any;
};
/**
 * 根据路径更新指定节点Child-Data
 * @param path 节点路径
 * @param treeData Tree Data
 * @param childKey Child Key
 * @param nodekey 节点key
 * @param nodeValue 节点值
 */
export declare const updateTreeNode: (path: string, treeData: any[], childKey: string, nodekey: string, nodeValue: any) => void;
/**
 * 根据路径更新指定节点Child-Data
 * @param path 节点路径
 * @param treeData Tree Data
 * @param childKey Child Key
 * @param assignVal value
 */
export declare const assignTreeNode: (path: string, treeData: any[], childKey: string, assignVal: any) => void;
export declare const resolveNodeItem: (node: any) => any;
