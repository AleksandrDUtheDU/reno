import GlobalStyles from "@mui/material/GlobalStyles";

export default function GlobalStylesApp() {
  return (
    <GlobalStyles
      styles={
        {
          html: {
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
            scrollBehavior: 'smooth'
          },
          body: {
            margin: '0',
            padding: '0',
          },
          ul: {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
          },
          li: {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
          },
          dl: {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
          },
        }
      }
    />
  );
}



// * {
//   margin: 0;
//   padding: 0;
//   box- sizing: border - box;
// scroll - behavior: smooth;
// }

//   ul,
//   li,
//   dl {
//   list - style - type: none;
//   margin: 0;
//   padding: 0;
// }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//   margin: 0;
// }


// p {
//   margin: 0;
//   padding: 0;
// }

//   input:: -webkit - outer - spin - button,
//   input:: -webkit - inner - spin - button {
//   /* -webkit-appearance: none;
//   margin: 0; */
//   /* opacity: 1; */
// }

