import React from "react";

function Button({ title, bgColor }) {
  const buttonStyle = {
    backgroundColor: bgColor,
  };
  return (
    <button
      className="lg:px-6 py-2 px-2 lg:mr-1 mr-8 text-textWhite font-[Manrope] font-medium rounded-sm"
      style={buttonStyle}
    >
      {title}
    </button>
  );
}

export { Button };
