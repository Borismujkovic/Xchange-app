import Head from "next/head";

import CryptoExchange from "../src/components/UIDash/CryptoExchange/CryptoExchange";
import CryptoValue from "../src/components/UIDash/CryptoValue/CryptoValue";
import SearchCrypto from "../src/components/UIDash/Search/Search";
import Layout from "../src/components/layout/Layout";
import BaseLayout from "../src/components/sidebar/BaseLayout";
import { Row, Col } from "antd";

import { useUser } from "@/src/store/user";
import logo from "../src/assets/logo.svg";

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return (
      <>
        <Head>
          <title>CoineX App</title>
          <link rel="icon" href={logo} />
        </Head>
        <main>
          <BaseLayout>
            <Layout>
              <Row gutter={40}>
                <Col span={23}>
                  <CryptoExchange />
                </Col>
              </Row>
              <Row gutter={40}>
                <Col lg={16} md={14} sm={12} xs={23}>
                  <Row gutter={40}>
                    <Col span={24}>
                      <CryptoValue />
                    </Col>
                    {/* <Col span={24}>
                      <TradingActivities />
                    </Col> */}
                  </Row>
                </Col>
                <Col lg={7} md={9} sm={11} xs={24} >
                  <SearchCrypto />
                </Col>
              </Row>
              {/* <Row>
                <Col span={23}>
                  <TradingActivities />
                </Col>
              </Row> */}
            </Layout>
          </BaseLayout>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>CoineX App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BaseLayout>
          <Layout>
            <Row gutter={40}>
              <Col span={24}>
                <CryptoExchange />
              </Col>
              <Col span={24}>
                <CryptoValue />
              </Col>
            </Row>
            <Row>
              <Col lg={15} md={15} sm={24} offset={1}>
                {/* <TradeCrypto />
                <AccountSummary /> */}
                {/* <TradingActivities /> */}
              </Col>
              <Col lg={7} md={7} sm={24} offset={1}>
                {/* <SearchCrypto />
                <History /> */}
              </Col>
              {/* <QuickTrade /> */}
            </Row>
            {/* <Row>
              <Col span={23} offset={1}>
                <TradingActivities />
              </Col>
            </Row> */}
          </Layout>
        </BaseLayout>
      </main>
    </>
  );
}
