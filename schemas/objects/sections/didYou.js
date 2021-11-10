import { HiQuestionMarkCircle } from 'react-icons/hi'

export default {
  name: 'dykSection',
  title: 'Did you Know Section',
  type: 'object',
  icon: HiQuestionMarkCircle,
  fieldsets: [
    {
      title: 'Did You Know Section',
      name: 'didYou'
      // options: {
      //     collapsible: true
      // }
    }
  ],
  fields: [
    {
      name: 'disabled',
      title: 'Disable Section?',
      type: 'boolean'
    },

    {
      name: 'introText',
      title: 'Section Intro Text ',
      description: 'This Goes above the Did you know box',
      type: 'excerptPortableText'
      // hidden: ({ document }) => document.pageTemplate !== 'Partnering Together'
    },
    {
      name: 'heading',
      title: 'Did you know Box Heading',
      fieldset: 'didYou',
      type: 'string',
      description: 'Used as the main heading of this Did you know section.'
    },
    {
      name: 'boxText',
      title: 'Did you know Text ',
      fieldset: 'didYou',
      description: 'This goes above the Did you know box',
      type: 'excerptPortableText'
    },
    {
      name: 'mainContent',
      title: 'Main Content Second Column',
      description: 'This goes in the Second Column',
      type: 'excerptPortableText'
    }

    // {
    //   name: 'faqItems',
    //   title: 'Faq',
    //   type: 'array',
    //   of: [{ type: 'simpleSection' }],
    //   description: 'Used For questions and Answers'
    // }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `${disabled ? 'DISABLED: ' : ''} ${title ? 'FAQ Section: ' + title : 'FAQ Section'}`
      }
    }
  }
}
