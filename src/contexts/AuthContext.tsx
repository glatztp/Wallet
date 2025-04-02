"use client"; // Certifique-se de que este código é executado no cliente

import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

// Defina o tipo para o contexto de autenticação
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

// Crie o contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para acessar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Componente AuthProvider que encapsula os componentes filhos com o contexto de autenticação
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulando uma verificação de autenticação ao carregar
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth") === "true"; // Verifique se a autenticação está salva
    setIsAuthenticated(isLoggedIn);
    setLoading(false);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true"); // Salve no localStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth"); // Remova do localStorage ao fazer logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
