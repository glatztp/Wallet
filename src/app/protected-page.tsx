"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ProtectedPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login"); 
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Protected Content</h1>
      <p>This content is only available to authenticated users!</p>
    </div>
  );
}
