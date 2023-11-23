import UserPageSearch from "../Search";
import UserList from "./UserList";

import { Dropdown, Space, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import { DUMMY_USERS } from "../../../api/api";

import styles from "./UserListHolder.module.css";

const items: MenuProps["items"] = [
  {
    label: 5,
    key: "0",
  },
  {
    label: 10,
    key: "1",
  },
  {
    label: 15,
    key: "2",
  },
];

async function fetchUsers() {
  return DUMMY_USERS.slice(0, 5);
}

const UserListHolder = () => {
  return (
    <div className={styles.userList}>
      <UserPageSearch />
      <div className={styles.table}>
        <h2>Base Datatable</h2>
        <div className={styles.searchBarHolder}>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                10
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <div className={styles.searchBar}>
            <p>search</p>
            <input type="text" />
          </div>
        </div>
        {/* <UserList data={data} /> */}
      </div>
    </div>
  );
};

export default UserListHolder;
