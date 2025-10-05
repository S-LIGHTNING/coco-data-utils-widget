# 编程猫 CoCo 数据工具控件

[![Gitee Repo stars](https://gitee.com/SLIGHTNING/coco-data-utils-widget/badge/star.svg)](https://gitee.com/slightning/coco-data-utils-widget) [![Gitee Downloads (all assets, latest release)](https://img.shields.io/github/downloads/S-LIGHTNING/coco-data-utils-widget/latest/total)](https://gitee.com/slightning/coco-data-utils-widget/releases/latest) [![Gitee Downloads (all assets, latest release)](https://img.shields.io/github/downloads-pre/S-LIGHTNING/coco-data-utils-widget/latest/total)](https://gitee.com/slightning/coco-data-utils-widget/releases) [![Gitee License](https://img.shields.io/github/license/S-LIGHTNING/coco-data-utils-widget)](https://gitee.com/slightning/coco-data-utils-widget/blob/main/LICENSE)

[![GitHub Repo stars](https://img.shields.io/github/stars/S-LIGHTNING/coco-data-utils-widget
)](https://github.com/S-LIGHTNING/coco-data-utils-widget) [![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads/S-LIGHTNING/coco-data-utils-widget/latest/total)](https://github.com/S-LIGHTNING/coco-data-utils-widget/releases/latest) [![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads-pre/S-LIGHTNING/coco-data-utils-widget/latest/total)](https://github.com/S-LIGHTNING/coco-data-utils-widget/releases) [![GitHub License](https://img.shields.io/github/license/S-LIGHTNING/coco-data-utils-widget)](https://github.com/S-LIGHTNING/coco-data-utils-widget/blob/main/LICENSE)

## 一、简介

编程猫 CoCo 数据工具控件（简称“数据工具”）是一个由 SLIGHTNING 开发的基础数据处理控件，提供了大量基础的数据操作方法（如位运算、列表过滤）。

## 二、使用说明

数据工具控件是完整的控件，包含所有方法。其他控件是数据工具的各部分方法。

请到 [Releases](https://gitee.com/slightning/coco-data-utils-widget/releases/latest) 界面下载控件。

提示：该控件在 Creation Project 中体验更佳。

应该不需要积木使用说明吧……

有关于回调函数的使用方法请参考 [SCW 文档 > 示例 > 封装 JS 高级列表操作 > 使用控件](https://s-lightning.github.io/slightning-coco-widget/docs/example/advanced-list-operations#%E4%BD%BF%E7%94%A8%E6%8E%A7%E4%BB%B6)。

## 三、其他

### 1.版本

在到达 1.0.0 版本前，破坏性更新会以次版本号发布。

所有控件共用同一个版本号。

每个方法都有自己独立的版本号，方法的主版本号从 1 开始。

## 四、开发

### 1.图标规范

#### (1) 基础

控件图标遵循 Creation Project 1.0 控件图标规范，如下图所示（来自早期 Creation Project 文档）：

![Creation Project 1.0 图标规范.png](https://static.codemao.cn/pickduck/HyxngL5C2el.png?hash=FqCLb0EGfV_tH2OTr3ipPh4ammHO)

#### (2) 数据工具控件图标

数据工具图标由一条横线、一条竖线、一条斜率为 1 的线和一条斜率为 -1 的线组成，四条线等长等宽，两端为圆形，相交于一点，交点为这四条线的中点。

#### (3) 部分控件图标

在分控件图标中需要包含数据工具控件图标，且数据工具控件图标的宽高为 312。

### 2.积木规范

若遵守该规范会产生兼容性问题，优先考虑兼容性。

#### (1)基础规范

- 方法 key 命名：方法类别 + 两个下滑线 + 方法功能（使用小驼峰命名，与在方法类别中有体现的不需要有）+ 下划线 + 小写英文字母“v” + 该方法的主版本号；
- 如果某个方法需要保留多个版本，旧版本的需要在积木上标注主版本号；
- 变长参数：含有变长参数的方法转换后不得超过 5 个重复部分，多行显示的不得少于 2 个重复部分；
- 索引：索引参数必须提供正数和倒数两种方式，索引从 1 开始，返回值中一律用 0 表示无效索引。

#### (2)积木

积木按照处理的对象类型分为如下几个大组：

- 基础；
- 数字；
- 字符串；
- 布尔；
- 列表；
- 字典。

每大组内积木细分为如下几个部分：

- 创建类，如：字面常量；
- 获取类，如：获取数据类型、获取列表指定项；
- 判断类，如：判断数字是否为整数、判断列表中是否包含指定项；
- 修改类，如：设置字典指路径的值；
- 生成类，如：列表映射、列表过滤；
- 转换类，如：字符串分割、字典转键值对列表。

每个部分的积木，常用的排在上面，不常用的排在下面。

### 3.技术信息

本控件使用 [SCW](https://s-lightning.github.io/slightning-coco-widget/) 框架开发，使用代码测试 控件进行测试，使用 [控件实时重载](https://s-lightning.github.io/slightning-coco-widget/docs/tutorial/guides/packaging-optimization#%E9%85%8D%E7%BD%AE%E6%8E%A7%E4%BB%B6%E5%AE%9E%E6%97%B6%E9%87%8D%E8%BD%BD) 控件实现开发环境下的 Live Reload。
