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
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Language / 言語
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link href="/" locale="ja-JP">
              <a
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent"
                }
              >
                Japanese
              </a>
              </Link>
              <Link href="/" locale="en-US">
              <a
                href="/"
                locale="en-US"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent"
                }
              >
                English
              </a>
              </Link>
              
            </div>
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