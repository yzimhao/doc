# Linux命令行批量处理图片
刚刚接到领导一个命令，要批量转换一批png的图片为jpg格式。

### 安装
```
yum install ImageMagick ImageMagick-devel -y
```
### 示例
转换单张图片
```
convert howtogeek.png howtogeek.jpg
```
批量转换
```
ls -1 *.png | xargs -n 1 bash -c 'convert "$0" "${0%.png}.jpg"'
```
