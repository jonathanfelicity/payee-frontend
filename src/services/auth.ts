import {
  LoginCredentials,
  LoginResponse,
  SignUpCredentials,
  VerifyCredentials,
} from "../interfaces/user.interface";
import request from "./request";

const authService = {
  login: (data: LoginCredentials): Promise<LoginResponse> =>
    request.post(`/auth/login`, data),
  signup: (data: SignUpCredentials) => request.post(`/auth/signup`, {}, { params: data }),
  verifyEmail: (data: VerifyCredentials) =>
    request.get("/auth/verify/" + data.verifyId),
  resendVerify: (data: string) =>
    request.post(`/auth/resend-verify`, {}, { params: data }),
  
};

export default authService;
