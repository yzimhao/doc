#### 1.本地映射的远程分支，推送数据到远程

```shell
git push origin local_branch:remote_branch
```

#### 2.删除远程分支

```shell
git push origin :remote_branch
```

#### 3.修改默认的对比工具，使用diffuse

```shell
git config --global diff.external /usr/bin/git-diffuse.sh
```
