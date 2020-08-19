type props = {
  name: string;
  type: string;
  value: string;
  formik: any;
  placeholder: string;
  errors: any;
};
export const Input: React.FunctionComponent<props> = ({
  name,
  type,
  value,
  formik,
  placeholder,
  errors,
}) => {
  const visuelError = errors && `shadow-error`;

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${visuelError}`}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={formik.handleChange}
      />
      {errors && (
        <div className="text-gray-700 text-base font-bold">{errors}</div>
      )}
    </div>
  );
};
