import "tailwindcss/tailwind.css";
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
export default function Footer(props) {
    
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("common")
    const footer = t('footer')
    const source = t('source')
    const tos = t('tos')
        return (
          <>
            <div className="container mx-auto px-6">
            <div className="mt-3 flex flex-col items-center">
                <div className="sm:w-full text-center py-6">
                    <p className="text-sm font-bold mb-2">
                        {footer} / <Link href="https://github.com/yudejp/yude.jp"><a className="hover:underline">{source}</a></Link>
                    </p>
                    <p className="text-sm font-bold mb-2">
                        <Link href="/tos"><a className="hover:underline">{tos}</a></Link>
                    </p>
                </div>
              </div>
            </div>
          </>
            );
}