linux客户端的shadowsockes安装：

```
pip install shadowsocks
```

创建配置文件：

```
vim /etc/shadowsocks.json
```

写入以下信息：

```
{
    "server":"xx.xx.xx.xx",
    "server_port":xxxx,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"xxxxxxxx",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": true,
    "workers": 1
}
```

启动软件

```
sslocal -c /etc/shadowsocks.json -d start
```