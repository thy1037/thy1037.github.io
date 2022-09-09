### Qemu 模拟开发环境搭建
在高性能芯片上做开发时，为了方便测试、验证，往往需要先在 Qemu 模拟环境下跑通编译、运行，再做进一步适配，然后下载到实体开发板中测试、验证。RFreeRTOS 项目同样如此，支持 Qemu 内运行。

* 工具链安装。主要是 `nightly` 版本，RFreeRTOS 使用到的部分 crate 还未完全稳定，为了方便将 `nightly` 设为默认编译环境。另外，RFreeRTOS 支持 RV32 和 RV64，分别安装各自的 none-elf 交叉编译工具。

* 编译、运行、调试。在 `./makefile` 已经写好了相关命令，`build`对应编译、`run32`、`run64`对应直接启动运行，`debug`对应编译并以调试模式启动qemu，`remote`对应挂载gdb调试客户端。

* 运行结果。通过查看 `main.rs` 内容，可以看到共创建了两个任务，优先级分别为 `3` 和 `2`，两个任务都会有运行日志输出，高优先级内有 100ms 延时函数，观察运行结果，符合预期：
``` bash
...
low priority task running 
low priority task running 
after delay:pxPreviousWakeTime=42400
high priority task running 
low priority task running
...
low priority task running 
after delay:pxPreviousWakeTime=42500
high priority task running 
low priority task running
...
```

