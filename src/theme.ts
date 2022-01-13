import { createTheme } from "@mui/material/styles";

// https://mui.com/ja/customization/breakpoints/
/* default theme
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

// 細かいメディアクエリが必要になればカスタマイズする
// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//       xs: true;
//       ss: true;
//       ssm: true;
//       s: true;
//       sm: true;
//       mm: true;
//       m: true;
//       md: true;
//       ml: true;
//       android9dot6Tablet: true;
//       lg: true;
//       l: true;
//       ll: true;
//       xl: true;

//   }
// }

// フォントを優先度順に
const fontFamily = [
  "Roboto",
  "Lato",
  "Noto Sans JP",
  "ヒラギノ角ゴ ProN W3",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  "ヒラギノ角ゴシック",
  "メイリオ",
  "Meiryo",
  "Osaka",
  "ＭＳ Ｐゴシック",
  "MS PGothic",
  "sans-serif",
].join(",");

let theme = createTheme();
theme = createTheme(theme, {
  typography: {
    fontFamily: fontFamily,
  },
  palette: {
    primary: {
      light: "#E6EBF4",
      main: "#023892",
      dark: "#062C78",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    text: {
      primary: "#0D1844",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.87)",
          backgroundColor: "#F2F5FA",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.6)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          // background: "#30549C",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "7px"
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: "0",
        },
      },
    },    
  },

  // breakpoints :{
  //   xs: 0,
  //   ss: 290,
  //   ssm: 380,
  //   s: 400,
  //   sm: 600,
  //   mm: 640,
  //   m: 700,
  //   md: 960,
  //   ml: 1000,
  //   android9dot6Tablet: 1200,
  //   lg: 1280,
  //   l: 1370,
  //   ll: 1610,
  //   xl: 1920,
  // }
});

export default theme;
