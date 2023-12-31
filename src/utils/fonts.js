const { Global } = require("@emotion/react");

const fonts = () => (
  <Global
    styles={`
      @font-face{
        font-family: "Cabinet Grotesk";
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('./static/fonts/cabinet-grotesk/CabinetGrotesk-Variable.woff2') format('woff2'),
            url('./static/fonts/cabinet-grotesk/CabinetGrotesk-Variable.woff') format('woff');
      }
      @font-face{
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('./static/fonts/satoshi/Satoshi-Variable.woff2') format('woff2'),
            url('./static/fonts/satoshi/Satoshi-Variable.woff') format('woff');
      }
    `}
  />
);

export default fonts;