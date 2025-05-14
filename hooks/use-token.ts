"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;
}

export default function useToken() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.push("/auth/login");
      return;
    }

    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      Cookies.remove("token");
      router.push("/auth/login");
      return;
    }

    const interval = setInterval(() => {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/auth/login");
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [router]);
}
