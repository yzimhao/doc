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


(http://42.62.73.30/wordpress/wp-content/uploads/2013/09/Distributed-Object-Store.png)
