"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="m-4">
      <div className="bg-[#6d3625] text-white text-center h-40 p-4">
        <p className="text-2xl">Summer Clearance</p>
        <p>Up to 60% Off</p>
        <button className="p-4 rounded-full text-black bg-white border-2 border-black text-sm font-bold">
          Shop Now
        </button>
      </div>
      <div className="h-8"></div>
      <div>
        <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" />
        <p className=" text-xl font-bold">Last-Chance Sale</p>
        Up to 40% off
        <br />
        <button className="p-2 rounded-full text-white bg-black border-2 border-white">
          Shop all sale
        </button>
      </div>
      <div>
        <br />
        <p className="font-bold text-3xl">Deals by Category</p>
        <br />
        <div className=" grid grid-cols-6 gap-8">
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              className="object-cover object-center h-56 w-56"
            />
            <p>Camp</p>
          </Link>
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2903&q=80"
              className="object-cover object-center h-56 w-56"
            />
            <p>Climb</p>
          </Link>
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
              className="object-cover object-center h-56 w-56"
            />
            <p>Bike</p>
          </Link>
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1583797227225-4233106c5a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80"
              className="object-cover object-center h-56 w-56"
            />
            <p>Travel</p>
          </Link>
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80"
              className="object-cover object-center h-56 w-56"
            />
            <p>Men</p>
          </Link>
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1603319373788-680871da9246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
              className="object-cover object-center h-56 w-56"
            />
            <p>Women</p>
          </Link>
        </div>
        <br />
        <p className="text-3xl font-bold">Labor Day Sale</p>
        <br />
        <div className=" grid grid-cols-3 gap-8">
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              className=""
            />
            <br />
            <p className=" text-xl font-bold">Snow Sale</p>
            <p>Up to 50% Off</p>
          </Link>
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
              className=""
            />
            <br />
            <p className=" text-xl font-bold">Camp Sale</p>
            <p>Up to 40% Off</p>
          </Link>
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1530620027689-2bd5b849d329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              className=""
            />
            <br />
            <p className=" text-xl font-bold">Fall Sale</p>
            <p>Up to 30% Off</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
