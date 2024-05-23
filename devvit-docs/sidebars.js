/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      type: 'doc',
      label: 'Quickstart',
      id: 'quickstart',
    },
    {
      type: 'category',
      label: 'Getting started',
      items: ['dev_guide', 'about_devvit'],
    },
    {
      type: 'category',
      label: 'Showcase',
      items: ['showcase/apps', 'showcase/playgrounds', 'showcase/tutorials'],
    },
    {
      type: 'category',
      label: 'Capabilities',
      items: [
        'capabilities/app-configurations',
        'capabilities/adding-links',
        'capabilities/cache',
        'capabilities/forms',
        'capabilities/image-uploads',
        'capabilities/menu-actions',
        {
          label: 'Reddit API Client',
          type: 'doc',
          id: 'api/redditapi/classes/RedditAPIClient.RedditAPIClient',
        },
        'capabilities/redis',
        'capabilities/realtime',
        'capabilities/scheduler',
        'capabilities/secrets-storage',
        'capabilities/triggers',
        'capabilities/http-fetch',
      ],
    },
    {
      type: 'category',
      label: 'Experiences',
      items: [
        'experiences',
        'experience_post',
        'app_image_assets',
        'post_size',
        'dimensions',
        'working_with_usestate',
        'working_with_useinterval',
      ],
    },
    {
      type: 'category',
      label: 'Blocks',
      items: [
        'blocks/overview',
        'blocks/stacks',
        'blocks/text',
        'blocks/icon',
        'blocks/button',
        'blocks/image',
        'blocks/spacer',
        'blocks/colors',
      ],
    },
    {
      type: 'category',
      label: 'Developer tools',
      items: ['playground', 'playtest', 'debug', 'devvit_cli', 'devvit.kit'],
    },
    {
      type: 'category',
      label: 'Devvit library',
      items: [
        {
          type: 'doc',
          label: 'Devvit Entrypoint',
          id: 'api/public-api/classes/Devvit-1',
        },
        {
          type: 'category',
          label: 'Reddit API',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/redditapi/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/redditapi/interfaces',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['mod_resources', 'beta_participation', 'limits', 'help'],
    },
    {
      type: 'doc',
      label: 'Guidelines',
      id: 'guidelines',
    },
    {
      type: 'doc',
      label: 'Changelog',
      id: 'changelog',
    },
  ],
};

module.exports = sidebars;
