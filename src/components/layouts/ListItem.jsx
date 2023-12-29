import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ listName, className, linkClassName, link }) => {
  return (
    <li className={className}>
      <NavLink
        to={link}
        className={({ isActive}) =>
        isActive ? `text-red-500 ${linkClassName}` : linkClassName
        }
      >
        {listName}
      </NavLink>
    </li>
  );
};

export default ListItem;
