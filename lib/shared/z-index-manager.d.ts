/**
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/**
 * 页面框架层级
 */
export declare enum BKLAYERTYPE {
    /** 网站内容的背景、拓扑的画布等 */
    BOTTOM = "bottom",
    /** 页面呈现的各类内容 */
    CONTENT = "content",
    /** 顶部导航、侧边导航以及用户信息等 */
    NAVI = "navi",
    /** 页面需全屏操作的部分功能或编辑器的全屏模式 */
    FULLSCREEN = "fullScreen",
    /** 各类功能插件 */
    PLUGINS = "plugins",
    /** 各类弹窗或抽屉（非模态弹窗不考虑） */
    MODAL = "modal",
    /** 各类消息提示 */
    MESSAGE = "message",
    /** 各类popper提示 */
    POPPER = "popper"
}
/** 定义不同分层默认值 */
export declare const BKLAYERD_INDEX_EFAULT_VALUE: {
    bottom: number;
    content: number;
    navi: number;
    fullScreen: number;
    modal: number;
    plugins: number;
    message: number;
    popper: number;
};
declare class BKZIndexManager {
    storageLayerIndexValue: any;
    constructor();
    /**
     *
     * @param type
     * @returns
     */
    getNextIndex(type: BKLAYERTYPE): number;
    /** 获取弹窗类型最新zIndex的值 */
    getModalNextIndex(): number;
    /** 获取Message类型最新zIndex的值 */
    getMessageNextIndex(): number;
    /** 获取全屏类型最新zIndex的值 */
    getFullScreenNextIndex(): number;
    /** 获取导航类型最新zIndex的值 */
    getNaviNextIndex(): number;
    /** 获取导航类型最新zIndex的值 */
    getPopperIndex(): number;
    /**
     * 更新自定义默认zIndex配置
     * @param config 配置项
     */
    setDefaultZIndex(config: any): void;
    /**
     * 重置zIndex
     * @param config 配置项
     */
    resetZIndex(config: any): void;
    /**
     * 根据默认设置创建副本
     */
    private copyDefaultValue;
}
export declare const bkZIndexManager: BKZIndexManager;
export {};
