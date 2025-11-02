import React from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="
        bg-red-500 hover:bg-red-800
        text-white font-medium
        px-4 py-1 rounded-2xl
        transition-colors duration-200
      "
    >
      Logout
    </button>
  );
};

export default LogoutButton;
