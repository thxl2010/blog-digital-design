// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['photography', 'journal', 'category'],
        typeName: 'Strapi', // ! templates[`${typeName}${contentTypes[i]}`]
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      },
    },
  ],
  templates: {
    // ! `${typeName}${contentTypes[i]}`
    StrapiPhotography: [
      {
        path: '/photography/:id',
        component: './src/templates/Photography.vue',
      },
    ],
    StrapiJournal: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue',
      },
    ],
    StrapiCategory: [
      {
        path: '/category/:id',
        component: './src/templates/Category.vue',
      },
    ],
  },
};
