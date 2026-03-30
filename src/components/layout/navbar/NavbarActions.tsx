"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { ICONS } from "@/lib/icons";
import NavbarProfile from "./NavbarProfile";

export default function NavbarActions({
  setIsSearchOpen,
  cartCount,
}: {
  setIsSearchOpen: (v: boolean) => void;
  cartCount: number;
}) {
  const { data: session } = useSession();

  const SearchIcon = ICONS.search;
  const CartIcon = ICONS.cart;
  const UserIcon = ICONS.users;
  const ArrowIcon = ICONS.arrowUpRight;
  const BellIcon = ICONS.bell;

  return (
    <div className="hidden lg:flex items-center gap-3">
      <Link
        href="/teklif"
        className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-indigo-700 hover:from-indigo-700 hover:to-primary text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
      >
        Teklif Al
        <ArrowIcon
          size={14}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>

      <button
        onClick={() => setIsSearchOpen(true)}
        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
      >
        <SearchIcon size={18} />
      </button>

      <Link
        href="/sepet"
        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center relative"
      >
        <CartIcon size={18} />
      </Link>

      {session ? (
        <>
          <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center relative">
            <BellIcon size={18} />
          </button>
          <NavbarProfile />
        </>
      ) : (
        <Link
          href="/giris"
          className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
        >
          <UserIcon size={18} />
        </Link>
      )}
    </div>
  );
}
