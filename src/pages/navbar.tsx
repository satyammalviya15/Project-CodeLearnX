"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { SearchButton } from "../components/SearchButton";
import { NewNavigationMenu } from "../components/NewNavigationMenu";
import CLinvert from "../../public/CLInvert.png";
import { createPortal } from "react-dom";

export default function Navbar() {
  const SidebarSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="space-y-2">
      <h3 className="text-left text-gray-500 uppercase text-sm font-medium">
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="bg-white text-black px-3 py-2 rounded hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              ☰
            </button>
            <img src={CLinvert} alt="logo" height={30} width={30} />
            <span className="text-xl font-bold">CodeLearn</span>
          </div>

          <div className="hidden md:block">
            <NewNavigationMenu />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <SearchButton />
            <Button asChild variant="outline" size="lg" className="px-8">
              <a href="/sign-up">Get Started</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <SearchButton />
          </div>
        </div>
      </header>

      {/* Overlay & Sidebar Portal */}
      {createPortal(
        <>
          {/* Overlay */}
          <div
            onClick={closeSidebar}
            className={`fixed inset-0 z-[999] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-50 visible" : "opacity-0 invisible"
            }`}
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 z-[1000] h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out p-6 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-2 right-0 text-2xl text-black hover:border-none focus:outline-none"
              onClick={closeSidebar}
            >
              &times;
            </button>
            <nav className="space-y-4 overflow-y-auto max-h-full scrollbar-hidden">
              <SidebarSection title="Main">
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Profile
                </a>
              </SidebarSection>

              <hr />

              <SidebarSection title="About Section">
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Careers
                </a>
              </SidebarSection>

              <hr />

              <SidebarSection title="Services">
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Consulting
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Development
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Design
                </a>
              </SidebarSection>

              <hr />

              <SidebarSection title="Contact">
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Feedback
                </a>
              </SidebarSection>

              <hr />

              <SidebarSection title="Legal">
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-800 hover:text-blue-600"
                >
                  Terms of Service
                </a>
              </SidebarSection>
            </nav>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
