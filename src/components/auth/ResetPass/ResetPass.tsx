import { Poppins } from "next/font/google";

import styles from "./ResetPass.module.css";
import Link from "next/link";
import { Row, Col } from "antd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const ResetPasswordPage = () => {
  return (
    <section className={`${styles.auth} ${poppins.className}`}>
      <div className={styles.formHolder}>
        <h1 className={styles.h1}>Reset Password</h1>
        <span>
          Enter your email address and we will send you an email with
          instructions to reset your password
        </span>
        <Row>
          <Col span={24}>
            <div className={styles.div}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </Col>
        </Row>
        <div>
          <Link href="/auth/success-form">
            <button>Reset</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
