---
icon: edit
date: 2022-10-27
lastUpdated: True
category:
  - works
  - model_comparison
tag:
  - 黄
  - 弯曲的
  - 长
---

# Model Comparison

## 正演测试

::: danger 警告

:skull: Herrmann's code only for 200 layers model. (`NL=200`). Need to modify maunally.

:::

### `Q`

面波频散在粘弹性介质中存在物理频散，需要考虑`Q`的影响, The crustal Q value is high enough that there is little physical dispersion in the crustal shear modulus. The effect is largely confined to the mantle with much smaller effects in the crust (Kanamori et al., 1977; Shen WS et al., 2016a, 2016b).

### `earth-flattening` and `spherical`

将球坐标模型展成笛卡尔坐标，对模型速度会有影响，深部速度会变大，在`Moho`面以下就有比较大的影响了。关于`sperical`和`earth-flattening`可以看`CPS`程序[指南](https://www.eas.slu.edu/eqc/eqc_cps/TUTORIAL/SPHERICITY/)

![Figure 1](/plot_new_MM_abs.svg "Figure 1" =800x)

![GitHub 徽标](/assets/icon/ms-icon-144.png "Github 徽标")

### 标题 3

这里是内容。

## References

* Kanamori and Anderson. (1977). Importance of Physical Dispersion in Surface Wave and Free Oscillation Problems' Revieiew. Rev. Geophys. Space Phys., 15(1).
* Shen WS et al. (2016a). Crustal and uppermost mantle structure beneath the United States. JGR, 121: 4306-4342.
* Shen WS et al. (2016b). A seismic reference model for the crust and uppermost mantle beneath China from surface wave dispersion. GJI, 206: 954-979.

## History

- Last modify: 2022/11/04