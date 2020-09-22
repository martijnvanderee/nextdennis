import { fetcher } from "../../fetcher";

type IValues = {
  name: string;
  instantie: string;
  email: string;
  message: string;
  subject: string;
};

export const onSubmit: React.FunctionComponent<any> = async (
  values,
  { resetForm }
) => {
  const { name, email, message, instantie, subject } = values;

  await fetcher(
    [
      "https://us-central1-website-dennis-stassen.cloudfunctions.net/app",
      "mail",
    ],
    {
      name,
      email,
      message,
      instantie,
      subject,
    }
  );

  resetForm({});
};
