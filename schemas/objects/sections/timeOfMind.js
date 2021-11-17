export default {
  name: 'tomSection',
  title: 'Top Of Mind Section',
  type: 'object',
  fieldsets: [
    {
      title: 'Rating',
      name: 'rating'
      // options: {
      //     collapsible: true
      // }
    }
  ],
  fields: [{
          name: 'disabled',
          title: 'Disable Section?',
          type: 'boolean'
      },

      {
          name: 'heading',
          title: 'Main heading',
          type: 'string',
          // description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
      },

      {
        name: 'quest1',
        title: 'Question 1',
        type: 'string',
        fieldset: 'rating'
        // description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
    },
    {
      title: 'Rating Question',
      name: 'ratingQues',
      type: 'array',
      fieldset: 'rating',
      of: [{type: 'string'}],

    },
      {
        name: 'quest2',
        title: 'Question 2',
        type: 'string',
        // description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
    },

  ],
  preview: {
      select: {
          title: 'heading',
          disabled: 'disabled'
      },
      prepare({ title, disabled }) {

          return {
              title: `${disabled ? 'DISABLED: ' : ''} ${title ? 'Top of Mind Section: ' + title : 'Top of Mind Section'}`
          }
      }
  }
}
