import { ICrypto } from "../models/tokens";

export function priceHandler(amount: number, value: ICrypto) {
    const sum = amount * Number(value?.tokenStat.price);
    return sum;
};

export const sortedTokensHandler = (data: ICrypto[], period: string) => {
    let sortedTokens: ICrypto[] = [];
    if (period === "Daily") {
        sortedTokens = data
            .sort((a: any, b: any) => b.tokenStat.change_24h - a.tokenStat.change_24h)
            .slice(0, 5);
    } else if (period === "Weekly") {
        sortedTokens = data
            .sort((a: any, b: any) => b.tokenStat.change_7d - a.tokenStat.change_7d)
            .slice(0, 5);
    }
    return sortedTokens;
};

