import BaseLayout from "../../src/components/sidebar/BaseLayout";
import UserListHolder from "../../src/components/user/userList/UserListHolder";
import Layout from "../../src/components/layout/Layout";
import { Col, Row } from "antd";

const UserListPage = () => {
  return (
    <>
      <BaseLayout>
        <Layout>
          <Row>
            <Col span={23} offset={1}>
              <UserListHolder />
            </Col>
          </Row>
        </Layout>
      </BaseLayout>
    </>
  );
};

export default UserListPage;
