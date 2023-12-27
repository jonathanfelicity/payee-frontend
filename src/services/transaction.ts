import { Paginate, SuccessResponse } from "interfaces";
import { Transaction } from "interfaces/career.interface";
import request from "./request";

const transactionServices = {
  getAll: (params?: any): Promise<Paginate<Transaction>> =>
    request.get(`/rest/careers/paginate`, { params }),
  getById: (id: number, params?: any): Promise<SuccessResponse<ICareer>> =>
    request.get(`/rest/careers/${id}`, { params }),
};

export default transactionServices;
