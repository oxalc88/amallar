import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="btm-nav bg-platinum h-10">
      <button className="text-skyBlue ">
        <HomeIcon className="w-5 h-5" />
      </button>
      <button className="text-skyBlue active">
        <UserCircleIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Footer;
