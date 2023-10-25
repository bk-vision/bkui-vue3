import { TreePropTypes } from './props';
declare const _default: (flatData: any, props?: TreePropTypes) => {
    getSchemaVal: (key: string) => any;
    getNodeAttr: (node: any, attr: string) => any;
    getNodeId: (node: any) => any;
    getNodeParentId: (node: any) => any;
    getNodeParentIdById: (id: string) => any;
    getParentNodeData: (uid: string) => any;
    getParentNode: (node: any) => any;
    setNodeAttr: (node: any, attr: string, val: any) => void;
    getNodePath: (node: any) => any;
    isRootNode: (node: any) => any;
    isNodeOpened: (node: any) => any;
    hasChildNode: (node: any) => any;
    isItemOpen: (item: any) => any;
    isNodeChecked: (node: any) => any;
    isNodeMatched: (node: any) => any;
    isNodeLoading: (node: any) => any;
    checkNodeIsOpen: (node: any) => any;
    getSourceNodeByPath: (path: string) => any;
    getSourceNodeByUID: (uid: string) => any;
    deleteNodeSchema: (id: string) => boolean;
    resolveScopedSlotParam: (item: any) => {
        [x: string]: any;
        fullPath: any;
        uuid: any;
        parentId: any;
    };
    setTreeNodeLoading: (node: any, value: boolean) => void;
    extendNodeAttr: (item: any) => any;
    getChildNodes: (node: any) => any[];
};
export default _default;