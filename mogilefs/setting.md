## mogilefs 相关配置

* 多数据中心

```
 cpanm MogileFS::Plugin::ZoneLocal
```

```
mogadm settings set network_zones master,slave
mogadm settings set zone_master 183.136.0.0/24
mogadm settings set zone_slave 183.60.0.0/24

mogadm host modify storage0 --ip=183.136.0.7 --altip=172.16.50.27 --altmask=172.16.50.0/24
mogadm host modify storage1 --ip=183.136.0.8 --altip=172.16.50.28 --altmask=172.16.50.0/24

mogadm host add ZS_NODE01 --ip=183.60.0.8 --altip=172.17.50.27 --altmask=172.17.50.0/24 --port=7500 --status=alive
```



* 修改domain class复制策略

```
mogadm class modify search_image default --mindevcount=3 --replpolicy='HostsPerNetwork(master=2,slave=1)' --hashtype=MD5
mogadm class modify topv_yunfan_image default --mindevcount=3 --replpolicy='HostsPerNetwork(master=2,slave=1)' --hashtype=MD5
mogadm class modify topv_yunfan_video default --mindevcount=3 --replpolicy='HostsPerNetwork(master=2,slave=1)' --hashtype=MD5
```



*  test:

```
mogfileinfo --domain=test --key='f803df98cdbb63e7.mp4'
mogupload --domain=multi_network_test --key="a5.txt" --file='a5.txt'
mogfileinfo --domain=test --key="a5.txt"
mogfileinfo --domain=test --key="8e6d9d5b610c9ecf.mp4"
```

## fsck

Fsck 将使用了一堆晦涩的错误代码,用来发现和处理问题,我们 fsck 完的结果就是用下面的代码来表示.直接 mogadm fsck taillog 的日志就是这些信息.

* NOPA: 没有可用的路径(URL).
* POVI: 相应的复制策略不一致.这可能意味着太少或太多的文件副本.
* MISS: 文件可能不存在,应该存在至少一个拷贝在相应的磁盘.
* BLEN: 找到的文件大小不正确.
* GONE: 试图找到任何可以使用的,正确的拷贝,但没有找到可用.如果您收到这些错误,你应该深入您的应用程序,来找出为什么它为什么不翼而飞.
* SRCH: 开始彻底的搜索丢失的文件.
* FOND: 已恢复了被认为丢失的 FID 的拷贝.
* REPL: 根据复制策略来修复并同步文件.
* BCNT:  'devcount' 的 cache 是错误的.


