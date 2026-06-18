/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Poppins', 'sans-serif'] },
      colors: {
        night: { 950:'#030812', 900:'#050d1a', 800:'#08152a', 700:'#0d1f3e', 600:'#142850' },
        blue:  { 400:'#60a5fa', 500:'#3b82f6', 600:'#2563eb', 700:'#1d4ed8' },
        green: { 400:'#34d399', 500:'#10b981', 600:'#059669', 700:'#047857' },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(.2,.8,.2,1) forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'float':     'float 6s ease-in-out infinite',
        'pulse-slow':'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow-blue': 'glowBlue 3s ease-in-out infinite alternate',
        'glow-green':'glowGreen 3.5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp:    { from:{opacity:'0',transform:'translateY(24px)'}, to:{opacity:'1',transform:'translateY(0)'} },
        fadeIn:    { from:{opacity:'0'}, to:{opacity:'1'} },
        float:     { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-14px)'} },
        glowBlue:  { from:{boxShadow:'0 0 20px rgba(59,130,246,0.25)'}, to:{boxShadow:'0 0 50px rgba(59,130,246,0.55), 0 0 80px rgba(59,130,246,0.2)'} },
        glowGreen: { from:{boxShadow:'0 0 20px rgba(16,185,129,0.2)'}, to:{boxShadow:'0 0 50px rgba(16,185,129,0.45), 0 0 80px rgba(16,185,129,0.15)'} },
      },
    },
  },
  plugins: [],
}
