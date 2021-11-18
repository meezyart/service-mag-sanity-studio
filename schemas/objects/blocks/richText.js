import { FiLink, FiExternalLink } from 'react-icons/fi'
import { FaListUl, FaList } from 'react-icons/fa'

export default {
  name: 'richTextBlock',
  type: 'array',
  title: 'Main Content',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {
          title: 'Normal',
          value: 'normal'
        },
        {
          title: 'H1',
          value: 'h1'
        },
        {
          title: 'H2',
          value: 'h2'
        },
        {
          title: 'H3',
          value: 'h3'
        },
        {
          title: 'H4',
          value: 'h4'
        },
        {
          title: 'Quote',
          value: 'blockquote'
        }
      ],
      lists: [
        {
          title: 'Regular Bullets',
          value: 'bullet',

          blockEditor: {
            icon: FaList
          }
        },

        {
          title: 'Number',
          value: 'number'
        }
      ],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong'
          },
          {
            title: 'Emphasis',
            value: 'em'
          }
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: '(A) Internal Page',
            blockEditor: {
              icon: FiLink
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Internal Page',
                to: [{ type: 'page' }]
              },
              {
                title: 'Style with Arrow?',
                name: 'isArrow',
                type: 'boolean'
              },
              {
                title: 'Open new tab?',
                name: 'openInNewTab',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'link',
            type: 'object',
            title: '(B) External URL',
            blockEditor: {
              icon: FiExternalLink
            },
            fields: [
              {
                name: 'url',
                type: 'url',
                title: 'URL',
                description: 'This link will open in a new tab.',
                validation: Rule => Rule.uri({ scheme: ['tel', 'mailto', 'http', 'https'] })
              },
              {
                title: 'Style with Arrow?',
                name: 'isArrow',
                type: 'boolean'
              },
              {
                title: 'Open new tab?',
                name: 'openInNewTab',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'mainImage',
      validation: Rule => Rule.required()
    },
    {
      type: 'youtubeBlock',
      validation: Rule => Rule.required()
    },
    {
      type: 'vimeoBlock',
      validation: Rule => Rule.required()
    }
  ]
}
