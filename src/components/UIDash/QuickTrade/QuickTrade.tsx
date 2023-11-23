import Image from "next/image";
import styles from "./QuickTrade.module.css";

import { TbSend } from "react-icons/tb";
import profile from "../../../assets/SVGPerson.svg";
import { useUser } from "@/src/store/user";
import useTranslation from "next-translate/useTranslation";

const QuickTrade = () => {
  const { user } = useUser();

  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.trade}>
        <h2>Quick Transfer</h2>
        <div className={styles.profileImageHolder}>
          <Image src={profile} alt="profile-icon" />
          <Image src={profile} alt="profile-icon" />
          <Image src={profile} alt="profile-icon" />
          <Image src={profile} alt="profile-icon" />
        </div>
        <div className={styles.input}>
          <h3>{t("quick.amount")} BTC</h3>
          <input type="number" />
        </div>
        <button>
          <span>
            <TbSend />
          </span>
          Transfer Now
        </button>
      </div>
    </>
  );
};

export default QuickTrade;
