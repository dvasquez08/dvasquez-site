import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center text-gray-500 p-2">
      <p>&copy; {currentYear} David Vasquez. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
