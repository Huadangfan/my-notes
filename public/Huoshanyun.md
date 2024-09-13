

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
