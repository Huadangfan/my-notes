---
icon: code
date: 2022-11-04
lastUpdated: true
category:
  - 编程
tag:
  - VIM
  - Linux
---

# VIM

## 常用

### 全局替换

```vim
:%s/[original string]/[target string]/g
```

### no highlight

```vim
:noh
```

### file encoding
```sh
vim "+e ++enc=gbk" 2015.txt # open the file with the true encoding
# enter the vim 
:set fileencoding=utf-8
:wq
```

### dos to unix (remove ^M)
```sh
vim 2015.txt # open the file
:e ++ff=dos
:set ff=unix
:wq
```

## History

- Last modify: 2022/11/04