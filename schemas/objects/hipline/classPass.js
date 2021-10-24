export default {
    name: 'classPassSection',
    title: 'Class Pass Section',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'passHeadline',
            title: 'Passes Section Headline',
            description: 'Used as the main heading of this section.',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            description: 'Pick a for this theme',
            name: 'passColor',
            title: 'Theme Color',
            type: 'colorlist', // required
            options: {
                borderradius: {
                    outer: '100%',
                    inner: '100%'
                },
                list: [{
                        title: 'purple',
                        value: '#968dff'
                    },
                    {
                        title: 'blue',
                        value: '#a8ddfb'
                    },

                    {
                        title: 'ceren-orange',
                        value: '#fbaa62'
                    },
                    {
                        title: 'pink-prime',
                        value: '#F1A2B8'
                    }
                ]
            }
        },

        {
            name: 'passIntro',
            title: 'Passes Section Intro Text',
            description: 'This is optional',
            type: 'excerptPortableText'
        },
        {
            name: 'passes',
            type: 'array',
            title: 'Passes',
            description: 'Select the passes for this section',
            of: [{
                type: 'reference',
                name: 'passes',
                title: 'Passes',
                to: [{
                    type: 'passBlock'
                }]
            }],
            validation: Rule => Rule.unique()
                // options: {
                //     layout: 'tags'
                // }
        }
    ],
    preview: {
        select: {
            title: 'passHeadline',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${'Class Pass Section: ' + title ||
          'Class Pass Section'}`
            }
        }
    }
}
