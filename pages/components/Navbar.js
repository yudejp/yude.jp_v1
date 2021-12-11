// Tailwind CSS
import "tailwindcss/tailwind.css";

// Next.js
import Link from 'next/link';

// Components
import LangSelector from "./LangSelector"
import ThemeSelector from "./ThemeSelector"

// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

const Navbar = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  
    return (
      <>
        <nav className='flex items-center flex-wrap p-3'>
        <Link href='/'>
          <a className='inline-flex items-center p-2'>
            <span className='text-xl text-black font-bold tracking-wide dark:text-white font-mono animate-heartbeat'>
              yude.jp
            </span>
          </a>
        </Link>
            <div className="absolute right-0">
                <ThemeSelector />
                {/* <LangSelector /> */}
                <LanguageSwitcher lang="ja" />
            </div>
      </nav>
      </>
        );
    };
export default Navbar