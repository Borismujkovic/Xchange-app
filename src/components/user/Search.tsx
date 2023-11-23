import styles from "./Search.module.css";
import useTranslation from "next-translate/useTranslation";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { SignUpFormValues } from "../auth/SignUpForm/SignUpForm.types";
import { Col, Row } from "antd";
import { border } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserPageSearch = () => {
  const { t } = useTranslation("exchange");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const methods = useForm<SignUpFormValues>();

  const { handleSubmit, control, formState, watch } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.search}>
      <div className={styles.filter}>
        <label htmlFor="">From:</label>
        <select name="" id="">
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="RSD">RSD</option>
        </select>
        <label htmlFor="">To:</label>
        <select name="" id="">
          <option value="">GBP</option>
          <option value="EUR">EUR</option>
          <option value="RSD">RSD</option>
        </select>
      </div>
      <div>
        <Button onClick={handleOpen}>Create offer</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{textAlign: 'end'}}>
              <span style={{padding: '0.2rem', fontSize: '1.5rem', cursor: 'pointer'}} onClick={handleClose}>X</span>
            </div>
            <Typography id="modal-modal-title" variant="h4" component="h1" style={{textAlign: 'center', margin: '1rem'}}>
              Create offer
            </Typography>
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
                        From
                      </label>
                      <Controller
                        control={control}
                        name="firstName"
                        rules={{ required: "Please enter your first name" }}
                        render={({ field }) => (
                          <select {...field}>
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            {/* Add more options as needed */}
                          </select>
                        )}
                      />
                    </div>
                  </Col>
                  <Col md={12} xs={24}>
                    <div className={styles.div}>
                      <label htmlFor="firstName" className={styles.label}>
                        To:
                      </label>
                      <Controller
                        control={control}
                        name="firstName"
                        rules={{ required: "Please enter your first name" }}
                        render={({ field }) => (
                          <select {...field}>
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            {/* Add more options as needed */}
                          </select>
                        )}
                      />
                    </div>
                  </Col>
                  <Col md={12} xs={24} style={{margin: '2rem 0'}}>
                    <div className={styles.div}>
                      <Controller
                        control={control}
                        name="firstName"
                        rules={{ required: "Please enter your first name" }}
                        render={({ field }) => (
                          <input
                          type="number"
                            style={{
                              background: "white",
                              border: "1px solid black",
                              borderRadius: "1rem",
                              color: 'black'
                            }}
                            {...field}
                          />
                        )}
                      />
                    </div>
                  </Col>
                  <Col md={12} xs={24} style={{margin: '2rem 0'}}>
                    <div className={styles.div}>
                      <Controller
                        control={control}
                        name="lastName"
                        rules={{ required: "Please enter your first name" }}
                        render={({ field }) => (
                          <input
                          type="number"
                            style={{
                              background: "white",
                              border: "1px solid black",
                              borderRadius: "1rem",
                              color: 'black'
                            }}
                            {...field}
                          />
                        )}
                      />
                    </div>
                  </Col>
                </Row>
                <div style={{ margin: "1rem 0", textAlign: 'center' }}>
                  <button type="submit" className={styles.button} onClick={handleClose}>Submit</button>
                </div>
              </form>
            </FormProvider>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default UserPageSearch;
