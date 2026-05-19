"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authApi } from "@/services/auth";

export default function RegisterPage() {
  const t = useTranslations("auth");

  const locale = useLocale();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");

      return;
    }

    try {
      setLoading(true);

      const response = await authApi.register({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      });

      toast.success(response.message);

      router.push(`/${locale}/login`);

    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Register failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        
        <h1 className="mb-1 text-2xl font-bold text-zinc-900">
          {t("registerTitle")}
        </h1>

        <p className="mb-6 text-sm text-zinc-500">
          {t("registerSubtitle")}
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >
          {/* First Name */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              First Name
            </label>

            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Last Name
            </label>

            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
              required
            />
          </div>

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
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              {t("confirmPassword")}
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
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
            {loading ? "Loading..." : t("register")}
          </button>

          {/* Login */}
          <p className="text-center text-sm text-zinc-500">
            {t("hasAccount")}{" "}
            <Link
              href={`/${locale}/login`}
              className="font-medium text-zinc-900 hover:underline"
            >
              {t("login")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}