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
            <div className="mt-16 flex flex-col items-center">
                <div className="sm:w-full text-center py-6">
                    <p className="text-sm font-bold mb-2">
                        {footer} / <Link href="https://github.com/yudejp/yude.  jp"><a className="hover:underline">{source}</a></Link>
                    </p>
                    <p className="text-sm font-bold mb-2">
                        <Link href="https://scrapbox.io/yude/yude.  jp_%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%88%A9%E7%94%A8%E8  %A6%8F%E7%B4%84"><a className="hover:underline">{tos}</a></Link>
                    </p>
                </div>
              </div>
            </div>
          </>
            );
}