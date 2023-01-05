import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { MoveButton } from "./Buttons";
import Text from "./Text";

const LongDate = () => {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let fecha = new Date();
  let mes = fecha.getMonth();
  const [period, setPeriod] = useState({
    month: meses[mes],
    year: fecha.getFullYear(),
  });

  const addMonth = () => {
    setPeriod((prev) => {
      let newMonth = meses.indexOf(prev.month) + 1;
      let newYear = prev.year;
      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
      return { month: meses[newMonth], year: newYear };
    });
  };

  const substrackMonth = () => {
    setPeriod((prev) => {
      let newMonth = meses.indexOf(prev.month) - 1;
      let newYear = prev.year;
      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      }
      return { month: meses[newMonth], year: newYear };
    });
  };
  return (
    <div className="m-4 p-4 flex flex-row flex-wrap items-center space-x-4 shadow justify-between w-full max-w-xs rounded-xl">
      <MoveButton
        icon={<ChevronLeftIcon className="h-8 w-8" />}
        onClick={substrackMonth}
      />
      <h2 className="text-lg">
        {period.month} {period.year}
      </h2>
      <MoveButton
        icon={<ChevronRightIcon className="h-8 w-8" />}
        onClick={addMonth}
      />
    </div>
  );
};

export default LongDate;
