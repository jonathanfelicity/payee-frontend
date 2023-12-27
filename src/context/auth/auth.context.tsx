import React, {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";
import { LoginCredentials } from "../../interfaces/user.interface";
import authService from "../../services/auth";
import { removeCookie, setCookie } from "../../utils/session";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
}

type Action =
  | { type: "LOGIN_REQUEST" }
  | { type: "LOGIN_SUCCESS"; payload: any }
  | { type: "LOGIN_FAILURE"; payload: any }
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
    error: null,
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
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload as string,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
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
        error: null,
      };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleLogin = async (values: LoginCredentials): Promise<void> => {
    try {
      dispatch({ type: "LOGIN_REQUEST" });

      const user = await authService.login(values);
      console.log(user);
      if(user.success){
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        setCookie("token", user.data.access_token);
        setAuthDataToLocalStorage({
          isAuthenticated: true,
          token: user.data.access_token,
          error: null,
        })
      }
    } catch (error:any) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message as string });
      setAuthDataToLocalStorage({
        isAuthenticated: false,
        token: null,
        error: error.message as string,
      });
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


