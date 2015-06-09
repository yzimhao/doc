#### 导出crushmap

    ceph osd getcrushmap -o crushmap
    crushtool -d crushmap -o crushmap.json

#### 导入crushmap
    
    crushtool -c crushmap.json -o crushmap
    ceph osd setcrushmap -i crushmap