export interface SuccessResponse<T> {
    data: T;
    message: string;
    status: boolean;
  }