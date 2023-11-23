import { useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import Image from "next/image";

import { Poppins } from "next/font/google";
import logo from "../../../assets/logo.svg";

import Link from "next/link";
import styles from "./SignUpForm.module.css";
import { Row, Col } from "antd";

import { SignUpFormValues } from "./SignUpForm.types";
import { IUsers } from "../../../models/user";
import { useRouter } from "next/router";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Api from "@/src/api/real-api";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useMutation } from "@tanstack/react-query";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const SignUpForm = () => {
  const [createdUser, setCreatedUser] = useState("");
  const [error, setError] = useState("");

  const { t } = useTranslation("auth");

  const router = useRouter();

  const methods = useForm<SignUpFormValues>();

  const { handleSubmit, control, formState, watch } = methods;

  const { errors } = formState;

  const watchPassword = watch("password");

  const onSubmit = async (data: IUsers) => {
    try {
      await Api.signUp(data);
      setCreatedUser("Account created successfully");
      router.push("/auth/sign-in");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(error.response.data.message);
          console.log(error.response.data.message);
        } else {
          setError("An error occurred");
        }
      }
    }
  };

  return (
    <section className={`${styles.auth} ${poppins.className}`}>
      <div className={styles.home}>
        <Link href="/">
          <Image src={logo} alt="logo" />
          <h1>Home</h1>
        </Link>
      </div>
      <div className={styles.formHolder}>
        <h1 className={styles.h1}>{t("signup")}</h1>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        <FormProvider {...methods}>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Row>
              <Col md={12} xs={24}>
                <div className={styles.div}>
                  <label htmlFor="firstName" className={styles.label}>
                    {t("firstName")}
                  </label>
                  <Controller
                    control={control}
                    name="firstName"
                    rules={{ required: "Please enter your first name" }}
                    render={({ field }) => <input {...field} />}
                  />
                  <p className={styles.error}>{errors.firstName?.message}</p>
                </div>
              </Col>
              <Col md={12} xs={24}>
                <div className={styles.div}>
                  <label htmlFor="lastName" className={styles.label}>
                    {t("lastName")}
                  </label>
                  <Controller
                    control={control}
                    name="lastName"
                    rules={{ required: "Please enter your last name" }}
                    render={({ field }) => <input {...field} />}
                  />
                  <p className={styles.error}>{errors.lastName?.message}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={24}>
                <div className={styles.div}>
                  <label htmlFor="email">Email</label>
                  <Controller
                    control={control}
                    name="email"
                    rules={{ required: "Please enter your email" }}
                    render={({ field }) => <input {...field} />}
                  />
                  <p className={styles.error}>{errors.email?.message}</p>
                </div>
              </Col>
              <Col md={12} xs={24}>
                <div className={styles.div}>
                  <label htmlFor="phoneNo">{t("phone")}.</label>
                  <Controller
                    control={control}
                    name="phoneNo"
                    rules={{ required: "Please enter your phone number" }}
                    render={({ field }) => (
                      <PhoneInput
                        value={field.value}
                        inputClass={styles.phoneInput}
                        placeholder=""
                        dropdownClass={styles.drop}
                        {...field}
                      />
                    )}
                  />
                  <p className={styles.error}>{errors.phoneNo?.message}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={24}>
                <div className={styles.div}>
                  <label htmlFor="password">{t("password")}</label>
                  <Controller
                    control={control}
                    name="password"
                    rules={{ required: "Please enter your password" }}
                    render={({ field }) => <input type="password" {...field} />}
                  />
                  <p className={styles.error}>{errors.password?.message}</p>
                </div>
              </Col>
              <Col md={12} xs={24}>
                <div className={styles.div}>
                  <label htmlFor="confirmPass">{t("confirm")}</label>
                  <Controller
                    control={control}
                    name="confirmPass"
                    rules={{
                      required: "Please confirm your password",
                      validate: (value: string) =>
                        value === watchPassword || "Password do not match",
                    }}
                    render={({ field }) => <input type="password" {...field} />}
                  />
                  <p className={styles.error}>{errors.confirmPass?.message}</p>
                </div>
              </Col>
            </Row>
            <div className={styles.checkbox}>
              <input type="checkbox" />
              <label htmlFor="">{t("agree")}</label>
            </div>
            <p className={styles.userExists}>{error}</p>
            <div>
              <button type="submit">{t("signup")}</button>
              <p>
                {t("existing")}
                <Link href="/auth/sign-in">{t("signin")}</Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
      <h1 className={styles.created}>{createdUser}</h1>
    </section>
  );
};

export default SignUpForm;
