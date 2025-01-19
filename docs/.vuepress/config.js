module.exports = {
    home: false,
    base: '/',
    title: 'NATNPS 云穿透使用教程',
    description: 'natnps.com NPS云穿透使用教程，帮助手册',
    themeConfig: {
        // sidebar: [
        //     '/',
        //     '/client/linux',
        //     '/client/batch'
        // ]
        // {
        sidebar:
            [
                {
                    title: '客户端',
                    collapsible: true,
                    children: [
                        '/client/windows',
                        '/client/linux',
                        '/client/batch',
                    ],

                },
                {
                    title: '隧道',
                    collapsible: true,
                    children: [
                        '/tunnel/http',
                        '/tunnel/tcp',
                        '/tunnel/udp',
                    ],

                }
            ]


    }

}
