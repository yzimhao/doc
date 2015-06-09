#### 1. 修改机器名称
> /etc/sysconfig/network

#### 2.  配置集群机器之间互相免密码登陆

#### 3. 添加ceph的源,

  rpm --import 'https://ceph.com/git/?p=ceph.git;a=blob_plain;f=keys/release.asc'
  rpm -Uvh http://mirrors.yun-idc.com/epel/6/i386/epel-release-6-8.noarch.rpm
  rpm -Uvh http://ceph.com/rpm-dumpling/el6/noarch/ceph-release-1-0.el6.noarch.rpm
  
#### 4.安装依赖库，和ceph-deploy工具
  yum install snappy leveldb gdisk python-argparse gperftools-libs -y
  yum install btrfs-progs -y
  yum install ceph-deploy python-pushy -y

#### 5.修改hosts文件,定义每个节点的名称
*hosts指向的名称，需要和第一步修改的主机名对应, 修改完成scp到每一台机器*

  172.17.6.81 ceph-mon0
  172.17.10.42 ceph-osd0
  172.17.6.78  ceph-osd1
  172.17.6.29 ceph-mds0

#### 6. 开始安装ceph
  ceph-deploy install ceph-mon0 ceph-osd0 ceph-osd1 ceph-mds0
*在集群mon机器上执行上面命令，开始安装ceph环境*

  vim /etc/ceph/ceph.conf
写入下面的配置信息，具体细节需要根据实际情况修改.

  [global]
    auth cluster required = none
    auth service required = none
    auth client required = none
    keyring = /etc/ceph/keyring.admin
    osd pool default size = 1
    osd pool default min size = 1
  [mon]
    mon data = /var/lib/ceph/mon/ceph-$id
    keyring = /etc/ceph/keyring.$name
  [osd]
     keyring = /etc/ceph/keyring.$name
     osd journal size = 512
     osd data = /var/lib/ceph/osd/ceph-$id
     osd journal = /var/lib/ceph/osd/ceph-$id/journal
     filestore xattruse omap = true
     osd mkfs type = xfs
     osd mkfs options xfs = -f
     osd mount options xfs = rw,noatime
  [mon.a]
    host = ceph-mon0
    mon addr= 172.17.6.81:6789
  [mds.a]
    host = ceph-mds0
  
  [osd.0]
    host = ceph-osd0
    devs = /dev/sdb
  [osd.1]
    host = ceph-osd1
    devs = /dev/sda
  
修改完配置文件，到osd节点上挂载相应的硬盘

  #osd.0
  mkfs.xfs -f /dev/sdb
  mount /dev/sdb /var/lib/ceph/osd/ceph-0
  
  #osd.1
  mkfs.xfs -f /dev/sda
  mount /dev/sda /var/lib/ceph/osd/ceph-1

修改完成，将mon节点上的/etc/ceph/ceph.conf复制到所有节点的对应目录， 在mon上执行：

  mkcephfs -a -c /etc/ceph/ceph.conf

一切顺利的话，就可以启动ceph了，

  service ceph -a start


一些常用的命令

  ceph -s #查看ceph集群状态，返回信息中 HEALTH_OK说明集群状态正常
  ceph osd tree #查看osd设备映射关系，权重等信息
