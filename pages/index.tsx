import Head from "next/head";

import CryptoExchange from "../src/components/UIDash/CryptoExchange/CryptoExchange";
import CryptoValue from "../src/components/UIDash/CryptoValue/CryptoValue";
import SearchCrypto from "../src/components/UIDash/Search/Search";
import Layout from "../src/components/layout/Layout";
import BaseLayout from "../src/components/sidebar/BaseLayout";
import { Row, Col } from "antd";

import { useUser } from "@/src/store/user";
import logo from "../src/assets/logo.svg";
import SignInForm from "@/src/components/auth/SignInForm/SignInForm";

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return (
   <SignInForm />
    );
  }

  // return (
  //   <>
  //     <Head>
  //       <title>CoineX App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <main>
  //       <BaseLayout>
  //         <Layout>
  //           <Row gutter={40}>
  //             <Col span={24}>
  //               <CryptoExchange />
  //             </Col>
  //             <Col span={24}>
  //               <CryptoValue />
  //             </Col>
  //           </Row>
  //         </Layout>
  //       </BaseLayout>
  //     </main>
  //   </>
  // );
}
