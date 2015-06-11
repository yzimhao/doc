#### 安装radosgw

    yum install radosgw radosgw-agent -y
  


启动radosgw，默认端口7480
    
    /usr/bin/radosgw -c /etc/ceph/ceph.conf -n client.radosgw.geteway

创建一个用户：

    radosgw-admin user create --uid=cephtest1 --display-name=cehp-test1 --email=abcd@qq.com
    
    #返回结果
    
      {
        "user_id": "cephtest1",
        "display_name": "cehp-test1",
        "email": "abcd@qq.com",
        "suspended": 0,
        "max_buckets": 1000,
        "auid": 0,
        "subusers": [],
        "keys": [
            {
                "user": "cephtest1",
                "access_key": "65JVSK4AW4DSF4W8CP9Z",
                "secret_key": "Hmdz8+wQXjg6OBrbQfGZHssDJim98jlsuetDBWjH"
            }
        ],
        "swift_keys": [],
        "caps": [],
        "op_mask": "read, write, delete",
        "default_placement": "",
        "placement_tags": [],
        "bucket_quota": {
            "enabled": false,
            "max_size_kb": -1,
            "max_objects": -1
        },
        "user_quota": {
            "enabled": false,
            "max_size_kb": -1,
            "max_objects": -1
        },
        "temp_url_keys": []
       }
  
  
