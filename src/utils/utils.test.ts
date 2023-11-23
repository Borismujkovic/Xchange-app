import { ICrypto } from "../models/tokens";
import { priceHandler, sortedTokensHandler } from "./utils";

describe("priceHandler", () => {
  it("should calculate the correct price when value is provided", () => {
    const amount = 5;
    const value = {
      tokenStat: {
        price: '10',
        change_24h: '0.93',
        change_7d: '0.65',
        created_at: new Date(),
        id: 1,
        market_cap: '15902938010.12',
        updated_at: new Date(),
        volume: '12908987654.10',
        price_24h: 11498728.23,
        low_24h: 30190.00,
        high_24h: 31045.78,
        volume_24h: 1.00
      },
      created_at: new Date(),
      icon: "Bitcoin",
      id: 1,
      name: "Bitcoin",
      symbol: "Bitcoin",
      updated_at: new Date(),
    };

    const result = priceHandler(amount, value);

    expect(result).toBe(50);
  });
});

describe("sortedTokensHandler", () => {
  const mockData = [
    { id: 1, tokenStat: { change_24h: 5, change_7d: 10 } },
    { id: 2, tokenStat: { change_24h: 10, change_7d: 15 } },
    { id: 3, tokenStat: { change_24h: 2, change_7d: 5 } },
    { id: 4, tokenStat: { change_24h: 4, change_7d: 6 } },
    { id: 5, tokenStat: { change_24h: 1, change_7d: 8 } },
  ];

  it('should sort and return the top 5 tokens based on change_24h when period is "Daily"', () => {
    const period = "Daily";

    const result = sortedTokensHandler(mockData, period);

    expect(result).toHaveLength(5);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(4);
    expect(result[3].id).toBe(3);
    expect(result[4].id).toBe(5);
  });

  it('should sort and return the top 5 tokens based on change_7d when period is "Weekly"', () => {
    const period = "Weekly";

    const result = sortedTokensHandler(mockData, period);

    expect(result).toHaveLength(5);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(5);
    expect(result[3].id).toBe(4);
    expect(result[4].id).toBe(3);
  });

  it("should return an empty array when data is empty", () => {
    const period = "Daily";
    const emptyData: ICrypto[] = [];

    const result = sortedTokensHandler(emptyData, period);

    expect(result).toEqual([]);
  });
});
