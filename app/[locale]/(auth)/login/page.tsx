"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authApi } from "@/services/auth";
import { useAuth } from "@/store/AuthContext";

export default function LoginPage() {
  const t = useTranslations("auth");

  const locale = useLocale();

  const router = useRouter();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await authApi.login(formData);

      const user = response.data;

      const token = response.data.api_token;

      login(user, token);

      toast.success(response.message);

      router.push(`/${locale}`);

    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        
        <h1 className="mb-1 text-2xl font-bold text-zinc-900">
          {t("loginTitle")}
        </h1>

        <p className="mb-6 text-sm text-zinc-500">
          {t("loginSubtitle")}
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              {t("email")}
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              {t("password")}
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Loading..." : t("login")}
          </button>

          {/* Register */}
          <p className="text-center text-sm text-zinc-500">
            {t("noAccount")}{" "}
            <Link
              href={`/${locale}/register`}
              className="font-medium text-zinc-900 hover:underline"
            >
              {t("register")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}