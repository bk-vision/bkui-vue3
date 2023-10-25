import { GroupColumn } from '../props';
declare const _default: (_props: any, colgroups: GroupColumn[], hasScrollY?: any) => {
    fixedWrapperClass: string;
    resolveFixedColumnStyle: (column: GroupColumn, hasScrollY?: boolean) => {
        [x: string]: string;
    };
    fixedColumns: import("vue").ComputedRef<{
        isExist: boolean;
        colPos: string;
        column: GroupColumn;
    }[]>;
    resolveColumnStyle: (colPos: string) => {
        width: string;
        bottom: string;
    };
    resolveColumnClass: (column: GroupColumn, scrollX?: any, offsetRight?: any) => {
        column_fixed: boolean;
        column_fixed_left: boolean;
        column_fixed_right: boolean;
        shadow: boolean;
    };
};
/**
 * 固定列Hooks
 */
export default _default;
