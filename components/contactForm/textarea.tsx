type props = {
  name: string;
};

export const Textarea: React.FunctionComponent<props> = ({ name }) => (
  <div className="mb-6">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={name}
    >
      {name}
    </label>
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id={name}
      placeholder={name}
      rows={5}
    />
  </div>
);
