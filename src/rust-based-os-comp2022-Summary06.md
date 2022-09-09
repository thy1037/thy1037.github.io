## RFreeRTOS 介绍
FreeRTOS 是一款嵌入式实时操作系统，主要用于微控制器和小型微处理器，是工业上使用最广泛的实时操作系统。RFreeRTOS 是其 Rust 实现。

| 核心函数 | 作用 |
| --- | --- |
|vTaskEnterCritical()|进入临界区|
|vTaskExitCritical()|退出临界区|
|vTaskStartScheduler()|启动调度器|
|xTaskCreate()|创建任务|
|xTaskCreateStatic()|静态创建任务|
|vTaskSwitchContext()|切换上下文|

* 进入临界区的简单处理就是关中断并记录进入次数，退出临界区时检查次数，0时打开中断

现阶段实现的组件有：内存分配、事件组、队列。
