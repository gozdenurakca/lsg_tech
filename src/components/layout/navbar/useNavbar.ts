"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type DropdownKey =
  | "ssl"
  | "web-guvenligi"
  | "siber-guvenlik"
  | "alan-adlari"
  | "hosting"
  | "kaynaklar"
  | "destek"
  | null;

export function useNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(2);
  const closeTimeoutRef = useRef<number | null>(null);
  const sslRef = useRef<HTMLDivElement>(null);
  const webGuvenligiRef = useRef<HTMLDivElement>(null);
  const siberGuvenlikRef = useRef<HTMLDivElement>(null);
  const alanAdlariRef = useRef<HTMLDivElement>(null);
  const hostingRef = useRef<HTMLDivElement>(null);
  const kaynaklarRef = useRef<HTMLDivElement>(null);
  const destekRef = useRef<HTMLDivElement>(null);

  const menuRefs = useMemo(
    () => ({
      ssl: sslRef,
      "web-guvenligi": webGuvenligiRef,
      "siber-guvenlik": siberGuvenlikRef,
      "alan-adlari": alanAdlariRef,
      hosting: hostingRef,
      kaynaklar: kaynaklarRef,
      destek: destekRef,
    }),
    [],
  );
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      const clickedInside = Object.values(menuRefs).some((ref) =>
        ref.current?.contains(target),
      );

      if (!clickedInside) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRefs]);
  
  const handleMouseEnter = (key: Exclude<DropdownKey, null>) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 220); // smart dropdown delay
  };

  const closeAll = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setActiveDropdown(null);
  };

  return {
    isScrolled,

    isMobileMenuOpen,
    setIsMobileMenuOpen,

    activeDropdown,
    setActiveDropdown,

    isSearchOpen,
    setIsSearchOpen,

    cartCount,

    handleMouseEnter,
    handleMouseLeave,
    closeAll,

    menuRefs,
  };
}