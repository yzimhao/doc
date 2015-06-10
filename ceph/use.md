#### 导出crushmap

    ceph osd getcrushmap -o crushmap
    crushtool -d crushmap -o crushmap.json

#### 导入crushmap
    
    crushtool -c crushmap.json -o crushmap
    ceph osd setcrushmap -i crushmap
    
#### copy配置文件到其他机器

    ceph-deploy --overwrite-conf config push ceph-mon0 ceph-osd0 ceph-osd1 ceph-mds0
    
#### 向存储池中存储数据

    echo "test" > testfile.txt
    rados put test testfile.txt --pool=test-a
