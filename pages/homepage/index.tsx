import Head from "next/head";

import CryptoExchange from "../../src/components/UIDash/CryptoExchange/CryptoExchange";
import CryptoValue from "../../src/components/UIDash/CryptoValue/CryptoValue";
import Layout from "../../src/components/layout/Layout";
import BaseLayout from "../../src/components/sidebar/BaseLayout";
import { Row, Col } from "antd";

import { useUser } from "@/src/store/user";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { useEffect } from "react";
// import logo from "../../src/assets/logo.svg";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/");
  //   }
  // }, [user, router]);

  // if (!user) {
  //   return null;
  // }

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
          </Layout>
        </BaseLayout>
      </main>
    </>
  );
}
