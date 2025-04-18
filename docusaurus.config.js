// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '小山田純のブログ',
  tagline: 'ITとかいろいろ',
  favicon: 'https://raw.githubusercontent.com/oyajun/oyajun.github.io/refs/heads/main/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.oyajun.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oyajun', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/oyajun/blog/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      image: 'https://raw.githubusercontent.com/oyajun/oyajun.github.io/refs/heads/main/img/favicon.ico',
      navbar: {
        title: '小山田純のブログ',
        logo: {
          alt: '小山田純のマーク',
          src: 'https://raw.githubusercontent.com/oyajun/oyajun.github.io/refs/heads/main/img/favicon.ico',
        },
        items: [
          //{ to: '/blog', label: 'ブログ', position: 'left' },
          // {
          //   href: 'https://oyajun.com',
          //   label: 'ホームページ',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'リンク',
            items: [
              {
                label: '小山田純のホームページ',
                href: 'https://oyajun.com',
              },
            ],
          },
        ],
        copyright: `CC BY-NC-SA 4.0 小山田純　Powered by Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
