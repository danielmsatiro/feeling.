import { createContext, useCallback, useContext, useState } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@Doit: accessToken");
    const user = localStorage.getItem("@Doit: user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("login/", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@Doit: accessToken", accessToken);
    localStorage.setItem("@Doit: user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    const response = await api.post("register/", { name, email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@Doit: accessToken", accessToken);
    localStorage.setItem("@Doit: user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Doit: accessToken");
    localStorage.removeItem("@Doit: user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
