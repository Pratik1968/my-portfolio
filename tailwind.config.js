/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#2D3250",
        secondary:"#EC3C3C",
      },
     keyframes:{
"fade-out-keyframe":{
"0%":{
  "opacity":"100%"
},
"100%":{
  "opacity":"0%",
},
},},
     
      animation:{
"fade-out":"fade-out-keyframe 1s linear  ",
"fade-in": "fade-out-keyframe 1s linear reverse"
     }
    },
  },
  plugins: [],
}

