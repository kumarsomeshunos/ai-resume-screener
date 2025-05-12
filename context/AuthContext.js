"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { usePathname } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const pathname = usePathname();

  // Re-check token on every route change
  useEffect(() => {
    const cookieToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    if (cookieToken && cookieToken !== token) {
      try {
        const decoded = jwtDecode(cookieToken);
        setRole(decoded?.role || null);
        setToken(cookieToken);
      } catch {
        setRole(null);
        setToken(null);
      }
    }
  }, [pathname]); // <-- run this every time route changes

  return (
    <AuthContext.Provider value={{ role, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);