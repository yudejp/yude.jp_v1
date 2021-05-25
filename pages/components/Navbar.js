import "tailwindcss/tailwind.css";
import Link from 'next/link';
import LangSelector from "./LangSelector"
import ThemeSelector from "./ThemeSelector"

const Navbar = () => {
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
                <LangSelector />
            </div>
      </nav>
      </>
        );
    };
export default Navbar