// Base layout
import Layout from "./components/Layout"

// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

// next-seo
import { NextSeo } from 'next-seo';

export default function Server(props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <>
      <NextSeo
        title="yude.jp サーバー上"
        description="yude.jp 上に設置されているサーバーの一覧、情報"
      />
      <Layout title={t('status')}>
          <div className="my-9 text-center">
          
          {
           // Header
          }
          <div className="mb-5">
            <p className="text-left text-4xl">{t('status')} <p className="md:inline font-mono text-base sm:">Powered / Generated by Mackerel.</p></p>
          </div>
          
          {
              // sandy
          }
          <h2 className="text-2xl text-left font-bold leading-7 sm:text-3xl sm:truncate">sandy</h2>
          <div className="flex xl:w-2/3 text-center">
          <div className="flex-1"><p className="font-bold">CPU </p>i7-2600</div>
          <div className="flex-1"><p className="font-bold">RAM </p>DDR3 24GB</div>
          <div className="flex-1"><p className="font-bold">OS </p>Arch Linux</div>
          <div className="flex-1"><p className="font-bold">{t('location')} </p>{t('hiroshima')}</div>
          </div>
          <iframe className="w-full h-96" src="https://mackerel.io/embed/public/embed/heHnGhDanoIDlf7jjxUe9yPVrsG3deeH5ptD8suErrq5w46crWEIYdLfzLoukzfF?period=24h" height="400" frameBorder="0" scrolling="no"></iframe>
          
          
          {
              // oracle1
          }
          <h2 className="text-2xl text-left font-bold leading-7 sm:text-3xl sm:truncate">oracle1</h2>
          <div className="flex xl:w-2/3 text-center">
          <div className="flex-1"><p className="font-bold">{t('service')} </p>Oracle Cloud</div>
          <div className="flex-1"><p className="font-bold">{t('shape')} </p>VM.Standard.E2.1.Micro</div>
          <div className="flex-1"><p className="font-bold">RAM </p>1GB</div>
          <div className="flex-1"><p className="font-bold">OS </p>Ubuntu 20.04 LTS</div>
          <div className="flex-1"><p className="font-bold">{t('region')} </p>Japan Central (Osaka)</div>
          </div>
          <iframe className="w-full h-96" src="https://mackerel.io/embed/public/embed/vcn6LE4P2hh6GzvtMbIAWxsXpDh6eSoNyAXdhfYaj9yDN6FJwOHIiz9ktqToj1HG?period=24h" height="400" frameBorder="0" scrolling="no"></iframe>
          
          {
              // oracle2
          }
          <h2 className="text-2xl text-left font-bold leading-7 sm:text-3xl sm:truncate">oracle2</h2>
          <div className="flex xl:w-2/3 text-center">
          <div className="flex-1"><p className="font-bold">{t('service')} </p>Oracle Cloud</div>
          <div className="flex-1"><p className="font-bold">{t('shape')} </p>VM.Standard.E2.1.Micro</div>
          <div className="flex-1"><p className="font-bold">RAM </p>1GB</div>
          <div className="flex-1"><p className="font-bold">OS </p>Ubuntu 20.04 LTS</div>
          <div className="flex-1"><p className="font-bold">{t('region')} </p>Japan Central (Osaka)</div>
          </div>
          <iframe className="w-full h-96" src="https://mackerel.io/embed/public/embed/wgmTz7aTgvwfyU6qVHrJJmQlpOHCUJK6qw0W9sJTX68WOI8TFtc27YvJ7dwkQEGv?period=24h" height="400" frameBorder="0" scrolling="no"></iframe>
          
        </div>
      </Layout>
    </>
  )
}