import { validate } from "./validate";
import { Formik } from "formik";
import { FormConstruct } from "./form";
import { onSubmit } from "./onSubmit";

const initialValues = {
  name: "",
  instantie: "",
  email: "",
  message: "",
  subject: "error",
};

export const ContactForm = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      <FormConstruct />
    </Formik>
  );
};
