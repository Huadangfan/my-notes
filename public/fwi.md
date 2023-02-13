---
icon: edit
date: 2022-01-06
category:
  - works
  - FWI
tag:
  - SPECFEM3D
star: 10
---

# Full waveform inversion

使用全波形正演和反演

## Specfem3D Globe

Full documentation [link](https://specfem3d-globe.readthedocs.io/en/latest/)

### install in PKU cluster

download:
```bash
git clone --recursive --branch devel https://github.com/geodynamics/specfem3d_globe.git
```

```bash
# using Intel compilier
./configure FC=ifort CC=icc MPIFC=mpiifort
```

configure 之后：
```txt
 ./configure has completed and set up a default configuration to build. 
 You may wish to modify the following files before building:
 DATA/Par_file       Set parameters affecting the build and simulation 
                     before running make and compiling.
 DATA/CMTSOLUTION    Set the source parameters before running the solver.
 DATA/STATIONS       Set the receiver stations before running the solver.
```
修改`DATA`里面的参数设置之后，再`make xmeshfem3D` (生成模型曲面)，`make clean`and`make specfem3D` (solver)

### 标题 3

这里是内容。

## History

- Last modify: 2022/11/04