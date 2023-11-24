import { Poppins } from "next/font/google";
import React, { useState } from "react";

import { useForm, FormProvider, Controller } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SignInForm.module.css";
import { Row, Col } from "antd";
import Image from "next/image";
import logo from "../../../assets/logo.svg";

import { SignInFormValues } from "./SignInForm.types";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Api from "@/src/api/real-api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});
const SignInForm = () => {
  const methods = useForm<SignInFormValues>();
  const { handleSubmit, control, formState } = methods;
  const { errors } = formState;
  const [error, setError] = useState("");

  const router = useRouter();

  const onSubmit = async ({ email, password }: SignInFormValues) => {
    try {
      await Api.signIn(email, password);
      router.push("/homepage");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred");
        }
      }
    }
  };

  const { t } = useTranslation("auth");

  return (
    <section className={`${styles.auth} ${poppins.className}`}>
      {/* <div className={styles.home}>
        <Link href="/">
          <Image src={logo} alt="logo" />
          <h1>Home</h1>
        </Link>
      </div> */}
      <div className={styles.formHolder}>
        <h1 className={styles.h1}>{t("signin")}</h1>
        <span>Lorem ipsum dolor sit, amer consectetur adipisicing elite.</span>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row>
              <Col span={24}>
                <div className={styles.div}>
                  <label htmlFor="email">Email</label>
                  <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                  />
                  <p className={styles.error}>{error[0]}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className={styles.div}>
                  <label htmlFor="password">{t("password")}</label>
                  <Controller
                    control={control}
                    name="password"
                    render={({ field }) => <input type="password" {...field} />}
                  />
                  <p className={styles.error}>{error[1]}</p>
                </div>
              </Col>
            </Row>
            <div className={styles.passwordOptions}>
              <div className={styles.rememberPass}>
                {/* <input type="checkbox" className={styles.checkbox} />
                <label htmlFor="rememberPass">{t("remember")}</label> */}
              </div>
              <Link href="/auth/reset-pass">{t("forgot")}</Link>
            </div>
            <div>
              <button>{t("signin")}</button>
              <p>
                {t("account")}
                <Link href="/auth/sign-up">{t("signup")}</Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default SignInForm;
