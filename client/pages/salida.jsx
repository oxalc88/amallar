import { Button, ExitButton } from "../components/Buttons";
import Input from "../components/Input";
import Dropzone from "../components/Dropzone";
import Text from "../components/Text";
import Select from "../components/Select";
import DateSelect from "../components/DatePicker";

const ingreso = () => {
  return (
    <div className="overflow-auto scroll-smooth m-6 flex flex-col items-center justify-center space-y-3">
      <div className="self-end">
        <ExitButton />
      </div>
      <Text text={"Nueva Salida"} />
      <Input
        type={"number"}
        placeholder={"Ingresa el monto S/"}
        text={"Monto"}
      />
      <Input
        type={"text"}
        placeholder={"Describe la operacion"}
        text={"Descripcion"}
      />
      <Select
        origen1={"Personal"}
        origen2={"Empresa"}
        label={"Indicar Origen de la Salida"}
      />
      <DateSelect text={"Indicar Fecha"} />
      {/* <Input type={"date"} text={"Indicar Fecha"} /> */}
      <Dropzone />
      <Button
        text={"Registrar Nueva Salida"}
        bg={"error"}
        color={"neutral-content"}
      />
    </div>
  );
};

export default ingreso;
