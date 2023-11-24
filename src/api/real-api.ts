import axios from "axios";
import { CookieValueTypes, getCookie, setCookie } from "cookies-next";
import { User } from "next-auth";
import { IUsers } from "../models/user";
import { IStatistic } from "../models/statistics";
import { ICrypto } from "../models/tokens";
import { IWallet } from "../models/wallet";
import { ITransactions } from "../models/transactions";
import { sortedTokensHandler } from "../utils/utils";
import { useRouter } from "next/router";

const apiUrl = 'http://localhost:3000' || "";

type FetchTransactionsParams = {
  page: number;
  limit: number;
};

class Api {
  private authorizationToken: string;

  constructor() {
    this.authorizationToken = (getCookie("jwt") as string) ?? "";
    this.getToken = this.getToken.bind(this);
  }

  private getToken = () => {
    return `Bearer ${this.authorizationToken}`;
  };

  public setToken = (token: string) => {
    this.authorizationToken = token;
  };

  public hasToken = () => {
    return !!this.authorizationToken;
  };

  public getUserData = async (): Promise<User> => {
    const { data } = await axios.get(`http://localhost:3000/auth/users/me`, {
      headers: {
        Authorization: this.getToken(),
      },
    });
    return data;
  };

  public signIn = async (email: string, password: string) => {
    const response = await axios.post(`${apiUrl}/auth/signin`, {
      email,
      password,
    });
    setCookie("jwt", response.data);
  }

  public signUp = async (data: IUsers) => {
    await axios.post(`${apiUrl}/api/auth/register`, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  }

  public fetchTransactions = async (
    { page, limit }: FetchTransactionsParams,
    token: CookieValueTypes
  ): Promise<ITransactions[]> => {
    const res = await axios.get(`${apiUrl}/history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        limit,
      },
    });

    return res.data;
  }

  public fetchCrypto = async (): Promise<ICrypto[]> => {
    const res = await axios.get(`${apiUrl}/tokens/`);
    return res.data;
  }

  public fetchOffers = async (): Promise<ICrypto[]> => {
    const res = await axios.get(`${apiUrl}/api/offer`);
    return res.data;
  }

  public fetchCryptoFrequency = async (period: string): Promise<ICrypto[]> => {
    const res = await axios.get(`${apiUrl}/tokens/`);
    const data = sortedTokensHandler(res.data, period);
    return data;
  }

  public fetchWallets = async (token: CookieValueTypes): Promise<IWallet[]> => {
    const res = await axios.get(`${apiUrl}/wallet`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }
}

export default new Api();
