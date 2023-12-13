import React, { useEffect, useState } from "react";
import { Box, Button, CardMedia, TextField, Typography } from "@mui/material";
import "./Contact.scss";
import ContentHead from "../ContentHead/ContentHead";
import call from "../../assets/call.svg";
import address from "../../assets/address.svg";
import mail from "../../assets/mail.svg";
import { gsap } from "gsap";
import { useFormik } from "formik";
import * as Yup from "yup";
const myInfoData = [
  { id: 1, url: call, sub: "Call me", data: "+91 7320861228" },
  { id: 2, url: mail, sub: "Email me", data: "badalmehta99@gmail.com" },
  { id: 3, url: address, sub: "Address", data: "Ranchi, Jharkhand, India" },
];
const Contact = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      budget: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid phone number")
        .required("Phone number is required"),
      budget: Yup.number()
        .typeError("Budget must be a number")
        .positive("Budget must be a positive number")
        .required("Budget is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box className="contactBlock" id="contacts">
      <ContentHead text="Contact" />
      <form  action="https://formspree.io/f/mgejgjpb" 
        method="POST">
      <Box className="contactText">
        <Box className="innerText">
          <Typography variant="h6">
            Let’s make something new, different and more meaningful or make
            thing more visual or conceptual
          </Typography>
        </Box>
      </Box>
      <Box className="formBlock">
        <Box className="leftForm">
          {myInfoData.map((element) => {
            return (
              <Box className="innerLeftForm" key={element.id}>
                <Box mr={2}>
                  <CardMedia component="img" src={element.url} />
                </Box>
                <Box>
                  <Box>
                    <Typography variant="regular" sx={{ color: "#92929D" }}>
                      {element.sub}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">{element.data}</Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box  className="rightForm">
          <Box sx={{ display: "flex" }}>
            <Box mr={2}>
              <TextField
                id="fullName"
                type="text"
                label="Full name"
                className="mytextfield"
                {...formik.getFieldProps("fullName")}
              ></TextField>
              {formik.touched.fullName && formik.errors.fullName ? (
                <div>{formik.errors.fullName}</div>
              ) : null}
            </Box>
            <Box>
              <TextField
                label="Your email"
                id="email"
                className="mytextfield"
                {...formik.getFieldProps("email")}
              ></TextField>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </Box>
          </Box>
          <Box sx={{ display: "flex", mt: "24px" }}>
            <Box mr={2}>
              <TextField
                label="Phone number"
                id="phoneNumber"
                className="mytextfield"
                {...formik.getFieldProps("phoneNumber")}
              ></TextField>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
              ) : null}
            </Box>
            <Box>

            <TextField
              name="budget"
              label="Budget"
              id="full name"
              className="mytextfield"
              {...formik.getFieldProps("budget")}
            ></TextField>
              {formik.touched.budget && formik.errors.budget ? (
                <div>{formik.errors.budget}</div>
              ) : null}
            </Box>

          </Box>
          <Box mt={2}>
            <TextField
              name="Full name"
              label="Message"
              id="message"
              className="myTextArea"
              multiline
              rows={8}
              {...formik.getFieldProps("message")}
            ></TextField>
              {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
              ) : null}
          </Box>
          </Box>
      </Box>
      <Box className="buttonSubmit">
        <Button
          variant="contained"
          className="btn"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          type="submit"
        >
          Submit Message
        </Button>
      </Box>
      </form>
    </Box>
  );
};

export default Contact;
