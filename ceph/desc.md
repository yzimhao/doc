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
 4. CRUSH Rules：数据映射的策略。这些策略可以灵活的设置object存放的区域。比如可以指定
pool1中所有objecst放置在机架1上，所有objects的第1个副本放置在机架1上的服务器A上，第2个副本分布在机架1上的服务器B上。 pool2中所有的object分布在机架2、3、4上，所有Object的第1个副本分布在机架2的服务器上，第2个副本分布在机架3的服 器上，第3个副本分布在机架4的服务器上。
 

Client从Monitors中得到CRUSH MAP、OSD MAP、CRUSH Ruleset，然后使用CRUSH算法计算出Object所在的OSD set。所以Ceph不需要Name服务器，Client直接和OSD进行通信。

![enter image description here](http://42.62.73.30/wordpress/wp-content/uploads/2013/09/Distributed-Object-Store.png)


优点：

 a.高性能
Client和Server直接通信，不需要代理和转发
多个OSD带来的高并发度。objects是分布在所有OSD上。
负载均衡。每个OSD都有权重值(现在以容量为权重)。
client不需要负责副本的复制(由primary负责),这降低了client的网络消耗。

 b. 高可靠性
数据多副本。可配置的per-pool副本策略和故障域布局，支持强一致性。
没有单点故障。可以忍受许多种故障场景；防止脑裂；单个组件可以滚动升级并在线替换。
所有故障的检测和自动恢复。恢复不需要人工介入，在恢复期间，可以保持正常的数据访问。
并行恢复。并行的恢复机制极大的降低了数据恢复时间，提高数据的可靠性。

 c.高扩展性
高度并行。没有单个中心控制组件。所有负载都能动态的划分到各个服务器上。把更多的功能放到OSD上，让OSD更智能。
自管理。容易扩展、升级、替换。当组件发生故障时，自动进行数据的重新复制。当组件发生变化时(添加/删除)，自动进行数据的重分布。
