import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 text-center border-b">
        <h1 className="text-5xl font-bold mb-4">{t("hero.title")}</h1>

        <p className="text-lg text-gray-600 mb-6">{t("hero.subtitle")}</p>

        <button className="px-6 py-3 rounded-lg bg-black text-white">
          {t("hero.cta")}
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">
            {t("features.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                {t("features.delivery.title")}
              </h3>
              <p className="text-gray-600">{t("features.delivery.description")}</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                {t("features.quality.title")}
              </h3>
              <p className="text-gray-600">{t("features.quality.description")}</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                {t("features.payment.title")}
              </h3>
              <p className="text-gray-600">{t("features.payment.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">
            {t("products.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["one", "two", "three"] as const).map((key) => (
              <div key={key} className="border rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {t(`products.${key}`)}
                </h3>

                <p className="text-gray-600 mb-4">{t("products.description")}</p>

                <button className="px-4 py-2 bg-black text-white rounded-lg">
                  {t("products.viewProduct")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-gray-600 leading-8">{t("about.description")}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("contact.title")}</h2>

          <p className="text-gray-600 mb-6">{t("contact.description")}</p>

          <button className="px-6 py-3 rounded-lg bg-black text-white">
            {t("contact.cta")}
          </button>
        </div>
      </section>
    </div>
  );
}