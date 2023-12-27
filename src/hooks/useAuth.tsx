import { useContext } from "react";
import { AuthContext,  } from "../context/auth/auth.context"; // Update with your actual path to AuthContext, AuthState, and Action
// import { LoginCredentials } from "../context/auth/auth.context";
const useAuth = () => {
  const { state, 
    //handleLogin, 
    handleLogout 
} = useContext(AuthContext);

//   const login = async (values: LoginCredentials): Promise<void> => {
//     await handleLogin(values);
//   };

  const logout = () => {
    handleLogout();
  };

  return {
    isAuthenticated: state.isAuthenticated,
    token: state.token,
    error: state.error,
    //login,
    logout,
  };
};

export default useAuth;
