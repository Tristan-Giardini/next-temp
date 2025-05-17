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

  if (!hasMounted) {
    // Render a fallback for SSR
    return (
      <nav className="relative">
        <div className="flex justify-between items-center">
          <Link href="/">Rebecca Storm</Link>
          <button
            className="sm:hidden p-2 rounded z-50 relative w-8 h-8"
            disabled
          >
            {/* Optionally: a placeholder icon */}
          </button>
        </div>
      </nav>
    );
  }

  const isMobile = screenWidth[0] < 640;

  return (
    <nav className="relative h-[20vh]">
      <div className="flex justify-between items-center min-w-[240px]">
        <Link href="/">Rebecca Storm</Link>
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
            flex flex-col sm:flex-row sm:space-x-4
            ${isMobile ? "fixed top-0 left-0 w-full h-screen max-h-screen bg-white z-40 p-8 overflow-y-auto transition-transform duration-300 ease-in-out" : ""}
            ${isMobile && menuOpen ? "translate-y-0" : isMobile ? "-translate-y-full" : ""}
            sm:static sm:h-auto sm:max-h-none sm:overflow-visible sm:p-0
          `}
        >
          {collections.map((collection) => (
            <li key={collection._id} className="py-2 sm:p-0">
              <Link href={`/collection/${collection.slug}`}>
                {collection.name}
              </Link>
            </li>
          ))}
          <li className="py-2 sm:p-0">
            <Link href="/about">About</Link>
          </li>
          <li className="py-2 sm:p-0">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
