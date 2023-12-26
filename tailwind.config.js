/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      brightBlue: "hsl(220, 98%, 61%)",
      lightTheme: {
        veryLightGray: "hsl(236, 33%, 92%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      },
      darkTheme: {
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        "lightGrayishBlue-100": "hsl(236, 33%, 92%)",
        "lightGrayishBlue-200": "hsl(234, 39%, 85%)",
        "darkGrayishBlue-100": "hsl(234, 11%, 52%)",
        "darkGrayishBlue-200": "hsl(233, 14%, 35%)",
        "darkGrayishBlue-300": "hsl(237, 14%, 26%)",
      },
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    backgroundImage: {
      bgDesktopDark: `url('/bg-desktop-dark.jpg')`,
      bgDesktopLight: `url('/bg-desktop-light.jpg')`,
      bgMobileDark: `url('/bg-mobile-dark.jpg')`,
      bgMobileLight: `url('/bg-mobile-light.jpg')`,
      gradient:
        "linear-gradient(to right, hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
    },
    extend: {},
  },
  plugins: [],
};
