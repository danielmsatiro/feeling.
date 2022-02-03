import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../../services/api";
import { toast, useToast } from "@chakra-ui/react";
import { useComments } from "../CommentsProvider";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const toast = useToast()
  
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@Feeling: accessToken");
    const user = localStorage.getItem("@Feeling: user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {};
  });
  const signIn = useCallback(async ({ email, password }) => {
    try{
      const response = await api.post("login", { email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("@Feeling: accessToken", accessToken);
      localStorage.setItem("@Feeling: user", JSON.stringify(user));

      setData({ accessToken, user });
      toast({
        title: 'Login Feito!',
        description: "Se motive a cada dia!",
        status: 'success',
        duration: 3000,
        position: 'top-right'
      })
    }catch(err){
      toast({
        title: 'Algo deu errado',
        description: `${err}`,
        status: 'error',
        duration: 3000,
        position: 'top-right'
      })
    }
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    try{
      const response = await api.post("register", { name, email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("@Feeling: accessToken", accessToken);
      localStorage.setItem("@Feeling: user", JSON.stringify(user));

      setData({ accessToken, user });
      toast({
        title: 'Conta Criada',
        description: "Tudo pronto para você se inspirar!",
        status: 'success',
        duration: 3000,
        position: 'top-right'
      })
    } catch(err) {
      toast({
        title: 'Algo deu errado',
        description: `${err}`,
        status: 'error',
        duration: 3000,
        position: 'top-right'
      })
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Feeling: accessToken");
    localStorage.removeItem("@Feeling: user");

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
