import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLogin = localStorage.getItem("IS_LOGIN");

  return isLogin ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;