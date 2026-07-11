"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  {
    title: "Expertises",
    href: "/expertise",
    submenu: [
      { title: "GEO & IA", href: "/expertise/geo" },
      { title: "SEO Technique", href: "/expertise/technique" },
      { title: "International", href: "/expertise/international" },
      { title: "SEO Local", href: "/expertise/local" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    submenu: [
      { title: "Accompagnement", href: "/solutions/accompagnement" },
      { title: "Formation SEO", href: "/solutions/formation" },
    ],
  },
  { title: "Simulateur", href: "/simulateur" },
  { title: "Parcours", href: "/parcours" },
  { title: "Le Lab", href: "/lab" },
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
      <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="text-[10px] tracking-[0.2em] uppercase font-bold">
          Alexandre Pierre
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-10 items-center">
          {menuItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link 
                href={item.href}
                className="text-[10px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity flex items-center gap-1"
              >
                {item.title}
                {item.submenu && <ChevronDown size={10} />}
              </Link>

              {item.submenu && (
                <div className="absolute top-full right-0 pt-4 hidden group-hover:block w-48">
                  <div className="bg-[#0a0a0a] border border-white/10 p-4 flex flex-col gap-4">
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub.title} 
                        href={sub.href}
                        className="text-[9px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity"
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
          <Menu size={20} />
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
                      className="text-[10px] tracking-[0.2em] uppercase text-white opacity-60 hover:opacity-100 transition-opacity block mb-4"
                    >
                      {item.title}
                    </Link>
                    <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={closeMenu}
                          className="text-[9px] tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors"
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
                    className="text-[10px] tracking-[0.2em] uppercase text-white opacity-60 hover:opacity-100 transition-opacity"
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