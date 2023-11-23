import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Col, Row } from 'antd';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { SignUpFormValues } from '../../auth/SignUpForm/SignUpForm.types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const methods = useForm<SignUpFormValues>();
    return (
        <>
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
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
                </Box>
            </Modal>
        </div>
        </>
    );
}