/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        'rubik-one':['Rubik One']
      },
      spacing:{
        '128':'32rem',
        '150':'45rem',
      },
      colors: {
        'primaryblack':'#000000',
        'secondaryblack':'#121212',
        'tertiaryblack':'#191919',
        'quaternaryblack':'#272727',
        'grey':'#424242',
        'purple':'#B760B1',
        'gold': '#B57E1A',
        'yellow':'#E6BA5B',
        'palegreen':'#359E99',
        'green':'#1B605D',
        'brightgreen':"#229D98",
        'fadewhite':'#D0D5CF',
        'grad1': '#E36595',
        'grad2': '#F87977',
        'grad3': '#F79960',

      },
      backgroundImage: {
        'blurbwclgimg': "url('./assets/clgblurbg.png')",
        'instalogo': "url('./assets/instalogo.png')",
        'twitterlogo': "url('./assets/twitterlogo.png')",
        'linkedinlogo': "url('./assets/linkedinlogo.png')",
        "mindtwisterbg":"url('./assets/mindtwisterbg.png')",
        "hyperzestbg":"url('./assets/mindtwisterbg.png')",
      }
    },
  },
  plugins: [],
}
