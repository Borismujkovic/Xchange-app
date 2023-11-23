import { Poppins } from "next/font/google";
import { BsCheck2Circle } from "react-icons/bs";
import styles from "./SuccessForm.module.css";

import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const SuccessResetPassPage = () => {
  return (
    <section className={`${styles.auth} ${poppins.className}`}>
      <div className={styles.formHolder}>
        <img
          src="https://freesvg.org/storage/img/thumb/tick.png"
          alt="success"
          className={styles.success}
        />
        <h1 className={styles.h1}>Reset Password</h1>
        <span>
          A email has been send to your email@domain.com. Please check for an
          email from company and click on the included link to reset your
          password.
        </span>
        <div>
          <Link href="/auth/sign-in">
            <button>Back to home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessResetPassPage;
