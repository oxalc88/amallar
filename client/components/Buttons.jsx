import { CheckIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Button = (props) => {
  const {
    text,
    icon,
    bg = "none",
    hover = "transparent",
    color = "black",
    colorHov = "black",
  } = props;
  return (
    <button
      className={`rounded-lg bg-${bg} border text-${color} border-${bg} px-4 py-3 font-semibold text-sm hover:bg-${hover} hover:text-${colorHov} focus:outline-none focus:ring w-40 h-15 flex flex-row items-center space-x-1`}
    >
      {icon} {text}
    </button>
  );
};

const FullButton = (props) => {
  const { text } = props;
  return (
    <button className="w-60 rounded border border-black bg-black px-12 py-3 text-xl font-semibold text-platinum hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-gray">
      {text}
    </button>
  );
};

const CleanButton = (props) => {
  const { text } = props;
  return (
    <button className="w-60 rounded border border-black px-12 py-3 text-xl font-semibold text-black hover:bg-black hover:text-platinum focus:outline-none focus:ring active:bg-gray">
      {text}
    </button>
  );
};

const ExitButton = () => {
  return (
    <button className="btn btn-circle bg-platinum btn-outline ">
      <XMarkIcon className="h-6 w-6" />
    </button>
  );
};

const MoveButton = (props) => {
  const { icon, onClick } = props;
  return <button onClick={onClick}>{icon}</button>;
};

export { Button, FullButton, CleanButton, ExitButton, MoveButton };
