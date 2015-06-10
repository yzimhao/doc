#### ceph
参考文档
> https://www.ustack.com/blog/ceph_infra/


Ceph是一个 Linux PB 级分布式文件系统。
 1. 高扩展性：使用普通x86服务器，支持10~1000台服务器，支持TB到PB级的扩展。
 2. 高可靠性：没有单点故障，多数据副本，自动管理，自动修复。
 3. 高性能：数据分布均衡，并行化度高。对于objects storage和block storage，不需要元数据服务器

Ceph 生态系统架构可以划分为四部分：
 1. Clients：客户端（数据用户）
 2. cmds：Metadata server cluster，元数据服务器（缓存和同步分布式元数据）
 3. cosd：Object storage cluster，对象存储集群（将数据和元数据作为对象存储，执行其他 关键职能）
 4. cmon：Cluster monitors，集群监视器（执行监视功能）


数据映射：
数据映射(Data Placement)的方式决定了存储系统的性能和扩展性。(Pool, PG) → OSD set 的映射由四个因素决定：
 1. CRUSH算法：一种伪随机算法。
 2. OSD MAP：包含当前所有Pool的状态和所有OSD的状态。
 3. CRUSH MAP：包含当前磁盘、服务器、机架的层级结构。
 4. CRUSH Rules：数据映射的策略。这些策略可以灵活的设置object存放的区域。比如可以指定   pool1中所有objecst放置在机架1上，所有objects的第1个副本放置在机架1上的服务器A上，第2个副本分布在机架1上的服务器B上。 pool2中所有的object分布在机架2、3、4上，所有Object的第1个副本分布在机架2的服务器上，第2个副本分布在机架3的服 器上，第3个副本分布在机架4的服务器上。
 
 

![enter image description here](http://42.62.73.30/wordpress/wp-content/uploads/2013/09/Distributed-Object-Store.png)
