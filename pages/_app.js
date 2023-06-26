import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
