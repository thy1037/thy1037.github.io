### 启动流程
通过查看用户手册，D1支持的启动方式有：On-chip Memory、SD card、eMMC、SPI NOR Flash、SPI NAND Flash，但这些方式本项目中暂时都用不到。通过查看用户手册，DRAM 映射在 `0x4000_0000` 地址：
![DRAM](./imgs/D1-DRAM.png)

编写链接脚本，将所有段都输出到此地址，然后在`fel`模式中通过`xfel`工具将固件加载到此地址，再从此地址执行。

查看启动文件，程序的启动流程为：
![程序启动流程图](./imgs/%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B%E5%9B%BE.png)
