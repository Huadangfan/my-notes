# Python

## package 安装

手动安装，或者下载轮子文件 `(.whl)`，轮子文件是对应不同的系统
```bash
# download the tar.gz
# tar -zxvf **.tar.gz
cd [package]
python setup.py build
python setup.py install
```

## matplotlib.pyplot Figure

### 通用设置

通常使用 Times New Roman 以及刻度线朝内 <Badge text="通用设置" color="#242378" />

```python
import matplotlib.pyplot as plt

plt.rc('font',family='Times New Roman',size=12)
plt.rcParams['xtick.direction'] = 'in'
plt.rcParams['ytick.direction'] = 'in'

fig.savefig('filename.png',bbox_inches="tight") # save fig and cut the white padding
```

轴标签位置自定义：
```python
ax.set_ylabel('y', y=0.7, labelpad=-4)
ax.xaxis.labelpad = 50
# labelpad: distance between label text and axis
# y: the attribute of test, y=1 is top, 0 is bottom. Same as x.
```

`legend()`的框线和字体

```python
legfont={
  'family': 'Times New Roman',
  'style': 'normal'
  'size': 12,
  'weight': 'normal' # 加粗
}
ax.legend(frameon=False,prop=legfont) # 将font的设置用字典传递
```

find the available fontfamily

```python
import matplotlib
a = sorted([f.name for f in matplotlib.font_manager.fontManager.ttflist])
for i in a:
    print(i)
```

`grid`常用参数设置，浅灰色且虚线，垂直于x轴

```python
ax.grid(ls='--',color='grey',linewidth=0.5,alpha=0.5,axis='x')
```

`zorder`用于设置图层先后顺序，值越大，越后画

### gridspace

网格空间 [GridSpace](https://matplotlib.org/stable/api/_as_gen/matplotlib.gridspec.GridSpec.html) 返回值为子图类型 [SubplotSpec](https://matplotlib.org/stable/api/_as_gen/matplotlib.gridspec.SubplotSpec.html#matplotlib.gridspec.SubplotSpec).

```python
import matplotlib.gridspec as gridspec

gs = gridspec.GridSpec(4,4,wspace=0.1)
fig = plt.figure(figsize=(7,6))
ax1 = fig.add_subplot(gs[:,:3])
# plot ...
ax2 = fig.add_subplot(gs[:,-1])
# plot ...
```

### Axes 可见性

```python
ax.axes.xaxis.set_visible(True) # 设置刻度可见性
ax.axes.yaxis.set_visible(True)
ax.spines['top'].set_visible(False) # 设置轴可见性（顶部、左右、底部）
# top, bottom, left, right
```

### 自定义轴刻度和刻度标签

```python
ax.set_yticks([0,1,2]) # ticks location.
ax.set_yticklabels([0,1,2]) # string is ok.
```

### 重设大小

```python
fig.set_size_inches(width,higth)
# width 宽
# higth 高
```

### 手动添加legend, 自定义legend

见`Lengend`说明: [link](https://matplotlib.org/stable/api/legend_api.html#matplotlib.legend.Legend)

```python
ymin, ymax = ax2.get_ylim()
figHight = abs(ymin) + abs(ymax)
for shift, mainPeriod in enumerate(fil_period):
    test_patch = mpatches.Patch(color=(0,0,0,1), label=f'{mainPeriod} s')
    test_patch.set_visible(False)
    leg1 = ax2.legend(handles=[test_patch], handlelength=0.1, handletextpad=0.1, loc='upper right',
                        bbox_to_anchor=(1, (fil_p_num - shift + 1.65)*1.15*fil_p_num/figHight/figHight-0.02),
                        borderpad=0.2)
    ax2.add_artist(leg1)
```

### Examples

#### plot hist and scatter

plot the travel-time curve. Need:

`distance_pair` : src-rec pairs distance in [km]
`tt` : src-rec pairs travel-time in [s]

```python
import matplotlib.gridspec as gridspec
# import matplotlib.ticker as mticker

gs = gridspec.GridSpec(5,1,hspace=0.05)

fig_tt_curve = plt.figure(figsize=(6,6))
ax_tt_hist   = fig_tt_curve.add_subplot(gs[0,:])
ax_tt_curve  = fig_tt_curve.add_subplot(gs[1:5,:])

ax_tt_hist.hist(distance_pair, bins=25, color='black', rwidth=0.9,density=True)
ax_tt_hist.grid(ls='--',color='grey',linewidth=0.5,alpha=0.5,axis='y')
ax_tt_hist.set_xticklabels([])
ax_tt_hist.set_xticks([])
ax_tt_hist.set_yticks([0,0.005,0.01],['0%', '0.5%', '1%'])
ax_tt_hist.set_ylabel('Percentage')
# ylabeltick = ax_tt_hist.get_yticks()
# ax_tt_hist.yaxis.set_major_locator(mticker.FixedLocator(ylabeltick))
# ax_tt_hist.set_yticklabels(['0%', '0.5%', '1%'])
for i in ['top', 'left', 'right']:
    ax_tt_hist.axes.spines[i].set_visible(False)

_ = ax_tt_curve.scatter(distance_pair, tt, marker='.', s=0.5, label='P wave', color='black')
ax_tt_curve.tick_params(axis='both',direction='in')
ax_tt_curve.set(
    xlabel='Epicentral distance (km)',
    ylabel="Travel time (s)"
)
xmin, xmax = ax_tt_curve.get_xlim()
ax_tt_hist.set_xlim([xmin, xmax])
ax_tt_curve.legend(frameon=True)
```
<div align=center>
<img src="https://cdn.staticaly.com/gh/Huadangfan/IMAGE-HOSTING@master/github_page/tt_curve.4u5bga66h0g0.webp" alt="travel time cutve"/>
</div>


<!-- {{{width="600" height="auto"}}} -->

## Numpy 应用

### 路径/射线密度统计

using `np.histogram2d` and `plt.pcolormesh`, see [detail (example in mtaplotlib)](https://matplotlib.org/stable/gallery/statistics/time_series_histogram.html#sphx-glr-gallery-statistics-time-series-histogram-py)

## Multiprocessing

常用：
```python
from multiprocessing import Pool

def runFunction(...):
  pass

if __name__ == '__main__':
  # +------------------+
  # | Define mutlp run |
  # +------------------+
  p = Pool(10)
  for i in range(xxx):
    p.apply_async(runFunction, args=(...))
  
  # ---------
  # Hold on 
  # ---------
  p.close()
  p.join()
  print('Everything is OK!')
```

## Other

### 多进程

使用 `Pool()` 进程池，使用 `Pool.apply_async(func, args=(...))` 方法。

## Citation

All figures were generated using [Generic Mapping Tools](https://www.generic-mapping-tools.org/) (GMT, Wessel et al., 2019) and the [Matplotlib](https://matplotlib.org/) library implemented in Python (Hunter, 2007).

> Hunter JD (2007). Matplotlib: A 2D graphics environment. Computer in Science & Engineering, 9(3): 90-95, doi: 10.5281/zenodo.592536.

## History

- Last modify: 2022/10/26
