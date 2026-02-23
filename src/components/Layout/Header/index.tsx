"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const pathname = usePathname();

  // Mobile toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Sticky navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${sticky
        ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-black/80"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo2.svg"
              alt="logo"
              className="w-full dark:hidden h-17 w-auto object-contain"
              width={140}
              height={30}
              priority
            />
            <Image
              src="/images/logo/logo1.svg"
              alt="logo"
              className="hidden w-full dark:block h-17 w-auto object-contain"
              width={140}
              height={30}
              priority
            />
          </Link>


          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-10">
            {menuData.map((item) => (
              <div key={item.id} className="relative group">

                {/* ===== Normal Link ===== */}
                {!item.submenu ? (
                  <Link
                    href={item.path!}
                    target={item.newTab ? "_blank" : "_self"}
                    className={`text-sm tracking-widest uppercase transition-all duration-300 ${pathname === item.path
                      ? "text-[#C6A75E]"
                      : "text-gray-700 hover:text-[#C6A75E] dark:text-gray-300"
                      }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  /* ===== Dropdown Parent ===== */
                  <>
                    <button
                      className={`flex items-center text-sm tracking-widest uppercase transition-all duration-300 ${pathname?.startsWith("/manufacturing")
                        ? "text-[#C6A75E]"
                        : "text-gray-700 hover:text-[#C6A75E] dark:text-gray-300"
                        }`}
                    >
                      {item.title}
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9L12 15L18 9" />
                      </svg>
                    </button>

                    {/* ===== Dropdown Menu ===== */}
                    <div className="absolute left-0 top-[120%] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-full transition-all duration-200 bg-white dark:bg-gray-900 shadow-lg rounded-md py-2 w-56">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.path!}
                          target={subItem.newTab ? "_blank" : "_self"}
                          className={`block px-4 py-2 text-sm tracking-widest uppercase transition-all duration-200 ${pathname === subItem.path
                            ? "text-[#C6A75E]"
                            : "text-gray-700 hover:text-[#C6A75E] dark:text-gray-300"
                            }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>


          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden lg:block rounded-sm border border-[#C6A75E] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#C6A75E] transition-all duration-300 hover:bg-[#C6A75E] hover:text-white dark:text-[#C6A75E] dark:hover:text-white"
            >
              Sign In
            </Link>
            <ThemeToggler />

            {/* Mobile Toggle */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
                <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
                <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="lg:hidden pb-6">
            <ul className="flex flex-col items-center justify-center h-full space-y-6 overflow-y-auto">
              {menuData.map((item) => (
                <li key={item.id} className="text-center group relative">
                  {item.submenu ? (
                    <>
                      <p className="text-xl tracking-widest uppercase font-serif text-white/80 mb-2 cursor-pointer">{item.title}</p>
                      <div className="flex flex-col space-y-2 mt-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.path!}
                            onClick={() => setNavbarOpen(false)}
                            className="text-base text-gray-400 hover:text-luxury-gold transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path!}
                      onClick={() => setNavbarOpen(false)}
                      className={`text-xl tracking-widest uppercase font-serif ${pathname === item.path
                        ? "text-luxury-gold"
                        : "text-white/80 hover:text-luxury-gold"
                        }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
              <li className="text-center mt-4">
                <Link
                  href="/login"
                  onClick={() => setNavbarOpen(false)}
                  className="text-xl tracking-widest uppercase font-serif text-white/80 hover:text-[#C6A75E]"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
