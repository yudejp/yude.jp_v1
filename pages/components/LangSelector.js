import React from "react";
import Popper from "popper.js";
import { useRouter } from 'next/router'
import Link from 'next/link';
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dropdown = ({ color }) => {
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

<div className="text-left mr-2 ml-2 my-3 float-right">
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-800 shadow-sm px-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true"
    style={{ transition: "all .15s ease" }}
    ref={btnDropdownRef}
    onClick={() => {
      dropdownPopoverShow
        ? closeDropdownPopover()
        : openDropdownPopover();
    }}
    >
      <FontAwesomeIcon icon={faLanguage} className="w-12 h-9" />
      <svg className="-mr-1 ml-2 h-9 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>  
  <div ref={popoverDropdownRef} className={
              (dropdownPopoverShow ? "block " : "hidden ") + "z-10 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-700"}>
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <Link href="#" locale="ja">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-gray-800" role="menuitem">日本語</a>
    </Link>
    <Link href="#" locale="en">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-gray-800" role="menuitem">English</a>
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