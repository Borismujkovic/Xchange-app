import styles from "./News.module.css";

import icon from "../../../../assets/msg.png";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const News = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.news}>
      <h2>{t("news")}</h2>
      <div className={styles.singleNews}>
        <Image src={icon} alt="newsIcon" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          tempore accusantium quibusdam corporis!
        </p>
      </div>
      <div className={styles.singleNews}>
        <Image src={icon} alt="newsIcon" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          tempore accusantium quibusdam corporis!
        </p>
      </div>
    </div>
  );
};

export default News;
