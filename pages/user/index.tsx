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
          <div style={{minHeight: '85vh'}}>
          <Row gutter={[0, 40]}>
            <Col lg={24} sm={24} xs={24}>
              <UserPageSearch />
            </Col>
            <Col lg={24} sm={24} xs={24}>
              <UserInfo />
            </Col>
          </Row>
          </div>
        </Layout>
      </BaseLayout>
    </>
  );
};

export default UserPage;
