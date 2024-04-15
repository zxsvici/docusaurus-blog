// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'vici blog',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/avatar.ico',
    plugins: [[ require.resolve('docusaurus-lunr-search'), {
        languages: ['en','zh'] // language codes
    }]],

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: '策君丶Blog',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'projectSidebar',
                        label: '个人项目',
                        position: "left"
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'interestingSidebar',
                        label: '兴趣杂谈',
                        position: "left"
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'studySidebar',
                        label: '学习笔记',
                        position: "left"
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'workSidebar',
                        label: '工作随笔',
                        position: "left"
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'dataSidebar',
                        label: '数据结构与算法',
                        position: "left"
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'toolSidebar',
                        label: '工具',
                        position: "left"
                    },
                    // 配置一个下拉菜单
                    // {
                    //     type: 'dropdown',
                    //     label: '学习笔记',
                    //     position: 'left',
                    //     items: [
                    //         {
                    //             type: 'docSidebar',
                    //             sidebarId: 'javaSidebar',
                    //             label: 'Java',
                    //         }
                    //     ],
                    // },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {to: '/docs/study-note/server/java', label: 'Java', position: 'left'},
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: '项目经验',
                                to: '/docs/personal-project/openresty-tcp-gateway',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['java','powershell','lua','python','go']
            },
        }),
};

export default config;
