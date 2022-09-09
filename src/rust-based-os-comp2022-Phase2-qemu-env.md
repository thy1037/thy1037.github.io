# 基于 Qemu 开发环境搭建

为了方便测试、验证，开发方案是现在 Qemu 模拟环境下跑同编译、运行，然后下载到实体开发板中进一步测试、验证。

Qemu 已经在第一阶段中完成安装。

## 工具链安装
``` bash
$ rustup install nightly
$ rustup default nightly
$ rustup target add riscv32imac-unknown-none-elf
$ rustup target add riscv64imac-unknown-none-elf
```

RFreeRTOS 使用到的部分 crate 还未完全稳定，依赖 `nightly` 环境，为了方便将 `nightly` 设为默认编译环境。

RFreeRTOS 支持 RV32 和 RV64，分别安装各自的 none-elf 交叉编译工具。

## 编译、运行、调试
在 `./makefile` 已经写好了相关命令，`build`对应编译、`run32`、`run64`对应直接启动运行，`debug`对应编译并以调试模式启动qemu，`remote`对应挂载gdb调试客户端。

## 运行结果
通过查看 `main.rs` 内容，可以看到共创建了两个任务，优先级分别为 `3` 和 `2`，两个任务都会有运行日志输出，高优先级内有 100ms 延时函数，观察运行结果，符合预期：
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