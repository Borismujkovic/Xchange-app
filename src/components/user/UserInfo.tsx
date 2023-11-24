import { Col, Row } from "antd";
import styles from "./UserInfo.module.css";
import { useUser } from "@/src/store/user";
import { DUMMY_OFFERS } from "@/src/api/api";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchCrypto() {
  const res = await axios.get("http://localhost:7147/api/offer");
  const response = res.data.slice(0, 3);
  return response;
}

const UserInfo = () => {
  const { user } = useUser();

  const { data, isError, isLoading, error } = useQuery(
    ['offers'],
    fetchCrypto,
    {
      refetchInterval: 60000,
    }
  );

  return (
    <Row className={styles.offer}>
      {DUMMY_OFFERS.map((offer) => (
        <Col span={6} className={styles.singleOffer}>
          <div className={styles.offerHeader}>
            <p>Offer:</p>
            <p>{offer.user}</p>
          </div>
          <div className={styles.moneyOffer}>
            <span>{offer.from}</span>-<span>{offer.to}</span>
          </div>
          <button>Accept offer</button>
        </Col>
      ))}
    </Row>
  );
};

export default UserInfo;
