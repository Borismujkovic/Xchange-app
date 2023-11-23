import Image from "next/image";
import styles from "./Suggestions.module.css";

import bitcoin from "../../../../assets/Bitcoin-3.svg";
import useTranslation from "next-translate/useTranslation";

const BITCOINS = [
  {
    id: "bc",
    name: "Bitcoin",
    social: "4 mutual friends",
    image: bitcoin,
  },
  {
    id: "lc",
    name: "Litecoin",
    social: "4 mutual friends",
    image: bitcoin,
  },
  {
    id: "eth",
    name: "Etherium",
    social: "4 mutual friends",
    image: bitcoin,
  },
];

const Suggestions = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.market}>
      <h2>{t("suggestions")}</h2>
      {BITCOINS.map((coin) => (
        <div key={coin.id} className={styles.singleCoin}>
          <Image src={coin.image} alt="bitcoin" />
          <div>
            <p>{coin.name}</p>
            <span>4 {t("mutual")}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
