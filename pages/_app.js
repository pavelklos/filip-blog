// Theme Provider
import ThemeProvider from "providers/ThemeProvider";

// Font Awesome
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
library.add(faBorderAll, faList, faSortNumericDown, faSortNumericUp);
import "@fortawesome/fontawesome-svg-core/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/darcula.css";
// import "highlight.js/styles/vs.css";
import "styles/index.scss";
import "styles/test.scss";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;

// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
