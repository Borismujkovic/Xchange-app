import { ICrypto } from "../models/tokens";

export const DUMMY_TOKENS: ICrypto[] = [
  {
    id: 1,
    name: "Bitocin",
    symbol: "BTC",
    icon: "Bitocin",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 11,
      created_at: new Date(),
      updated_at: new Date(),
      price: "1000.55",
      change_24h: "0.02",
      change_7d: "0.05",
      market_cap: "75757144834",
      volume: "75757144834",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: "Ethereum",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 12,
      created_at: new Date(),
      updated_at: new Date(),
      price: "2796.60",
      change_24h: "-3.33",
      change_7d: "0.12",
      market_cap: "3575714481",
      volume: "25757144834",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },
  },
  {
    id: 3,
    name: "Cardano",
    symbol: "ADA",
    icon: "Cardano",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 13,
      created_at: new Date(),
      updated_at: new Date(),
      price: "1.0988",
      change_24h: "0.01",
      change_7d: "0.15",
      market_cap: "1235661234",
      volume: "1657843453",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },
  },
  {
    id: 4,
    name: "Litecoin",
    symbol: "LTC",
    icon: "Litecoin",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 14,
      created_at: new Date(),
      updated_at: new Date(),
      price: "40796.55",
      change_24h: "0.02",
      change_7d: "-0.09",
      market_cap: "5235661234",
      volume: "4657843453",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },

  },
  {
    id: 5,
    name: "Tether",
    symbol: "USDT",
    icon: "Tether",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 15,
      created_at: new Date(),
      updated_at: new Date(),
      price: "1.00",
      change_24h: "0.01",
      change_7d: "-0.02",
      market_cap: "82840025138",
      volume: "2002892445",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },
  },
  {
    id: 6,
    name: "BNB",
    symbol: "BNB",
    icon: "BNB",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 16,
      created_at: new Date(),
      updated_at: new Date(),
      price: "310.96",
      change_24h: "2.42",
      change_7d: "-0.05",
      market_cap: "48465380102",
      volume: "422662292",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },
  },
  {
    id: 7,
    name: "XRP",
    symbol: "XRP",
    icon: "XRP",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 17,
      created_at: new Date(),
      updated_at: new Date(),
      price: "0.4216",
      change_24h: "-0.51",
      change_7d: "4.23",
      market_cap: "221857275",
      volume: "175489024",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },
  },
  {
    id: 8,
    name: "TRON",
    symbol: "TRX",
    icon: "TRON",
    created_at: new Date(),
    updated_at: new Date(),
    tokenStat: {
      id: 18,
      created_at: new Date(),
      updated_at: new Date(),
      price: "0.07209",
      change_24h: "0.04",
      change_7d: "1.50",
      market_cap: "11732642",
      volume: "1828534",
      high_24h: 1235,
      low_24h: 123561,
      volume_24h: 12355,
      price_24h: 12356
    },
  },
];


export const DUMMY_CURRENCIES = ["GBP", "USD", "RUB", "RSD", "EUR"];

export const DUMMY_OFFERS = [{
  id: 1,
  user: 'boris@test.com',
  from: '100 USD',
  to: '10000 RSD'
},
{
  id: 2,
  user: 'Valentina@test.com',
  from: '60 RUB',
  to: '7180 RSD'
},
{
  id: 3,
  user: 'Zlatko@test.com',
  from: '20 EUR',
  to: '2360 RSD'
},
{
  id: 4,
  user: 'Marko@test.com',
  from: '500 USD',
  to: '4570 EUR'
},
{
  id: 5,
  user: 'Janjus@test.com',
  from: '200 EUR',
  to: '23600 RSD'
},
{
  id: 6,
  user: 'Milica@test.com',
  from: '1000 USD',
  to: '100000 RSD'
},
{
  id: 7,
  user: 'Maria@test.com',
  from: '10 EUR',
  to: '1000 RUB'
},
{
  id: 8,
  user: 'Agneska@test.com',
  from: '150 RUB',
  to: '5200 RSD'
}]