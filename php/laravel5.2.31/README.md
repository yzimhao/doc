### laravel-v5.2.31
[github](https://github.com/laravel/laravel)

### 下载代码
[download](https://github.com/laravel/laravel/releases)

### 步骤
```
wget https://github.com/laravel/laravel/archive/v5.2.31.zip
unzip v5.2.31.zip
cd laravel-5.2.31
npm install
```
install composer
```
cd laravel-5.2.31/
wget https://getcomposer.org/download/1.2.2/composer.phar
php5.5 composer.phar install
```
最后一条可能会报错
>Generating autoload files
Illuminate\Foundation\ComposerScripts::postUpdate
php artisan optimize
sh: php: command not found
Script php artisan optimize handling the post-update-cmd event returned with error code 127

解决
```
php5.5 artisan optimize
```

复制环境变量,并修改APP_KEY
```
cp .env.example .env
php5.5 artisan key:generate
```
绑定域名到 laravel-5.2.31/public 即可访问。
