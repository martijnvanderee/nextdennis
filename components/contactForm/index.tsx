import { useForm } from "react-form";
import { fetcher } from "../../fetcher";

import { InputField } from "./inputfield";
import { validateStandard, validateEmail } from "./validateFormData";
import { Input } from "./input";
import { Select } from "./select";
import { Textarea } from "./textarea";

// export const ContactForm = () => {
//   // Use the useForm hook to create a form instance
//   const {
//     Form,
//     meta: { isSubmitting, canSubmit, isSubmitted },
//   } = useForm({
//     onSubmit: async (values, instance) => {
//       const { name, email, subject, message } = values;
//       const response = await fetcher(
//         [
//           "https://us-central1-website-dennis-stassen.cloudfunctions.net/app",
//           "mail",
//         ],
//         {
//           name,
//           email,
//           subject,
//           message,
//         }
//       );
//       if (response.status !== 200) {
//         console.log(response);
//       }
//       instance.reset();
//     },
//     debugForm: true,
//   });

//   return <Form className="bg-red-200"></Form>;
// };

import { useFormik } from "formik";

const onSubmit = async (values, instance) => {
  const { name, email, subject, message, instantie } = values;
  console.log(
    "name:",
    name,
    "email:",
    email,
    "subject:",
    subject,
    "message:",
    message,
    "instantie:",
    instantie
  );
  const response = await fetcher(
    [
      "https://us-central1-website-dennis-stassen.cloudfunctions.net/app",
      "mail",
    ],
    {
      name,
      email,
      subject,
      message,
      instantie,
    }
  );
  if (response.status !== 200) {
    console.log(response);
  }
};

const initialValues = {
  name: "",
  instantie: "",
  email: "",
  subject: "Workshop ronde",
  message: "dit is een test",
};

const validate = (values) => {
  let errors: any = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  }

  return errors;
};
export const ContactForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.errors);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
    >
      <Input
        name="name"
        placeholder="naam"
        type="text"
        value={formik.values.name}
        formik={formik}
        errors={formik.errors.name}
      />
      <Input
        name="instantie"
        placeholder="instantie"
        type="text"
        value={formik.values.instantie}
        formik={formik}
        errors={formik.errors.instantie}
      />
      <Input
        name="email"
        placeholder="email"
        type="email"
        value={formik.values.email}
        formik={formik}
        errors={formik.errors.email}
      />

      <Select
        name="Wat voor type training?"
        options={[
          "Workshop ronde",
          "Driedelige trainingsmiddag",
          "Plenaire lezing",
        ]}
        value={formik.values.subject}
        formik={formik}
      />

      <Textarea name="opmerkingen" />

      <div className="flex items-center justify-center">
        <button
          className="bg-color1 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow"
          type="submit"
        >
          Stuur naar mij
        </button>
      </div>
    </form>
  );
};
