"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCollections } from "@/sanity/sanity-utils";
import HamburgerNav from "./HamburgerNav";
import CloseNav from "./CloseNav";
import useSize from "../hooks/useSize";

type Collection = {
  _id: string;
  slug: string;
  name: string;
};
export default function Nav() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const screenWidth = useSize();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    async function fetchCollections() {
      const data = await getCollections();
      setCollections(data);
    }
    fetchCollections();
  }, []);

  useEffect(() => {
    if (screenWidth[0] >= 640) {
      setMenuOpen(false);
    }
  }, [screenWidth]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  if (!hasMounted) {
    return (
      <nav className="relative">
        <div className="flex justify-between items-center">
          <Link href="/">Rebecca Storm</Link>
          <button
            className="sm:hidden p-2 rounded z-50 relative w-8 h-8"
            disabled
          ></button>
        </div>
      </nav>
    );
  }

  const isMobile = screenWidth[0] < 640;

  return (
    <nav className="relative h-[20vh] sm:flex sm:flex-col sm:gap-6">
      <div className="flex justify-between items-center min-w-[240px]">
        <Link href="/" className="bold">
          Rebecca Storm
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden rounded z-50 relative w-4 h-4"
        >
          {menuOpen ? <CloseNav /> : <HamburgerNav />}
        </button>
      </div>
      {(isMobile && menuOpen) || !isMobile ? (
        <ul
          className={`
            flex flex-col sm:space-x-4
            ${isMobile ? "fixed top-0 left-0 w-full h-screen max-h-screen bg-white z-40 p-8 overflow-y-auto transition-transform duration-300 ease-in-out" : ""}
            ${isMobile && menuOpen ? "translate-y-0" : isMobile ? "-translate-y-full" : ""}
            sm:static sm:translate-y-0 sm:h-auto sm:overflow-visible sm:space-y-0 sm:space-x-4 sm:p-0 gap-2
          `}
        >
          {collections.map((collection) => (
            <li key={collection._id} className="py-2 sm:p-0">
              <Link
                href={`/collection/${collection.slug}`}
                onClick={() => setMenuOpen(false)}
              >
                {collection.name}
              </Link>
            </li>
          ))}
          <li className="py-2 sm:p-0">
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="py-2 sm:p-0">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
