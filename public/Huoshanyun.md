

# Huoshanyun Cloud

## CentOS

### build `TOMOATT` environ in CentOS

Install compiler and CMake (with GNU compiler)

```bash
sudo yum install gcc gcc-c++ cmake
```

Install MPI and HDF5 with parallel IO option

```bash
sudo yum install openmpi-devel hdf5-openmpi-devel
```

### build MPI environ 

multip nodes communication

```bash
vim /etc/hosts

# add the IP and node name[user defind]\
10.10.1.12 master
10.10.1.13 node1
10.10.1.14 node2
```

use `ping` to test the connection

### `yum` package path

```bash
yum -ql [package_name]
```

### load openmpi

```bash
module load [mpi_package]
```

### use linux ssh to connect CentOS service

```bash
chmod 400 ~/.ssh/ecs.pem
cd ~/.ssh

vim config
# 输入ECS实例的别名，用户SSH远程连接。
Host ecs
# 输入ECS实例的公网IP地址。
HostName 121.196.**.**
# 输入端口号，默认为22。
Port 22
# 输入登录账号。
User ecs-user
# 输入.pem私钥文件在本机的地址。
IdentityFile ~/.ssh/ecs.pem
```

And then, `ssh ecs` to connect the HuoshanYun.

## 登录端免密ssh连接节点端

generate the ssh-key.

```bash
ssh-keygen -t rsa
```

copy file to node

```bash
ssh-copy-id [node name]
```
