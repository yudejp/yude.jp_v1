import React from "react";
import Popper from "popper.js";
import { useRouter } from 'next/router'
import Link from 'next/link';

const Dropdown = ({ color }) => {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>

<div className="relative inline-block text-left mr-2 float-right">
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true"
    style={{ transition: "all .15s ease" }}
    ref={btnDropdownRef}
    onClick={() => {
      dropdownPopoverShow
        ? closeDropdownPopover()
        : openDropdownPopover();
    }}
    >
      言語 / Languages
      <svg className="-mr-1 ml-2 h-5 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>

  
  <div ref={popoverDropdownRef} className={
              (dropdownPopoverShow ? "block " : "hidden ") + "origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"}>
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <Link href="/" locale="ja-JP">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">日本語</a>
    </Link>
    <Link href="/" locale="en-US">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">English</a>
    </Link>
    </div>
  </div>
</div>
    </>
  );
};

export default function LangSelector() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}