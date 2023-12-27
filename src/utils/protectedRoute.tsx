import { useContext } from "react";
import { AuthContext } from "../context/auth/auth.context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(AuthContext);
  if (!state.isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
