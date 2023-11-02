/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/hero.png')",
        "footer-texture": "url('/assets/images/hero2.png')",
        "quiz-cover": "url('/assets/images/quiz-cover.png')",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [],
};
