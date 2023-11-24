import Link from "next/link";

import { useState } from "react";
import {
  ArrowLeftOutlined,
  HomeOutlined,
  UserOutlined,
  CheckSquareOutlined,
  SettingOutlined,
  InfoOutlined,
  FileOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useUser } from "@/src/store/user";
import useTranslation from "next-translate/useTranslation";
import { deleteCookie } from "cookies-next";
import { CiMoneyBill } from "react-icons/ci";

const Sidebar = () => {
  const { user } = useUser();
  const [rotateBtn, setRotateBtn] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const { t } = useTranslation("sidebar");

  const collapseHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  const rotateButtonHandler = () => {
    setRotateBtn(!rotateBtn);
  };

  const logout = () => {
    deleteCookie("jwt");
  };

  const userList = (
    <>
      <li>
        <Link
          href={user ? "/user/user-list" : "/auth/sign-in"}
          className="sidebar__link"
        >
          <div className="sidebar__icon">{<UnorderedListOutlined />}</div>
          <span className="sidebar__name">User list</span>
        </Link>
      </li>
    </>
  );

  return (
    <div className="sidebar__wrapper">
      <button
        className="btn"
        onClick={() => {
          collapseHandler();
          rotateButtonHandler();
        }}
      >
        <ArrowLeftOutlined className={rotateBtn ? "rotate1" : "rotate2"} />
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <img src="https://freesvg.org/storage/img/thumb/GoldTypographyX.png" alt="logo" className="sidebar__logo" />
          {/* <Image src={logo} className="sidebar__logo" alt="logo" /> */}
          <p className="sidebar__logo-name">change</p>
        </div>
        <ul>
          <li>
            <Link href="/" className="sidebar__link">
              <div className="sidebar__icon">{<HomeOutlined />}</div>
              <span className="sidebar__name">Homepage</span>
            </Link>
          </li>
          <li>
            <Link
              href="/user"
              className="sidebar__link"
            >
              <div className="sidebar__icon">{<CiMoneyBill />}</div>
              <span className="sidebar__name">Offers</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
