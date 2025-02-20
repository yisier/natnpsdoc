# HTTP(S)协议

::: tip 适用场景
 - 博客（WordPress、Hugo、Ghost、Typecho）等个人网站
 - 微信、支付宝等平台的小程序线上调试
 - 穿透 NAS、Emby、Alist、Cloudreve 等自建应用

HTTP(S)协议底层基于TCP协议实现，所有如果对访问地址无要求，使用TCP协议同样可以实现相同的效果。
::: 




<img src="/https.png" style="width:600px;height:auto;" />

## 参数解释
- ***域名类型***：
    - 系统域名：如果您没有购买域名，可以使用系统免费域名，只需要输入的域名前缀，系统将会自动为您生成一个访问地址：例如 `xxxx.natnps.com`。
    - 自定义域名：如果您有购买域名，可以使用自己的域名作为访问地址。
- ***内网IP***: 填写内网IP，局域网内的访问地址，本机地址默认为：127.0.0.1，局域网内其他设备，需要确认设备的内网IP。
- ***本地端口***：内网WEB应用的访问端口，例如Tomcat的端口为8080，具体端口需要在具体应用内查看或者设置。
- ***访问密码***：目前对于国内大陆的节点，强制使用密码访问，穿透后，访问外网地址时，需要输入密码进行IP授权，对于已经授权过的IP，再次访问时则不再需要密码，系统最多记录10个IP地址，超过10个后，最早授权的IP地址将会被移除。
- ***上传证书***：如果您需要开启HTTPS协议访问，可以选择托管SSL证书，托管SSL证书后，本地WEB应用一定不要开启SSL，否则将不能正常访问，即 https -> https 是不被允许的。



::: warning  注意  
使用HTTPS方式有两种:
- 第一种方式：即上传SSL证书到网站，同时关闭本地WEB应用的SSL功能，只穿透本地HTTP端口，此方式可以获取访问者真实IP。
- 第二种方式：SSL证书安装在本地应用中，穿透本地HTTPS端口，此方式无法获取访问者真实IP。
:::
