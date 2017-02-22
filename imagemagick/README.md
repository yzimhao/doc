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
关于上面命令的说明:

1. -1 – 告诉 ls 每行列出一个图像名称的选项标识
2. -n – 指定最多参数个数，例子中为 1
3. -c – 指示 bash 运行给定的命令
4. ${0%.png}.jpg – 设置新转换的图像文件的名字，% 符号用来删除源文件的扩展名
