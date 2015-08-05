### 1. 内网测试nginx设置技巧

背景： 线上有个s.xx.com的域名，下面放了公司所有的静态文件（css、js、image）, 在本地开发项目的时候，把s.xx.com下的文件
全部拉到本地测试，不太现实，文件太多。为了在开发的项目时，静态文件直接使用绝对路径s.xx.com保持和上线时一致，减少出错的概率。
在本地搭建了一台nginx代理服务器172.17.10.206，配置如下： 

    server {
        listen       80;
        server_name  s.xx.com;
        index  index.html index.htm index.php;
        root /data/wwwroot/s.xx.com;
        location / {
            try_files $uri $uri/ @proxy;
        }

        location @proxy {
            proxy_pass http://s.xx.com;
        }

    }


现在在另外的测试机器上(非172.17.10.206)，修改host

    172.17.10.206 s.xx.com

访问地址http://s.xx.com/js/test.js， 如果test.js在172.17.10.206机器上存在则直接返回，如果不存在再代理到线上
的s.xx.com服务器，返回数据。这样测试，本地页面就不会有很多图片或者css不存在，导致页面难看了。

