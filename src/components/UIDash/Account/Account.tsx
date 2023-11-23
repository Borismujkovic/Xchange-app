import { Row, Col } from "antd";
import Image from "next/image";
import thunder from "../../../assets/thunder.svg";
import arrow from "../../../assets/arrow.svg";

import styles from "./Account.module.css";
import { useUser } from "@/src/store/user";
import useTranslation from "next-translate/useTranslation";

const AccountSummary = () => {
  const { user } = useUser();

  const { t } = useTranslation("account");
  return (
    <>
      {user ? (
        <div className={styles.account}>
          <h2>{t("summary")}</h2>
          <Row>
            <Col span={7} className={styles.variability}>
              <Image src={thunder} alt="thunder" />
              <p>{t("week")}</p>
              <div>
                <h3>$3.45</h3>
              </div>
              <p>+ 64%</p>
            </Col>
            <Col span={7} offset={1} className={styles.variability}>
              <Image src={arrow} alt="arrow" />
              <p>{t("month")}</p>
              <div>
                <h3>$3.45</h3>
              </div>
              <p>- 31%</p>
            </Col>
            <Col span={7} offset={1} className={styles.variability}>
              <Image src={thunder} alt="thunder" />
              <p>{t("year")}</p>
              <div>
                <h3>$3.45</h3>
              </div>
              <p>+ 64%</p>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AccountSummary;
