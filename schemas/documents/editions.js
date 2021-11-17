import { MdDescription } from 'react-icons/md'

export default {
  name: 'editions',
  title: 'Workflow Editions',
  type: 'document',
  icon: MdDescription,
  fieldsets: [
    {
      title: 'Edition Cover',
      name: 'cover',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: 'Table Of Contents',
      name: 'toc',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: 'Visibility',
      name: 'visibility',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      name: 'disabled',
      title: 'Disable Edition?',
      type: 'boolean'
    },

    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96
      },
      description: 'Used to determine the path of the page.',
      validation: Rule =>
        Rule.custom(slug => {
          if (slug && slug.current && slug.current === '/') {
            return 'Cannot be /'
          }
          return true
        }),
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Edition Title',
      description: ' Example November 2021. This is the subtitle on the Cover Page',
      fieldset: 'cover',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'headline',
      title: 'Edition Main Headline',
      fieldset: 'cover',
      description: 'Used as the main heading on the Cover Page',
      type: 'string'
      // validation: Rule => Rule.required()
    },

    {
      name: 'subtitle',
      title: 'Edition Sub Title ',
      fieldset: 'cover',
      description: 'Used as Sub Title of the Cover Page',
      type: 'string'
      // validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main Edition Cover Image',
      fieldset: 'cover',
      description: 'Used as Photo for the Cover Page',
      validation: Rule => Rule.required()
    },
    {
      name: 'introText',
      title: 'Edition Section Intro Text',
      fieldset: 'cover',
      description: 'This Goes on the Left hand Side of Cover image',
      type: 'excerptPortableText'
    },

    {
      name: 'tocTitle',
      title: 'Table of Contents Headline',
      description: 'Example: November Highlights',
      fieldset: 'toc',
      type: 'string'
    },

    {
      name: 'tocList',
      type: 'array',
      fieldset: 'toc',
      title: 'Table of Contents List',
      description: 'Add the Headline and Subtext For each',
      of: [ { type: 'navPage' }, { type: 'navSlug' },{ type: 'navLink' }]
    },
    {
      name: 'articlePages',
      type: 'array',
      title: 'Article Pages',
      description: 'Select the Articles/pages you want for this Edition',
      of: [
        {
          type: 'reference',
          to: [{ type: 'page' }]
        }
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
