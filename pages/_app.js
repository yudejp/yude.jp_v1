// Tailwind CSS
import 'tailwindcss/tailwind.css';
import "../styles/globals.css"

// Dark-mode related
import { ThemeProvider } from "next-themes";

// next-seo
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;