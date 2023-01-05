import { Button, CleanButton, FullButton } from "../components/Buttons";

const Home = () => {
  return (
    <div className="bg-skyBlue color w-full h-screen">
      <div className="w-full h-4/5 flex justify-center items-center flex-wrap flex-col space-y-20">
        <h1 className="text-6xl font-bold">AMALLAR</h1>
        <div className="flex flex-col justify-end items-end space-y-4 mt-10">
          <FullButton text={"Registro"} />
          <CleanButton text={"Iniciar Sesion"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
