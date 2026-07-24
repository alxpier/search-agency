"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  {
    title: "Expertises",
    href: "/expertises",
    submenu: [
      { title: "SEO Technique", href: "/expertises/seo" },
      { title: "GEO / IA", href: "/expertises/geo" },
      { title: "Création de sites", href: "/expertises/sites-web" },
    ],
  },
  {
    title: "Secteurs",
    href: "/secteurs",
    submenu: [
      { title: "Experts-comptables", href: "/secteurs/expert-comptable" },
      { title: "Architectes", href: "/secteurs/architecte" },
      { title: "Vétérinaires", href: "/secteurs/veterinaire" },
    ],
  },
  { title: "Méthode", href: "/methode" },
  { title: "Études de cas", href: "/cas" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-10 py-8 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kobi-logo.png"
            alt="Kobi Engine"
            width={40}
            height={40}
            className="rounded-full object-cover border border-white/10"
          />
          <span className="text-sm tracking-[0.15em] uppercase font-bold">
            Kobi Engine
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-12 items-center">
          {menuItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link
                href={item.href}
                className="text-xs tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
              >
                {item.title}
                {item.submenu && <ChevronDown size={12} />}
              </Link>

              {item.submenu && (
                <div className="absolute top-full right-0 pt-4 hidden group-hover:block w-56">
                  <div className="bg-[#0a0a0a] border border-white/10 p-5 flex flex-col gap-5">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className="text-[11px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 -m-2 text-white opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-10 pt-24 pb-10">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-10 p-2 -m-2 text-white opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>

          <nav className="flex flex-col gap-8">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <div>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="text-xs tracking-[0.2em] uppercase text-white opacity-60 hover:opacity-100 transition-opacity block mb-4"
                    >
                      {item.title}
                    </Link>
                    <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={closeMenu}
                          className="text-[11px] tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-xs tracking-[0.2em] uppercase text-white opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}