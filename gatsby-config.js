module.exports = {
  
  plugins: [
    
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },

    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://unilimpio.us18.list-manage.com/subscribe/post?u=291181dacd668b1dad7f8c93c&amp;id=9c9708e7eb', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
          },
    },
    
    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`
      
  ],


  siteMetadata: {
    title: "Unilimpio - Mucho más en higiene Institucional",
    titleTemplate: "%s · Unilimpio",
    description:
      "Unilimpio es una empresa fabricante y comercializadora de soluciones de higiene institucional desde 1986.",
    url: "https://unilimpio.com", // No trailing slash allowed!
    image: "/images/LogoUni.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@unilimpio_ec",
    siteUrl: "https://unilimpio.com",
    banner: "",
    headline: "",
    siteLanguage: "Español",
    ogLanguage: "",
    author: "Marcel Filbig",
    twitter: "",
    facebook: ""
  },

};
