import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import styles from "./UserList.module.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IUser } from "@/src/models/user";

interface IUserList {
  data: any;
}

const UserList = ({ data }: IUserList) => {
  return (
    <div>
      <Row className={styles.headRow}>
        <Col span={4}>Name</Col>
        <Col span={4}>Position</Col>
        <Col span={5}>Office</Col>
        <Col span={2}>Age</Col>
        <Col span={4}>Start date</Col>
        <Col span={4}>Salary</Col>
      </Row>
      {/* {data.map((user: IUser, index: number) => (
        <Row className={styles.row} key={index}>
          <Col span={4}>
            {user.firstName} {user.lastName}
          </Col>
          <Col span={4}>{user.profession.position}</Col>
          <Col span={5}>{user.profession.office}</Col>
          <Col span={2}>{user.profession.age}</Col>
          <Col span={4}>{user.profession.startDate}</Col>
          <Col span={4}>{user.profession.salary}</Col>
        </Row>
      ))} */}
      <div className={styles.paginationHolder}>
        <p>Showing 1 to 10 of 57 entries</p>
        <div className={styles.pagination}>
          <button>
            <LeftOutlined />
          </button>
          <button>1</button>
          <button>2</button>
          <button>
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
