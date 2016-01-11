### 安装 [http://get.daocloud.io]
```shell
yum -y install docker-io
service docker start

```

### 镜像与容器

```shell
docker search <image> #在docker index中搜索image
docker pull <image> #从docker registry server 中下拉image

docker pull daocloud.io/library/centos:latest #国内环境
```

### 使用

```shell
docker run -v /home/test/dockdata:/data --name datavol -t -i <image id> /bin/bash #挂载一个宿主机目录到容器中 临时运行

docker run -v /home/test/dockdata:/data --name datavol -d -i <image id> /bin/bash #以服务的方式后台运行

docker ps -l #列出当前的容器
docker commit <container id> yzimhao/centos-lnmp #保存当前容器的状态

docker rm $(docker ps -a -q) #删除所有容器

```

### links

http://www.open-open.com/lib/view/open1410568733492.html
