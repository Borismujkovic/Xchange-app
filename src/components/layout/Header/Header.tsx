import styles from "./Header.module.css";
import AlertIcon from "../../icons/alert-icon";
import MailIcon from "../../icons/mail";
import ProfileIcon from "../../../assets/SVGPerson.svg";

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@/src/store/user";
import { deleteCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";

import { Dropdown, Space, MenuProps } from "antd";
import { useRouter } from "next/router";

const Header = () => {
  const { user, clearUser } = useUser();

  const { t } = useTranslation("auth");

  const logout = () => {
    deleteCookie("jwt");
    clearUser();
  };

  const items: MenuProps["items"] = [
    {
      label: <a href="/en">Eng</a>,
      key: "0",
    },
    {
      label: <a href="/de">Ger</a>,
      key: "1",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div>
          <h2 className={styles.h2}>Dashboard</h2>
        </div>
        {user ? (
          <div className={styles.profileSection}>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              className={styles.lng}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Lng</Space>
              </a>
            </Dropdown>
            <div className={styles.profileDetails}>
              <Image src={ProfileIcon} alt="profileIcon" />
              <div>
                <p
                  className={styles.name}
                >{`${user.firstName} ${user.lastName}`}</p>
              </div>
              <Link href="/auth/sign-in">
                <button className={styles.authButton} onClick={logout}>
                  {t("logout")}
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              className={styles.lng}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Lng</Space>
              </a>
            </Dropdown>
            <Link href="/auth/sign-in">
              <button className={styles.authButton}>{t("signin")}</button>
            </Link>
            <Link href="/auth/sign-up">
              <button className={styles.authButton}>{t("signup")}</button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
