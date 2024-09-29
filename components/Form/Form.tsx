"use client";
import { InputBox } from "./InputBox";
import { Formik } from "formik";
import { ImSpinner } from "react-icons/im";
import * as Yup from "yup";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
// import { theme } from "@/app/theme";

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  phone_number: Yup.string()
    .min(10, "Please enter 10 digits")
    .required("Required"),
});

export const Form = () => {
  const [dataSent, setDataSent] = useState(false);

  return (
    <div className="bg-secondaryColor py-5 flex flex-col justify-center w-full h-full gap-8 rounded-2xl">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone_number: "",
          message: "",
        }}
        validationSchema={FormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const request = await fetch("/api/hello", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          const response = await request.json();
          if (response.sent === true) {
            setDataSent(true);
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <div className="flex flex-col md:gap-5 gap-2 ">
              <InputBox
                label={"Name"}
                placeHolder={"Your Name"}
                type={"text"}
                name={"name"}
                handleChange={handleChange}
                value={values.name}
                errorBox={errors.name && touched.name ? true : false}
                errorText={
                  errors.name && touched.name ? `${errors.name}` : null
                }
              />
              <InputBox
                label={"Phone Number"}
                placeHolder={"Your phone number."}
                type={"tel"}
                name={"phone_number"}
                handleChange={handleChange}
                value={values.phone_number}
                errorBox={
                  errors.phone_number && touched.phone_number ? true : false
                }
                errorText={
                  errors.phone_number && touched.phone_number
                    ? `${errors.phone_number}`
                    : null
                }
              />
              <InputBox
                label={"Email"}
                placeHolder={"Your Email"}
                type={"text"}
                name={"email"}
                handleChange={handleChange}
                value={values.email}
                errorBox={errors.email && touched.email ? true : false}
                errorText={
                  errors.email && touched.email ? `${errors.email}` : null
                }
              />
              <InputBox
                label={"Message"}
                placeHolder={"Your Message"}
                type={"text"}
                name={"message"}
                handleChange={handleChange}
                value={values.message}
                errorBox={false}
                errorText={false}
              />
            </div>

            <div className="flex flex-row items-center gap-5 p-1">
              {isSubmitting ? null : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white border-white border-[2px] rounded-md px-4 py-2 flex items-center gap-2 ml-3"
                >
                  {"SUBMIT "}
                </button>
              )}
              {isSubmitting ? (
                <ImSpinner
                  // color={theme.colors.primaryColor}
                  className="animate-spin"
                  size={30}
                />
              ) : null}
              {dataSent ? (
                <FaCheck
                  // color={theme.colors.primaryColor}
                  className="animate-pulse"
                  size={30}
                />
              ) : null}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
