const Select = (props) => {
  const { origen1, origen2, label } = props;
  return (
    <div className="form-control w-full max-w-xs m-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select className="select select-bordered">
        <option defaultValue={"Seleccionar Origen ..."}>
          Seleccionar Origen ...
        </option>
        <option>{origen1}</option>
        <option>{origen2}</option>
      </select>
    </div>
  );
};

export default Select;
