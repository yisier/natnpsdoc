module.exports = {
    home: false,
    base: '/',
    title: 'NATNPS 云穿透使用教程',
    description: 'natnps.com NPS云穿透使用教程，帮助手册',
    plugins: ['@vuepress/medium-zoom', {
        // 修改 selector 以匹配你的主题结构
        selector: '.page :not(a) > img', // 或者 '.content :not(a) > img' 等
    }],
    themeConfig: {
        sidebar:
            [
                {
                    title: '客户端使用指南 💻',
                    collapsible: true,
                    children: [
                        '/client/windows',
                        '/client/linux',
                        '/client/docker',
                        '/client/batch',
                    ],

                },
                {
                    title: '隧道协议 🌐',
                    children: [
                        '/tunnel/http',
                        '/tunnel/tcp',
                        '/tunnel/udp',
                    ],

                },
                {
                    title: '示例 🚀',
                    children: [
                        '/example/ssh',
                        '/example/domain',
                        '/example/https',
                    ],

                }
            ]


    }

}