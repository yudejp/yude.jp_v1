// Tailwind CSS
import "tailwindcss/tailwind.css";

// Next.js
import Link from 'next/link';

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

export default function Footer(props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
    return (
      <>
        <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
            <div className="sm:w-full text-center py-6">
                <p className="text-sm font-bold mb-2">
                    {t('footer')} / <Link href="https://github.com/yudejp/yude.jp"><a className="hover:underline">{t('source')}</a></Link>
                </p>
                <p>
                  <span>
                    <Link href="yude3mzscyufx5u3zup72ium7tgecy3bd67p7t6vqhaywvr7e2gqpcqd.onion"><a className="hover:underline">Tor</a></Link>
                  </span>
                  <span className="text-xs">
                    &nbsp;&#9899;&nbsp;
                  </span>
                  <span>
                    <Link href="http://yudejp.i2p/?i2paddresshelper=55ivoba6mo3mqlwvw5lqz7lchxqew2kh77kwkn5shefrj2dp3coq.b32.i2p"><a className="hover:underline">I2P</a></Link>
                  </span>
                </p>
            </div>
          </div>
        </div>
      </>
    );
}