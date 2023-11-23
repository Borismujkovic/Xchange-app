import { ICrypto } from "./tokens";
import { IUsers } from "./user";

export interface ITransactions {
  amount: number;
  created_at: string;
  id: number;
  message: string;
  token: ICrypto;
  updated_at: string;
  user: IUsers;
}
