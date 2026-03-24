"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarSearch from "./NavbarSearch";
import { useNavbar } from "./useNavbar";

export default function Navbar() {
  const navbar = useNavbar();

  return (
    <>
      <NavbarDesktop {...navbar} />
      <NavbarMobile {...navbar} />
      <NavbarSearch
        isSearchOpen={navbar.isSearchOpen}
        setIsSearchOpen={navbar.setIsSearchOpen}
      />
    </>
  );
}
