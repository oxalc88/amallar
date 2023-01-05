import { useState } from "react";

const DateSelect = ({ text }) => {
  const getShowDate = () => {
    let fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth() + 1; //obteniendo mes
    let dia = fecha.getDate(); //obteniendo dia
    let año = fecha.getFullYear(); //obteniendo año
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    return `${año}/${mes}/${dia}`;
  };

  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const onChange = (e) => {
    setStartDate(e.target.value);
  };

  return (
    <div className="form-control w-full max-w-xs m-4">
      <label className="label">
        <span className="label-text">{text}</span>
      </label>
      <input
        type={"date"}
        className="input input-bordered w-full max-w-xs h-15"
        value={startDate}
        onChange={onChange}
      />
    </div>
  );
};

export default DateSelect;
