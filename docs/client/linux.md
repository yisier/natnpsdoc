# Linux 客户端使用指南

::: tip 提示    
Linux 客户端仅3.4MB，且无需安装，解压即用，由于Linux 发行版比较多，请根据自己的系统架构选择合适的客户端下载。
::: 



## 启动指南

1.下载相关系统版本的Linux客户端后，上传到服务器

2.解压这个文件`tar -zxvf linux_amd64_client.tar.gz`，并赋予执行权限 `chmod +x npc`

3.运行`npc`文件，输入您的隧道ID

4.输入`0`或者直接按下回车将在前台运行（临时启动），关闭shell会话后，进程将被关闭。  
输入`1`将进入后台运行，并自动设置开机启动（推荐）。

![linux-run](/linux-run.jpg)

::: warning  注意  
后台运行的服务，日志文件位于 `/var/log/npc.log` 目录下。
:::