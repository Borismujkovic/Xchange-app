import { useEffect, useState } from "react";
import { Row, Col } from "antd";

import styles from "./TradingActivities.module.css";
import Image from "next/image";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

import bitcoin from "../../../assets/BitcoinValue.svg";
import info from "../../../assets/info.png";
import { useQuery } from "@tanstack/react-query";
import numeral from "numeral";
import useTranslation from "next-translate/useTranslation";
import Api from "@/src/api/real-api";
import { GET_STATISTICS, NUMBER_FORMAT } from "@/src/utils/constants";

enum activity {
  daily = "Daily",
  weekly = "Weekly",
}

const TradingActivities = () => {
  const [period, setPeriod] = useState("Daily");
  const [selectedBtn, setSelectedBtn] = useState("button3");
  const { t } = useTranslation("statistic");

  const { data, isLoading, isError, error, refetch } = useQuery(
    [GET_STATISTICS],
    () => Api.fetchCryptoFrequency(period)
  );

  useEffect(() => {
    refetch();
  }, [period, refetch]);

  if (isLoading)
    return (
      <div className={styles.history}>
        <h2>Loading...</h2>
      </div>
    );
  if (isError)
    return (
      <>
        <h2>Something went wrong...</h2>
        <p>{error.toString()}</p>
      </>
    );

  const getActivityClass = (activity: number): string => {
    if (activity > 0) {
      return styles.positive;
    } else if (activity < 0) {
      return styles.negative;
    }
  };

  const getCaretNode = (activity: string): React.ReactNode => {
    if (+activity > 0) {
      return <CaretUpOutlined className={getActivityClass(+activity)} />;
    }
    return <CaretDownOutlined className={getActivityClass(+activity)} />;
  };

  return (
    <section className={styles.sectionHolder}>
      <div className={styles.heading}>
        <div>
          <h2>{t("recent")}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <button
            onClick={() => {
              setPeriod(activity.weekly);
              setSelectedBtn("button2");
            }}
            style={{
              backgroundColor:
                selectedBtn === "button2" ? "#313135" : "#4A4A4F",
            }}
          >
            {t("weekly")}
          </button>
          <button
            onClick={() => {
              setPeriod(activity.daily);
              setSelectedBtn("button3");
            }}
            style={{
              backgroundColor:
                selectedBtn === "button3" ? "#313135" : "#4A4A4F",
            }}
          >
            {t("today")}
          </button>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <Row>
          <Col span={4}>
            <h2>{t("name")}</h2>
          </Col>
          <Col span={4}>
            <h2>{t("price")}</h2>
          </Col>
          <Col span={4}>
            <h2>24h%</h2>
          </Col>
          <Col span={4}>
            <h2>7d%</h2>
          </Col>
          <Col span={4}>
            <div className={styles.tableHead}>
              <h2>{t("market")}</h2>
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.tableHead}>
              <h2>{t("volume")}(24h)</h2>{" "}
            </div>
          </Col>
        </Row>
        {data.map((token) => (
          <Row className={styles.details} key={token.id}>
            <Col span={4}>
              <div className={styles.name}>
                <Image src={bitcoin} alt="bitcoin" />
                <span>{token.name}</span>
                <button>{t("buy")}</button>
              </div>
            </Col>
            <Col span={4}>
              <span>
                ${numeral(token.tokenStat.price).format(NUMBER_FORMAT)}
              </span>
            </Col>
            <Col span={4}>
              <span>
                {getCaretNode(token.tokenStat.change_24h)}
                {numeral(token.tokenStat.change_24h).format(NUMBER_FORMAT)}%
              </span>
            </Col>
            <Col span={4}>
              <span>
                {getCaretNode(token.tokenStat.change_7d)}
                {numeral(token.tokenStat.change_7d).format(NUMBER_FORMAT)}%
              </span>
            </Col>
            <Col span={4}>
              <span>
                ${numeral(token.tokenStat.market_cap).format(NUMBER_FORMAT)}
              </span>
            </Col>
            <Col span={4}>
              <div>
                <span>
                  ${numeral(token.tokenStat.volume).format(NUMBER_FORMAT)}
                </span>
                {/* <h6>{numeral(token.tokenStat.singleVolume).format('0,0.00')} {token.shortName}</h6> */}
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default TradingActivities;
