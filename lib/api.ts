import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


// interceptor to handle 401 errors and redirect to login :------
let isRedirecting = false;

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      console.warn("Unauthorized");

      if (typeof window !== "undefined") {
        isRedirecting = true;
        window.location.href = "/login";
      }
    }

    console.error("API Error:", error);
    return Promise.reject(error);
  }
);