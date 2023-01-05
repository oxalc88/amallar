import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import Card from "../components/Card";
import Description from "../components/Description";
import LongDate from "../components/LongDate";
import Text from "../components/Text";

const resumen = () => {
  return (
    <div className="flex flex-wrap flex-col scroll-smooth m-6 items-center space-y-4">
      <div className="self-start m-6">
        <h1 className="text-xl leading-tight font-semibold mb-3">Tu Balance</h1>
        <p className="font-poppins text-base text-gray">
          Mira como te ha ido este mes
        </p>
      </div>
      <LongDate />
      <Description number={50} />
      <div className="flex flex-row space-x-0.5 flex-wrap justify-around">
        <Card
          type={"Ingresos"}
          saldo={50}
          icon={
            <ArrowTrendingUpIcon className="h-8 w-8 rounded-full bg-success stroke-neutral-content" />
          }
        />
        <Card
          type={"Salidas"}
          saldo={20}
          icon={
            <ArrowTrendingUpIcon className="h-8 w-8 rounded-full bg-error stroke-neutral-content" />
          }
        />
      </div>
    </div>
  );
};

export default resumen;
