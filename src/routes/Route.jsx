import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../provider/AuthContext";

// true e true = ok
// true e false = n ok
// false e true = n ok
// false e false = ok

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { accessToken } = useAuth();

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
