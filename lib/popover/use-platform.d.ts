declare const _default: (fullscreenTarget?: HTMLElement) => {
    getElementRects: ({ reference, floating }: {
        reference: any;
        floating: any;
    }) => {
        reference: {
            width: number;
            height: number;
            x: number;
            y: number;
        };
        floating: {
            width: number;
            height: number;
            x: number;
            y: number;
        };
    };
    getDimensions: (element: HTMLElement) => {
        width: number;
        height: number;
    };
    getClippingRect: ({}: {}) => {
        width: number;
        height: number;
        x: number;
        y: number;
    };
};
export default _default;
