import { FormikProps } from "formik";

type Values = {
  email: "";
  instantie: "";
  message: "";
  name: "";
  subject: "";
};

type SelectOptions = { value: string; label: string };

export interface IFormItems {
  label: string;
  name: string;
  formik: FormikProps<Values>;
  type: string;
  options?: SelectOptions[];
}
