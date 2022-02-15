import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useToast } from "@chakra-ui/react";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const toast = useToast();

  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@Feeling: accessToken");
    const user = localStorage.getItem("@Feeling: user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("login", { email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("@Feeling: accessToken", accessToken);
      localStorage.setItem("@Feeling: user", JSON.stringify(user));

      setData({ accessToken, user });
      toast({
        title: "Welcome!",
        description: "Se motive a cada dia!",
        status: "success",
        duration: 3000,
        position: "top-right",
      });
    } catch (err) {
      toast({
        title: "Algo deu errado",
        description: `Opa, algo de errado não está certo`,
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const signUp = async ({ name, email, password }) => {
    try {
      const response = await api.post("register", { name, email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("@Feeling: accessToken", accessToken);
      localStorage.setItem("@Feeling: user", JSON.stringify(user));

      setData({ accessToken, user });
      toast({
        title: "Conta Criada",
        description: "Tudo pronto para você se inspirar!",
        status: "success",
        duration: 3000,
        position: "top-right",
      });
    } catch (err) {
      toast({
        title: "Algo deu errado",
        description: `Opa, algo de errado não está certo`,
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    }
  };

  const signOut = () => {
    localStorage.removeItem("@Feeling: accessToken");
    localStorage.removeItem("@Feeling: user");
    localStorage.removeItem("@Feeling: randomId");

    setData({});
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    try {
      const response = await api.get(`users`);
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signUp,
        signOut,
        users,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
