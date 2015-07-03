### mogilefs 安装

###### 1.  安装基本环境

    yum install gcc
    yum install perl perl-E
    xtUtils-MakeMaker
    wget --no-check-certificate http://xrl.us/cpanm -O /usr/bin/cpanm
    chmod +x /usr/bin/cpanm 
    
    cpanm IO::AIO
    cpanm Perlbal
    cpanm Net::Netmask
    cpanm DBD::mysql
    cpanm MogileFS::Server
    cpanm MogileFS::Utils
    cpanm MogileFS::Client
    cpanm Cache::Memcached
    
    cpanm MogileFS::Network

>  安装速度慢,可以使用国内镜像安装

    cpanm --mirror http://mirrors.163.com/cpan  DBD::mysql


###### 2. 创建数据库账号，初始化数据库

    create database mogilefs;
    grant all privileges on mogilefs.* to mogilefs@'%' identified by '180e2127';
    flush privileges;

    #初始化数据库
    mogdbsetup --dbhost=183.136.xxx.7 --dbname=mogilefs --dbuser=mogilefs --dbpass=180e2127


###### 3. 添加存储用户，复制配置文件，并启动服务，启动存储node


    adduser mogile
    #启动mogilefsd master
    mogilefsd -c /etc/mogilefs/mogilefsd.conf --daemon
    
    #设置存储结点
    vim /etc/mogilefs/mogstored.conf
    #启动存储结点
    mogstored --daemon

    
