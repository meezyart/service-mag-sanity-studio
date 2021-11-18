export default {
  title: 'External Link',
  name: 'navLink',
  type: 'object',
  fields: [
    {
      title: ' Link Title',
      name: 'title',
      type: 'string',
      description: 'Display Text'
    },
    {
      title: 'Link SubText',
      name: 'subText',
      type: 'text',
      rows: 2,
      description: 'Text that flows below the link, ( Optional )'
    },
    {
      name:'linkColor',
      type:'string',
      description: 'This is used for the Table of content link color'
    },

    {
      title: 'URL',
      name: 'url',
      type: 'url',

      description: 'enter an external URL',
      validation: Rule => Rule.uri({ scheme: ['tel', 'mailto', 'http', 'https'] })
    },
    {
      name: 'openInNewTab',
      title: 'Open In New Tab?',
      description: 'Set to true if this link should open in a new tab.',
      type: 'boolean'
      // fieldset: 'externalLink'
    }
  ]
}
