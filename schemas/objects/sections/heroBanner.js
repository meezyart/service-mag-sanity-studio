
export default {
  name: 'heroSection',
  title: 'Hero Banner',
  type: 'object',
  fields: [
    // {
    //   name: 'heroType',
    //   title: 'Hero Type',
    //   type: 'string',
    //   // initialValue: 'center',
    //   options: {
    //     list: [
    //       { title: 'Two Column Text Hero', value: 'Hero' },
    //       { title: 'Two Column Text Link Hero', value: 'LinkHero' }
    //     ],
    //     layout: 'radio'
    //   }
    // },

    {
      name: 'heading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Used as the main heading of this section.'
      // validation: Rule => Rule.required()
    },
    {
      name: 'subTitle',
      title: 'Hero Sub Title',
      type: 'text',
      rows:'5'
    },
    {
      name: 'col1Content',
      title: 'Column One ',
      description: 'This is the text for the first Column',
      type: 'richTextBlock'
      // hidden: ({ parent }) => parent.heroType !== 'Two Col Hero'
    },
    {
      name: 'col2Content',
      title: 'Column Two',
      description: 'This is the text for the Second Column',
      type: 'richTextBlock'
      // hidden: ({ parent }) => parent.heroType !== 'Two Col Hero'
    },
    {
      name: 'link',
      title: 'Add Link Under Text',
      description:
        'Add, edit, and reorder links in the section , this will render a green arrow link ( max 2)',
      type: 'cta',
      // validation: Rule => Rule.max(2),
      // of: [{ type: 'navLink' }, { type: 'navPage' }, { type: 'navSlug' }]
    },
   

    // {
    //   name: 'linkType',
    //   title: 'Link Type',
    //   type: 'string',
    //   // hidden: ({ parent }) => parent.heroType !== 'LinkHero' && parent.heroType !== null,
    //   options: {
    //     list: [
    //       { title: 'External Link', value: 'ext' },
    //       { title: 'Page Link (internal)', value: 'int' }
    //     ],
    //     layout: 'radio'
    //   }
    // },
    // {
    //   name: 'externalLink',
    //   type: 'navLink',
    //   title: 'External Link',
    //   hidden: ({ parent}) =>  parent.linkType !== 'ext'
    // },
    // {
    //   name: 'pageLink',
    //   type: 'navPage',
    //   title: 'Page Link',
    //   hidden: ({ parent }) => parent.linkType !== 'int'
    // },
    {
      name: 'heroImage',
      type: 'mainImage',
      title: 'Hero Image',
      description:
        'Select Recommended dimensions - 1920 x 1440, Filesizea\n - less than 1000 k(800 k max)'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      heroType: 'heroType',
      disabled: 'disabled'
    },
    prepare({ title, disabled, heroType }) {
      return {
        title: `${disabled ? 'DISABLED: ' : ''} ${
          (title ? 'Hero Banner:' + title : 'Hero Banner')
        }`
      }
    }
  }
}
