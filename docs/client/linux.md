# Linux 客户端使用指南

::: tip 提示    
Linux 客户端仅3.4MB，且无需安装，解压即用，由于Linux 发行版比较多，请根据自己的系统架构选择合适的客户端下载。
::: 



## 启动指南

1.下载相关系统版本的Linux客户端后，上传到服务器

2.解压这个文件`tar -zxvf linux_amd64_client.tar.gz`，并赋予执行权限 `chmod +x npc`

3.运行`npc`文件，输入您的隧道秘钥

4.直接按下回车，隧道将在前台运行（临时启动），关闭shell会话后，进程将被关闭。  

![linux-run](/linux-run.jpg)



## 后台服务运行

1.运行`npc`文件，`需要root权限`

2.输入`1`后，然后输入您的隧道秘钥（支持拼接秘钥，和隧道分组秘钥），以`安装到系统服务`。（如果需要卸载系统服务，输入`2`即可）

3.打开`/etc/systemd/system/`目录，查看`npc-client-xxxx.service` 是否成功被注册。

![linux-install](/linux-install.png)

::: warning  注意  
后台运行的服务，日志文件位于 `/var/log/npc.log` 目录下。
:::