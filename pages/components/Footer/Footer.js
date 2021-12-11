import "tailwindcss/tailwind.css";
import Link from 'next/link';
// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

export default function Footer(props) {
    return (
      <>
        <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
            <div className="sm:w-full text-center py-6">
                <p className="text-sm font-bold mb-2">
                    {t('footer')} / <Link href="https://github.com/yudejp/yude.jp"><a className="hover:underline">{t('source')}</a></Link>
                </p>
            </div>
          </div>
        </div>
      </>
    );
}