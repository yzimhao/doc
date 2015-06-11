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
  
 
 为了方便测试，使用一个s3的client连接测试，下载地址：http://www.cloudberrylab.com/free-amazon-s3-explorer-cloudfront-IAM.aspx
 
 安装上s3 explorer之后，新增一个“Storage Account” 填入服务器ip端口信息、访问密钥、密码key即可成功连上云存储，新建bucket，上传文件，设置文件的acl，即可在浏览器中访问上传的文件。
