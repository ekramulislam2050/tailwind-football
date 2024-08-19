/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
   
    extend: {
      fontFamily:{
        'poppins':["Poppins",' sans-serif']
      },
      colors:{
          "btn-bg":['rgba(224,44,109)'],
          "card-bg":["rgba(255,255,255)"]
      },
      background:{
        'icon-bg':['rgb(150, 155, 171)'],
      },
      screens:{
        "mobile":{"max":"576px"}
      }
    },
  },
  plugins: [],
}
