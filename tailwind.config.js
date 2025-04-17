const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./*.html"],
  plugins: [require("postcss-import"), require("tailwindcss"), require("autoprefixer")],
  theme: {
    screens: {
      xxx: { raw: "screen and (max-width: 1700px)" },
      xx: { raw: "screen and (max-width: 1440px)" },
      xl: { raw: "screen and (max-width: 1200px)" },
      lg: { raw: "screen and (max-width: 992px)" },
      md: { raw: "screen and (max-width: 768px)" },
      mls: { raw: "screen and (max-width: 650px)" },
      sm: { raw: "screen and (max-width: 576px)" },
      ml: { raw: "screen and (max-width: 460px)" },
      mm: { raw: "screen and (max-width: 425px)" },
      ms: { raw: "screen and (max-width: 375px)" },
    },
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      14: "14px",
      16: "16px",
      15: "15px",
      20: "20px",
      24: "24px",
      25: "25px",
      28: "28px",
      30: "30px",
      32: "32px",
      35: "35px",
      40: "40px",
      45: "45px",
      48: "48px",
      50: "50px",
      55: "55px",
      56: "56px",
      60: "60px",
      64: "64px",
      65: "65px",
      70: "70px",
      72: "72px",
      75: "75px",
      80: "80px",
      85: "85px",
      88: "88px",
      90: "90px",
      95: "95px",
      96: "96px",
      100: "100px",
      104: "104px",
      105: "105px",
      110: "110px",
      112: "112px",
      115: "115px",
      120: "120px",
      125: "125px",
      128: "128px",
      130: "130px",
      135: "135px",
      136: "136px",
      140: "140px",
      144: "144px",
      145: "145px",
      150: "150px",
      152: "152px",
      155: "155px",
      160: "160px",
      165: "165px",
      168: "168px",
      170: "170px",
      174: "174px",
      175: "175px",
      180: "180px",
      182: "182px",
      185: "185px",
      190: "190px",
      195: "195px",
      198: "198px",
      200: "200px",
    },
    extend: {
      colors: {
        "sigma-brand": "var(--sigma-brand)",
        "sigma-secondary": "var(--sigma-secondary)",
        "sigma-accent": "var(--sigma-accent)",
        heading: "var(--sigma-heading)",
        paragraph: "var(--sigma-paragraph)",
        "sigma-border-light": "var(--sigma-border-light)",
        "sigma-border-D0D5DD": "var(--sigma-border-D0D5DD)",
        "sigma-bg-light": "var(--sigma-bg-light)",

        "sigma-title": "var(--sigma-title)",
        "sigma-title-50": "var(--sigma-title-50)",
        "sigma-title-60": "var(--sigma-title-60)",
        "sigma-title-70": "var(--sigma-title-70)",
        "sigma-title-80": "var(--sigma-title-80)",
        "sigma-title-90": "var(--sigma-title-90)",

        "sigma-black-100": "var(--sigma-black-100)",
        "sigma-black-90": "var(--sigma-black-90)",
        "sigma-black-80": "var(--sigma-black-80)",
        "sigma-black-70": "var(--sigma-black-70)",
        "sigma-black-60": "var(--sigma-black-60)",
        "sigma-black-50": "var(--sigma-black-50)",
        "sigma-black-40": "var(--sigma-black-40)",
        "sigma-gray-600": "var(--sigma-gray-600)",
        "sigma-ff9": "var(--sigma-ff9)",
        "sigma-border-1": "var(--sigma-border-1)",
        "sigma-border-2": "var(--sigma-border-2)",
        "sigma-border-3": "var(--sigma-border-3)",

        "sigma-section-bg": "var(--sigma-section-bg)",
        "sigma-section-bg-2": "var(--sigma-section-bg-2)",

        "sigma-success-700": "var(--sigma-success-700)",
      },
      fontFamily: {
        primary: "var(--font-heading)",
        secondary: "var(--font-inter)",
      },
      transitionProperty: {
        opacity: "opacity",
      },
    },
  },
  plugins: [],

};
