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

docker images #查看所有本地镜像
```

### 使用

```shell
#挂载一个宿主机目录到容器中 临时运行
docker run -v /home/test/dockdata:/data --name datavol -p 80:80 -p 9001:9001 -t -i <image id> /bin/bash 

#以服务的方式后台运行
docker run -v /home/test/dockdata:/data --name datavol -p 80:80 -p 9001:9001 -d -i <image id> /bin/bash 

docker ps -l #列出当前的容器

docker rm $(docker ps -a -q) #删除所有容器

docker start [container-id] #在守护进程模式下重新启动某个已停止的容器

docker attach [container-id] #连接到后台运行的容器，以便查看容器或与之交互

docker commit [container-id] [new-image-name] #保存当前容器的状态

#登陆镜像
docker run -ti [IMAGE_ID] /bin/bash

#打包镜像
docker save debian02 >/root/debian02.tar

#在另外的机器上导入镜像
docker load < debian02.tar

```

### links

http://www.open-open.com/lib/view/open1410568733492.html
