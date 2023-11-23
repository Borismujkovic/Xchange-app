import Image from "next/image";
import styles from "../src/styles/ErrorPage.module.css";

import cancel from "../src/assets/500Error.svg";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Custom500 = () => {
  return (
    <section className={`${styles.errorPage} ${poppins.className}`}>
      <Image src={cancel} alt="caution-image" className={styles.error500} />
      <div className={styles.errorHolder}>
        <h1>500</h1>
        <div>
          <h2>Internal Server Error</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad
            recusandae iste eligendi, eos quam amet cupiditate?
          </p>
        </div>
        <Link href="/en">
          <button>Back to home</button>
        </Link>
      </div>
    </section>
  );
};

export default Custom500;
