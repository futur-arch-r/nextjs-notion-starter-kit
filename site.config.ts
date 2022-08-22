import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'efa3797d15084651ac836f5c6ce5f556',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Futuring Architectures Studio',
  domain: 'futur-arch.studio',
  author: 'Futuring Architectures',

  // open graph metadata (optional)
  description: 'The Futuring Architectures Studio',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  newsletter: 'https://futurarch.substack.com',
  youtube: 'channel/UCvvBBK3yj-ZZgKnEBJrg7RQ',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'About',
       pageId: 'f802ec7fe46b4a56bbf4d97b9f12c683'
     },
     {
       title: 'Contact',
       pageId: '6acd508b089b405d85aa07f768284ec2'
     }
   ]
})
