# List processing

```mermaid
graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner);
```

## TomoATT work before 2023

Root: D:\zhangxzh\work\Model_China\TomoATT

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
    A task             :a2, 2023-01-30,  10d
    ChuanDian src rec  :active, milestone, 2023-02-10, 0d

    section RealData
    ChuanDian ATT?      :b1, 2023-02-10, 10d
```
- YaoY 不同震中距测试 (checkerboard test)
- 川滇实际数据（台站位置和地震位置，from LiT）
...ing
