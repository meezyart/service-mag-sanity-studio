export default {
  widgets: [
    {
      name: 'structure-menu'
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'Sanity Repo',
            value: 'https://github.com/meezyart/service-mag-sanity-studio',
            category: 'Code'
          },
          {
            title: 'Website Repo',
            value: 'https://github.com/meezyart/Service-Mag-Workflow-Website',
            category: 'Code'
          }
        ]
      }
    },
    {
      name: 'netlify',
      options: {
        title: 'Netlify Deploys',
        description:
          'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        sites: [
          // {
          //   buildHookId: '616b9be8cb071131e10ed546',
          //   title: 'Sanity Studio Service Now',
          //   name: 'service-now-magazine-studio',
          //   apiId: '02468dad-897b-427d-bf79-61619920565f'
          // }
          {
            buildHookId: '616b9be9a4aa9e21f2c7eac4',
            title: 'Service Now Employee Workflow',
            name: 'servicenow-sanity-11-ty',
            apiId: 'fb2ffd0b-64be-4bd4-8ae5-7496bd96bd0c'
          }
        ]
      }
    },
    // {
    //   name: 'document-list',
    //   options: {
    //     title: 'Recently edited',
    //     order: '_updatedAt desc',
    //     limit: 10,
    //     types: ['choreographer', 'page']
    //   },
    //   layout: { width: 'medium' }
    // },
    // { name: 'structure-menu' },
    // {
    //     name: 'project-info',
    //     options: {
    //         __experimental_before: [{
    //             name: 'netlify',
    //             options: {
    //                 description: 'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
    //                 sites: [{
    //                         buildHookId: '6041599a1dd2e419a608eae5',
    //                         title: 'Sanity Studio',
    //                         name: 'servicenow-sanity-11-ty-studio',
    //                         apiId: 'e6e9e62f-f363-4bba-a984-5b9ef6145507'
    //                     },
    //                     {
    //                         buildHookId: '6041599a5936a717e2a5c3ac',
    //                         title: 'Blog Website',
    //                         name: 'servicenow-sanity-11-ty',
    //                         apiId: '9eacabf1-2d57-45b0-b4f7-34e6bf6f9f7c'
    //                     }
    //                 ]
    //             }
    //         }],

    //     }
    // },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
