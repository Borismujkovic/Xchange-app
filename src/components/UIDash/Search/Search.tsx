import { useState } from "react";
import Image from "next/image";
import styles from "./Search.module.css";

import searchImg from "../../../assets/SearchImg.svg";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Api from "@/src/api/real-api";
import { GET_CRYPTO } from "@/src/utils/constants";

const SearchCrypto = () => {
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);

  const { data, isLoading, isError, error, refetch } = useQuery(
    [GET_CRYPTO],
    Api.fetchCrypto
  );
  if (isLoading)
    return (
      <div className={styles.history}>
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

  const searchHandler = (input: string) => {
    const _crypto: string[] = [];
    data.filter((token: any) => {
      if (token.name.toLowerCase().includes(input.toLowerCase())) {
        _crypto.push(token.name);
      }
    });
    setCrypto(_crypto);
  };

  const searchedCryptos = crypto.map((token, index) => (
    <Link href="" key={index}>
      <li>{token}</li>
    </Link>
  ));

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search BTC/ETH"
        onChange={(e) => {
          setSearch(e.target.value), searchHandler(e.target.value);
        }}
      />
      {search ? (
        <ul>{searchedCryptos}</ul>
      ) : (
        <Image
          src={searchImg}
          alt="searchImg"
          className={styles.img}
          priority={true}
        />
      )}
    </div>
  );
};

export default SearchCrypto;
