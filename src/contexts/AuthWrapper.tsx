'use client';

import { useAuth } from '../app/hooks/useAuth'; 
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/login') {
      router.push('/login');
    }
  }, [isAuthenticated, pathname, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isClient || (!isAuthenticated && pathname !== '/login')) {
    return null; 
  }

  return <>{children}</>;
}
