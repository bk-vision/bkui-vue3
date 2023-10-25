import type { ComputedRef } from 'vue';
import type { Language } from '../locale';
declare const _default: (t: ComputedRef<Language['pagination']>) => {
    limit: import("vue").Ref<number>;
    render: ({ isFirst, isLast }: {
        isFirst: any;
        isLast: any;
    }) => JSX.Element;
};
export default _default;
