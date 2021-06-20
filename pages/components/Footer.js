import "tailwindcss/tailwind.css";
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
export default function Footer(props) {
    
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("common")

    return (
      <>
        <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
            <div className="sm:w-full text-center py-6">
                <p className="text-sm font-bold mb-2">
                    {t('footer')} / <Link href="https://github.com/yudejp/yude.jp"><a className="hover:underline">{t('source')}</a></Link>
                </p>
                <p className="text-sm font-bold mb-2">
                    <Link href="/tos"><a className="hover:underline">{t('tos')}</a></Link>
                </p>
                <p className="text-sm font-bold mb-2">
                    <Link href="https://status.yude.jp"><a className="hover:underline">{t('status')}</a></Link>
                </p>
            </div>
          </div>
        </div>
      </>
    );
}