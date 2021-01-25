const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          xlighter: '#00B9FF',
          lighter: '#00A0DD',
          default: '#0F4B8F',
          darker: '#075985',
        },
      
        secondary: {
          lighter: '#80CC49',
          default: '#76BC43',
          darker: '#68A63B',
        },
                     
        neutral: {
          lighter: '#CBD5E1',
          default: '#B9CBE6',
          darker: '#64748B',  
        }
      },

      backgroundImage: theme => ({
        'hero-productos': "url('/images/hero-productos.jpg')",
        'hero-banner-2': "url('/images/hero-banner-2.jpg')",
        'hero-banner-3': "url('/images/hero-banner-3.jpg')",
        'call-center': "url('/images/call-center.jpg')",
        

        
       })  

    }
  },

  variants: {

    extend: {
      fontFamily: ['hover', 'focus'],

      backgroundColor: ['active'],

    }

  },

  plugins: [
    require('@tailwindcss/forms'),
  ]
};
