export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  walletId?: string;
}

export interface LoginCredentials {
  email?: string;
  password: string;
}

export interface SignUpCredentials extends LoginCredentials {
  // walletReference: string;
  firstName: string;
  middleName: string;
  lastName: string;
  bvn: {
    bvn: string; //THIS VALUE IS UNIQUE 11 digits
    bvnDateOfBirth: string;
  };
  phoneNumber: string;
  gender: "male" | "female";
  passwordConfirmation: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    access_token: string;
    user: IUser;
  };
}

export interface IUserWallet {
  uuid: string;
  price: number;
  symbol: string;
}

export interface VerifyCredentials {
  verifyId?: string;
  verifyCode?: string;
}
