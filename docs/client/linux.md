# Linux / Mac

::: tip 提示 ✅
Linux 客户端仅3.4MB，且无需安装，解压即用，由于Linux 发行版比较多，请根据自己的系统架构选择合适的客户端下载⏬。
::: 



### 启动指南
1️⃣ 下载相关系统版本的Linux客户端后，上传到服务器 📂  
2️⃣ 解压这个文件`tar -zxvf linux_amd64_client.tar.gz`，并赋予执行权限 `chmod +x npc`   
3️⃣ 运行`npc`文件，输入您的隧道秘钥🔑  
4️⃣ 看到 ***您已成功连接到服务器*** 则代表启动成功🍺
![linux-run](/linux-run.jpg)



### 安装到系统服务
> 实现开机启动、后台运行、进程守护。

1️⃣ 运行`npc`文件，`需要root权限` 👨💻   
2️⃣ 输入`1`后，然后输入您的隧道秘钥🔑（支持拼接秘钥，和隧道分组秘钥），以安装到系统服务。（如果需要卸载系统服务，输入`2`即可）   
3️⃣ 打开`/etc/systemd/system/`目录，查看`npc-client-xxxx.service` 是否成功被注册🥂   
![linux-install](/linux-install.png)

::: warning  注意 ⚠️
后台运行的服务，日志文件位于 `/var/log/npc.log` 目录下。
:::