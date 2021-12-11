// React
import React, { useState, useEffect } from 'react';

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

// Font Awesome
import { faKey, faEye, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Next.js
import Link from 'next/link'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <>
      <button
        className="bg-pink-600 text-white active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon icon={faKey} className="w-5 h-5 inline"/> {t('keys')}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative mx-auto w-4/5 max-h-1/2 -mt-96 max-w-3xl">
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal body */}
                <div className="relative p-2 flex-auto text-black text-left">
                
                <p className="text-2xl"><FontAwesomeIcon icon={faKey} className="w-5 h-5 inline"/> {t('keys')}</p>
          <ul className="list-disc my-2">
          <li>
            <span className="font-bold">PGP&nbsp;</span>
            <Link href="/yudejp.gpg">
              <a className="hover:underline">
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 inline"/>&nbsp;
                {t('download')}
              </a>
            </Link>
            <p>{t('fingerprint')}:</p>
            <div className="overflow-x-auto">
              <div className="whitespace-nowrap">
                <code>3745 F270 DB4E 8975 6B07  62BE EB0F E5D9 25C4 A968</code>
              </div>
            </div>
          </li>
          <li>
            <span className="font-bold">SSH&nbsp;</span>
            <Link href="https://github.com/yude.keys">
              <a className="hover:underline">
                <FontAwesomeIcon icon={faEye} className="w-5 h-5 inline"/>&nbsp;
                {t('view')}
              </a>
            </Link>
            <p>{t('fingerprint')}:</p>
            <div className="overflow-x-auto">
              <div className="whitespace-nowrap">
              <code>2048 SHA256:xwSL4DORWmroWdC6P0GU1m1yZl/cXqjo9rCCWqqO+Dc</code>
              </div>
            </div>
          </li>
            </ul>
                
                </div>
                {/* Modal footer for close button */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {t('close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}