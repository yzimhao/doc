### rtmp 服务器配置

```
rtmp {
    server {
        listen 1935;

        application live {
            live on;
            hls on;
            hls_path /data/hls;
            hls_fragment 5s;

            #record keyframes;
            #record_path /tmp;
            #record_max_size 128K;
            #record_interval 30s;
            #record_suffix .this.is.flv;

            on_publish http://localhost:8080/publish;
            on_play http://127.0.0.1:8080/play;
            on_record_done http://localhost:8080/record_done;
        }
    }
}

http {
    server {
        listen      8080;

        location /stat {
            rtmp_stat all;
            rtmp_stat_stylesheet stat.xsl;
        }

        location /stat.xsl {
            root /root/soft/nginx-rtmp-module-master/;
        }

        location /control {
            rtmp_control all;
        }

        location /publish {
            return 201;
        }

        location /play {
            return 202;
        }

        location /record_done {
            return 203;
        }

        location /rtmp-publisher {
            root /root/soft/nginx-rtmp-module-master/test;
        }

        location /hls {
			types{
                application/vnd.apple.mpegurl m3u8;
                video/mp2t ts;
            }
            alias /data/hls;
            expires -1;
        }

        location / {
            root /data/hls;
        }
    }
}
```


### ffmpeg推流

```
/usr/local/ffmpeg/bin/ffmpeg -re -i tounaofengbao.mp4 -vcodec copy -acodec copy -f flv rtmp://172.17.10.206:1935/live/1000
```



#### 参考资料

http://blog.csdn.net/cjsafty/article/details/9108587
