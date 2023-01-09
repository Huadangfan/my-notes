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

## Citation

All figures were generated using [Generic Mapping Tools](https://www.generic-mapping-tools.org/) (GMT, Wessel et al., 2019) and the [Matplotlib](https://matplotlib.org/) library implemented in Python (Hunter, 2007).

> Hunter JD (2007). Matplotlib: A 2D graphics environment. Computer in Science & Engineering, 9(3): 90-95, doi: 10.5281/zenodo.592536.

## History

- Last modify: 2022/10/26