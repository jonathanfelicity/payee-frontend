import React, {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";
import {
  LoginCredentials,
  LoginResponse,
} from "../../interfaces/user.interface";
import authService from "../../services/auth";
import { removeCookie, setCookie } from "../../utils/session";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  loginResponse: LoginResponse | null; // Include the login response here
}

type Action =
  | { type: "LOGIN_REQUEST" }
  | { type: "LOGIN_SUCCESS"; payload: LoginResponse }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" };

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<Action>;
  handleLogin: (values: LoginCredentials) => Promise<void>;
  handleLogout: () => void;
}>({
  state: {
    isAuthenticated: false,
    token: null,
    loginResponse: null,
  },
  dispatch: () => {},
  handleLogin: async () => {},
  handleLogout: () => {},
});

const setAuthDataToLocalStorage = (authData: AuthState | null) => {
  if (authData) {
    localStorage.setItem("authData", JSON.stringify(authData));
  } else {
    localStorage.removeItem("authData");
  }
};

const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loginResponse: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.access_token,
        loginResponse: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loginResponse: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loginResponse: null,
      };
    default:
      throw new Error("Unhandled action");
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const storedAuthData = localStorage.getItem("authData");
  const initialState: AuthState = storedAuthData
    ? JSON.parse(storedAuthData)
    : {
        isAuthenticated: false,
        token: null,
        loginResponse: null,
      };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleLogin = async (values: LoginCredentials): Promise<void> => {
    try {
      dispatch({ type: "LOGIN_REQUEST" });

      const user = await authService.login(values);

      if (user.success) {
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        setCookie("token", user.data.access_token);
        setAuthDataToLocalStorage({
          isAuthenticated: true,
          token: user.data.access_token,
          loginResponse: user,
        });
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
        setAuthDataToLocalStorage(null);
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setAuthDataToLocalStorage(null);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    removeCookie("token");
    setAuthDataToLocalStorage(null);
  };

  useEffect(() => {
    setAuthDataToLocalStorage(state);
  }, [state]);

  return (
    <AuthContext.Provider
      value={{ state, dispatch, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
