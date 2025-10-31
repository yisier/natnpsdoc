module.exports = {
    home: false,
    base: '/',
    title: 'NATNPS 云穿透使用教程',
    description: 'natnps.com NPS云穿透使用教程，帮助手册',
    theme: 'reco',
    themeConfig: {   // 博客配置
        mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        nav: [
            { text: 'NATNPS官网', link: 'https://natnps.com', icon: 'reco-home' },
        ]
    },
    plugins: ['@vuepress/medium-zoom', {
        // 修改 selector 以匹配你的主题结构
        selector: 'img.zoom-custom-imgs', // 或者 '.content :not(a) > img' 等
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