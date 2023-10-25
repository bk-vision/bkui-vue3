import { TreePropTypes } from './props';
declare const _default: (props: TreePropTypes, ctx: any, flatData: any, _renderData: any, schemaValues: any, initOption: any) => {
    renderTreeNode: (item: any) => JSX.Element;
    handleTreeNodeClick: (item: any, e: MouseEvent) => void;
    deepAutoOpen: () => void;
    asyncNodeClick: (item: any) => Promise<any>;
    setNodeAction: (args: any | any[], action: string, value: any) => void;
    setNodeOpened: (item: any, isOpen?: any, e?: MouseEvent, fireEmit?: boolean) => void;
    setSelect: (uuid: any, selected?: boolean, autoOpen?: boolean) => void;
    setOpen: (item: any[] | any, isOpen?: boolean, autoOpenParents?: boolean) => void;
};
export default _default;
