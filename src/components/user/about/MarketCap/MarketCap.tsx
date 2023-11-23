import Image from "next/image";
import styles from "./MarketCap.module.css";

import bitcoin from "../../../../assets/Bitcoins/Bitcoin-3.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import numeral from "numeral";
import { ICrypto } from "@/src/models/tokens";
import { GET_CRYPTO, NUMBER_FORMAT } from "@/src/utils/constants";

async function fetchCrypto() {
  const res = await axios.get("http://localhost:3000/tokens/");
  const response = res.data.slice(0, 3);
  return response;
}

const MarketCap = () => {
  const { t } = useTranslation("statistic");
  const { data, isError, isLoading, error } = useQuery(
    [GET_CRYPTO],
    fetchCrypto,
    {
      refetchInterval: 60000,
    }
  );

  if (isLoading) return <h2>Loading...</h2>;
  if (isError)
    return (
      <>
        <h2>Something went wrong...</h2>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <div className={styles.market}>
      <h2>{t("market")}</h2>
      {data.map((coin: ICrypto) => (
        <div key={coin.id} className={styles.singleCoin}>
          <Image src={bitcoin} alt="bitcoin" />
          <div>
            <p>{coin.name}</p>
            <span>
              ${numeral(coin.tokenStat.market_cap).format(NUMBER_FORMAT)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketCap;
