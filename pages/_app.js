import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'tailwind-darkmode-toggle';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;