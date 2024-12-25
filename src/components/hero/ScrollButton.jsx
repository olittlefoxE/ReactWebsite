import React from "react";

export const ScrollButton = ({ targetId }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      id="scrollButton"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform items-center justify-center rounded bg-fireBase px-6 py-3 text-white shadow-xl hover:scale-105"
      onClick={handleClick}
    >
      Scroll Down
    </button>
  );
};
