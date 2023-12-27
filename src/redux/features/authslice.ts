import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import authService from '../../services/auth';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(loginRequest());

    try {
      const token = await authService.login(data); // Example service method for authentication
      dispatch(loginSuccess(token));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export default authSlice.reducer;
