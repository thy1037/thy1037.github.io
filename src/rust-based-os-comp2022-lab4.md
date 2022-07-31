# LAB4 实验报告
*2022-07-27*

## 简述功能
引入文件系统，实现了一个简单的文件系统 `easy-fs`，程序 elf 数据以文件的形式存在硬盘中，`spawn` 系统调用产生新进程时可以通过打开并读取文件的方式获取程序数据。兼容LAB3的基础上，增加 `linkat`,`unlinkat`,`fstat`三个系统调用。

## 简答题
1. 目前的文件系统仅支持绝对路径，`root inode` 是整个文件系统的入口，对于任何文件/目录的索引都必须从根目录开始向下级进行，索引完成后才能对文件/目录进行操作。<br> 如果 `root inode` 内容损坏，整个文件系统将无法访问。

## 完成记录
1. 查看工程代码结构，在适当的位置添加 LAB3 相关代码；
2. 对于 `sys_fstat` 系统调用，需要先在 easy-fs 中增加接口，efs 又通过 虚拟文件系统 vfs 对外暴露接口，涉及到虚拟地址与物理地址的转换;
3. 对于 `sys_linkat`, `sys_unlinkat` 同样需要在 vfs 层先做虚拟地址与物理地址的转换，并对现有的 `inode` 进行操作。

使用过嵌入式操作系统的文件系统 Fatfs，没有深入了解其实现，与本实验中的 easy-fs 在实现原理在大同小异，后期可以对比这看，加深理解。 

过程中参考了 Yakkhini 同学的代码，后续需要强化该章知识。