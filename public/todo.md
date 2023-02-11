# List processing

```mermaid
graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner);
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
    small model test (done)   :done, milestone, 2023-01-30, 0d
    Region model test (done)  :done, milestone, 2023-01-30, 0d
    ChuanDian src rec  :active, , 2023-02-8, 5d

    section RealData
    ChuanDian ATT?      :b1, 2023-02-10, 10d
```
- YaoY 不同震中距测试 (checkerboard test)
...ing
- 川滇实际数据（台站位置和地震位置，from LiT）
**path:** /home/zhangxz/work/tomo/adjointTraveltime/real/ChuanDian_liT
...ing

```mermaid
---
title: ChuanDian Fake data test
---
gitGraph
   commit id: "data from LiT"
   commit id: "build .dat by years" tag: ".sh"
   branch "Preprocess"
   checkout Preprocess
   commit id: "merge .dat" tag: ".cpp"
   commit id: "delete < 3 event"
   branch "tomo test"
   checkout "tomo test"
   commit id: "used total data" tag: "v1.0"
   commit id: "change true model" tag: "v2.0"

   checkout Preprocess
   branch "Soure plot"
   commit id: "src_rec map" tag: ".py"
   commit id: "ray map" tag: ".cpp+.py"

   checkout Preprocess
   commit id: "limt dep data" tag: ".cpp"

   checkout "tomo test"
   merge Preprocess id: "change the inv dep" tag: "v3.0"

   checkout main
   merge "tomo test"
   commit id: "final" type: HIGHLIGHT
```
- script
build `.dat` by years  :  `src_rec_stati.sh`
merge `.dat` and delete `<3 recorded` events         : `test2_v2.cpp`
计算射线密度： `line_density.cpp`, plot: `plot_line_density.py`
plot src and rec 空间分布: `plot_src_rec.py` and `plot_src_rec_dep.py`
   

