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
          // PR 05: React-Design-System → react-design-system; `to` uses front-matter ids.
          { from: '/docs/React-Design-System', to: '/docs/react-design-system' },
          { from: '/docs/React-Design-System/React-Design-System', to: '/docs/react-design-system' },
          { from: '/docs/React-Design-System/react-main', to: '/docs/react-design-system' },
          { from: '/docs/React-Design-System/all-components', to: '/docs/react-design-system/all-components' },
          { from: '/docs/React-Design-System/clone-template', to: '/docs/react-design-system/clone-template' },
          { from: '/docs/React-Design-System/email-typography', to: '/docs/react-design-system/email-typography' },
          { from: '/docs/React-Design-System/frameworks', to: '/docs/react-design-system/frameworks' },
          { from: '/docs/React-Design-System/misc', to: '/docs/react-design-system/react-misc-module' },
          { from: '/docs/React-Design-System/react-misc-module', to: '/docs/react-design-system/react-misc-module' },
          { from: '/docs/React-Design-System/react-table', to: '/docs/react-design-system/react-table-module' },
          { from: '/docs/React-Design-System/react-table-module', to: '/docs/react-design-system/react-table-module' },
          { from: '/docs/React-Design-System/react-todo-tasks', to: '/docs/react-design-system/react-tasks' },
          { from: '/docs/React-Design-System/react-tasks', to: '/docs/react-design-system/react-tasks' },
          { from: '/docs/React-Design-System/remix-templates', to: '/docs/react-design-system/remix-templates' },
          { from: '/docs/React-Design-System/template-repository', to: '/docs/react-design-system/react-template-module' },
          { from: '/docs/React-Design-System/react-template-module', to: '/docs/react-design-system/react-template-module' },
          { from: '/docs/React-Design-System/Table%20repository', to: '/docs/react-design-system/Table repository' },
          { from: '/docs/React-Design-System/Table repository', to: '/docs/react-design-system/Table repository' },
          // Folder rename Email Templates → email-templates. Targets use front-matter ids.
          { from: '/docs/Email%20Templates', to: '/docs/email-templates' },
          { from: '/docs/Email Templates', to: '/docs/email-templates' },
          // readme.md is the category index → /docs/email-templates (id is for sidebar only)
          { from: '/docs/Email%20Templates/email-templates-schemes', to: '/docs/email-templates' },
          { from: '/docs/Email Templates/email-templates-schemes', to: '/docs/email-templates' },
          { from: '/docs/Email%20Templates/readme', to: '/docs/email-templates' },
          { from: '/docs/Email Templates/readme', to: '/docs/email-templates' },
          { from: '/docs/Email%20Templates/order-details-schemes', to: '/docs/email-templates/order-details-schemes' },
          { from: '/docs/Email Templates/order-details-schemes', to: '/docs/email-templates/order-details-schemes' },
          { from: '/docs/Email%20Templates/nx', to: '/docs/email-templates/nx' },
          { from: '/docs/Email Templates/nx', to: '/docs/email-templates/nx' },
          { from: '/docs/Email%20Templates/process', to: '/docs/email-templates/process' },
          { from: '/docs/Email Templates/process', to: '/docs/email-templates/process' },
          // Folder rename Project Diagram → project-diagram — targets use real routes (index.md → category URL; packages id).
          { from: '/docs/Project%20Diagram', to: '/docs/project-diagram' },
          { from: '/docs/Project Diagram', to: '/docs/project-diagram' },
          { from: '/docs/Project%20Diagram/index', to: '/docs/project-diagram' },
          { from: '/docs/Project Diagram/index', to: '/docs/project-diagram' },
          { from: '/docs/Project%20Diagram/indx', to: '/docs/project-diagram/indx' },
          { from: '/docs/Project Diagram/indx', to: '/docs/project-diagram/indx' },
          { from: '/docs/Project%20Diagram/project-diagram-packages', to: '/docs/project-diagram/project-diagram-packages' },
          { from: '/docs/Project Diagram/project-diagram-packages', to: '/docs/project-diagram/project-diagram-packages' },
          { from: '/docs/Project%20Diagram/packages', to: '/docs/project-diagram/project-diagram-packages' },
          { from: '/docs/Project Diagram/packages', to: '/docs/project-diagram/project-diagram-packages' },

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
