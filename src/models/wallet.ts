import { IStatistic } from "./statistics";
import { ICrypto } from "./tokens";
import { IUsers } from "./user";

export interface IWallet {
  created_at: Date;
  updated_at: Date;
  id: number;
  amount: number;
  user: IUsers;
  token: ICrypto;
  tokenStat: IStatistic;
}