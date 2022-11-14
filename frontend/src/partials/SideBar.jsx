import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";


const SideBar = () => {
  return (
    <div
      className="relative h-16 md:h-screen w-[100vw] md:w-16 flex flex-row md:flex-col pt-0 md:pt-24
                  bg-[#ffffff] shadow-lg"
    >
      <SideBarIcon icon={<AiFillHome size="23" />} text={"Home"} />
      <SideBarIcon icon={<BsPlus size="32" />} text={"Components"} />
      <SideBarIcon icon={<CgFileDocument size="20" />} text={"Documents"} />
      <SideBarIcon icon={<AiOutlineBell size="20" />} text={"Reminders"} />
      <SideBarIcon icon={<AiOutlineQuestionCircle size="22" />} text={"Help"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
