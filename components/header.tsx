"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Building2 } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            RecruitExe
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-white hover:text-purple-300 transition-colors">
              Features
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-purple-300">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Building2 className="w-4 h-4 mr-2" />
              Start Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/10">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-white hover:text-purple-300 transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-white hover:text-purple-300 transition-colors">
                Features
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <Button variant="ghost" className="text-white hover:text-purple-300 justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white justify-start">
                  <Building2 className="w-4 h-4 mr-2" />
                  Start Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
