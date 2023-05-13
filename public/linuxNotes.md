---
icon: edit
date: 2022-09-27
category:
  - 编程
tag:
  - Bash
  - Linux
---

# Linux

## 解压

解压不同后缀的压缩文件。

::: code-tabs#shell

@tab .zip

```bash
unzip [filename].zip
# -d target directory
```

@tab .tgz

```bash
tar zxvf [filename].tgz
# -C target directory
```

@tab .tar.gz

```bash
tar -zxvf [filename].tar.gz
# -v verbose output
# -f specify filename
# -C target directory
```

@tab .tar

```bash
tar -xvf [filename].tar
# -v verbose output
# -f specify filename
```

@tab .bz2

```bash
bzip2 -d [filename].bz2
# -d decompress
# -k no delete the input file (--keep)
```

:::

## Conda

### Create env

```bash
$ conda create --name yourEnv python=3.8
```

### install package :hammer:

通常使用 `-c conda-forge [package name]`来解决包依赖问题，[conda-forge](https://conda-forge.org/docs/index.html) is a community effort and a GitHub organization which contains repositories of conda recipes and thus provides conda packages for a wide range of software

### soure 清华

from [link](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/), configure of `~/.condarc`

```yaml
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  # 如果需要使用其他第三方源（参考上方完整列表）
  # 例如 conda install -c pytorch-test，则可以添加
  #pytorch-test: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```

## Bash 常用

### 文本

#### 文本循环

使用 `cat [file.name] | while` 会出现参数无法传递问题，使用文本换行符进行循环。

```bash
# replace IFS symbol from space to \n
IFS_old=$IFS
IFS=$'\n'
for line in $(cat [filename]);do
...
done
IFS=$IFS_old
```

#### awk 平均

```bash
cat data.dat | awk '{sum+=$1} END {print "Average = ", sum/NR}'
```

## shell并行

### `&` 后台+管道控制

并行对同一文件进行读写操作，目前不清楚是否存在文件锁，即同一时间只有一个`write`
```bash {16-21}
#!/bin/bash

tmp_fifofile="/tmp/$$.fifo"
mkfifo $tmp_fifofile
exec 6<>$tmp_fifofile
rm -rf $tmp_fifofile

thread=40 # here is the pool of threading
for (( i=0;i<$thread;i++ ))
do
    echo ""
done >&6

# in some loops:
for file in `ls -d [0,1]*[0,1,2,3,4,5,6,7,8,9]`;do
    read -u6
    {
    echo $file
    [Your Function]
    echo >&6
    }&
done

wait
exec 6>$-

exit 0
```

::: danger 警告

:skull: 被花括号包围的程序可能会从串行变成并行，导致CPU超负荷 (运行进程超过核数)！

:::

### `coproc`异步命令

Execute COMMAND asynchronously, with the standard output and standard input of the command connected via a pipe to file descriptors assigned to indices 0 and 1 of an array variable NAME in the executing shell.

### 查看FD(file descriptors)使用情况

```bash
$ ls -lh /proc/$$/fd
```

## Bash

### if check

check folder existing

```bash
if [ ! -d "/myfolder" ]; then
  mkdir /myfolder
fi
```

### text operator

- 替换文本

```bash
sed -i '6c [target text]' [file]
# -i operator in the orginal file
# 6c: 6 th line
# target text: you want to write in the text file.
```
- 指定输出

```bash
sed -n '6,12p' [file]
# -n using line number
# p: print
# print 6 to 12 lines
```
- tab to whitespace
```bash
cat filename | col -x > filename_new
```

## History :scroll:

- Last modify: 2022/10/28
