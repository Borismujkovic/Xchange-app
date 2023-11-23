import { useUser } from "@/src/store/user";
import styles from "./About.module.css";
import useTranslation from "next-translate/useTranslation";

const About = () => {
  const { user } = useUser();
  const { t } = useTranslation("common");
  return (
    <div className={styles.about}>
      <h2>{t("about.about")}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <span className={styles.span}>Lorem ipsum dolor sit amet.</span>
      </p>
      <div className={styles.details}>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          {t("phone")}: <span>{user.phoneNo}</span>
        </p>
        <p>
          {t("about.location")}: <span>USA</span>
        </p>
      </div>
    </div>
  );
};

export default About;
