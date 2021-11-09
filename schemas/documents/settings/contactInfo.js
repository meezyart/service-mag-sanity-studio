import { MdContactPhone } from 'react-icons/md'

export default {
    name: 'settingsContactInfo',
    title: 'Site Contact Info',
    type: 'document',
    icon: MdContactPhone,
    fields: [{
                    name: 'companyEmail',
                    title: 'Main Email Address*',
                    type: 'string',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'companyAddress',
                    title: 'Company Address',
                    type: 'text',
                    row: 2
                },
                {
                    name: 'statement',
                    title: 'Company Statement',
                    type: 'string'
                },
                {
                    name: 'companyHours',
                    title: 'Company Hours',
                    type: 'string'
                },
                {
                    name: 'companyPhone',
                    title: 'Company Phone Number',
                    type: 'string'
                },
                {
                    name: 'companyLocationLink',
                    title: 'Company Location Google Link',
                    type: 'url'
                },
                {
                    name: 'additionalContacts',
                    type: 'array',
                    title: 'Additional Contacts',
                    description: 'This will live on the contact page',
                    of: [{
                        title: 'Additional Contacts',
                        type: 'contactBlock'
                    }]
                }

    ]
}
