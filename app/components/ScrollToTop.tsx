"use client";
import UpArrow from "./UpArrow";

export default function ScrollToTop() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={handleScroll} className="w-5 h-5">
      <UpArrow />
    </button>
  );
}
