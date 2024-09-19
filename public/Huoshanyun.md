

# Huoshanyun Cloud

## CentOS

### mnt the disk in CentOS

check the disk info

```bash
lsblk
```

查看分区

```bash
fdisk -l
```

create the dirtory `mkdir /mnt/study`

Formatting the disk `mkfs -t ext4 /dev/vdb`

Finally, mount the disk on the dir which was created previously.

```bash
mount /dev/vdb /mnt/study
```

开机自动挂载

```bash
/dev/vdb /mnt/study ext4 defaults 0 1
```

### build NFS (Network File System)

#### 服务端

First install the package

```bash
yum -y install rpcbind nfs-utils
```

And then, create the sharing directory

```bash
mkdir -p /mnt/test/test2
chomd 755 -R /mnt/test/test2
```

Configing the NFS

```bash
vim /etc/exports

/mnt/test/test2 [ip or nodename](rw,no_root_squash,sync)
```

And then `exportfs -r`

firewall?

Then, start the service

```bash
systemctl start rpcbind
systemctl start nfs-server

# ststemctl status ** # check the status of service
```

开机自启动?

```bash
systemctl enable rpcbind
systemctl enable nfs-server
```

use `showmount -e localhost` to check the localhost

#### 客户端

Install necessary packages

```bash
yum -y install rpcbind nfs-utils
```

and also start the service

```bash
systemctl start rpcbind
systemctl start nfs-server
```

use the `showmount -e [服务器端ip or name]` to check the status

挂载目录

```bash
mkdir /mnt/test/test2
mount -t nfs [服务端ip or name]:/mnt/test/test2 /mnt/test/test2 -o vers=4
```

开机自挂载

```bash
# nfs 需要网络，挂载硬盘后再挂载nfs
vim /etc/rc.d/rc.local

# add after the last line
mount -t nfs [服务端ip or name]:/mnt/test/test2 /mnt/test/test2 -o vers=4
```

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
