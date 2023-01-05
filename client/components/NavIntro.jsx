import Avatar from "./Avatar";
import DividerComponent from "./DividerComponent";

const NavIntro = ({ name, avatar }) => {
  return (
    <div className="flex flex-row w-full bg-platinum">
      <DividerComponent>
        <p className="text text-start text-xl font-semibold">Hola {name}</p>
      </DividerComponent>
      <DividerComponent>
        <Avatar avatar={avatar} />
      </DividerComponent>
    </div>
  );
};

export default NavIntro;
