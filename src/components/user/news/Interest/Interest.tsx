import Image from "next/image";

import styles from "./Interest.module.css";

import bitcoin from "../../../../assets/Bitcoins/Bitcoin-3.svg";
import litecoin from "../../../../assets/Bitcoins/LiteCoin-3.svg";
import bank from "../../../../assets/Bitcoins/bank.svg";
import gold from "../../../../assets/Bitcoins/gold.svg";
import etherium from "../../../../assets/Bitcoins/Etherium-1.svg";
import monero from "../../../../assets/Bitcoins/Monero-2.svg";
import useTranslation from "next-translate/useTranslation";

const Interest = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.interest}>
      <h2>{t("interest")}</h2>
      <div>
        <Image src={etherium} alt="etherium" />
        <Image src={bitcoin} alt="bitcoin" />
        <Image src={gold} alt="gold" />
        <Image src={litecoin} alt="litecoin" />
        <Image src={monero} alt="monero" />
        <Image src={bank} alt="bank" />
      </div>
    </div>
  );
};

export default Interest;
