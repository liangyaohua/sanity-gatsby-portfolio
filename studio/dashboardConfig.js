export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607b0b20171dbba766eda50c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vk8927y7',
                  apiId: '80b33c6e-abc8-462c-b32d-2264945eaa9b'
                },
                {
                  buildHookId: '607b0b20815f4c7ce26c64f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9vk8akm4',
                  apiId: '3f0b59b4-b26a-43f9-b441-cdf8405af052'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liangyaohua/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9vk8akm4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
