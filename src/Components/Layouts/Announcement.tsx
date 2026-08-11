import { NavLink } from "react-router-dom";
import dropdown from "../icons/dropdown";

const Announcement = () => {
  return (
    <div className="bg-black px-4 py-3 text-xs text-white sm:text-sm">
      <div className="mx-auto flex max-w-7xl items-center">
        
        <div className="flex flex-1 items-center justify-center text-center">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery -
          </span>

          <NavLink
            to="/"
            className="ml-2 shrink-0 font-semibold underline"
          >
            ShopNow
          </NavLink>
        </div>

        <button className="ml-4 flex shrink-0 items-center">
          <span>English</span>
          <span className="ml-2 mr-auto">
            {dropdown()}
          </span>
        </button>

      </div>
    </div>
  );
};

export default Announcement;