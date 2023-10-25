import { Ref } from 'vue';
import type { TagProps } from './tag-props';
export declare const INPUT_MIN_WIDTH = 12;
export declare function useDebouncedRef<T>(value: any, delay?: number): Ref<T>;
export declare function usePage(pageSize: Ref<number>): {
    pageState: {
        curPage: number;
        totalSize: number;
        totalPage: number;
        pageSize: number;
        isPageLoading: boolean;
        curPageList: any[];
        renderListPaged: any[];
    };
    initPage: (allList?: any[]) => void;
    pageChange: (page: number) => void;
};
export declare function useFlatList(props: TagProps): {
    flatList: Ref<any[]>;
    saveKeyMap: Ref<{}>;
};
/**
 * 获取字符长度，汉字两个字节
 * @param str 需要计算长度的字符
 * @returns 字符长度
 */
export declare const getCharLength: (str: string) => number;
/**
 * 获取隐藏 tag index
 * @param tagInputRef 组件容器 ref
 * @param collapseTags 是否折叠 tags
 * @param selectedTagList 已选择 tags
 */
export declare const useTagsOverflow: (tagInputRef: Ref<HTMLDivElement>, collapseTags: Ref<Boolean>, selectedTagList: Ref<string[]>) => {
    overflowTagIndex: Ref<number>;
};
