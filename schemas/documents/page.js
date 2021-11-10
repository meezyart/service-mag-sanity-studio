import { MdDescription } from 'react-icons/md'

export default {
  name: 'page',
  title: 'Article Page',
  type: 'document',
  icon: MdDescription,
  fieldsets: [
    {
      title: 'Visibility',
      name: 'visibility'
      // options: {
      //     collapsible: true
      // }
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      description: 'For referance ',

      type: 'string',
      validation: Rule => Rule.required()
    },

    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: doc => `${doc.title}`,
        maxLength: 96
      },
      description: 'Used to determine the path of the page.',
      validation: Rule =>
        Rule.custom(slug => {
          if (slug && slug.current && slug.current === '/') {
            return 'Cannot be /'
          }
          return true
        }).required()
    },
    {
      name: 'pageTemplate',
      type: 'string',
      title: 'Article Template',
      description: 'Choose a page template',
      options: {
        list: [
          { title: 'Product Spotlight', value: 'Product Spotlight' },
          { title: 'Customer Showcase', value: 'Customer Showcase' },
          { title: 'Read, Watch, Listen', value: 'Read, Watch, Listen' },
          { title: 'Partnering Together', value: 'Partnering Together' },
          { title: 'Top of Mind', value: 'Top of Mind' }
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },

    {
      name: 'menuPhoto',
      type: 'mainImage',
      title: 'Image for Top Menu',
      description: 'This will be for the top nav background image'
    },

    {
      name: 'headline',
      title: 'Main Headline',
      description: 'Used as the main heading Page',
      type: 'string',
      hidden: ({ document }) =>
        document.pageTemplate !== 'Partnering Together' &&
        document.pageTemplate !== 'Customer Showcase'
      // validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image for Background Hro',
      description: 'This will be for the top nav background image',
      hidden: ({ document }) =>
        document.pageTemplate !== 'Partnering Together'
    },
    // {
    //   title: 'Use Section title?',
    //   description:
    //     'Use the site settings title as page title instead of the title on the referenced page',
    //   name: 'useSiteTitle',
    //   type: 'boolean'
    // },
    {
      name: 'introText',
      title: 'Section Intro Text',
      description: 'This Goes underline the headline',
      type: 'excerptPortableText',
      hidden: ({ document }) => document.pageTemplate !== 'Partnering Together'
    },

    {
      name: 'pageSections',
      title: 'Article Page Sections',
      description: 'Add, edit, and reorder sections on the page.',
      type: 'array',
      // Insert page sections here
      of: [
        {
          type: 'heroSection'
        },
        // {
        //     type: 'pageTitleSection'
        // },
        {
          type: 'picContentSection'
        },
        {
          type: 'richTextSection'
        },

        // {
        //     type: 'infoBoxSection'
        // },

        {
          type: 'dykSection'
        }
        // {
        //     type: 'testimonialSection'
        // },
        // {
        //     type: 'timelineSection'
        // },
        // {
        //     type: 'classMenuSection'
        // },
        // {
        //     type: 'classPassSection'
        // },
        // {
        //     type: 'classScheduleSection'
        // },
        // {
        //     type: 'dancerSection'
        // },
        // {
        //     type: 'loveClubSection'
        // },
        // // {
        // //     type: 'contactSection'
        // // }
      ]
    },
    {
      title: 'SEO / Share Settings',
      name: 'openGraph',
      description: 'These values populate meta tags',
      type: 'openGraph'
    },
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generated to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      initialValue: true,
      fieldset: 'visibility'
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean',
      fieldset: 'visibility'
    }
    // {
    //     name: 'linkChoice',
    //     title: 'Link',
    //     type: 'link',
    //     // description: 'testing links'
    // }
  ],
  initialValue: {
    includeInSitemap: true
  },
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)'
      }
    }
  }
}
