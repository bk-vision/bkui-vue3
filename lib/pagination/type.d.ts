import type { ComponentPublicInstance } from 'vue';
import type { PaginationProps } from './pagination';
export declare type IPaginationInstance = ComponentPublicInstance<PaginationProps, {
    limit: PaginationProps['limit'];
    totalPageNum: number;
}>;
