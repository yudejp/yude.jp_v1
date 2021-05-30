import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation'
import { faUserClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")
  const close = t('common:close')
  return (
    <>
      <button
        className="bg-pink-600 text-white active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon icon={faUserClock} className="w-5 h-5 inline"/> WakaTime
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
                <div className="relative p-2 flex-auto">
                <figure><embed src="https://wakatime.com/share/@yude/6f15075a-b9d5-464a-8b4f-545d31933dfb.svg"></embed></figure>
                </div>
                {/* Modal footer for close button */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {close}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}