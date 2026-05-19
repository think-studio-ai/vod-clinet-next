import { getTranslations } from "next-intl/server";

export default async function RegisterPage() {
  const t = await getTranslations("auth");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-1">{t("registerTitle")}</h1>
        <p className="text-gray-500 mb-6 text-sm">{t("registerSubtitle")}</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t("email")}</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t("password")}</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t("confirmPassword")}</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium">
            {t("register")}
          </button>

          <p className="text-center text-sm text-gray-500">
            {t("hasAccount")}{" "}
            <a href="/login" className="font-medium text-zinc-900 hover:underline">
              {t("login")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
