"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  HomeIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="py-5 px-6 border-b border-gray-200 bg-white z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Market<span className="text-blue-500">board</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6 relative">
            <Link
              className="flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors"
              href="/"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>

            {/* Shop Online Dropdown */}
            <div className="relative group inline-block">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors">
                <ShoppingCartIcon className="w-5 h-5" />
                Shop Online
              </button>

              <div className="absolute left-0 mt-2 w-72 bg-white border shadow-md p-4 rounded-md space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                {[
                  { name: "Electronics", img: "/img/img7.jpeg", href: "/electronics" },
                  { name: "HomeDecor", img: "/img/smlgVasesColors (4).jpeg", href: "/homedecor" },
                  { name: "Books", img: "/bookimgs/thebookofdoors.jpg", href: "/books" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              className="flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors"
              href="https://0101z010a-038471.vercel.app/"
            >
              <Cog6ToothIcon className="w-5 h-5" />
              Code Editor
            </Link>

            <Link
              className="flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors"
              href="/dashboard"
            >
              <Cog6ToothIcon className="w-5 h-5" />
              Admin
            </Link>
          </div>
        </div>

        {/* Desktop Auth */}
        <div className="hidden sm:flex items-center gap-4">
          {user ? (
            <>
              <p className="text-sm">Welcome, {user.given_name}</p>
              <LogoutLink className={buttonVariants({ variant: "secondary" })}>
                Log out
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink className={buttonVariants()}>Log in</LoginLink>
              <RegisterLink className={buttonVariants({ variant: "secondary" })}>
                Sign up
              </RegisterLink>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="sm:hidden text-gray-700">
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 space-y-4">
          <Link href="/" className="block text-sm" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <div className="space-y-2">
            <p className="text-sm font-semibold">Shop Online</p>
            {[
              { name: "Electronics", img: "/img/img1.jpeg", href: "/ecom/electronics" },
              { name: "Fashion", img: "/img/img2.jpeg", href: "/ecom/homeDecor" },
              { name: "Books", img: "/img/img3.jpeg", href: "/ecom/books" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <Image src={item.img} alt={item.name} width={30} height={30} className="rounded" />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>

          <Link href="/dashboard" className="block text-sm" onClick={() => setMenuOpen(false)}>
            Admin
          </Link>

          {user ? (
            <div className="flex flex-col gap-2">
              <p className="text-sm">Welcome, {user.given_name}</p>
              <LogoutLink className={buttonVariants({ variant: "secondary" })}>
                Log out
              </LogoutLink>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <LoginLink className={buttonVariants()}>Log in</LoginLink>
              <RegisterLink className={buttonVariants({ variant: "secondary" })}>
                Sign up
              </RegisterLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
