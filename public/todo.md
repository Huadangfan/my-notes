# List processing

```mermaid
graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner);
```

```mermaid
---
title: TomoATT
---
gitGraph
   commit tag: "v1218" id:"12-28"
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit

```

## TomoATT work before 2023

**Root:** D:\zhangxzh\work\Model_China\TomoATT
**Path:** /home/zhangxz/work/tomo/adjointTraveltime/examples

- 小区域模型测试 (**done**)
- 大区域模型测试 (**done**)

## TomoATT work in 2023

```mermaid
gantt
    title TomoATT (2023)
    dateFormat  YYYY-MM-DD
    axisFormat   %m-%d

    section YaoY
    checkerboard+Linear (diff distance) :crit, activ, 2023-01-30, 20d


    section myTesting
    small model test   :done, milestone, 2023-01-30, 0d
    Region model test  :done, milestone, 2023-01-30, 0d
    ChuanDian src rec  :active, , 2023-02-8, 3d

    section RealData
    ChuanDian ATT?      :b1, 2023-02-10, 10d
```
- YaoY 不同震中距测试 (checkerboard test)
...ing
- 川滇实际数据（台站位置和地震位置，from LiT）
**path:** /home/zhangxz/work/tomo/adjointTraveltime/real/ChuanDian_liT
...ing
