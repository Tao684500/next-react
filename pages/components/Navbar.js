import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const active = useRouter();

  return (
    <div>
      <nav>
        <div
          className={
            toggle
              ? "sm:h-[60%] text-white flex justify-between items-center fixed top-0 left-0 sm:bg-black bg-black/50 mx-0 my-auto h-[80px] w-full z-[1000]"
              : "text-white flex justify-between items-center fixed top-0 left-0 sm:bg-black bg-black/50 mx-0 my-auto h-[80px] w-full z-[1000]"
          }
        >
          <h1 className=" text-4xl font-extrabold mx-8 sm:mx-0 sm:absolute sm:top-[16px] sm:left-[20px]">Next-Tao</h1>
          <div className=" flex justify-between items-center">
            <ul
              onClick={toggleMenu}
              className={
                toggle
                  ? " sm:absolute sm:top-[80px] sm:left-0 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center flex justify-between items-center font-bold gap-10 text-2xl"
                  : " flex justify-between items-center font-bold gap-10 text-2xl sm:hidden"
              }
            >
              <li>
                <Link
                  href="/"
                  className={active.pathname == "/" ? " text-slate-500" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/jewelry"
                  className={active.pathname == "/jewelry" ? " text-slate-500" : ""}
                >
                  Jewelry
                </Link>
              </li>
              <li>
                <Link
                  href="/men"
                  className={active.pathname == "/men" ? " text-slate-500" : ""}
                >
                  Men
                </Link>
              </li>
              <li className="mr-8 sm:mr-0">
                <Link
                  href="/wonen"
                  className={active.pathname == "/wonen" ? " text-slate-500" : ""}
                >
                  Wonen
                </Link>
              </li>
            </ul>
            <div onClick={toggleMenu} className=" hidden sm:block sm:absolute sm:top-[27px] sm:right-[20px] sm:mx-0 text-2xl mx-8">
              {toggle ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
