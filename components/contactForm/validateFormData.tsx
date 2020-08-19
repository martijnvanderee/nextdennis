export const validateStandard = (fieldName) => {
  if (fieldName.trim() === "") {
    return `is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldName)) {
    return "Invalid characters";
  }
  if (fieldName.trim().length < 3) {
    return `needs to be at least three characters`;
  }
  return null;
};

export const validateEmail = (email: string) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};
