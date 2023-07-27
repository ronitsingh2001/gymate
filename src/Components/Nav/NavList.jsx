import React from "react";
import { Link } from "react-router-dom";

function NavList({ links }) {
  return (
    <>
      <ul className="flex gap-6 text-white text-[16px] font-medium xl:none">
        {links.map((item, index) => (
          <li
            key={index}
            style={{ transition: "all 0.2s" }}
            className="cursor-pointer  capitalize hover:text-[#ff0336]"
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavList;
