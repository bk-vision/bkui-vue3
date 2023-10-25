import { VNode } from 'vue';
export interface ModalFuncProps {
    isShow?: boolean;
    width?: string | number;
    type?: 'primary' | 'warning' | 'success' | 'danger';
    title?: string | (() => VNode | string) | VNode;
    subTitle?: string | (() => VNode) | VNode;
    confirmText?: string | (() => VNode) | VNode;
    cancelText?: string | (() => VNode) | VNode;
    onConfirm?: (...args: any[]) => any;
    onClosed?: (...args: any[]) => any;
    boundary?: HTMLElement;
    draggable?: boolean;
    maskClose?: boolean;
    escClose?: boolean;
    closeIcon?: boolean;
    headerAlign?: 'left' | 'center' | 'right';
    footerAlign?: 'left' | 'center' | 'right';
    contentAlign?: 'left' | 'center' | 'right';
    dialogType?: 'show' | 'operation' | 'confirm';
}
declare const InfoBox: (config: Partial<ModalFuncProps>) => {
    show: () => void;
    hide: () => void;
    update: (config: Partial<ModalFuncProps>) => void;
    destroy: () => void;
};
export default InfoBox;
