"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDown, Globe } from "lucide-react";

const locales = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" }
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;

    const newPath = segments.join("/");

    router.push(newPath);
    router.refresh();
    setOpen(false);
  };

  const current = locales.find(l => l.code === currentLocale);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition"
      >
        <Globe size={16} />
        {current?.label}
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl border border-zinc-200 bg-white shadow-lg overflow-hidden z-50">
          {locales.map((locale) => {
            const isActive = locale.code === currentLocale;

            return (
              <button
                key={locale.code}
                onClick={() => changeLanguage(locale.code)}
                className={`w-full px-4 py-2 text-left text-sm transition ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {locale.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Backdrop close */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;