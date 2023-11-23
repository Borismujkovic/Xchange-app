import { Col, Row } from "antd";
import BaseLayout from "../../src/components/sidebar/BaseLayout";
import UserPageSearch from "../../src/components/user/Search";
import Layout from "../../src/components/layout/Layout";
import UserInfo from "../../src/components/user/UserInfo";

const UserPage = () => {
  return (
    <>
      <BaseLayout>
        <Layout>
          <Row gutter={[0, 40]}>
            <Col lg={24} sm={24} xs={24}>
              <UserPageSearch />
            </Col>
            <Col lg={24} sm={24} xs={24}>
              <UserInfo />
            </Col>
            {/* <Row gutter={[40, 40]}>
              <Col lg={6} sm={8} xs={24}>
                <Row gutter={[0, 40]}>
                  <Col sm={24} xs={24}>
                    <News />
                  </Col>
                  <Col sm={24} xs={24}>
                    <Interest />
                  </Col>
                  <Col sm={24} xs={24}>
                    <LatestNews />
                  </Col>
                </Row>
              </Col>
              <Col lg={12} sm={16}>
                <Blog />
              </Col>
              <Col lg={6} sm={24}>
                <Row gutter={[40, 40]}>
                  <Col lg={24} sm={11} xs={24}>
                    <About />
                  </Col>
                  <Col lg={24} sm={12} xs={11}>
                    <MarketCap />
                  </Col>
                  <Col lg={24} sm={7} offset={1} xs={11}>
                    <Suggestions />
                  </Col>
                </Row>
              </Col>
            </Row> */}
          </Row>
        </Layout>
      </BaseLayout>
    </>
  );
};

export default UserPage;
