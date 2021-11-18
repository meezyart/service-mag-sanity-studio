import { FiLink, FiExternalLink } from 'react-icons/fi'
import { FaListUl, FaList } from 'react-icons/fa'

export default {
  name: 'excerptPortableText',
  type: 'array',
  title: 'Excerpt',
  of: [
    {
      title: 'Block',
      type: 'block',
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
        }
      ],
      lists: [
        {
          title: 'Green Bullets',
          value: 'greenBullet',
          blockEditor: {
            icon: FaListUl
          }
        },
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
    }
  ]
}
