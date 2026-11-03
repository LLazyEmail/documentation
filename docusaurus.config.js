// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LLazyEmail Documentation',
  tagline: 'Email templates, React design system, generators, and project docs for LLazyEmail',
  url: 'https://docs.llazyemail.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },
  organizationName: 'LLazyEmail', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap',
      type: 'text/css',
    },
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  // Reorg (#342): client-side redirects for path renames. Entries added in later PRs.
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Populated by documentation reorganization PRs (see issue #342).
          // PR 05 react-design-system
          { from: '/docs/react-design-system', to: '/docs/react-design-system' },
          { from: '/docs/react-design-system/React-Design-System', to: '/docs/react-design-system/React-Design-System' },
          { from: '/docs/react-design-system/all-components', to: '/docs/react-design-system/all-components' },
          { from: '/docs/react-design-system/clone-template', to: '/docs/react-design-system/clone-template' },
          { from: '/docs/react-design-system/email-typography', to: '/docs/react-design-system/email-typography' },
          { from: '/docs/react-design-system/frameworks', to: '/docs/react-design-system/frameworks' },
          { from: '/docs/react-design-system/misc', to: '/docs/react-design-system/misc' },
          { from: '/docs/react-design-system/react-table', to: '/docs/react-design-system/react-table' },
          { from: '/docs/react-design-system/react-todo-tasks', to: '/docs/react-design-system/react-todo-tasks' },
          { from: '/docs/react-design-system/remix-templates', to: '/docs/react-design-system/remix-templates' },
          { from: '/docs/react-design-system/template-repository', to: '/docs/react-design-system/template-repository' },
          { from: '/docs/react-design-system/Table%20repository', to: '/docs/react-design-system/Table%20repository' },
          { from: '/docs/react-design-system/Table repository', to: '/docs/react-design-system/Table repository' },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/LLazyEmail/documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/LLazyEmail/documentation/tree/main/',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'img/llazyemail.jpeg',
      metadata: [
        {
          name: 'description',
          content:
            'LLazyEmail documentation — email templates, React design system, generators, and project notes.',
        },
        {
          name: 'keywords',
          content:
            'LLazyEmail, email templates, React email, newsletter, documentation, Docusaurus',
        },
        {property: 'og:type', content: 'website'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      navbar: {
        title: 'LLazyEmail Documentation',
        logo: {
          alt: 'LLazyEmail Documentation',
          src: 'img/llazyemail.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LLazyEmail/awesome-email-marketing',
            label: 'Email Marketing',
            position: 'right',
          },
          {
            href: 'https://github.com/LLazyEmail/awesome-newsletters',
            label: 'Newsletters',
            position: 'right',
          },
          {
            href: 'https://github.com/LLazyEmail/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'React Design System',
                to: '/docs/react-design-system',
              },
              {
                label: 'Glossary',
                to: '/docs/improvements/glossary',
              },
              {
                label: 'Community links',
                to: '/docs/awesome-email-marketing',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/LLazyEmail/documentation',
              },
              {
                label: 'Awesome Email Marketing',
                href: 'https://github.com/LLazyEmail/awesome-email-marketing',
              },
              {
                label: 'Awesome Newsletters',
                href: 'https://github.com/LLazyEmail/awesome-newsletters',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/llazyemail/',
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
                href: 'https://github.com/LLazyEmail/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LLazyEmail, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
