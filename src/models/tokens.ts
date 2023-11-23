import { IStatistic } from "./statistics";

export interface ICrypto {
  created_at: Date;
  icon: string;
  id: number;
  name: string;
  symbol: string;
  tokenStat: IStatistic;
  updated_at: Date;
}
