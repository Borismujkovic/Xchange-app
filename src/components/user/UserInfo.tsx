import { Col, Row } from "antd";
import styles from "./UserInfo.module.css";
import { useUser } from "@/src/store/user";

const UserInfo = () => {
  const { user } = useUser();

  return (
    <Row className={styles.offer}>
      <Col span={6} className={styles.singleOffer}>
      <div className={styles.offerHeader}>
        <p>Offer:</p>
        <p>User</p>
      </div>
      <div className={styles.moneyOffer}>
        <span>100$</span>
        -
        <span>12000 RSD</span>
      </div>
      <button>Accept offer</button>
      </Col>
    </Row>
  );
};

export default UserInfo;
