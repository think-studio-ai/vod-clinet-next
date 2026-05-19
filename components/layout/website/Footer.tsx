import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");
  const locale = await getLocale();

  const quickLinks = [
    { label: "nav.home", href: `/${locale}` },
    { label: "products.pageTitle", href: `/${locale}/products` },
    { label: "nav.about", href: `/${locale}/about` },
    { label: "nav.contact", href: `/${locale}/contact` },
  ];

  const tNav = await getTranslations();

  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t("storeName")}</h2>
            <p className="text-sm leading-7 text-gray-600">
              {t("storeDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("quickLinks")}</h3>
            <ul className="space-y-3 text-gray-600">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-black">
                    {tNav(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {tNav("contact.title")}
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>Email: support@mystore.com</p>
              <p>Phone: +20 123 456 789</p>
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;