"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import StoreLogo from "../public/assets/img/mystore-logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={StoreLogo}
            alt="logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-bold text-xl text-gray-800">HuyAuto</span>
        </Link>

        
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-red-600 transition">Trang chủ</Link></li>
          <li><Link href="/cars" className="hover:text-red-600 transition">Sản phẩm</Link></li>
          <li><Link href="/about" className="hover:text-red-600 transition">Giới thiệu</Link></li>
          <li><Link href="/contact" className="hover:text-red-600 transition">Liên hệ</Link></li>
        </ul>

        
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-3 py-4 text-center text-gray-700 font-medium">
            <li><Link href="/" onClick={() => setOpen(false)}>Trang chủ</Link></li>
            <li><Link href="/cars" onClick={() => setOpen(false)}>Sản phẩm</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>Giới thiệu</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Liên hệ</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
