### Nezha 物理开发环境搭建
* 编译工具。从芯片官网 [occ.t-head.cn](https://occ.t-head.cn/community/download) 下载工具链 `Xuantie-900-gcc-elf-newlib-x86_64-V2.6.0-20220715.tar.gz`，解压后将 `bin` 目录添加到环境变量；

* 下载工具：xfel。全志的芯片大多支持fel模式，普通的 `fel` 工具不支持 riscv 芯片，需要使用新版本 [`xfel`](https://github.com/xboot/xfel)，按照 [文档说明](https://github.com/xboot/xfel/tree/master/docs/zh-cn#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85) 进行安装；

#### 编译、运行、调试
* 执行 `make build` 进行编译，得到 `RFreeRTOS_Image` 固件；
* 按住开发板上 `fel` 按键上电，是芯片进入 `fel` 模式；
* 执行以下命令完成下载并执行：
``` bash
sudo xfel ddr d1
sudo xfel write 0x40000000 RFreeRTOS_Image
sudo xfel exec 0x40000000
```

> 关于下载地址 `0x4000_0000` 后续会有详细说明。

#### 运行结果
原代码的输出结果较混乱，这是简单修改后的结果：

![nazha-first-run](./imgs/nazha-first-run.jpeg)

