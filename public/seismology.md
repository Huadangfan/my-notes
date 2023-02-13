---
icon: edit
date: 2022-01-06
category:
  - Seismology
tag:
  - RESP
star: 10
---

# 地震学

## 仪器响应的sensitive

我们拿到的地震数据，横轴是时间，纵轴是振幅，这个振幅是没有单位的，或者说单位叫做count，而我们需要的单位是速度，m/s。对于宽频带或短周期仪器，它们记录的是速度，所以仪器响应文件里会给一个值叫做Sensitivity（如后附的这个RESP文件，line 91），其含义是1m/s对应多少个count，量纲也就是count/(m/s)，我们把这个值写在PAL输入的台站文件的每行最后一项就好。需要注意的是数采（DAS）和摆（snesor）都会有一个sensitivity值，这两个值需要乘起来，也就是说你需要从仪器厂商的官网上搜到两个仪器的sensitivity！我们在示例里给的sensitivity是100，这是因为我们下载SCSN数据的时候规定了GAIN ON，也就是下载的都是去除了sensitivity的数据，其单位是cm/s，这里给100是为了转换为m/s。
总结：sensitivity从仪器响应文件里找，它的单位是count/(m/s)，sensitivity不是采样率（sampling rate）！PALM的输入数据就是原始数据，不需要去除仪器响应！


### 标题 3

这里是内容。
