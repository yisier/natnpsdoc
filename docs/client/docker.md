# Docker 🐳


### 方式1️⃣ - 复制Docker命令
在【隧道列表】中找到对应的隧道，点击复制Docker命令，即可一键启动客户端。
![batch1](/docker.png)



### 方式2️⃣ - 手动输入Docker命令
``` bash
docker run -d --restart=always --name npc --net=host docker.1ms.run/yisier1/npc -server=xxx -vkey=xxx
```

⚠️注意需要修改 `-server` 和 `-vkey` 参数为你的服务端地址和密钥。
