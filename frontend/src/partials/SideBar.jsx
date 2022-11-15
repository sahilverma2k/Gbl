import { BsPlus } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const SideBar = () => {
  return (
    <div
      className="h-16 md:h-screen w-[100vw] md:w-16 flex flex-row md:flex-col pt-0 md:py-4
                  bg-[#ffffff] shadow-lg justify-evenly md:justify-between
                  fixed top-[calc(100vh-4rem)] left-0 md:top-0"
    >
      <div className="flex flex-row md:flex-col gap-4 md:gap-0">
        <SideBarIcon icon={<AiFillHome size="23" />} text={"Home"} />
        <SideBarIcon icon={<BsPlus size="32" />} text={"Components"} />
        <SideBarIcon icon={<CgFileDocument size="20" />} text={"Documents"} />
        <SideBarIcon icon={<AiOutlineBell size="20" />} text={"Reminders"} />
        <SideBarIcon
          icon={<MdAccountCircle size="20" />}
          text={"Your Account"}
        />
      </div>
      <div>
        <SideBarIcon
          icon={<AiOutlineQuestionCircle size="22" />}
          text={"Help"}
        />
      </div>
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
