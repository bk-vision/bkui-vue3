import { TreePropTypes } from './props';
declare const _default: (props: TreePropTypes) => {
    flatData: {
        data: any[];
        schema: any[] | Map<string, any>;
        levelLineSchema: {};
    };
    schemaValues: import("vue").ComputedRef<any[]>;
    asyncNodeClick: (item: any) => Promise<any>;
    deepAutoOpen: () => void;
    afterDataUpdate: (callFn: (d: any) => any) => void;
    registerNextLoop: (key: string, event: any, reset?: boolean) => void;
    onSelected: (event: (d: any) => void) => void;
};
export default _default;
