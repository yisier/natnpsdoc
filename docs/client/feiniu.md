---
title: 飞牛NAS 
date: 2026-01-09
---
::: warning 提示 ⚠️   
飞牛应用商店中虽然有npc应用，但是配置比较繁琐，推荐使用 Docker 方式启动
::: 



### 1️⃣ 创建隧道
首先需要确认飞牛管理面板的IP和端口，在创建隧道时，选择HTTP(S)或TCP协议的隧道均可

![](/feiniu3.png)


### 2️⃣ 下载镜像
打开飞牛的 Docker 应用，搜索 npc，选择 `yisier1/npc` 镜像并下载

![](/feiniu1.png)

### 3️⃣ 创建容器
在本地镜像中找到  `yisier1/npc` 镜像，点击运行，勾选开机启动，点击下一步，在命令参数中输入  
`-server=服务器地址:端口 -vkey=连接密钥`，然后点击下一步，再点击创建容器。

![](/feiniu11.png)
![](/feiniu12.png)
![](/feiniu13.png)
![](/feiniu16.png)


### 4️⃣ 外网访问
在NATNPS 隧道列中刷新客户端状态，如果显示在线，即可通过外网地址访问飞牛系统啦。

![](/feiniu15.png)


