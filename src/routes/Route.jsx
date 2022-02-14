import { useEffect } from "react";
import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../provider/AuthContext";
import jwt_decode from "jwt-decode";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { accessToken, signOut } = useAuth();

  useEffect(() => {
    //JWT check if token expired
    if (!!accessToken) {
      const decodedToken = jwt_decode(accessToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) signOut();
      console.log(
        "Faltam",
        "\n",
        (jwt_decode(accessToken).exp * 1000 - new Date().getTime()) / 1000,
        "segundos"
      );
    }
  }, []);

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
