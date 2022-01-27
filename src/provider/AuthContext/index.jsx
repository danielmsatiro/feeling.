import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../../services/api";

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
    const accessToken = localStorage.getItem("@Feeling: accessToken");
    const user = localStorage.getItem("@Feeling: user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {};
  });

  // const signIn = useCallback(async ({ email, password }) => {
  //   const response = await api.post("login/", { email, password });

  //   const { accessToken, user } = response.data;

  //   localStorage.setItem("@Doit: accessToken", accessToken);
  //   localStorage.setItem("@Doit: user", JSON.stringify(user));

  //   setData({ accessToken, user });
  // }, []);

  const signIn = ({ info }) => {
    api
      .post("/login", info)
      .then((response) => {
        const { accessToken, user } = response.data;
        setData({ accessToken, user });
        localStorage.setItem("@Feeling: accessToken", accessToken);
        localStorage.setItem("@Feeling: user", JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

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
