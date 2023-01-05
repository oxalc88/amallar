import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../components/Buttons";
import DividerComponent from "../components/DividerComponent";
import Footer from "../components/Footer";
import NavIntro from "../components/NavIntro";
import Stats from "../components/Stats";
import Text from "../components/Text";

const welcome = () => {
  return (
    <div className="overflow-auto scroll-smooth">
      <NavIntro name={"Rolando"} />
      <Text text={"Acciones Rápidas"} />
      <div className="flex flex-row w-full">
        <DividerComponent>
          <Button
            text={"Añadir Ingreso"}
            bg={"success"}
            color={"neutral-content"}
            icon={<ArrowTrendingUpIcon className="h-8 w-6 mr-1" />}
          />
        </DividerComponent>
        <DividerComponent>
          <Button
            text={"Añadir Gasto"}
            bg={"error"}
            icon={<ArrowTrendingDownIcon className="h-8 w-6 mr-1" />}
            color={"neutral-content"}
          />
        </DividerComponent>
      </div>
      <Text text={"Resumen"} />
      <div className="flex flex-col w-full">
        <Stats
          text={"Balance del Mes"}
          number={"228.00"}
          icon={<WalletIcon className="w-8 h-8" />}
        />
        <Stats
          text={"Gastos del Mes"}
          number={"22.00"}
          icon={<ArrowTrendingDownIcon className="w-8 h-8 text-error" />}
        />
        <Stats
          text={"Ingresos del Mes"}
          number={"250.00"}
          icon={<ArrowTrendingUpIcon className="w-8 h-8 text-success" />}
        />
      </div>

      <Footer />
    </div>
  );
};

export default welcome;
