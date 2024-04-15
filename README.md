# React + TypeScript + Vite

```
yarn add kun-wu
```

## Driver

```typescript
export type Config = {
    steps?: DriveStep[];
    /**@name 是否启用动画 */
    animate?: boolean;
    /**@name 覆盖层颜色 */
    overlayColor?: string;
    /**@name 覆盖层透明度 */
    overlayOpacity?: number;
    /**@name 是否启用平滑滚动 */
    smoothScroll?: boolean;
    /**@name 是否允许关闭 */
    allowClose?: boolean;
    /**@name 舞台区域的内边距 */
    stagePadding?: number;
    /**@name 舞台区域的圆角大小 */
    stageRadius?: number;
    /**@name 是否禁用主动交互*/
    disableActiveInteraction?: boolean;
    /**@name 是否允许键盘控制*/
    allowKeyboardControl?: boolean;
    /**@name Popover的CSS类 */
    popoverClass?: string;
    /**@name Popover 相对于目标元素的偏移量 */
    popoverOffset?: number;
    /**@name 显示的按钮类型 */
    showButtons?: AllowedButtons[];
    /**@name 禁用的按钮类型*/
    disableButtons?: AllowedButtons[];
    /**@name 是否显示进度 */
    showProgress?: boolean;
    /**@name 进度文本 */
    progressText?: string;
    /**@name 下一步按钮文本 */
    nextBtnText?: string;
    /**@name 上一步按钮文本*/
    prevBtnText?: string;
    /**@name 完成按钮文本 */
    doneBtnText?: string;
    /**
     * @name Popover 渲染后的回调
     * @param popover
     * @param opts
     * @returns
     */
    onPopoverRender?: (popover: PopoverDOM, opts: {
        config: Config;
        state: State;
    }) => void;
    /** @name 高亮开始时 */
    onHighlightStarted?: DriverHook;
    /**@name  高亮时*/
    onHighlighted?: DriverHook;
    /**@name  取消高亮时*/
    onDeselected?: DriverHook;
    /**@name  销毁开始时 */
    onDestroyStarted?: DriverHook;
    /**@name 销毁时 */
    onDestroyed?: DriverHook;
    /**@name 下一步按钮点击时 */
    onNextClick?: DriverHook;
    /**@name 上一步按钮点击时 */
    onPrevClick?: DriverHook;
    /**@name 关闭按钮点击时 */
    onCloseClick?: DriverHook;
};

export type DriverHook = (element: Element | undefined, step: DriveStep, opts: {
    config: Config;
    state: State;
}) => void;

export type DriveStep = {
    /**@name 高亮步骤关联的元素选择器字符串或DOM元素 */
    element?: string | Element;
    /**@name 开始高亮步骤时的处理钩子 */
    onHighlightStarted?: DriverHook;
    /**@name 步骤已被高亮时的处理钩子 */
    onHighlighted?: DriverHook;
    /**@name 步骤被取消高亮时的处理钩子 */
    onDeselected?: DriverHook;
    /**@name 与该步骤关联的弹出窗口配置 */
    popover?: Popover;
};

export type Side = "top" | "right" | "bottom" | "left" | "over";
export type Alignment = "start" | "center" | "end";
export type AllowedButtons = "next" | "previous" | "close";

export type Popover = {
  /**@name 弹出窗口标题 */
  title?: string | JSX.Element | Element;

  /**@name 弹出窗口描述内容 */
  description?: string | JSX.Element | Element;

  /**@name 弹出窗口相对于触发元素的位置（如：上、下、左、右） */
  side?: Side;Ï

  /**@name 弹出窗口在所选侧边内的对齐方式（如：开始、中间、结束） */
  align?: Alignment;

  /**@name 显示哪些操作按钮（如：前进、后退、关闭） */
  showButtons?: AllowedButtons[];

  /**@name 是否显示进度条 */
  showProgress?: boolean;

  /**@name 禁用哪些操作按钮 */
  disableButtons?: AllowedButtons[];

  /**@name 自定义弹出窗口类名 */
  popoverClass?: string;

  /**@name 进度文本（用于显示在进度条附近） */
  progressText?: string;

  /**@name 完成按钮文本 */
  doneBtnText?: string;

  /**@name 下一步按钮文本 */
  nextBtnText?: string;

  /**@name 上一步按钮文本 */
  prevBtnText?: string;

  /**@name 弹出窗口渲染完成后回调函数，接收弹出窗口DOM对象及配置和状态参数 */
  onPopoverRender?: (popover: PopoverDOM, opts: { config: Config; state: State }) => void;

  /**@name 下一步按钮点击时的处理钩子 */
  onNextClick?: DriverHook;

  /**@name 上一步按钮点击时的处理钩子 */
  onPrevClick?: DriverHook;

  /**@name 关闭按钮点击时的处理钩子 */
  onCloseClick?: DriverHook;
};
```
