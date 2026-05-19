"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Home, Building2, Info, Mail, LogOut, Store } from "lucide-react";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { name: t("home"), href: `/${locale}`, icon: Home },
    { name: t("property"), href: `/${locale}/property`, icon: Building2 },
    { name: t("about"), href: `/${locale}/about`, icon: Info },
    { name: t("contact"), href: `/${locale}/contact`, icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-md">
            <Store size={18} />
          </div>
          <span className="text-lg font-semibold text-zinc-900">
            {t("storeName")}
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <item.icon size={16} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 transition">
            <LogOut size={16} />
            {t("logout")}
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;