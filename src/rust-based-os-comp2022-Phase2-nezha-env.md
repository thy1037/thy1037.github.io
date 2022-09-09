# Nezha 开发板开发环境搭建

> D1-H哪吒开发板基于全志D1-H芯片设计，集成阿里平头哥RISC-V C906 CPU，主频1GHz，支持标准Linux内核，最大支持2G DDR3、258MB spi-nand、WiFi/蓝牙连接，具有丰富的音视频接口可强大的音视频编解码能力，可连接各种外设，集成了MIPI-DSI+TP接口、SD卡接口、LEDC灯、HDMI接口、麦克风子板接口、3.5mm耳机接口、千兆以太网接口、USB HOST、Type-C接口、UART Debug接口、40pins插针阵列等，可以满足日常科研教学、产品项目预研、开发爱好者DIY的需求。

### 工具链安装
#### 1. 编译工具
从芯片官网 [occ.t-head.cn](https://occ.t-head.cn/community/download) 下载工具链 `Xuantie-900-gcc-elf-newlib-x86_64-V2.6.0-20220715.tar.gz`，解压后将 `bin` 目录添加到环境变量；

注意：为了避免与普通编译工具重名，将 `riscv64-unknown-elf-gcc` 重命名为 `riscv64-unknown-elf-xuantie-gcc`。

#### 2. 下载工具 xfel
普通的 `fel` 工具不支持 riscv 芯片，需要使用新版本 [`xfel`](https://github.com/xboot/xfel)，按照 [文档说明](https://github.com/xboot/xfel/tree/master/docs/zh-cn#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85) 进行安装


### 编译、运行、调试
修改 `makefile` 内的路径，直接执行 `make build` 进行编译，得到 `RFreeRTOS_Image` 固件；

不熟悉仿真器下载方式，先用全志的 `fel` 模式下载固件：
* 按住开发板上 `fel` 按键上电，是芯片进入 `fel` 模式；
* 执行以下命令完成下载并执行：
``` bash
sudo xfel ddr d1
sudo xfel write 0x40000000 RFreeRTOS_Image
sudo xfel exec 0x40000000
```

### 运行结果
原代码的输出结果较混乱，这是简单修改后的结果：
![nazha-first-run](./imgs/nazha-first-run.jpeg)
