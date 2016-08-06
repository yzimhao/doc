./configure --prefix=/usr/local/php-5.3.29 --with-config-file-path=/usr/local/php-5.3.29/etc --with-mysql=/usr/lib64/mysql --with-mysqli --with-mysql-sock=/var/lib/mysql/mysql.sock --with-iconv-dir=/usr/local --with-libxml-dir=/usr --enable-xml --disable-rpath --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --enable-mbregex --enable-fpm --enable-mbstring --with-mcrypt --with-gd --enable-gd-native-ttf --with-openssl=/usr/local/openssl-0.9.8/ --with-mhash --enable-pcntl --enable-sockets --with-xmlrpc --enable-zip --enable-soap --with-pdo-mysql --enable-maintainer-zts --with-curl

make ZEND_EXTRA_LIBS='-liconv'
make install
