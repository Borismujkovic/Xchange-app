import Image from "next/image";
import styles from "./LatestNews.module.css";

import bitcoin from "../../../../assets/Bitcoins/Bitcoin-3.svg";
import litecoin from "../../../../assets/Bitcoins/LiteCoin-3.svg";
import useTranslation from "next-translate/useTranslation";

const { DateTime } = require("luxon");

const LatestNews = () => {
  const date = DateTime.now();
  const { t } = useTranslation("common");

  return (
    <div className={styles.latestNews}>
      <h2>{t("latest")}</h2>
      <div>
        <div className={styles.headline}>
          <Image src={bitcoin} alt="bitcoin" />
          <div>
            <h3>Bitcoin</h3>
            <p>@figma20</p>
          </div>
        </div>
        <div className={styles.details}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            cupiditate error ipsum laborum.
          </p>
          <span>#Html #Bootstrap</span>
          <p>{date.setZone("system").toLocaleString()}</p>
        </div>
      </div>
      <div>
        <div className={styles.headline}>
          <Image src={litecoin} alt="litecoin" />
          <div>
            <h3>Flutter</h3>
            <p>@jane59</p>
          </div>
        </div>
        <div className={styles.details}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            cupiditate error ipsum laborum.
          </p>
          <span>#Html #Bootstrap</span>
          <p>{date.setZone("system").toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
