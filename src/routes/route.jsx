import { Route as Ruta } from "react-router-dom";

export const Route = ({ component: Component, ...rest }) => {
  return (
    <Ruta {...rest}>
      <Component />
    </Ruta>
  );
};
