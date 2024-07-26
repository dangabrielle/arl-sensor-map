import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <a
        href="/api/auth/login"
        className="relative text-white z-50 bg-gray-400  hover:bg-blue-600 bg-opacity-70 hover:scale-105 rounded p-2"
      >
        Login / Sign Up
      </a>
    </div>
  );
};

export default page;
