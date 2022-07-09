Object.assign(window.search, {"doc_urls":["index.html#简介","rust.html#rust","rust-based-os-comp2022.html#2022-开源操作系统学习笔记","rust-based-os-comp2022.html#weekly-1-73--710","rust-based-os-comp2022.html#内容","rust-based-os-comp2022.html#计划"],"index":{"documentStore":{"docInfo":{"0":{"body":2,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":12,"breadcrumbs":2,"title":1},"3":{"body":0,"breadcrumbs":5,"title":4},"4":{"body":38,"breadcrumbs":1,"title":0},"5":{"body":2,"breadcrumbs":1,"title":0}},"docs":{"0":{"body":"使用 Github.io 和 mdbook 搭建的个人博客站点 记录学习，记录生活","breadcrumbs":"简介 » 简介","id":"0","title":"简介"},"1":{"body":"","breadcrumbs":"Rust » Rust","id":"1","title":"Rust"},"2":{"body":"2022.7.1 网上冲浪时发现了由清华大学、CSDN、毛豆教育等共同举办的 2022年开源系统系统训练营 活动。异常兴奋！之前很长一段时间内利用碎片时间学习了 Rust 语言，并初步了解了计算机操作系统，因为个人工作是使用C语言、嵌入式实时操作系统进行产品开发，所以对基于 Rust 的计算机操作系统开发非常感兴趣，观看、学习了计算机操作系统的相关的大学视频后，好奇并希望完成相关 Lab，但一直没有找到较好的资源。现在这个训练营提供了完备的学习计划、实验内容，并且有多位老师、助教全程指导，上百位爱好者共同学习、交流，能够系统地学习 Rust 语言和计算机操作系统，堪称完美，希望能坚持到底。 作为从业者，因为工作和家庭的原因，每天没有太多的时间专用于此次训练营活动，基本每天能够早上1.5个小时，晚上小于1个小时。不管是 Rust 还是计算机操作系统，都还只是入门甚至未入门的状态，每天完成的内容非常有限，所以将每日内容记录在 git commit 中，周末总结一篇周记，这是适用于我的学习过程记录方式。","breadcrumbs":"2022 开源操作系统学习笔记 » 2022 开源操作系统学习笔记","id":"2","title":"2022 开源操作系统学习笔记"},"3":{"body":"","breadcrumbs":"2022 开源操作系统学习笔记 » Weekly 1 (7.3 ~ 7.10)","id":"3","title":"Weekly 1 (7.3 ~ 7.10)"},"4":{"body":"详细查看了训练营的活动安排，分为两个阶段，现开放第一阶段活动，根据第一阶段的完成度决定是否可以进入第二阶段。第一阶段主要分三步： step 0 自学 Rust 编程 （大约7～14天） step 1 自学 risc-v 系统结构（大约2~7天） step 2 基于Rust语言进行操作系统内核实验--based on qemu （大约14~31天） 根据训练营计划的 Step0 描述内容，花了一周的时间完成了 rustlings 。纯粹只是完成了全部的习题，没有深入体会考核意图，甚至没弄明白的答案的原理。 整套练习共 84 小题，个人认为涵盖了 Rust 除生命周期外的所有内容，都是一些浅显的考核内容。 但即使如此，从 error_handling 开始的习题，明显感觉知识掌握不够，需要借助翻阅资料完成。之前的内容是一些基本数据类型、语法定义，与 C语言大同小异，从这里开始就是一些 Rust 特有的数据类型、语法，错误处理是 Rust 的特色之一，C语言中的多用函数返回值判断错误标示，用 goto 方式集中处理错误内容，繁琐且覆盖不全，代码难以阅读，而 Rust 使用特有的 Option、Result 数据类型来定义和处理错误，enum 于C语言也有非常大的区别，要深入理解并熟练掌握使用这三个数据类型，需要大量的代码积累。 从 conversions 章节开始，部分题目已无法独立完成，需要在网上寻找答案，根据答案进行分析理解。Rust 另一个难点在于类型转换，C语言中可以使用强制类型转换，更是存在 void * 这种极致自由的任意门类型，为了安全，Rust 的数据类型设计的没有那么显然，这也是与编译器作斗争的主要原因，让熟悉 C语言的人概念转换过于艰难，要掌握 Rust 的类型转换需要熟悉每种类型自带的转换方法，如 to_string()、collect()等，并理解每种类型的设计需求，类型间的关系、关联。这些也都只能在后续的实验中，通过阅读大量的代码逐步加深理解。 掌握人类语言需要多说多听，掌握计算机语言则需要多写多看，代码量是掌握程度的唯一标准。就像张汉东老师说的，大致的意思是：不存在某一个瞬间就突然学会了 Rust。","breadcrumbs":"2022 开源操作系统学习笔记 » 内容","id":"4","title":"内容"},"5":{"body":"根据活动安排，接下来自学 risc-v，从特权模式、汇编语言入手，两天时间先过一遍所有的汇编指令。","breadcrumbs":"2022 开源操作系统学习笔记 » 计划","id":"5","title":"计划"}},"length":6,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"1":{".":{"5":{"df":0,"docs":{},"个":{"df":0,"docs":{},"小":{"df":0,"docs":{},"时":{"df":0,"docs":{},"，":{"df":0,"docs":{},"晚":{"df":0,"docs":{},"上":{"df":0,"docs":{},"小":{"df":0,"docs":{},"于":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}},"4":{"df":0,"docs":{},"~":{"3":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}},"2":{"0":{"2":{"2":{".":{"7":{".":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}},"~":{"7":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"7":{".":{"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"～":{"1":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"8":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":2.23606797749979}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"s":{"d":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"l":{"a":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":2.0},"4":{"tf":3.1622776601683795}},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"(":{")":{"df":0,"docs":{},"、":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"v":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"1":{".":{"5":{"df":0,"docs":{},"个":{"df":0,"docs":{},"小":{"df":0,"docs":{},"时":{"df":0,"docs":{},"，":{"df":0,"docs":{},"晚":{"df":0,"docs":{},"上":{"df":0,"docs":{},"小":{"df":0,"docs":{},"于":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}},"4":{"df":0,"docs":{},"~":{"3":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"2":{"0":{"2":{"2":{".":{"7":{".":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"2":{"tf":2.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}},"~":{"7":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"7":{".":{"1":{"0":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"～":{"1":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"8":{"4":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":2.23606797749979}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"s":{"d":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"l":{"a":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"m":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}},"q":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":2.0},"4":{"tf":3.1622776601683795}},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"0":{"df":1,"docs":{"4":{"tf":1.0}}},"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"(":{")":{"df":0,"docs":{},"、":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"v":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}}}},"title":{"root":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"2":{"0":{"2":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"7":{".":{"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});