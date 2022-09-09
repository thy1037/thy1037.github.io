### 任务切换
一个任务即一个函数，每个任务都有自己的栈空间和内核寄存器的备份，需要运行哪个任务，只需要将当前的内核寄存器保存下来，并更新成新任务的内核寄存器，这就是运行时上下文切换，即可完成任务切换。

内核寄存器除了通用寄存器，还有 `mstatus` 和 `mepc` 寄存器，其中 `mstatus` 中含有中断使能控制位，而 `mepc` 为M模式下异常程序指针寄存器，其值会更新给 `PC` 寄存器，不像ARM架构中 `PC` 寄存器暴露在通用寄存器中可以直接操作，RISCV 正是通过设置 `mepc` 寄存器的值来控制程序运行的切换。

任务切换主要在 `vTaskSwitchContext()` 中完成，内部工作是：
* 从就绪队列中选择优先级最高的任务
* 将其TCB赋给全局TCB变量
* 将全局TCB内容更新至内核寄存器
* 更新 `sp`、`mepc` 实现新任务运行

#### 任务列表
- READY_TASK_LISTS
- DELAYED_TASK_LIST
- OVERFLOW_DELAYED_TASK_LIST
- SUSPENDED_TASK_LIST
- PENDING_READY_LIST

#### 任务控制块
``` rust
pub struct tskTaskControlBlock {
    ///Stack top pointer
    pub pxTopOfStack: StackType_t_link,
    ///Stack bottom pointer
    pxStack: StackType_t_link,
    ///Task name
    pcTaskName: String,
    ///Task status list pointer
    pub xStateListItem: ListItemLink,
    ///Task evnet list pointer
    pub xEventListItem: ListItemLink,
    ///
    pub uxCriticalNesting: UBaseType_t,
    /// Task priority
    pub uxPriority: UBaseType,
    pub uxMutexesHeld: UBaseType,
    pub uxBasePriority: UBaseType,
    /// mark for ffi
    pub build_from_c: bool,
}
```
