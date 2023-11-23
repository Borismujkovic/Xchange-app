import Image from "next/image";
import styles from "./History.module.css";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import useTranslation from "next-translate/useTranslation";
import { getCookie } from "cookies-next";
import Api from "@/src/api/real-api";
import { GET_TRANSACTIONS } from "@/src/utils/constants";

const History = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation("common");

  const token = getCookie("jwt");

  const { data, isLoading, isError, error } = useQuery(
    [GET_TRANSACTIONS, { page, limit: 3 }],
    () => Api.fetchTransactions({ page, limit: 3 }, token),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (isLoading)
    return (
      <div className={styles.history}>
        <h2>HISTORY...</h2>
        <h2>Loading...</h2>
      </div>
    );
  if (isError)
    return (
      <>
        <h2>Something went wrong...</h2>
        <p>{error.toString()}</p>
      </>
    );

  const getActivityClass = (activity: number): string => {
    if (activity > 0) {
      return styles.positive;
    } else if (activity < 0) {
      return styles.negative;
    }
  };

  return (
    <div className={styles.history}>
      <h2>{t("history")}</h2>
      {data.map((token) => (
        <div className={styles.singleBtc} key={token.id}>
          {/* <Image src={token.image} width={40} height={40} alt={token.name} /> */}
          <div>
            <h2>{token.token.name}</h2>
            <span className={styles.date}>
              {DateTime.fromISO(token.created_at).toFormat("yyyy-MM-dd")}
            </span>
            <p className={getActivityClass(token.amount)}>{token.amount}$</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
      ))}
      <div className={styles.pag}>
        <button disabled={page === 1} onClick={prevPage}>
          {t("prev")}
        </button>
        <button disabled={page > 1} onClick={nextPage}>
          {t("next")}
        </button>
      </div>
    </div>
  );
};

export default History;
