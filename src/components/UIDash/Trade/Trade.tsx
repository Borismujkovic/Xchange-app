import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Trade.module.css";
import { Select } from "antd";
import bitcoin from "../../../assets/BitcoinValue.svg";
import { FiArrowDownRight, FiArrowUpLeft } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Api from "@/src/api/real-api";
import numeral from "numeral";
import { GET_USER_WALLETS, NUMBER_FORMAT } from "@/src/utils/constants";
import { priceHandler } from "@/src/utils/utils";

const { Option } = Select;

const TradeCrypto = () => {
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(null);

  const { t } = useTranslation("trade");

  const token = getCookie("jwt");

  const { data, isLoading, isError, error } = useQuery(
    [GET_USER_WALLETS],
    () => Api.fetchWallets(token),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );

  useEffect(() => {
    setPrice(priceHandler(Number(amount), value));
  }, [amount]);

  if (isLoading)
    return (
      <div className={styles.history}>
        <h2>TRADE...</h2>
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

  const handleSelectChange = (value: any) => {
    setAmount(0);
    const walletValue = value && JSON.parse(value.value);
    setValue(walletValue);
  };

  const selectedWalletOptions: React.ReactNode[] = data.map((option) => (
    <Option
      key={option.id}
      value={JSON.stringify(option)}
      label={`${option.amount} ${option.token.symbol}`}
    >
      {`${option.amount} ${option.token.symbol}`}
    </Option>
  ));

  return (
    <>
      <div className={styles.trade}>
        <div className={styles.headline}>
          <h2>{t("trade")}</h2>
          <div className={styles.choseBTC}>
            <Image src={bitcoin} alt="bitcoin" />
            <Select
              defaultValue={0}
              style={{ width: 120 }}
              onChange={handleSelectChange}
              labelInValue={true}
            >
              {selectedWalletOptions}
            </Select>
          </div>
        </div>
        <div className={styles.input}>
          <h3>
            {t("amount")} {value?.token.symbol}
          </h3>
          <input
            type="number"
            placeholder="0.00"
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            max={value ? Number(value?.amount) : 0}
            min="1"
            value={amount ?? 0}
          />
        </div>
        <div className={styles.input}>
          <h3>{t("price")} BPL</h3>
          <h4>${numeral(price?.toFixed(2)).format(NUMBER_FORMAT) ?? 0}</h4>
        </div>
        <div className={styles.input}>
          <h3>Total BPL</h3>
          <h4>${numeral(price?.toFixed(2)).format(NUMBER_FORMAT) ?? 0}</h4>
        </div>
        <div className="buttons">
          <button className={styles.buy}>
            <div>
              <span>{t("buy")}</span>
              <FiArrowDownRight />
            </div>
          </button>
          <button className={styles.sell}>
            <div>
              <span>{t("sell")}</span>
              <FiArrowUpLeft />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default TradeCrypto;
