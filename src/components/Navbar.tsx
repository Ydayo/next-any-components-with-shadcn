import React from "react";
import { Icons } from "./Icons";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="flex">
      <Icons.logo className="h-10 w-10" />
      <NavItems />
    </div>
  );
};

export default Navbar;
