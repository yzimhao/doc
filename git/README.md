### 1.修改远程仓库地址

```shell
   git remote set-url origin git@code.xx.com:xx/xxx.git
   git remote -v
```

---
   
### 2.git-flow

```shell
   git flow init
```


1.场景一：新功能开发，代号 f1

```shell
   git flow feature start f1
```

从 develop 分支创建了一个新的分支 feature/f1，并自动切换到这个分支下面。然后就可以进行 f1 功能开发，中间可以多次的 commit 操作。当功能完成后：

```shell
   git flow feature finish f1
```
feature/f1 分支的代码会被合并到 develop 里面，然后删除该分支，切换回 develop. 到此，新功能开发这个场景完毕。在 f1 功能开发中，如果 f1 未完成，同时功能 f2 要开始进行，也是可以的。

2.场景二：发布上线，代号 0.1

```shell
   git flow release start 0.1
```

git-flow 从 develop 分支创建一个新的分支 release/0.1，并切换到该分支下，接下来要做的就是修改版本号等发布操作。完成后：

```shell
   git flow release finish 0.1
```

git-flow 会依次切换到 master develop 下合并 release/0.1 里的修改，然后用 git tag 的给当次发布打上 tag 0.1，可以通过 git tag 查看所有 tag

---
