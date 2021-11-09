import { MdAssignment } from 'react-icons/md'

export default {
    name: 'classMenu',
    title: 'Class Menu',
    type: 'document',
    icon: MdAssignment,
    fields: [{
            name: 'className',
            title: 'Class Name',
            description: '',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'classDescription',
            title: 'Description',
            type: 'excerptPortableText'
        },
        {
            name: 'classChoreographers',
            type: 'array',
            title: 'Choreographers',
            description: 'Select the choreographers for this class',
            of: [{
                type: 'reference',
                to: [{ type: 'choreographers' }]
            }],
            validation: Rule => Rule.unique()
                // options: {
                //     layout: 'tags'
                // }
        },
        {
            name: 'classLink',
            title: 'Sign Up Link',
            type: 'cta'
        },

        {
            name: 'classImage',
            type: 'mainImage',
            title: 'Cover Image',
            description: 'Select Recommended dimensions - 1940 x 500, Filesizea\n - less than 500 k(800 k max)',
        }
    ]
}
