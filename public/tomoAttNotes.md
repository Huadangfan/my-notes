---
icon: edit
date: 2022-01-06
category:
  - Seismology
  - Tomography
tag:
  - Tool
star: 10
---

# TomoATT

## Params input

station location: Lat, Lon, Depth (in meter, negetive (-) if beneth ground)
sourece location: Lat, Lon, Depth (in km, plus (+) beneth ground)

min_max_dep: the min_dep should be negetive depth, which means the outer boundary of the calculation area is slightly out of bounds. For example, `[-10.0, 100.0]`. The unit in km.

## checkboard test

通常对一个波长的perturbation用`5`个点来采样，从而决定空间网格划分。

### 标题 3

这里是内容。
