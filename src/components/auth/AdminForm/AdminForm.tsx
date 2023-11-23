import styles from "./AdminForm.module.css";

import Link from "next/link";
import { Row, Col } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";
import profile from "../../../assets/SVGPerson.svg";

const Decimal = require("decimal.js");

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const AdminLogIn = () => {
  const x = new Decimal(123.4567);
  console.log(x.toFixed());
  return (
    <section className={`${styles.auth} ${poppins.className}`}>
      <div className={styles.formHolder}>
        <Image
          src={profile}
          className={styles.profileImg}
          alt="profile-image"
        />
        <h1 className={styles.h1}>Hi ! Austin Robertson</h1>
        <span>Enter your password to acess the admin.</span>
        <Row></Row>
        <Row>
          <Col span={24}>
            <div className={styles.div}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required />
            </div>
          </Col>
        </Row>
        <div>
          <Link href="/">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminLogIn;
