import React from 'react'
import { AiFillPicture } from 'react-icons/ai'

export default {
  name: 'picContentSection',
  title: 'Pic/Content Section',
  type: 'object',
  icon: AiFillPicture,
  fieldsets: [
    {
      name: 'topText',
      title: 'Top Text',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'whiteContent',
      title: 'White Section Content',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'sideContent',
      title: 'Side Content',
      description: 'The overlay Side Section',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      name: 'disabled',
      title: 'Disable Section?',
      type: 'boolean'
    },
    {
      name: 'imageSize',
      title: 'Main image Size',
      type: 'string',
      initialValue: 'center',
      options: {
        list: [
          { title: 'Full Screen Pic with Content', value: 'FullScreenPic' },
          { title: 'Full Screen Pic with You Tube & Content', value: 'FullScreenPicVideo' }
          // { title: 'Fixed Size Pic with Content', value: 'FixedSizePic' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'contentLocation',
      title: 'Content Location',
      type: 'string',
      options: {
        list: [
          { title: 'Left White Content', value: 'left' },
          { title: 'Right White Content', value: 'right' }
        ],
        layout: 'radio'
      },
      hidden: ({ parent }) =>
        parent.imageSize !== 'FullScreenPic' && parent.imageSize !== 'FullScreenPicVideo'
    },
    // {
    //   name: 'picLocation',
    //   title: 'Picture Location',
    //   type: 'string',
    //   initialValue: 'leftPic',
    //   options: {
    //     list: [
    //       { title: 'Left Side Pic', value: 'leftPic' },
    //       { title: 'Right Side Pic', value: 'rightPic' }
    //     ],
    //     layout: 'radio'
    //   },
    //   hidden: ({ parent }) => parent.imageSize !== 'FullScreenPic'
    // },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main Image For this Section'
    },

    {
      name: 'sideSecBlurb',
      title: 'Side Text Blurb',
      type: 'text',
      rows: 4,
      fieldset: 'sideContent',
      description: 'Used as the main heading of the Black Section',
      hidden: ({ parent }) => parent.imageSize !== 'FullScreenPic'
    },

    {
      name: 'sideSecHeading',
      title: 'Top Section Headline',
      type: 'string',
      fieldset: 'whiteContent',
      description: 'Used as the main heading of the overlay White Section',
      hidden: ({ parent }) => parent.imageSize !== 'FullScreenPic'
    },
    {
      name: 'sideSecCta',
      title: 'Side Section Cta',
      type: 'cta',
      fieldset: 'sideContent',
      hidden: ({ parent }) => parent.imageSize !== 'FullScreenPic'
    },
    {
      name: 'heading',
      title: 'Main Headline ',
      type: 'string',
      fieldset: 'whiteContent',
      description: 'Used as the main heading of the White Section',
      hidden: ({ parent }) =>
        parent.imageSize !== 'FullScreenPic' && parent.imageSize !== 'FullScreenPicVideo'
    },

    {
      name: 'mainContent',
      title: 'Main Content Blurb',
      type: 'excerptPortableText',
      fieldset: 'whiteContent',
      hidden: ({ parent }) =>
        parent.imageSize !== 'FullScreenPic' && parent.imageSize !== 'FullScreenPicVideo'
    },

    {
      name: 'topSecCta',
      title: 'White Section Cta',
      type: 'cta',
      fieldset: 'whiteContent',
      hidden: ({ parent }) => parent.imageSize !== 'FullScreenPic'
    },
    {
      name: 'youTubeLink',
      title: 'You tube ID ',
      type: 'string',
      fieldset: 'whiteContent',
      description: 'Paste your YouTube Id Below. Used for the Watch Section ',
      hidden: ({ parent }) => parent.imageSize !== 'FullScreenPicVideo'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled',
      location: 'contentLocation',
      size: 'imageSize'
    },
    prepare({ title, disabled, location, size }) {
      if (!location) {
        location = ''
      }
      return {
        title: `${disabled ? 'DISABLED: ' : ''} ${
          title
            ? 'Pic/Cont: ' + title + ': ' + location + ': ' + size
            : 'Pic/Cont: ' + location + ': ' + size
        }`
      }
    }
  }
}
