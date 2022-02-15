import { useEffect } from "react";
import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../provider/AuthContext";
import jwt_decode from "jwt-decode";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { accessToken, signOut } = useAuth();

  const checkToken = () => {
    const decodedToken = jwt_decode(accessToken);
    if (decodedToken.exp * 1000 < new Date().getTime()) signOut();
  };

  useEffect(() => {
    if (!!accessToken) {
      //JWT check if token expired
      checkToken();
      setTimeout(
        () => checkToken(),
        jwt_decode(accessToken).exp * 1000 - new Date().getTime()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
