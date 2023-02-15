# List processing

```mermaid
graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner);
```
## References

### Liu 2021 SRL (CVM1.0)

[link](https://doi.org/10.1785/0220200318)

data processing: 

1. avoid travel time **outliers**
- first remove travel-time data that are away from the main trend of travel-time curves.
- filter out earthquake events that were recorded by fewer than `10` stations
1. remove **redundant** earthquakes
This uneven distribution of body-wave data could lead to unstable inversion problems and result in unreliable features in the inverted velocity models. 
Divided study region into small bins (1-km-thick cell with 3 × 3 km area) and only use one randomly selected event in each bin.

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
    ChuanDian src rec  :active, , 2023-02-8, 15d

    section RealData
    ChuanDian ATT?      :b1, 2023-02-10, 10d
```
- YaoY 不同震中距测试 (checkerboard test)
...ing
- 川滇实际数据（台站位置和地震位置，from LiT）
**path:** /home/zhangxz/work/tomo/adjointTraveltime/real/ChuanDian_liT
...ing

- **Process Map**

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
   commit id: "change true model1" tag: "v1.5"
   commit id: "change true model2" tag: "v2.0"

   checkout Preprocess
   branch "Soure plot"
   commit id: "src_rec map" tag: ".py"
   commit id: "ray map" tag: ".cpp+.py"

   checkout Preprocess
   commit id: "limt dep data" tag: ".cpp"

   checkout "tomo test"
   merge Preprocess id: "change the inv dep" tag: "v3.0" type: REVERSE

   checkout Preprocess
   commit id: "rm < 4"
   commit id: "rm redundancy eq" tag: ".cpp"

   checkout "tomo test"
   merge Preprocess id: "clean data" tag: "v4.0"

   checkout "Soure plot"
   merge Preprocess id: "cells Hist" tag: ".py"

   checkout main
   merge "tomo test" type: REVERSE
   commit id: "final" type: HIGHLIGHT
```
_**Source plot:**_
> **src_rec map:** src and rec 的平面图和深度剖面
> **ray map:** 计算射线密度（本质上是`np.histogram2d`）, and plot it.
> **cells Hist:** calculated the `count` in each cells by C++, and plot the `histogram`

- script
build `.dat` by years  :  `src_rec_stati.sh`
merge `.dat` and delete `<3 recorded` events         : `test2_v2.cpp`
计算射线密度： `line_density.cpp`, plot: `plot_line_density.py`
plot src and rec 空间分布: `plot_src_rec.py` and `plot_src_rec_dep.py`
   

