"use client"
import React, { FormEvent } from "react"
import SearchIcon from "../../assets/icons/SearchIcon.jsx"
import UserIcon from "../../assets/icons/UserIcon.jsx"
import CartIcon from "../../assets/icons/CartIcon.jsx"
import CoolLogoIcon from "../../assets/icons/CoolLogoIcon.jsx"
import Link from "next/link.js"
type Props = {}

export default function Header({}: Props) {
  function handleSearch(e: FormEvent) {
    e.preventDefault()
    console.log("Fuck shit balls cock fart")
  }

  return (
    <header className="flex justify-center">
      <div className="flex flex-col max-w-[1400px] w-full">
        <section className="py-6 px-4 border-b border-black flex items-center gap-10 justify-between">
          <section className="flex gap-10 items-center grow">
            <Link href="/">
              <article className="flex items-center gap-2">
                <div className="h-6 w-6 border-2 border-black box-content rounded-full">
                  <CoolLogoIcon />
                </div>
                <p className="font-bold text-2xl">Coengine</p>
              </article>
            </Link>
            <form onSubmit={handleSearch} className="grow max-w-[600px]">
              <div className="bg-black rounded-full flex overflow-hidden">
                <button type="submit" className="p-1">
                  <div className="h-[18px] aspect-square text-white m-1">
                    <SearchIcon />
                  </div>
                </button>
                <input
                  type="text"
                  className="w-full bg-black px-3 text-white text-sm"
                  placeholder="Search all products"
                />
              </div>
            </form>
          </section>
          <section className="flex items-center gap-8">
            <article className="w-10 h-10 text-[#757575] cursor-pointer">
              <UserIcon />
            </article>
            <Link href="/cart">
              <article className="relative w-6 h-6 text-gray-700 top-[3px]">
                <CartIcon />
              </article>
            </Link>
          </section>
        </section>
        <section className="flex font-bold gap-6 p-6 justify-center text-lg">
          <div className="flex gap-6">
            {["Shirts"].map((categoryName) => (
              <Link key={categoryName} href={`/products/${categoryName}`}>
                {categoryName}
              </Link>
            ))}
          </div>
          <div className="flex gap-6 ">
            {["Shoes", "Hats", "Jeans", "Belts", "Socks", "Jewelry", "Sale"].map((categoryName) => (
              <p key={categoryName} className="cursor-pointer last:text-red-500">
                {categoryName}
              </p>
            ))}
          </div>
        </section>
      </div>
    </header>
  )
}
