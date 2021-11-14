export default {
  name: 'linkList',
  title: 'Link List',
  type: 'object',
  fields:[
   
      {
          type: 'navPage',
          name: 'internal',

          title: 'Link to Internal Page'
        },
        {
          type: 'navLink',
          name: 'external',
          title: 'Link to External Page'
        },
        {
          type: 'navSlug',
          name: 'internalM',
          title: 'Link to Internal Page ( manually )'
        }
  ]
}
