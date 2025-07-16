"use client";

import { Button } from "../components/ui/button";
import logo from "../../public/CLinvert.png";
import { SearchButton } from "../components/SearchButton";
import { NewNavigationMenu } from "../components/NewNavigationMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" height={30} width={30} />
          <span className="text-xl font-bold">CodeLearn</span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block">
          <NewNavigationMenu />
        </div>

        {/* Search and Get Started button for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <SearchButton />
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href="/sign-up">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button (optional hamburger for later) */}
        <div className="md:hidden flex items-center gap-2">
          {/* You can add a hamburger icon here and open a mobile menu */}
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
