import Link from "next/link";

import styles from "./Footer.module.css";
import { Inter } from "next/font/google";
import useTranslation from "next-translate/useTranslation";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.footer}>
      <div className={styles.policy}>
        <Link href="/">{t("policy")}</Link>
        <Link href="/">{t("terms")}</Link>
      </div>
      <div>
        <p>
          © 2023 Xchange {t("copyright")}
          <span>Valentina y muchacos</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
