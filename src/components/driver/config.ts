import { DriveStep } from "./driver";
import { AllowedButtons, PopoverDOM } from "./popover";
import { State } from "./state";

/**
 * @name 用于驱动和配置元素交互的函数类型。
 * @param element - 可能是未定义的 Element 对象，表示当前交互的 DOM 元素。
 * @param step - DriveStep 类型，表示当前步骤。
 * @param opts - 包含 config 和 state 的对象，用于提供配置和当前状态。
 */
export type DriverHook = (element: Element | undefined, step: DriveStep, opts: { config: Config; state: State }) => void;

/**
 * @name 配置对象类型，用于自定义驱动行为和外观。
 */
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

  // Popover 具体配置
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

  // 按钮文本配置
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
  onPopoverRender?: (popover: PopoverDOM, opts: { config: Config; state: State }) => void;

  // 基于状态的回调函数，状态改变时调用
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

  // 基于事件的回调函数，事件触发时调用
  /**@name 下一步按钮点击时 */
  onNextClick?: DriverHook;
  /**@name 上一步按钮点击时 */
  onPrevClick?: DriverHook;
  /**@name 关闭按钮点击时 */
  onCloseClick?: DriverHook;
};

/**@name 存储当前配置 */
let currentConfig: Config = {};

/**
 * @name 配置
 * @param config 默认配置
 */
export function configure(config: Config = {}) {
  currentConfig = {
    animate: true,
    allowClose: true,
    overlayOpacity: 0.7,
    smoothScroll: false,
    disableActiveInteraction: false,
    showProgress: false,
    stagePadding: 10,
    stageRadius: 5,
    popoverOffset: 10,
    showButtons: ["next", "previous", "close"],
    disableButtons: [],
    overlayColor: "#000",
    ...config,
  };
}

/**
 * @name 获取配置的值
 * @param key - 配置项的键，可选。如果提供，将返回该键对应的配置值；否则，返回整个配置对象。
 * @returns 返回配置对象或指定配置项的值。
 */
export function getConfig(): Config;
export function getConfig<K extends keyof Config>(key: K): Config[K];
export function getConfig<K extends keyof Config>(key?: K) {
  return key ? currentConfig[key] : currentConfig;
}